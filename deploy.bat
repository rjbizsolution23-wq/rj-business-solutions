@echo off
cls
echo ========================================
echo RJ BUSINESS SOLUTIONS - DEPLOYMENT
echo ========================================
echo.

echo [1] Testing production build...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed! Fix errors before deploying.
    pause
    exit /b 1
)
echo [SUCCESS] Build completed successfully!
echo.

echo [2] Checking Git status...
git status --short
echo.

echo [3] Committing any remaining changes...
git add . 2>nul
git commit -m "Final deployment commit" 2>nul
echo.

echo ========================================
echo DEPLOYMENT PREPARATION COMPLETE!
echo ========================================
echo.
echo NEXT STEPS TO GO LIVE:
echo.
echo 1. CREATE GITHUB REPOSITORY:
echo    - Go to: https://github.com/new
echo    - Name: rj-business-solutions
echo    - Make it PUBLIC
echo    - DO NOT initialize with README
echo.
echo 2. PUSH YOUR CODE:
echo    Run these commands:
echo    git remote add origin https://github.com/YOUR-USERNAME/rj-business-solutions.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. DEPLOY ON CLOUDFLARE:
echo    - Go to: https://dash.cloudflare.com/pages
echo    - Create project and connect GitHub
echo    - Build command: npm run build
echo    - Output: .next
echo.
echo 4. ADD YOUR DOMAIN:
echo    - Add: rjbusinesssolutions.org
echo    - Add: www.rjbusinesssolutions.org
echo.
echo ========================================
echo Total deployment time: ~15 minutes
echo ========================================
echo.
echo Press any key to open GitHub...
pause >nul
start https://github.com/new
echo.
echo GitHub opened! Follow the steps above.
echo.
pause