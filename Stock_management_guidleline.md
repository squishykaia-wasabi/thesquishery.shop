# The Squishery — Managing Products in Google Sheets

All changes take effect the next time someone loads or refreshes the website. No code edits needed.

---

## Hide a product

1. Find the product row in the **Products** tab
2. Set the `visible` column to `FALSE`
3. The product disappears from the site

To bring it back, set `visible` back to `TRUE`.

---

## Mark as sold out

1. Find the product row
2. Set `stock_1`, `stock_2`, or `stock_3` to `0` for the color(s) that are sold out
3. The product card shows a **sold out** ribbon and the add to cart button is disabled

---

## Change a price

- To update the regular price: edit the `price` column
- To add a sale price: put the discounted price in the `deal` column (keep the original price in `price` — it shows as crossed out)
- To remove a sale: clear the `deal` cell (leave it empty)

---

## Mark as preorder

- Set `preorder` to `TRUE` — the product moves to the Preorder page
- Set `preorder` to `FALSE` — the product moves back to its original category
