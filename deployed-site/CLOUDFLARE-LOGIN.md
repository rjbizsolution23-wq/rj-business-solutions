# CLOUDFLARE DEPLOYMENT - FINAL STEP

## YOU NEED TO:

1. **Get your Cloudflare API Token:**
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use template: "Edit Cloudflare Workers"
   - Click "Continue to summary"
   - Click "Create Token"
   - Copy the token

2. **Run this command with YOUR token:**
```bash
wrangler login
```

3. **Then deploy with:**
```bash
wrangler pages deploy .next --project-name=rj-business-solutions
```

## OR USE CLOUDFLARE DASHBOARD:

1. Go to: https://dash.cloudflare.com/pages
2. Click "Create a project"
3. Click "Connect to Git"
4. Select: **rjbizsolution23-wq/rj-business-solutions**
5. Build settings:
   - Build command: `npm run build`
   - Build output: `.next`
6. Add environment variables:
   - NEXT_PUBLIC_SITE_URL = https://rjbusinesssolutions.org
   - NEXT_PUBLIC_GHL_LOCATION_ID = og3uHNkGTLO2mJrIVHb9
   - GHL_API_KEY = [the long key from wrangler.toml]
7. Deploy!

Your GitHub repo is ready: https://github.com/rjbizsolution23-wq/rj-business-solutions