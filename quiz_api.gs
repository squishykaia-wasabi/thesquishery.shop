// ─── The Squishery — Quiz Results API ────────────────────────────────────────
// Paste this into a NEW Apps Script project (or a new file in the existing one).
// Deploy as a Web App: Execute as Me, Anyone can access.
// Paste the deployment URL into index.html as QUIZ_API_URL.
// ─────────────────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var data   = JSON.parse(e.postData.contents);
    var result = data.result   || "";
    var ans    = data.answers  || [];

    var ss    = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("QuizResults");

    // Create the sheet + header row if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet("QuizResults");
      sheet.appendRow([
        "timestamp", "result",
        "q1_answer", "q2_answer", "q3_answer", "q4_answer", "q5_answer"
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      result,
      ans[0] || "", ans[1] || "", ans[2] || "",
      ans[3] || "", ans[4] || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
