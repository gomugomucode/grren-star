# Greenstar Suppliers

A Next.js website for **Greenstar Suppliers** — entrance and home automation product supply across **Nepal**. Customers can browse products, submit enquiries, **call to order**, or **WhatsApp to order**.

## Features

- Hero carousel for gate automation, boom barriers, and garage products
- Product catalogue with per-product **Call** and **WhatsApp** order buttons
- Floating WhatsApp button on every page
- Contact / enquiry form with API backend
- Nepal-focused branding and delivery messaging

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Prisma + PostgreSQL (optional, for storing enquiries)
- Nodemailer (optional, for email notifications)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure contact details

Update your phone and WhatsApp numbers in `.env.local`:

```env
NEXT_PUBLIC_PHONE=+977 984-0913391
NEXT_PUBLIC_PHONE_DISPLAY=+977 984-0913391
NEXT_PUBLIC_WHATSAPP=+977 984-0913391
NEXT_PUBLIC_EMAIL=info@greenstarsuppliers.com.np
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_PHONE` | Used for `tel:` links (include country code) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Shown on the website |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number digits only, with country code (no `+`) |
| `NEXT_PUBLIC_EMAIL` | Contact email shown on site |

Defaults are in `src/lib/site-config.ts` if env vars are not set.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Production build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Site metadata & fonts
│   └── api/leads/        # Enquiry form API
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── ContactForm.tsx
│   ├── OrderButtons.tsx  # Reusable Call + WhatsApp buttons
│   └── WhatsAppFloat.tsx # Fixed WhatsApp order button
└── lib/
    └── site-config.ts    # Brand name, phone, WhatsApp, Nepal details
```

## Ordering Flow

1. **Call** — taps the green Call button (`tel:` link)
2. **WhatsApp** — opens chat with a pre-filled order message
3. **Enquiry form** — submits to `/api/leads` (saved to DB if configured)

## Optional: Database & Email

For full enquiry storage, set up PostgreSQL and add to `.env`:

```env
DATABASE_URL=postgresql://...
ADMIN_EMAIL=your@email.com
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
```

Then run:

```bash
npx prisma migrate dev
```

If the database is not configured, the API still returns success and logs enquiries to the console.

## License

Private project — Greenstar Suppliers.
