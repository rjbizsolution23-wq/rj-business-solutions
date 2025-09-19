// Google My Business Configuration
// Get these values from your Google My Business dashboard

export const GMB_CONFIG = {
  // REQUIRED: Get from Google My Business
  placeId: process.env.NEXT_PUBLIC_GMB_PLACE_ID || 'YOUR_PLACE_ID_HERE',
  
  // REQUIRED: Customer ID from GMB URL
  // Example: If your GMB URL is https://maps.google.com/?cid=1234567890
  // Then your CID is 1234567890
  cid: process.env.NEXT_PUBLIC_GMB_CID || 'YOUR_CID_HERE',
  
  // REQUIRED: Google Maps API Key
  // Get from: https://console.cloud.google.com/apis/credentials
  mapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE',
  
  // Optional: Direct link to your Google Maps listing
  mapsUrl: process.env.NEXT_PUBLIC_GMB_MAPS_URL || '',
  
  // Optional: Override default business info
  businessName: 'RJ Business Solutions',
  phoneNumber: '(877) 561-8001',
  email: 'rick@rjbusinesssolutions.org',
  
  // Reviews data (update with actual data from GMB)
  reviews: {
    averageRating: 5.0,
    totalCount: 127,
    url: '' // Direct link to reviews if available
  },
  
  // Business hours (adjust to your actual hours)
  hours: {
    monday: { open: '08:00', close: '18:00' },
    tuesday: { open: '08:00', close: '18:00' },
    wednesday: { open: '08:00', close: '18:00' },
    thursday: { open: '08:00', close: '18:00' },
    friday: { open: '08:00', close: '18:00' },
    saturday: { open: '09:00', close: '16:00' },
    sunday: { open: 'Closed', close: 'Closed' }
  }
}

// Instructions to get your GMB data:
/*
1. PLACE ID:
   - Go to https://developers.google.com/maps/documentation/places/web-service/place-id
   - Search for your business
   - Copy the Place ID

2. CID (Customer ID):
   - Go to your Google My Business listing
   - Click "Share" 
   - Look at the URL - it contains ?cid=YOUR_NUMBER
   - Copy that number

3. MAPS API KEY:
   - Go to https://console.cloud.google.com/
   - Create a new project or select existing
   - Enable Maps JavaScript API, Places API
   - Create credentials (API Key)
   - Restrict the key to your domain

4. Add to .env.local:
   NEXT_PUBLIC_GMB_PLACE_ID=your_place_id
   NEXT_PUBLIC_GMB_CID=your_cid
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
   NEXT_PUBLIC_GMB_MAPS_URL=your_maps_url
*/