@echo off
echo ===================================
echo RJ Business Solutions - GitHub Deployment
echo ===================================
echo.

echo Step 1: Create GitHub repository
echo Please go to https://github.com/new and create a new repository named "rj-business-solutions"
echo Make it PUBLIC and DO NOT initialize with README
echo.
pause

echo Step 2: Adding GitHub remote...
git remote add origin https://github.com/YOUR-USERNAME/rj-business-solutions.git
echo.

echo Step 3: Pushing to GitHub...
git branch -M main
git push -u origin main
echo.

echo ===================================
echo ✅ GitHub deployment complete!
echo ===================================
echo.
echo Next steps:
echo 1. Go to Cloudflare Dashboard: https://dash.cloudflare.com
echo 2. Navigate to Pages
echo 3. Create a new project
echo 4. Connect your GitHub repository
echo 5. Use these build settings:
echo    - Build command: npm run build
echo    - Build output: .next
echo    - Root directory: /
echo    - Node version: 18
echo.
pause