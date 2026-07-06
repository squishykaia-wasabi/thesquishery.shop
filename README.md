# the squishery — how to put your website online 🩷

This folder has everything you need to host your website on **GitHub Pages** with your own domain.

**Files in here:**
- `index.html` — your website (this is the public version)
- `CNAME` — your custom domain goes in here
- `.nojekyll` — a little helper file so GitHub shows your site correctly (leave it as is)

---

## ⭐ First: grab a grown-up
Putting a website online for everyone to see, connecting a domain, and later taking real orders/payments all need a **parent or guardian's help**. Do these steps together.

---

## Step 1 — Put your domain in the CNAME file
Open `CNAME` and replace `REPLACE-WITH-YOUR-DOMAIN.com` with your real domain
(for example: `thesquishery.com`). Save it. That's the only edit needed.

## Step 2 — Make a GitHub repository
1. Log in at https://github.com
2. Click **New** (or the **+** → New repository)
3. Give it a name (like `the-squishery`), keep it **Public**, click **Create repository**

## Step 3 — Upload these files
1. On your new repo page, click **Add file → Upload files**
2. Drag in **all** the files from this folder: `index.html`, `CNAME`, and `.nojekyll`
3. Click **Commit changes**

## Step 4 — Turn on GitHub Pages
1. In the repo, go to **Settings → Pages**
2. Under **Source**, choose **Deploy from a branch**
3. Pick branch **main** and folder **/ (root)**, then **Save**
4. Wait a couple of minutes — GitHub will show your live link

## Step 5 — Connect your domain
1. Still in **Settings → Pages**, type your domain into the **Custom domain** box and **Save**
2. Now go to wherever you bought your domain (your domain provider) and set the **DNS**:
   - For your main domain (like `thesquishery.com`), add **4 A records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - For `www`, add a **CNAME record** pointing to `YOUR-USERNAME.github.io`
3. Back in GitHub Pages, check **Enforce HTTPS** once it's available (this makes your site secure 🔒)

It can take a little while (sometimes up to a day) for the domain to fully connect. Then your squishery is live! 🎉

---

## 🔒 Please remember (safety)
- **Your secret reserved list is empty in this public version on purpose** — so real people's names aren't visible to strangers. Keep your private tracking in your other saved file, not on the public site.
- **Order phone numbers are blank on purpose.** Don't add a real phone number to a public website without a parent's okay — it's a privacy thing.
- **No real money is taken yet.** When you're ready to truly sell, set up a proper payment method (like Shopify, Etsy, Square, or a parent-controlled PayPal/Venmo) with a grown-up.

Good luck, boss! 💕
