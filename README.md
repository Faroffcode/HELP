# Faroff Donation Website

A static, no-database donation website for Faroff. Donations are made directly through UPI; the site does not use a payment gateway.

## Setup before publishing

1. Open `donate.html`.
2. Replace `YOUR_UPI_ID@upi` with your real UPI ID.
3. If needed, change `PAYEE_NAME`.
4. Update `data/donation.json` manually whenever you want the public progress to change:

```json
{
  "goal": 25000,
  "raised": 5000,
  "currency": "INR",
  "label": "Goal: September 2026"
}
```

## Donation flow

- Visitor chooses a custom amount.
- A UPI URI and QR code are generated in the browser with that exact amount.
- On mobile, **Open UPI App** launches the `upi://pay` link.
- Visitor can optionally enter a name/message and select a payment screenshot.
- The screenshot is **not uploaded or stored**; this is intentionally a no-backend site.
- After clicking **I've Completed Payment**, the visitor gets the thank-you page.
- Donation totals are not automatically verified. Update `data/donation.json` manually with amounts you have actually received.

## Hosting

This is a static site and can be hosted on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static web host.
