// Combined Markets Data - Complete US Coverage
// Total of 400+ unique markets across all regions

import { top100Markets, type CityData } from './top-100-markets-data';
import { milwaukeeMarkets } from './milwaukee-markets-data';
import { californiaMarkets } from './california-markets-data';
import { eastCoastMarkets } from './east-coast-markets-data';

// Function to merge markets and remove duplicates
function mergeMarkets(): CityData[] {
  const marketMap = new Map<string, CityData>();

  // Add Southwest markets first
  top100Markets.forEach(market => {
    marketMap.set(market.slug, market);
  });

  // Add Midwest markets, updating any duplicates with Midwest data
  milwaukeeMarkets.forEach(market => {
    if (!marketMap.has(market.slug)) {
      marketMap.set(market.slug, market);
    }
  });

  // Add West Coast markets, avoiding duplicates
  californiaMarkets.forEach(market => {
    if (!marketMap.has(market.slug)) {
      marketMap.set(market.slug, market);
    }
  });

  // Add East Coast markets, avoiding duplicates
  eastCoastMarkets.forEach(market => {
    if (!marketMap.has(market.slug)) {
      marketMap.set(market.slug, market);
    }
  });

  return Array.from(marketMap.values());
}

// Export all unique markets
export const allUniqueMarkets = mergeMarkets();

// Get total count
export const totalMarketCount = allUniqueMarkets.length;

// Group markets by state
export function getMarketsByState(): Record<string, CityData[]> {
  const stateGroups: Record<string, CityData[]> = {};

  allUniqueMarkets.forEach(market => {
    if (!stateGroups[market.state]) {
      stateGroups[market.state] = [];
    }
    stateGroups[market.state].push(market);
  });

  // Sort cities within each state by population
  Object.keys(stateGroups).forEach(state => {
    stateGroups[state].sort((a, b) => b.population - a.population);
  });

  return stateGroups;
}

// Get markets by size
export function getMarketsBySize(size: 'large' | 'medium' | 'small'): CityData[] {
  return allUniqueMarkets.filter(market => market.marketSize === size);
}

// Get top markets by population
export function getTopMarkets(limit: number = 20): CityData[] {
  return allUniqueMarkets
    .sort((a, b) => b.population - a.population)
    .slice(0, limit);
}

// Get markets within radius of a specific city
export function getMarketsNearCity(citySlug: string, radiusMiles: number = 100): CityData[] {
  const centerCity = allUniqueMarkets.find(m => m.slug === citySlug);
  if (!centerCity) return [];

  return allUniqueMarkets.filter(market => {
    if (market.slug === citySlug) return false;
    const distance = calculateDistance(
      centerCity.coordinates.lat,
      centerCity.coordinates.lng,
      market.coordinates.lat,
      market.coordinates.lng
    );
    return distance <= radiusMiles;
  });
}

// Calculate distance between two coordinates
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

// Get market coverage statistics
export function getMarketStats() {
  const stats = {
    totalMarkets: allUniqueMarkets.length,
    bySize: {
      large: getMarketsBySize('large').length,
      medium: getMarketsBySize('medium').length,
      small: getMarketsBySize('small').length
    },
    byState: {} as Record<string, number>,
    totalPopulationServed: 0,
    totalBusinessesServed: 0,
    averageMedianIncome: 0,
    averageGrowthRate: 0
  };

  const stateGroups = getMarketsByState();
  Object.keys(stateGroups).forEach(state => {
    stats.byState[state] = stateGroups[state].length;
  });

  // Calculate totals and averages
  allUniqueMarkets.forEach(market => {
    stats.totalPopulationServed += market.population;
    stats.totalBusinessesServed += market.businessInfo.totalBusinesses;
    stats.averageMedianIncome += market.demographics.medianIncome;
    stats.averageGrowthRate += market.demographics.growthRate;
  });

  stats.averageMedianIncome = Math.round(stats.averageMedianIncome / allUniqueMarkets.length);
  stats.averageGrowthRate = Math.round((stats.averageGrowthRate / allUniqueMarkets.length) * 10) / 10;

  return stats;
}

// Export regions for easy access
export const regions = {
  southwest: top100Markets,
  midwest: milwaukeeMarkets,
  westCoast: californiaMarkets,
  eastCoast: eastCoastMarkets,
  all: allUniqueMarkets
};

// Major hub cities
export const majorHubs = [
  'new-york-city',
  'los-angeles',
  'chicago',
  'philadelphia',
  'boston',
  'washington-dc',
  'san-francisco',
  'atlanta',
  'miami',
  'dallas',
  'houston',
  'phoenix',
  'seattle',
  'san-diego',
  'milwaukee',
  'albuquerque',
  'detroit',
  'indianapolis',
  'columbus-oh',
  'kansas-city-mo',
  'minneapolis',
  'st-louis',
  'oklahoma-city',
  'denver',
  'las-vegas',
  'salt-lake-city',
  'portland-or',
  'sacramento',
  'baltimore',
  'charlotte',
  'raleigh',
  'pittsburgh'
];

// Get hub city data
export function getHubCities(): CityData[] {
  return allUniqueMarkets.filter(market => majorHubs.includes(market.slug));
}

// SEO helper - generate location-based keywords
export function generateLocationKeywords(market: CityData): string[] {
  const baseKeywords = [
    `${market.name} AI automation`,
    `${market.name} business solutions`,
    `${market.name} ${market.stateAbbr} tech services`,
    `AI services ${market.name}`,
    `automation ${market.name} ${market.state}`,
    `${market.name} digital transformation`,
    `${market.name} chatbot development`,
    `${market.name} process automation`,
    `business intelligence ${market.name}`,
    `${market.name} ${market.stateAbbr} AI consulting`
  ];

  // Add industry-specific keywords
  market.topIndustries.slice(0, 3).forEach(industry => {
    baseKeywords.push(`${market.name} ${industry.toLowerCase()} automation`);
    baseKeywords.push(`AI for ${industry.toLowerCase()} ${market.name}`);
  });

  // Add nearby town keywords for local SEO
  if (market.nearbyTowns) {
    market.nearbyTowns.slice(0, 2).forEach(town => {
      baseKeywords.push(`${town} AI services`);
      baseKeywords.push(`automation near ${town}`);
    });
  }

  return baseKeywords;
}

// Generate meta description for location pages
export function generateMetaDescription(market: CityData): string {
  const population = market.metroPopulation || market.population;
  const mainIndustries = market.topIndustries.slice(0, 3).join(', ');

  return `Transform your ${market.name} business with AI automation and custom solutions. Serving ${population.toLocaleString()} residents and ${market.businessInfo.totalBusinesses.toLocaleString()} businesses in ${mainIndustries}. Call 877-561-8001 for a free consultation.`;
}

// Generate page title for location pages
export function generatePageTitle(market: CityData): string {
  return `AI Automation & Business Solutions in ${market.name}, ${market.stateAbbr} | RJ Business Solutions`;
}

// Export everything for use in pages
export {
  allUniqueMarkets as allMarkets,
  type CityData
};