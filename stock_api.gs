// ─── The Squishery — Stock API ───────────────────────────────────────────────
// Paste this entire file into Google Apps Script (script.google.com),
// then deploy as a Web App (Anyone can access, no sign-in required).
// The resulting URL goes into your index.html as STOCK_API_URL.
// ─────────────────────────────────────────────────────────────────────────────

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                               .getSheetByName("Products");
  const rows  = sheet.getDataRange().getValues();

  // Row 0 = headers; skip it.
  // Columns (0-indexed):
  //  0 id | 1 name | 2 price | 3 deal | 4 preorder | 5 visible
  //  6 color_1 | 7 stock_1 | 8 color_2 | 9 stock_2 | 10 color_3 | 11 stock_3

  const stock = {};   // { productId: { colorName: stockNumber } }
  const meta  = {};   // { productId: { name, price, deal, preorder, visible } }

  for (let i = 1; i < rows.length; i++) {
    const r  = rows[i];
    const id = String(r[0]).trim();
    if (!id) continue;

    // Stock per color
    const colors = {};
    [[6,7],[8,9],[10,11]].forEach(([ci, si]) => {
      const colorName = String(r[ci]).trim().toLowerCase();
      if (colorName) colors[colorName] = Number(r[si]) || 0;
    });
    stock[id] = colors;

    // Product meta (admin-editable fields)
    meta[id] = {
      name:     String(r[1]).trim(),
      price:    Number(r[2]) || 0,
      deal:     r[3] ? Number(r[3]) : null,
      preorder: String(r[4]).toUpperCase() === "TRUE",
      visible:  String(r[5]).toUpperCase() !== "FALSE"   // default visible
    };
  }

  const payload = ContentService
    .createTextOutput(JSON.stringify({ stock, meta }))
    .setMimeType(ContentService.MimeType.JSON);

  return payload;
}
