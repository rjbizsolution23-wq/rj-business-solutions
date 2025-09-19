# RJ BUSINESS SOLUTIONS - COMPLETE AUTOMATED DEPLOYMENT
Write-Host "============================================" -ForegroundColor Green
Write-Host "DEPLOYING EVERYTHING AUTOMATICALLY" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Green

# Install Wrangler (Cloudflare CLI) if not installed
Write-Host "[1] Installing Cloudflare Wrangler..." -ForegroundColor Cyan
npm install -g wrangler

# Login to Cloudflare
Write-Host "[2] Logging into Cloudflare..." -ForegroundColor Cyan
wrangler login

# Create Pages project
Write-Host "[3] Creating Cloudflare Pages project..." -ForegroundColor Cyan
wrangler pages project create rj-business-solutions --production-branch main

# Deploy to Cloudflare Pages
Write-Host "[4] Deploying to Cloudflare Pages..." -ForegroundColor Cyan
npm run build
wrangler pages deploy .next --project-name rj-business-solutions

# Set environment variables
Write-Host "[5] Setting environment variables..." -ForegroundColor Cyan
wrangler pages secret put NEXT_PUBLIC_SITE_URL --project-name rj-business-solutions
wrangler pages secret put NEXT_PUBLIC_GHL_LOCATION_ID --project-name rj-business-solutions  
wrangler pages secret put GHL_API_KEY --project-name rj-business-solutions
wrangler pages secret put NODE_VERSION --project-name rj-business-solutions

# Add custom domain
Write-Host "[6] Adding custom domains..." -ForegroundColor Cyan
wrangler pages deployment create-alias rjbusinesssolutions.org --project-name rj-business-solutions
wrangler pages deployment create-alias www.rjbusinesssolutions.org --project-name rj-business-solutions

Write-Host "============================================" -ForegroundColor Green
Write-Host "DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "Site is LIVE at: https://rjbusinesssolutions.org" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Green