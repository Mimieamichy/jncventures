# Deploying to Vercel or Netlify

This project is built with TanStack Start + Nitro. By default the Lovable
platform builds it for Cloudflare Workers, but Nitro auto-detects Vercel
and Netlify build environments and switches presets automatically — no
code changes required.

## Vercel

1. Import the repo in Vercel.
2. Framework preset: **Other** (config is in `vercel.json`).
3. Build command: `vite build` (already set).
4. Output directory: `.vercel/output` (Build Output API v3, emitted by Nitro's `vercel` preset).
5. Node version: 20+ (Vercel default is fine).

No env vars are required for the build itself. Add any app secrets (e.g.
Supabase keys) in **Project Settings → Environment Variables**.

## Netlify

1. Import the repo in Netlify.
2. `netlify.toml` provides build command (`vite build`), publish dir (`dist`),
   and Node 20. Nitro's `netlify` preset emits the server function to
   `.netlify/functions-internal/server` automatically.
3. No plugin configuration needed.

## Notes

- Don't commit `.output/`, `.vercel/`, `.netlify/`, or `.wrangler/` — already in `.gitignore`.
- The custom `src/server.ts` SSR error wrapper is Cloudflare-shaped but works
  on Node runtimes too — `env`/`ctx` args are simply unused there.
- To force a specific Nitro preset locally, run `NITRO_PRESET=vercel vite build`
  or `NITRO_PRESET=netlify vite build`.