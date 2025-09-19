# Google My Business Integration Setup Guide

## What You Need From Google My Business

### Step 1: Get Your Place ID
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "RJ Business Solutions" or your business name
3. Click on your business when it appears
4. Copy the Place ID (looks like: ChIJxxxxxxxxxxxxxxxxxxxxxx)

### Step 2: Get Your Customer ID (CID)
1. Go to your Google My Business listing on Google Maps
2. Click the "Share" button
3. Look at the URL - it contains `?cid=` followed by numbers
4. Copy those numbers (example: 1234567890123456789)

### Step 3: Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Maps Embed API
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy the API key
6. IMPORTANT: Restrict the key to your domain (rjbusinesssolutions.org)

### Step 4: Connect Your GMB Account
1. Make sure you're logged into the Google account that manages your GMB
2. Verify your business is claimed and verified
3. Check that all business information is complete

## Add These to Your Site

### 1. Create `.env.local` file in deployed-site folder:
```env
NEXT_PUBLIC_GMB_PLACE_ID=your_place_id_here
NEXT_PUBLIC_GMB_CID=your_cid_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_GMB_MAPS_URL=https://maps.google.com/?cid=your_cid_here
```

### 2. Add to Cloudflare Pages Environment Variables:
1. Go to Cloudflare Pages dashboard
2. Select your project (rj-business-solutions)
3. Go to Settings → Environment variables
4. Add these variables:
   - `NEXT_PUBLIC_GMB_PLACE_ID`
   - `NEXT_PUBLIC_GMB_CID`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - `NEXT_PUBLIC_GMB_MAPS_URL`

## Features This Enables

✅ **Google Business Profile Widget** - Shows your GMB info on site
✅ **Google Maps Integration** - Embedded maps showing your location
✅ **Google Reviews Display** - Shows your Google reviews
✅ **Rich Snippets** - Enhanced search results with ratings
✅ **Local SEO Boost** - Better local search rankings
✅ **Direct Actions** - "Get Directions", "Call Now", "Write Review" buttons
✅ **Business Hours** - Synced with your GMB hours
✅ **Q&A Integration** - Google Q&A displayed on site

## Testing Your Integration

1. **Check Schema Markup:**
   - Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your URL
   - Verify "Local Business" shows up

2. **Verify Maps:**
   - Check if map displays correctly on your site
   - Test "Get Directions" button

3. **Review Links:**
   - Test "Write a Review" button
   - Verify it goes to your GMB review page

## Benefits of GMB Integration

1. **SEO Benefits:**
   - Higher local search rankings
   - Rich snippets in search results
   - Google Maps visibility
   - Knowledge panel enhancement

2. **Trust Signals:**
   - Verified business badge
   - Real Google reviews displayed
   - Official business hours
   - Direct Google Maps integration

3. **User Experience:**
   - One-click directions
   - Easy contact options
   - Review visibility
   - Business credibility

## Troubleshooting

**Map not showing?**
- Check API key is valid
- Verify APIs are enabled in Google Cloud Console
- Check domain restrictions on API key

**Place ID not working?**
- Verify business is claimed in GMB
- Check Place ID is correct format
- Ensure business is published/visible

**Reviews not displaying?**
- Verify Place ID is correct
- Check if reviews are public
- Ensure API has proper permissions

## Next Steps

After adding your GMB credentials:
1. Rebuild the site: `npm run build`
2. Deploy to Cloudflare
3. Test all GMB features
4. Monitor Google Search Console for improvements

## Support

For help with Google My Business:
- [GMB Help Center](https://support.google.com/business)
- [Google Maps Platform Support](https://developers.google.com/maps/support)

For site integration issues:
- Contact: rick@rjbusinesssolutions.org
- Phone: (877) 561-8001