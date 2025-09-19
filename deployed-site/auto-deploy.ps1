# RJ Business Solutions - Automated Deployment Script
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "RJ BUSINESS SOLUTIONS - AUTO DEPLOYMENT" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Function to display status
function Show-Status {
    param($message, $type = "info")
    $timestamp = Get-Date -Format "HH:mm:ss"
    switch ($type) {
        "success" { Write-Host "[$timestamp] ✅ $message" -ForegroundColor Green }
        "error" { Write-Host "[$timestamp] ❌ $message" -ForegroundColor Red }
        "info" { Write-Host "[$timestamp] ℹ️ $message" -ForegroundColor Cyan }
        "warning" { Write-Host "[$timestamp] ⚠️ $message" -ForegroundColor Yellow }
    }
}

# Check if git is installed
Show-Status "Checking Git installation..."
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Show-Status "Git is not installed. Please install Git first." "error"
    exit 1
}
Show-Status "Git is installed" "success"

# Check if npm is installed
Show-Status "Checking Node.js/npm installation..."
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Show-Status "Node.js/npm is not installed. Please install Node.js first." "error"
    exit 1
}
Show-Status "Node.js/npm is installed" "success"

# Test production build
Show-Status "Testing production build..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Show-Status "Build failed. Please fix errors before deploying." "error"
    exit 1
}
Show-Status "Production build successful" "success"

# Check git status
Show-Status "Checking Git repository status..."
$gitStatus = git status --porcelain
if ($gitStatus) {
    Show-Status "Uncommitted changes detected. Committing..." "warning"
    git add .
    git commit -m "🚀 Auto-deployment commit"
    Show-Status "Changes committed" "success"
}

# Create deployment info file
Show-Status "Creating deployment info..."
$deploymentInfo = @'
# RJ Business Solutions - Deployment Information
Generated: ' + (Get-Date -Format "yyyy-MM-dd HH:mm:ss") + '

## Site URLs
* Production: https://rjbusinesssolutions.org
* Preview: https://rj-business-solutions.pages.dev

## GitHub Repository
* URL: https://github.com/[YOUR-USERNAME]/rj-business-solutions

## Cloudflare Pages
* Project: rj-business-solutions
* Build Command: npm run build
* Output Directory: .next

## Environment Variables Required
* NEXT_PUBLIC_SITE_URL=https://rjbusinesssolutions.org
* NEXT_PUBLIC_GHL_LOCATION_ID=og3uHNkGTLO2mJrIVHb9
* GHL_API_KEY=[Your API Key]
* NODE_VERSION=18

## Support
* Phone: (877) 561-8001
* Email: info@rjbusinesssolutions.org
'@

$deploymentInfo | Out-File -FilePath "DEPLOYMENT-INFO.txt" -Encoding UTF8
Show-Status "Deployment info created" "success"

# Display next steps
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "✅ LOCAL DEPLOYMENT PREPARATION COMPLETE" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 NEXT STEPS TO GO LIVE:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣ CREATE GITHUB REPOSITORY:" -ForegroundColor Cyan
Write-Host "   - Go to: https://github.com/new" -ForegroundColor White
Write-Host "   - Name: rj-business-solutions" -ForegroundColor White
Write-Host "   - Make it PUBLIC" -ForegroundColor White
Write-Host "   - DO NOT initialize with README" -ForegroundColor White
Write-Host ""
Write-Host "2️⃣ PUSH TO GITHUB:" -ForegroundColor Cyan
Write-Host "   Copy and run these commands:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR-USERNAME/rj-business-solutions.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3️⃣ DEPLOY ON CLOUDFLARE:" -ForegroundColor Cyan
Write-Host "   - Go to: https://dash.cloudflare.com/pages" -ForegroundColor White
Write-Host "   - Click: Create a project" -ForegroundColor White
Write-Host "   - Connect GitHub repository" -ForegroundColor White
Write-Host "   - Use build settings from DEPLOYMENT-INFO.txt" -ForegroundColor White
Write-Host ""
Write-Host "4️⃣ ADD CUSTOM DOMAIN:" -ForegroundColor Cyan
Write-Host "   - In Cloudflare Pages settings" -ForegroundColor White
Write-Host "   - Add: rjbusinesssolutions.org" -ForegroundColor White
Write-Host "   - Add: www.rjbusinesssolutions.org" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "🚀 READY FOR DEPLOYMENT!" -ForegroundColor Yellow
Write-Host "Total time to go live: ~15 minutes" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to open GitHub in browser..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Open GitHub in browser
Start-Process "https://github.com/new"

Write-Host ""
Write-Host "GitHub opened in browser. Create your repository and follow the steps above!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Project Location: $PWD" -ForegroundColor Cyan
Write-Host "📊 Total Files: $(Get-ChildItem -Recurse -File | Measure-Object | Select-Object -ExpandProperty Count)" -ForegroundColor Cyan
Write-Host "📦 Project Size: $([math]::Round((Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB, 2)) MB" -ForegroundColor Cyan
Write-Host ""
Write-Host "Need help? Check DEPLOY-NOW.md for detailed instructions!" -ForegroundColor Yellow