# The Squishery — Stock Setup Guide

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) → click **New spreadsheet**
2. Name it **The Squishery**
3. Rename the first tab to **Products** (double-click the tab name at the bottom)
4. Import the CSV: **File → Import → Upload** → drag in `sheet_data.csv` → choose **Replace current sheet**

Your sheet will have these columns:

| id | name | price | deal | preorder | visible | color_1 | stock_1 | color_2 | stock_2 | color_3 | stock_3 |
|---|---|---|---|---|---|---|---|---|---|---|---|

**To manage stock:** change the numbers in `stock_1`, `stock_2`, `stock_3`. Use `0` for sold out.  
**To hide a product:** change `visible` to `FALSE`.  
**To put something on sale:** put the sale price in `deal`.

---

## Step 2 — Add the Apps Script

1. In the Sheet, go to **Extensions → Apps Script**
2. Delete all the default code in the editor
3. Paste the entire contents of `stock_api.gs`
4. Click **Save** (disk icon) and name the project `squishery-stock-api`

---

## Step 3 — Deploy it

> All of this happens inside the same Google Apps Script tab from Step 2 — look for the blue **Deploy** button in the top-right corner.

1. Click **Deploy → New deployment**
2. Click the gear ⚙️ next to "Type" → select **Web app**
3. Set **Execute as:** Me
4. Set **Who has access:** Anyone
5. Click **Deploy** → copy the long URL it gives you

The URL looks like:
```
https://script.google.com/macros/s/XXXXXXXXXXXXXXXXX/exec
```

That URL is your live stock API. Send it and the website will be wired up to show **Sold Out** and **Only X left** badges automatically.
