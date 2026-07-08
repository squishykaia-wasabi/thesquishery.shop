# The Squishery — Custom Email Setup Guide
### Goal: send and receive emails at hello@thesquishery.shop using your regular Gmail

---

## What you'll need before you start
- Your Gmail address and password
- Access to wherever you bought your domain (e.g. GoDaddy, Namecheap, Google Domains, Squarespace — wherever you manage DNS)
- 15–20 minutes

---

## Part 1 — Set up email forwarding with ImprovMX
> ImprovMX is a free tool that catches emails sent to your domain and forwards them to Gmail.

### 1.1 — Add your domain to ImprovMX

1. Go to **[improvmx.com](https://improvmx.com)**
2. You'll see a box that says *"Enter your domain"* — type `thesquishery.shop` and click **Create a free alias**
3. It will ask for your Gmail address — enter it and click **Create**
4. ImprovMX will now show you **2 MX records** that look like this:

```
Type    Name    Priority    Value
MX      @       10          mx1.improvmx.com
MX      @       20          mx2.improvmx.com
```

Keep this tab open — you'll need these values in the next step.

---

### 1.2 — Add the MX records to your domain's DNS

> DNS records are like a phone book for your domain — they tell the internet where to send emails.

1. Open a new tab and log in to wherever you bought your domain
2. Find the **DNS settings** for `thesquishery.shop`
   - On GoDaddy: My Products → your domain → DNS
   - On Namecheap: Domain List → Manage → Advanced DNS
   - On Google Domains / Squarespace: DNS → Records
3. Look for any existing **MX records** — if there are any, **delete them first**
4. Add the first MX record:
   - Type: `MX`
   - Name/Host: `@`
   - Priority: `10`
   - Value: `mx1.improvmx.com`
5. Add the second MX record:
   - Type: `MX`
   - Name/Host: `@`
   - Priority: `20`
   - Value: `mx2.improvmx.com`
6. Save both records

> ⏱ DNS changes can take a few minutes to a few hours to kick in. You can move on to Part 2 while you wait.

---

### 1.3 — Test that forwarding works

1. Go back to **improvmx.com** — it should now show a green tick next to your domain
2. Send a test email to `hello@thesquishery.shop` from any email address
3. Check your Gmail inbox — the email should arrive there

If it doesn't arrive within 30 minutes, double-check the MX records were saved correctly.

---

## Part 2 — Send emails from Gmail as your custom address
> This lets you write and send emails from inside Gmail, but the recipient sees `hello@thesquishery.shop` as the sender — not your personal Gmail.

### 2.1 — Create a Gmail App Password

> An App Password is a special one-time password that lets Gmail connect to external services securely.
> **App Passwords only appear if 2-Step Verification is turned on.** If you can't find it, follow the steps below.

**Step A — Turn on 2-Step Verification (if not done yet)**
1. Go to **[myaccount.google.com/signinoptions/two-step-verification](https://myaccount.google.com/signinoptions/two-step-verification)**
2. Click **Get started** and follow the steps — it just needs your phone number, takes 2 minutes

**Step B — Create the App Password**
1. Go directly to **[myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
2. Under *"App name"*, type `Squishery Email` and click **Create**
3. Google shows you a **16-character password** (looks like: `abcd efgh ijkl mnop`)
4. **Copy it now** — it only shows once. Paste it somewhere safe temporarily.

---

### 2.2 — Add your custom address to Gmail

1. Open **Gmail**
2. Click the **Settings gear ⚙️** (top right) → **See all settings**
3. Click the **Accounts and Import** tab
4. Find the section **"Send mail as"** → click **Add another email address**
5. A small window pops up:
   - **Name:** The Squishery *(this is what recipients see)*
   - **Email address:** `hello@thesquishery.shop`
   - Untick **"Treat as an alias"**
   - Click **Next Step**
6. On the next screen:
   - **SMTP Server:** `smtp.gmail.com`
   - **Port:** `587`
   - **Username:** your full Gmail address (e.g. `you@gmail.com`)
   - **Password:** paste the App Password you copied in Step 2.1
   - Leave **TLS** selected
   - Click **Add Account**

---

### 2.3 — Verify your address

1. Gmail will send a verification email to `hello@thesquishery.shop`
2. Because ImprovMX is set up, that email will land in your **Gmail inbox**
3. Open it — there's a **confirmation link** and a **code**
4. Either click the link, or go back to the Gmail settings window and enter the code
5. Click **Verify**

---

## You're done! 🎉

**To receive:** any email sent to `hello@thesquishery.shop` arrives in your normal Gmail inbox.

**To send:** when composing a new email in Gmail, click the **From** field — you can now choose between your personal Gmail or `hello@thesquishery.shop`.

---

## Tips

- You can create multiple aliases on ImprovMX for free — e.g. `orders@thesquishery.shop`, `hi@thesquishery.shop` — they all forward to the same Gmail.
- If you want `hello@thesquishery.shop` to be your **default sender**, go to Gmail → Settings → Accounts and Import → "Send mail as" → click **make default** next to your custom address.
- ImprovMX free tier allows 500 emails per month. For a small shop that is more than enough.
