'use client'

interface GoogleMapProps {
  apiKey?: string
  placeId?: string
  address?: string
  businessName?: string
}

export default function GoogleMap({ 
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyCwbV3G1V5BgJ6DfIMiaqCt_LN9SwrsPJ0',
  placeId = process.env.NEXT_PUBLIC_GMB_PLACE_ID || 'ChIJLbd25Ze9GIcRmh0-R67hiAA',
  address = 'Albuquerque, New Mexico, USA',
  businessName = 'RJ Business Solutions'
}: GoogleMapProps) {
  
  // Generate embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`
  
  // Fallback to address search if no place ID
  const fallbackUrl = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${encodeURIComponent(businessName + ' ' + address)}`
  
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY' ? embedUrl : fallbackUrl}
        title={`${businessName} Location Map`}
      />
    </div>
  )
}