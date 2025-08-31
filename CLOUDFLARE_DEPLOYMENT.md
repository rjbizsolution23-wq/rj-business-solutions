# Cloudflare Pages Deployment Guide

## Prerequisites
1. Cloudflare account
2. Domain (rjbusinesssolutions.org) added to Cloudflare
3. GitHub repository (or direct upload)

## Step 1: Prepare for Production

### Update Environment Variables
Create `.env.production` file:
```env
NEXT_PUBLIC_SITE_URL=https://rjbusinesssolutions.org
NEXT_PUBLIC_GHL_LOCATION_ID=og3uHNkGTLO2mJrIVHb9
GHL_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Build Locally First (Test)
```bash
npm run build
npm run start
```

## Step 2: Deploy to Cloudflare Pages

### Option A: GitHub Integration (Recommended)

1. Push code to GitHub repository
2. Go to Cloudflare Dashboard > Pages
3. Click "Create a project"
4. Connect to your GitHub account
5. Select your repository
6. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`
   - Environment variables: Add all from `.env.production`

### Option B: Direct Upload

1. Build the project locally:
```bash
npm run build
npm run export
```

2. Go to Cloudflare Dashboard > Pages
3. Click "Create a project" > "Direct Upload"
4. Upload the `out` folder
5. Configure environment variables in settings

## Step 3: Configure Custom Domain

1. In Cloudflare Pages project settings
2. Go to "Custom domains"
3. Add domain: `rjbusinesssolutions.org`
4. Add www subdomain: `www.rjbusinesssolutions.org`
5. Cloudflare will automatically configure DNS

## Step 4: DNS Configuration

Cloudflare will automatically add these records:
```
Type    Name    Content                         Proxy   TTL
CNAME   @       <your-project>.pages.dev        ✓       Auto
CNAME   www     <your-project>.pages.dev        ✓       Auto
```

## Step 5: SSL/TLS Configuration

1. Go to SSL/TLS settings
2. Set encryption mode to "Full (strict)"
3. Enable "Always Use HTTPS"
4. Enable "Automatic HTTPS Rewrites"

## Step 6: Performance Optimization

### Page Rules
Create these page rules:

1. **Cache Everything**
   - URL: `rjbusinesssolutions.org/assets/*`
   - Settings: Cache Level: Cache Everything, Edge Cache TTL: 1 month

2. **Security Headers**
   - URL: `rjbusinesssolutions.org/*`
   - Settings: Security Level: High

### Speed Settings
1. Enable Auto Minify (JavaScript, CSS, HTML)
2. Enable Brotli compression
3. Enable HTTP/2
4. Enable HTTP/3 (QUIC)
5. Enable 0-RTT Connection Resumption

### Caching
1. Browser Cache TTL: 4 hours
2. Enable "Crawler Hints"
3. Enable "Early Hints"

## Step 7: SEO Configuration

### Search Console Verification
1. Add site to Google Search Console
2. Verify using DNS TXT record
3. Submit sitemap: `https://rjbusinesssolutions.org/sitemap.xml`

### Bing Webmaster Tools
1. Add site to Bing Webmaster Tools
2. Verify ownership
3. Submit sitemap

### Schema Markup Testing
1. Test with Google's Rich Results Test
2. Validate structured data
3. Monitor in Search Console

## Step 8: Analytics & Monitoring

### Cloudflare Analytics
1. Enable Web Analytics
2. Add tracking script to site

### Google Analytics 4
1. Create GA4 property
2. Add measurement ID to environment variables
3. Configure events and conversions

### Cloudflare Page Rules for Analytics
```
rjbusinesssolutions.org/api/*
- Cache Level: Bypass
- Security Level: High
```

## Step 9: Edge Functions (Workers)

Create worker for API routes:
```javascript
// worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle API routes
    if (url.pathname.startsWith('/api/')) {
      // Forward to your API
      return fetch(request);
    }
    
    // Serve static site
    return env.ASSETS.fetch(request);
  }
}
```

## Step 10: Post-Deployment Checklist

### Immediate Tests
- [ ] Homepage loads correctly
- [ ] All landing pages accessible
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Mobile responsive working
- [ ] SSL certificate active
- [ ] Redirects working

### SEO Verification
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Meta tags rendering
- [ ] Open Graph preview working
- [ ] Schema markup valid

### Performance Tests
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test page load speed
- [ ] Verify caching headers

### Functionality Tests
- [ ] Contact forms work
- [ ] GHL integration active
- [ ] Calendar booking works
- [ ] Phone links clickable
- [ ] Navigation menus work

## Monitoring & Maintenance

### Weekly Tasks
- Review Cloudflare Analytics
- Check form submissions
- Monitor page speed
- Review error logs

### Monthly Tasks
- Update content as needed
- Review SEO rankings
- Analyze conversion rates
- A/B testing review

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables are set in Cloudflare Pages settings
- Rebuild after adding variables
- Check for typos in variable names

### 404 Errors on Routes
Add to `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  trailingSlash: true,
}
```

### API Routes Not Working
- Check CORS settings
- Verify API endpoints
- Check environment variables
- Review Cloudflare Workers logs

## Build Commands Summary

```bash
# Development
npm run dev

# Production Build
npm run build

# Export Static Site
npm run build && npm run export

# Test Production Locally
npm run build && npm run start

# Clean Build
rm -rf .next out node_modules && npm install && npm run build
```

## Environment Variables Required

```env
# Public Variables (Available in browser)
NEXT_PUBLIC_SITE_URL=https://rjbusinesssolutions.org
NEXT_PUBLIC_GHL_LOCATION_ID=og3uHNkGTLO2mJrIVHb9
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Server Variables (Secure)
GHL_API_KEY=<your-ghl-api-key>
GHL_API_URL=https://services.leadconnectorhq.com
```

## Contact for Support

For deployment issues:
- Cloudflare Support: https://support.cloudflare.com
- Next.js Docs: https://nextjs.org/docs
- GHL API Docs: https://developers.gohighlevel.com

## Notes

1. Always test builds locally before deploying
2. Keep environment variables secure
3. Monitor performance after deployment
4. Set up alerts for downtime
5. Regular backups of configuration