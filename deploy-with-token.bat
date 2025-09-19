@echo off
echo DEPLOYING TO CLOUDFLARE...

REM Set your token here
set CLOUDFLARE_API_TOKEN=YOUR_TOKEN_HERE

REM Deploy to Cloudflare Pages
wrangler pages deploy .next --project-name=rj-business-solutions

echo DEPLOYMENT COMPLETE!
echo Your site is live at: https://rj-business-solutions.pages.dev
echo.
echo Now add custom domain:
echo 1. Go to Cloudflare Pages dashboard
echo 2. Add domain: rjbusinesssolutions.org
pause