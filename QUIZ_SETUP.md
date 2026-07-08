# The Squishery — Quiz Data Collection Setup

### Goal: every time a visitor completes the quiz, their result and answers are saved to your Google Sheet automatically.

---

## Step 1 — Add the script to your Google Sheet

1. Open your existing **The Squishery** Google Sheet (the one you set up for stock)
2. Go to **Extensions → Apps Script**
3. In the left panel, click the **+** next to "Files" → choose **Script**
4. Name it `quiz_api`
5. Delete the default code and paste the entire contents of `quiz_api.gs`
6. Click **Save** (disk icon)

---

## Step 2 — Deploy it

1. Click **Deploy → New deployment**
2. Click the gear ⚙️ next to "Type" → select **Web app**
3. Set **Execute as:** Me
4. Set **Who has access:** Anyone
5. Click **Deploy** → copy the long URL

It looks like:
```
https://script.google.com/macros/s/XXXXXXXXXXXXXXXXX/exec
```

---

## Step 3 — Paste the URL into the website

1. Open `index.html` in a text editor
2. Find this line (near the top of the `<script>` section):
   ```javascript
   var QUIZ_API_URL = "";
   ```
3. Paste your URL between the quotes:
   ```javascript
   var QUIZ_API_URL = "https://script.google.com/macros/s/XXXXX/exec";
   ```
4. Save and push to GitHub (same as before)

---

## Step 4 — Test it

1. Go to your live website and complete the quiz
2. Open your Google Sheet — a new tab called **QuizResults** should appear
3. You should see one row with: timestamp, your result, and your 5 answers

---

## Reading your data with Gemini

Once you have some responses collected:

1. Open the **QuizResults** tab in your Sheet
2. Click the **Gemini star ✦** icon in the right sidebar (or go to **Extensions → Gemini**)
3. Ask questions in plain English, for example:
   - *"Which result appears most often?"*
   - *"What was the most popular answer for question 1?"*
   - *"Show me a summary of all responses"*
   - *"Which squishy should I restock based on quiz popularity?"*

Gemini reads your Sheet data and answers directly — no formulas needed.
