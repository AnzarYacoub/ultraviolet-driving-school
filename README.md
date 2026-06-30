# Ultraviolet Driving School

Frontend prototype for **Ultraviolet Driving School / Ultraviolet 592**.

## Routes

- `/` public website
- `/packages` package listing
- `/book` practical class booking preview
- `/login` and `/register`
- `/dashboard`, `/dashboard/bookings`, `/dashboard/classes`, `/dashboard/mock-test`, `/dashboard/discount-card`
- `/admin`, `/admin/packages`, `/admin/bookings`, `/admin/students`, `/admin/payments`, `/admin/classes`, `/admin/mock-tests`, `/admin/discount-partners`

## Mock Data

Mock data is stored in `src/data/mock.ts`.

## Run Locally

```bash
npm install
npm run dev
```

## Backend Handoff

Supabase TODOs are documented in `src/lib/supabase-todos.ts`. The first backend step is to add Supabase Auth, role-based route protection, and tables for packages, bookings, payments, live classes, mock tests, attempts, discount cards, and partner businesses.
