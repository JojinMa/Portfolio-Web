# Personal portfolio

A responsive personal portfolio for Jojin Mathew, with an editorial dark theme, supplied portrait, and sections for engineering, automobiles, programming, editing, and personal interests.

## Personalize

- Verify the location and edit the biography in `index.html` as desired.
- Replace the illustrative interest cards with real projects as you have work to showcase.
- The provided portrait is `portrait.jpg`.

## Supabase contact form

1. [`supabase/schema.sql`](supabase/schema.sql) defines the contact table and its insert-only public policy. It has been applied to the Supabase project used by this site; run it in the SQL editor only when setting up a separate project.
2. `config.js` contains the project's URL and publishable key. The contact form submits directly to `public.contact_messages`.
3. Serve the folder from a static host or local web server.

The schema enables Row Level Security and grants only inserts to public visitors. Reads, updates, and deletes are not exposed to the anon role. Never put a service role key in `config.js` or any browser code.

Never put a service role key or secret key in `config.js` or any browser code.

## Deploy on Vercel

1. The Vercel project is linked to [`JojinMa/Portfolio-Web`](https://github.com/JojinMa/Portfolio-Web).
2. Select the project root and use the **Other** framework preset. Leave the build command and output directory blank so Vercel serves the static `index.html` from the root.
3. The production branch is `main`; future pushes to it will deploy automatically.

