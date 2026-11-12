# Personal portfolio

A responsive personal portfolio for Jojin Mathew, with an editorial dark theme, supplied portrait, and sections for engineering, automobiles, programming, editing, and personal interests.

## Personalize

- Verify the location and edit the biography in `index.html` as desired.
- Replace the illustrative interest cards with real projects as you have work to showcase.
- The provided portrait is `portrait.jpg`.

## Supabase contact form

1. Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL editor.
2. Put your project URL and anon/publishable key in `config.js`.
3. Serve the folder from a static host or local web server. The form submits directly to `public.contact_messages` and points visitors to LinkedIn until configured.

The schema enables Row Level Security and grants only inserts to public visitors. Reads, updates, and deletes are not exposed to the anon role. Never put a service role key in `config.js` or any browser code.

No Supabase project credentials were present in the project, so those need to be configured before the live form can accept messages.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import [`JojinMa/Portfolio-Web`](https://github.com/JojinMa/Portfolio-Web).
2. Select the project root.
3. Use the **Other** framework preset. Leave the build command and output directory blank so Vercel serves the static `index.html` from the root.
4. Deploy. Vercel will provide a shareable `*.vercel.app` URL and deploy later pushes automatically.
5. For the contact form, run the SQL above and add the public Supabase URL and anon/publishable key in `config.js`, then commit and push the change.

