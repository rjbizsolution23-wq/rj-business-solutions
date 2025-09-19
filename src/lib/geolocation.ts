import { allMarkets } from './all-markets-data';
import type { CityData } from './top-100-markets-data';

interface Coordinates {
  lat: number;
  lng: number;
}

export async function getUserLocation(): Promise<Coordinates | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => {
        resolve(null);
      },
      { timeout: 5000, enableHighAccuracy: true }
    );
  });
}

export async function getLocationFromIP(): Promise<Coordinates | null> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.latitude && data.longitude) {
      return {
        lat: data.latitude,
        lng: data.longitude
      };
    }

    return null;
  } catch (error) {
    console.error('Failed to get location from IP:', error);
    return null;
  }
}

export async function reverseGeocode(coords: Coordinates): Promise<string | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error('Google Maps API key not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${apiKey}`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const addressComponents = data.results[0].address_components;

      const city = addressComponents.find((comp: any) =>
        comp.types.includes('locality')
      )?.long_name;

      const state = addressComponents.find((comp: any) =>
        comp.types.includes('administrative_area_level_1')
      )?.short_name;

      if (city && state) {
        return `${city}, ${state}`;
      }
    }

    return null;
  } catch (error) {
    console.error('Reverse geocoding failed:', error);
    return null;
  }
}

export function findNearestMarket(coords: Coordinates): CityData | null {
  if (!coords) return null;

  let nearestMarket: CityData | null = null;
  let minDistance = Infinity;

  allMarkets.forEach(market => {
    const distance = calculateDistance(
      coords.lat,
      coords.lng,
      market.coordinates.lat,
      market.coordinates.lng
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearestMarket = market;
    }
  });

  return nearestMarket;
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export async function detectUserCity(): Promise<CityData | null> {
  // Try browser geolocation first
  let coords = await getUserLocation();

  // Fall back to IP-based location
  if (!coords) {
    coords = await getLocationFromIP();
  }

  if (!coords) {
    return null;
  }

  // Find nearest market from our service areas
  const nearestMarket = findNearestMarket(coords);

  // Only return if within reasonable distance (500 miles)
  if (nearestMarket) {
    const distance = calculateDistance(
      coords.lat,
      coords.lng,
      nearestMarket.coordinates.lat,
      nearestMarket.coordinates.lng
    );

    if (distance <= 500) {
      return nearestMarket;
    }
  }

  return null;
}

export function getMarketsWithinRadius(center: CityData, radiusMiles: number = 100): CityData[] {
  return allMarkets.filter(market => {
    if (market.slug === center.slug) return false;

    const distance = calculateDistance(
      center.coordinates.lat,
      center.coordinates.lng,
      market.coordinates.lat,
      market.coordinates.lng
    );

    return distance <= radiusMiles;
  }).sort((a, b) => {
    const distA = calculateDistance(
      center.coordinates.lat,
      center.coordinates.lng,
      a.coordinates.lat,
      a.coordinates.lng
    );
    const distB = calculateDistance(
      center.coordinates.lat,
      center.coordinates.lng,
      b.coordinates.lat,
      b.coordinates.lng
    );
    return distA - distB;
  });
}