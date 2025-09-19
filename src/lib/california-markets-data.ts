// Top 100 Markets within 750-mile radius of California (centered on Los Angeles/San Francisco)
// Covers West Coast, Mountain West, and Pacific Northwest regions

import { CityData } from './top-100-markets-data';

export const californiaMarkets: CityData[] = [
  // CALIFORNIA CITIES (Primary Markets)
  {
    name: "Los Angeles",
    slug: "los-angeles",
    state: "California",
    stateAbbr: "CA",
    population: 3898747,
    metroPopulation: 13200998,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    distanceFromAlbuquerque: 790,
    marketSize: "large",
    demographics: {
      medianIncome: 65290,
      medianAge: 35.9,
      growthRate: 2.8
    },
    topIndustries: ["Entertainment", "Technology", "Healthcare", "Tourism", "Manufacturing", "Finance"],
    zipCodes: ["90001", "90002", "90003", "90004", "90005", "90006", "90007", "90008", "90009", "90010", "90011", "90012", "90013", "90014", "90015", "90016", "90017", "90018", "90019", "90020", "90021", "90022", "90023", "90024", "90025", "90026", "90027", "90028", "90029", "90030", "90031", "90032", "90033", "90034", "90035", "90036", "90037", "90038", "90039", "90040", "90041", "90042", "90043", "90044", "90045", "90046", "90047", "90048", "90049", "90050", "90051", "90052", "90053", "90054", "90055", "90056", "90057", "90058", "90059", "90060", "90061", "90062", "90063", "90064", "90065", "90066", "90067", "90068", "90069", "90070", "90071", "90072", "90073", "90074", "90075", "90076", "90077", "90078", "90079", "90080", "90081", "90082", "90083", "90084", "90086", "90087", "90088", "90089", "90091", "90093", "90094", "90095", "90096", "90099", "90134", "90189", "90230"],
    neighborhoods: ["Downtown", "Hollywood", "Beverly Hills", "Santa Monica", "Venice", "Westwood", "Brentwood", "Sherman Oaks", "Studio City", "Silver Lake", "Los Feliz", "Echo Park"],
    nearbyTowns: ["Long Beach", "Glendale", "Pasadena", "Torrance", "Burbank", "Santa Ana", "Anaheim"],
    seoKeywords: ["Los Angeles AI services", "LA automation", "tech solutions Los Angeles", "California business automation", "LA digital transformation"],
    businessInfo: {
      totalBusinesses: 450000,
      techBusinesses: 65000,
      serviceBusinesses: 180000
    }
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    state: "California",
    stateAbbr: "CA",
    population: 873965,
    metroPopulation: 4749008,
    coordinates: { lat: 37.7749, lng: -122.4194 },
    distanceFromAlbuquerque: 1070,
    marketSize: "large",
    demographics: {
      medianIncome: 119087,
      medianAge: 38.3,
      growthRate: 3.5
    },
    topIndustries: ["Technology", "Finance", "Healthcare", "Tourism", "Biotechnology", "Professional Services"],
    zipCodes: ["94102", "94103", "94104", "94105", "94107", "94108", "94109", "94110", "94111", "94112", "94114", "94115", "94116", "94117", "94118", "94119", "94120", "94121", "94122", "94123", "94124", "94125", "94126", "94127", "94128", "94129", "94130", "94131", "94132", "94133", "94134", "94137", "94139", "94140", "94141", "94142", "94143", "94144", "94145", "94146", "94147", "94151", "94158", "94159", "94160", "94161", "94163", "94164", "94172", "94177", "94188"],
    neighborhoods: ["Financial District", "SOMA", "Mission", "Castro", "Haight-Ashbury", "Marina", "Pacific Heights", "Nob Hill", "Chinatown", "North Beach"],
    nearbyTowns: ["Oakland", "San Jose", "Berkeley", "Palo Alto", "Mountain View", "Redwood City", "San Mateo"],
    seoKeywords: ["San Francisco tech services", "SF AI solutions", "Bay Area automation", "San Francisco business tech", "SF digital transformation"],
    businessInfo: {
      totalBusinesses: 95000,
      techBusinesses: 28000,
      serviceBusinesses: 38000
    }
  },
  {
    name: "San Diego",
    slug: "san-diego",
    state: "California",
    stateAbbr: "CA",
    population: 1386932,
    metroPopulation: 3338330,
    coordinates: { lat: 32.7157, lng: -117.1611 },
    distanceFromAlbuquerque: 815,
    marketSize: "large",
    demographics: {
      medianIncome: 79673,
      medianAge: 35.4,
      growthRate: 3.8
    },
    topIndustries: ["Military", "Tourism", "Biotechnology", "Healthcare", "Technology", "Manufacturing"],
    zipCodes: ["92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109", "92110", "92111", "92113", "92114", "92115", "92116", "92117", "92118", "92119", "92120", "92121", "92122", "92123", "92124", "92126", "92127", "92128", "92129", "92130", "92131", "92132", "92134", "92135", "92136", "92137", "92138", "92139", "92140", "92142", "92143", "92145", "92147", "92149", "92150", "92152", "92153", "92154", "92155", "92158", "92159", "92160", "92161", "92163", "92165", "92166", "92167", "92168", "92169", "92170", "92171", "92172", "92173", "92174", "92175", "92176", "92177", "92178", "92179", "92182", "92186", "92187", "92191", "92192", "92193", "92195", "92196", "92197", "92198", "92199"],
    neighborhoods: ["Downtown", "Gaslamp Quarter", "La Jolla", "Pacific Beach", "Mission Beach", "Point Loma", "Hillcrest", "North Park"],
    nearbyTowns: ["Chula Vista", "Oceanside", "Escondido", "Carlsbad", "El Cajon", "Vista", "San Marcos"],
    seoKeywords: ["San Diego AI services", "automation San Diego", "tech solutions SD", "San Diego business tech", "SD digital transformation"],
    businessInfo: {
      totalBusinesses: 112000,
      techBusinesses: 15000,
      serviceBusinesses: 44800
    }
  },
  {
    name: "San Jose",
    slug: "san-jose",
    state: "California",
    stateAbbr: "CA",
    population: 1013240,
    metroPopulation: 2000468,
    coordinates: { lat: 37.3382, lng: -121.8863 },
    distanceFromAlbuquerque: 1040,
    marketSize: "large",
    demographics: {
      medianIncome: 115893,
      medianAge: 37.2,
      growthRate: 4.2
    },
    topIndustries: ["Technology", "Manufacturing", "Healthcare", "Finance", "Education"],
    zipCodes: ["95101", "95103", "95106", "95108", "95109", "95110", "95111", "95112", "95113", "95115", "95116", "95117", "95118", "95119", "95120", "95121", "95122", "95123", "95124", "95125", "95126", "95127", "95128", "95129", "95130", "95131", "95132", "95133", "95134", "95135", "95136", "95137", "95138", "95139", "95140", "95141", "95148", "95150", "95151", "95152", "95153", "95154", "95155", "95156", "95157", "95158", "95159", "95160", "95161", "95164", "95170", "95172", "95173", "95190", "95191", "95192", "95193", "95194", "95196"],
    neighborhoods: ["Downtown", "Willow Glen", "Rose Garden", "Japantown", "Almaden Valley", "Evergreen", "Berryessa"],
    nearbyTowns: ["Santa Clara", "Sunnyvale", "Cupertino", "Campbell", "Los Gatos", "Milpitas", "Saratoga"],
    seoKeywords: ["San Jose tech services", "Silicon Valley AI", "San Jose automation", "tech solutions San Jose", "SJ business tech"],
    businessInfo: {
      totalBusinesses: 75000,
      techBusinesses: 22000,
      serviceBusinesses: 30000
    }
  },
  {
    name: "Sacramento",
    slug: "sacramento",
    state: "California",
    stateAbbr: "CA",
    population: 524943,
    metroPopulation: 2397382,
    coordinates: { lat: 38.5816, lng: -121.4944 },
    distanceFromAlbuquerque: 1080,
    marketSize: "large",
    demographics: {
      medianIncome: 65847,
      medianAge: 34.8,
      growthRate: 4.5
    },
    topIndustries: ["Government", "Healthcare", "Education", "Technology", "Agriculture"],
    zipCodes: ["94203", "94204", "94205", "94206", "94207", "94208", "94209", "94211", "94229", "94230", "94232", "94234", "94235", "94236", "94237", "94239", "94240", "94244", "94245", "94246", "94247", "94248", "94249", "94250", "94252", "94254", "94256", "94257", "94258", "94259", "94261", "94262", "94263", "94267", "94268", "94269", "94271", "94273", "94274", "94277", "94278", "94279", "94280", "94282", "94283", "94284", "94285", "94286", "94287", "94288", "94289", "94290", "94291", "94293", "94294", "94295", "94296", "94297", "94298", "94299", "95608", "95609", "95610", "95611", "95615", "95621", "95624", "95626", "95628", "95630", "95632", "95638", "95639", "95641", "95652", "95655", "95660", "95662", "95670", "95671", "95673", "95678", "95680", "95683", "95690", "95691", "95693", "95694", "95695", "95696", "95697", "95698", "95699", "95741", "95742", "95757", "95758", "95759", "95763", "95765", "95798", "95799", "95811", "95812", "95813", "95814", "95815", "95816", "95817", "95818", "95819", "95820", "95821", "95822", "95823", "95824", "95825", "95826", "95827", "95828", "95829", "95830", "95831", "95832", "95833", "95834", "95835", "95836", "95837", "95838", "95840", "95841", "95842", "95843", "95851", "95852", "95853", "95860", "95864", "95865", "95866", "95867", "95894", "95899"],
    neighborhoods: ["Downtown", "Midtown", "East Sacramento", "Land Park", "Oak Park", "Natomas", "Pocket-Greenhaven"],
    nearbyTowns: ["Elk Grove", "Roseville", "Folsom", "Rancho Cordova", "Citrus Heights", "Rocklin", "Davis"],
    seoKeywords: ["Sacramento AI services", "tech Sacramento CA", "automation Sacramento", "California capital tech", "Sacramento business solutions"],
    businessInfo: {
      totalBusinesses: 42000,
      techBusinesses: 5500,
      serviceBusinesses: 16800
    }
  },
  {
    name: "Fresno",
    slug: "fresno",
    state: "California",
    stateAbbr: "CA",
    population: 542107,
    metroPopulation: 1008654,
    coordinates: { lat: 36.7378, lng: -119.7871 },
    distanceFromAlbuquerque: 950,
    marketSize: "large",
    demographics: {
      medianIncome: 53368,
      medianAge: 31.7,
      growthRate: 3.2
    },
    topIndustries: ["Agriculture", "Healthcare", "Education", "Manufacturing", "Logistics"],
    zipCodes: ["93650", "93701", "93702", "93703", "93704", "93705", "93706", "93707", "93708", "93709", "93710", "93711", "93712", "93714", "93715", "93716", "93717", "93718", "93720", "93721", "93722", "93723", "93724", "93725", "93726", "93727", "93728", "93729", "93730", "93737", "93740", "93741", "93744", "93745", "93747", "93750", "93755", "93760", "93761", "93764", "93765", "93771", "93772", "93773", "93774", "93775", "93776", "93777", "93778", "93779", "93786", "93790", "93791", "93792", "93793", "93794", "93844", "93888"],
    neighborhoods: ["Downtown", "Tower District", "Woodward Park", "Fig Garden", "Sunnyside", "West Fresno"],
    nearbyTowns: ["Clovis", "Madera", "Visalia", "Merced", "Hanford", "Tulare"],
    seoKeywords: ["Fresno business services", "tech Fresno CA", "automation Fresno", "Central Valley tech", "Fresno AI solutions"],
    businessInfo: {
      totalBusinesses: 32000,
      techBusinesses: 1800,
      serviceBusinesses: 12800
    }
  },
  {
    name: "Oakland",
    slug: "oakland",
    state: "California",
    stateAbbr: "CA",
    population: 440646,
    metroPopulation: 2800000,
    coordinates: { lat: 37.8044, lng: -122.2712 },
    distanceFromAlbuquerque: 1080,
    marketSize: "large",
    demographics: {
      medianIncome: 76469,
      medianAge: 36.5,
      growthRate: 2.8
    },
    topIndustries: ["Healthcare", "Transportation", "Technology", "Manufacturing", "Education"],
    zipCodes: ["94601", "94602", "94603", "94604", "94605", "94606", "94607", "94608", "94609", "94610", "94611", "94612", "94613", "94614", "94615", "94617", "94618", "94619", "94620", "94621", "94622", "94623", "94624", "94649", "94659", "94660", "94661", "94662", "94666"],
    neighborhoods: ["Downtown", "Jack London Square", "Uptown", "Lake Merritt", "Rockridge", "Temescal", "Fruitvale"],
    nearbyTowns: ["Berkeley", "Alameda", "Emeryville", "San Leandro", "Hayward", "Richmond"],
    seoKeywords: ["Oakland tech services", "East Bay AI", "Oakland automation", "Bay Area tech Oakland", "Oakland business solutions"],
    businessInfo: {
      totalBusinesses: 28000,
      techBusinesses: 4200,
      serviceBusinesses: 11200
    }
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    state: "California",
    stateAbbr: "CA",
    population: 466742,
    coordinates: { lat: 33.7701, lng: -118.1937 },
    distanceFromAlbuquerque: 800,
    marketSize: "large",
    demographics: {
      medianIncome: 63017,
      medianAge: 34.6,
      growthRate: 2.5
    },
    topIndustries: ["Shipping", "Healthcare", "Tourism", "Manufacturing", "Education"],
    zipCodes: ["90801", "90802", "90803", "90804", "90805", "90806", "90807", "90808", "90809", "90810", "90813", "90814", "90815", "90822", "90831", "90832", "90833", "90834", "90835", "90840", "90842", "90844", "90846", "90847", "90848", "90853", "90895", "90899"],
    neighborhoods: ["Downtown", "Belmont Shore", "Naples", "Bixby Knolls", "California Heights", "Alamitos Beach"],
    nearbyTowns: ["Lakewood", "Signal Hill", "Carson", "Cerritos", "Seal Beach"],
    seoKeywords: ["Long Beach AI services", "tech Long Beach CA", "automation Long Beach", "LB business tech"],
    businessInfo: {
      totalBusinesses: 31000,
      techBusinesses: 2800,
      serviceBusinesses: 12400
    }
  },
  {
    name: "Bakersfield",
    slug: "bakersfield",
    state: "California",
    stateAbbr: "CA",
    population: 384145,
    metroPopulation: 909235,
    coordinates: { lat: 35.3733, lng: -119.0187 },
    distanceFromAlbuquerque: 880,
    marketSize: "medium",
    demographics: {
      medianIncome: 63139,
      medianAge: 30.6,
      growthRate: 3.5
    },
    topIndustries: ["Oil & Gas", "Agriculture", "Healthcare", "Manufacturing", "Logistics"],
    zipCodes: ["93301", "93302", "93303", "93304", "93305", "93306", "93307", "93308", "93309", "93311", "93312", "93313", "93314", "93380", "93383", "93384", "93385", "93386", "93387", "93388", "93389", "93390"],
    neighborhoods: ["Downtown", "Southwest", "Northwest", "Northeast", "Southeast", "Rosedale"],
    nearbyTowns: ["Delano", "Shafter", "Arvin", "Tehachapi", "Wasco"],
    seoKeywords: ["Bakersfield business services", "tech Bakersfield CA", "automation Bakersfield", "Kern County tech"],
    businessInfo: {
      totalBusinesses: 22000,
      techBusinesses: 950,
      serviceBusinesses: 8800
    }
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    state: "California",
    stateAbbr: "CA",
    population: 346824,
    coordinates: { lat: 33.8366, lng: -117.9143 },
    distanceFromAlbuquerque: 790,
    marketSize: "large",
    demographics: {
      medianIncome: 69857,
      medianAge: 34.4,
      growthRate: 2.2
    },
    topIndustries: ["Tourism", "Healthcare", "Manufacturing", "Retail", "Technology"],
    zipCodes: ["92801", "92802", "92803", "92804", "92805", "92806", "92807", "92808", "92809", "92812", "92814", "92815", "92816", "92817", "92825", "92850", "92899"],
    neighborhoods: ["Downtown", "Anaheim Hills", "West Anaheim", "The Colony", "Platinum Triangle"],
    nearbyTowns: ["Garden Grove", "Orange", "Fullerton", "Santa Ana", "Buena Park"],
    seoKeywords: ["Anaheim AI services", "tech Anaheim CA", "automation Orange County", "Anaheim business tech"],
    businessInfo: {
      totalBusinesses: 24000,
      techBusinesses: 2100,
      serviceBusinesses: 9600
    }
  },
  {
    name: "Riverside",
    slug: "riverside",
    state: "California",
    stateAbbr: "CA",
    population: 314998,
    metroPopulation: 4650631,
    coordinates: { lat: 33.9806, lng: -117.3755 },
    distanceFromAlbuquerque: 760,
    marketSize: "medium",
    demographics: {
      medianIncome: 69591,
      medianAge: 31.1,
      growthRate: 4.2
    },
    topIndustries: ["Education", "Healthcare", "Manufacturing", "Logistics", "Government"],
    zipCodes: ["92501", "92502", "92503", "92504", "92505", "92506", "92507", "92508", "92509", "92513", "92514", "92516", "92517", "92518", "92519", "92521", "92522"],
    neighborhoods: ["Downtown", "Mission Grove", "Orangecrest", "La Sierra", "Canyon Crest", "Wood Streets"],
    nearbyTowns: ["Moreno Valley", "Corona", "Jurupa Valley", "Perris", "Norco"],
    seoKeywords: ["Riverside tech services", "Inland Empire AI", "Riverside automation", "IE business tech"],
    businessInfo: {
      totalBusinesses: 19000,
      techBusinesses: 1100,
      serviceBusinesses: 7600
    }
  },
  {
    name: "Stockton",
    slug: "stockton",
    state: "California",
    stateAbbr: "CA",
    population: 320804,
    metroPopulation: 779233,
    coordinates: { lat: 37.9577, lng: -121.2908 },
    distanceFromAlbuquerque: 1020,
    marketSize: "medium",
    demographics: {
      medianIncome: 58393,
      medianAge: 32.0,
      growthRate: 2.8
    },
    topIndustries: ["Agriculture", "Transportation", "Healthcare", "Education", "Manufacturing"],
    zipCodes: ["95201", "95202", "95203", "95204", "95205", "95206", "95207", "95208", "95209", "95210", "95211", "95212", "95213", "95215", "95219", "95267", "95269", "95296", "95297"],
    neighborhoods: ["Downtown", "Miracle Mile", "Lincoln Village", "Brookside", "Spanos Park"],
    nearbyTowns: ["Lodi", "Tracy", "Manteca", "Lathrop", "Ripon"],
    seoKeywords: ["Stockton business services", "tech Stockton CA", "automation Stockton", "Central Valley tech Stockton"],
    businessInfo: {
      totalBusinesses: 17000,
      techBusinesses: 650,
      serviceBusinesses: 6800
    }
  },
  {
    name: "Irvine",
    slug: "irvine",
    state: "California",
    stateAbbr: "CA",
    population: 307670,
    coordinates: { lat: 33.6846, lng: -117.8265 },
    distanceFromAlbuquerque: 790,
    marketSize: "large",
    demographics: {
      medianIncome: 105716,
      medianAge: 34.5,
      growthRate: 5.2
    },
    topIndustries: ["Technology", "Healthcare", "Finance", "Education", "Biotechnology"],
    zipCodes: ["92602", "92603", "92604", "92606", "92610", "92612", "92614", "92616", "92617", "92618", "92619", "92620", "92623", "92650", "92697"],
    neighborhoods: ["Woodbridge", "Northwood", "University Park", "Turtle Rock", "Westpark", "Oak Creek"],
    nearbyTowns: ["Tustin", "Lake Forest", "Costa Mesa", "Newport Beach", "Laguna Hills"],
    seoKeywords: ["Irvine tech services", "Orange County AI", "Irvine automation", "OC business tech", "Irvine IT solutions"],
    businessInfo: {
      totalBusinesses: 22000,
      techBusinesses: 5500,
      serviceBusinesses: 8800
    }
  },
  {
    name: "Santa Ana",
    slug: "santa-ana",
    state: "California",
    stateAbbr: "CA",
    population: 310227,
    coordinates: { lat: 33.7455, lng: -117.8677 },
    distanceFromAlbuquerque: 790,
    marketSize: "medium",
    demographics: {
      medianIncome: 66145,
      medianAge: 31.5,
      growthRate: 1.8
    },
    topIndustries: ["Healthcare", "Manufacturing", "Retail", "Education", "Government"],
    zipCodes: ["92701", "92702", "92703", "92704", "92705", "92706", "92707", "92708", "92711", "92712", "92728", "92735", "92799"],
    neighborhoods: ["Downtown", "South Coast Metro", "West Floral Park", "Morrison Park", "French Park"],
    nearbyTowns: ["Garden Grove", "Orange", "Tustin", "Fountain Valley", "Costa Mesa"],
    seoKeywords: ["Santa Ana business services", "tech Santa Ana CA", "automation Santa Ana", "OC tech Santa Ana"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 1200,
      serviceBusinesses: 7200
    }
  },

  // OREGON CITIES
  {
    name: "Portland",
    slug: "portland-or",
    state: "Oregon",
    stateAbbr: "OR",
    population: 652503,
    metroPopulation: 2512859,
    coordinates: { lat: 45.5152, lng: -122.6784 },
    distanceFromAlbuquerque: 1360,
    marketSize: "large",
    demographics: {
      medianIncome: 71005,
      medianAge: 37.1,
      growthRate: 3.8
    },
    topIndustries: ["Technology", "Healthcare", "Manufacturing", "Food & Beverage", "Tourism"],
    zipCodes: ["97086", "97201", "97202", "97203", "97204", "97205", "97206", "97207", "97208", "97209", "97210", "97211", "97212", "97213", "97214", "97215", "97216", "97217", "97218", "97219", "97220", "97221", "97222", "97223", "97224", "97225", "97227", "97228", "97229", "97230", "97231", "97232", "97233", "97236", "97238", "97239", "97240", "97242", "97250", "97251", "97252", "97253", "97254", "97256", "97258", "97266", "97267", "97268", "97269", "97271", "97272", "97280", "97281", "97282", "97283", "97286", "97290", "97291", "97292", "97293", "97294", "97296", "97298"],
    neighborhoods: ["Pearl District", "Northwest", "Southeast", "Northeast", "Downtown", "Hawthorne", "Alberta", "Belmont"],
    nearbyTowns: ["Beaverton", "Lake Oswego", "Tigard", "Hillsboro", "Gresham", "Milwaukie"],
    seoKeywords: ["Portland AI services", "tech Portland OR", "automation Portland", "PDX business tech", "Oregon tech solutions"],
    businessInfo: {
      totalBusinesses: 52000,
      techBusinesses: 8500,
      serviceBusinesses: 20800
    }
  },
  {
    name: "Eugene",
    slug: "eugene",
    state: "Oregon",
    stateAbbr: "OR",
    population: 176654,
    metroPopulation: 382971,
    coordinates: { lat: 44.0521, lng: -123.0868 },
    distanceFromAlbuquerque: 1420,
    marketSize: "medium",
    demographics: {
      medianIncome: 50962,
      medianAge: 33.8,
      growthRate: 2.5
    },
    topIndustries: ["Education", "Healthcare", "Technology", "Manufacturing", "Tourism"],
    zipCodes: ["97401", "97402", "97403", "97404", "97405", "97408", "97440"],
    neighborhoods: ["Downtown", "University", "Whiteaker", "South Eugene", "River Road", "Bethel"],
    nearbyTowns: ["Springfield", "Cottage Grove", "Junction City", "Veneta", "Coburg"],
    seoKeywords: ["Eugene business services", "tech Eugene OR", "automation Eugene", "Lane County tech"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 950,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Salem",
    slug: "salem-or",
    state: "Oregon",
    stateAbbr: "OR",
    population: 177723,
    metroPopulation: 433903,
    coordinates: { lat: 44.9429, lng: -123.0351 },
    distanceFromAlbuquerque: 1380,
    marketSize: "medium",
    demographics: {
      medianIncome: 56119,
      medianAge: 35.9,
      growthRate: 2.8
    },
    topIndustries: ["Government", "Healthcare", "Education", "Agriculture", "Manufacturing"],
    zipCodes: ["97301", "97302", "97303", "97304", "97305", "97306", "97307", "97308", "97309", "97310", "97311", "97312", "97313", "97314", "97317"],
    neighborhoods: ["Downtown", "West Salem", "South Salem", "Northeast Salem", "Southeast Salem"],
    nearbyTowns: ["Keizer", "Stayton", "Silverton", "Dallas", "Monmouth"],
    seoKeywords: ["Salem OR tech services", "automation Salem Oregon", "Salem business solutions", "capital city tech OR"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 580,
      serviceBusinesses: 4800
    }
  },

  // WASHINGTON CITIES
  {
    name: "Seattle",
    slug: "seattle",
    state: "Washington",
    stateAbbr: "WA",
    population: 737015,
    metroPopulation: 4018762,
    coordinates: { lat: 47.6062, lng: -122.3321 },
    distanceFromAlbuquerque: 1450,
    marketSize: "large",
    demographics: {
      medianIncome: 97185,
      medianAge: 35.6,
      growthRate: 5.2
    },
    topIndustries: ["Technology", "Healthcare", "Aerospace", "Retail", "Tourism", "Maritime"],
    zipCodes: ["98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98110", "98111", "98112", "98113", "98114", "98115", "98116", "98117", "98118", "98119", "98121", "98122", "98124", "98125", "98126", "98127", "98129", "98131", "98132", "98133", "98134", "98136", "98138", "98139", "98141", "98144", "98145", "98146", "98148", "98154", "98155", "98158", "98160", "98161", "98164", "98165", "98166", "98168", "98170", "98174", "98175", "98177", "98178", "98181", "98185", "98188", "98190", "98191", "98194", "98195", "98198", "98199"],
    neighborhoods: ["Downtown", "Capitol Hill", "Queen Anne", "Fremont", "Ballard", "Georgetown", "West Seattle", "University District"],
    nearbyTowns: ["Bellevue", "Redmond", "Kirkland", "Renton", "Tacoma", "Everett"],
    seoKeywords: ["Seattle AI services", "tech Seattle WA", "automation Seattle", "Pacific Northwest tech", "Seattle business solutions"],
    businessInfo: {
      totalBusinesses: 85000,
      techBusinesses: 25000,
      serviceBusinesses: 34000
    }
  },
  {
    name: "Spokane",
    slug: "spokane",
    state: "Washington",
    stateAbbr: "WA",
    population: 230160,
    metroPopulation: 585974,
    coordinates: { lat: 47.6588, lng: -117.4260 },
    distanceFromAlbuquerque: 1380,
    marketSize: "medium",
    demographics: {
      medianIncome: 52600,
      medianAge: 35.5,
      growthRate: 2.8
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Technology", "Finance"],
    zipCodes: ["99201", "99202", "99203", "99204", "99205", "99206", "99207", "99208", "99209", "99210", "99211", "99212", "99213", "99214", "99215", "99216", "99217", "99218", "99219", "99220", "99223", "99224", "99228", "99251", "99252", "99256", "99258", "99260"],
    neighborhoods: ["Downtown", "South Hill", "North Side", "West Central", "East Central"],
    nearbyTowns: ["Spokane Valley", "Cheney", "Liberty Lake", "Airway Heights", "Deer Park"],
    seoKeywords: ["Spokane tech services", "automation Spokane WA", "Eastern Washington tech", "Spokane business solutions"],
    businessInfo: {
      totalBusinesses: 16000,
      techBusinesses: 1200,
      serviceBusinesses: 6400
    }
  },
  {
    name: "Tacoma",
    slug: "tacoma",
    state: "Washington",
    stateAbbr: "WA",
    population: 219346,
    coordinates: { lat: 47.2529, lng: -122.4443 },
    distanceFromAlbuquerque: 1450,
    marketSize: "medium",
    demographics: {
      medianIncome: 62531,
      medianAge: 36.7,
      growthRate: 2.5
    },
    topIndustries: ["Healthcare", "Military", "Port Operations", "Manufacturing", "Education"],
    zipCodes: ["98401", "98402", "98403", "98404", "98405", "98406", "98407", "98408", "98409", "98411", "98412", "98413", "98415", "98416", "98417", "98418", "98419", "98421", "98422", "98424", "98430", "98431", "98433", "98438", "98439", "98443", "98444", "98445", "98446", "98447", "98448", "98464", "98465", "98466", "98467", "98471", "98481", "98490", "98493", "98496", "98497", "98498", "98499"],
    neighborhoods: ["Downtown", "Stadium District", "Proctor", "North End", "South Tacoma", "East Side"],
    nearbyTowns: ["Lakewood", "University Place", "Puyallup", "Federal Way", "Gig Harbor"],
    seoKeywords: ["Tacoma AI services", "tech Tacoma WA", "automation Tacoma", "South Sound tech"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 850,
      serviceBusinesses: 5600
    }
  },
  {
    name: "Vancouver",
    slug: "vancouver-wa",
    state: "Washington",
    stateAbbr: "WA",
    population: 190915,
    coordinates: { lat: 45.6387, lng: -122.6615 },
    distanceFromAlbuquerque: 1360,
    marketSize: "medium",
    demographics: {
      medianIncome: 61423,
      medianAge: 37.3,
      growthRate: 3.5
    },
    topIndustries: ["Healthcare", "Technology", "Manufacturing", "Education", "Retail"],
    zipCodes: ["98660", "98661", "98662", "98663", "98664", "98665", "98666", "98668", "98682", "98683", "98684", "98685", "98686", "98687"],
    neighborhoods: ["Downtown", "Uptown Village", "Cascade Park", "Fisher's Landing", "Felida"],
    nearbyTowns: ["Camas", "Washougal", "Battle Ground", "Ridgefield", "La Center"],
    seoKeywords: ["Vancouver WA tech services", "automation Vancouver Washington", "SW Washington tech"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 950,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Bellevue",
    slug: "bellevue",
    state: "Washington",
    stateAbbr: "WA",
    population: 151854,
    coordinates: { lat: 47.6101, lng: -122.2015 },
    distanceFromAlbuquerque: 1450,
    marketSize: "large",
    demographics: {
      medianIncome: 129497,
      medianAge: 38.8,
      growthRate: 4.5
    },
    topIndustries: ["Technology", "Healthcare", "Finance", "Retail", "Professional Services"],
    zipCodes: ["98004", "98005", "98006", "98007", "98008", "98009", "98015", "98039", "98052"],
    neighborhoods: ["Downtown", "Crossroads", "Lake Hills", "Wilburton", "West Bellevue", "Bridle Trails"],
    nearbyTowns: ["Redmond", "Kirkland", "Issaquah", "Newcastle", "Mercer Island"],
    seoKeywords: ["Bellevue AI services", "tech Bellevue WA", "Eastside tech", "Bellevue business solutions"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 4200,
      serviceBusinesses: 5600
    }
  },

  // NEVADA CITIES
  {
    name: "Las Vegas",
    slug: "las-vegas",
    state: "Nevada",
    stateAbbr: "NV",
    population: 641903,
    metroPopulation: 2641286,
    coordinates: { lat: 36.1699, lng: -115.1398 },
    distanceFromAlbuquerque: 575,
    marketSize: "large",
    demographics: {
      medianIncome: 58713,
      medianAge: 37.8,
      growthRate: 4.8
    },
    topIndustries: ["Tourism", "Gaming", "Entertainment", "Healthcare", "Construction", "Technology"],
    zipCodes: ["89101", "89102", "89103", "89104", "89106", "89107", "89108", "89109", "89110", "89111", "89112", "89113", "89114", "89115", "89116", "89117", "89118", "89119", "89120", "89121", "89122", "89123", "89124", "89125", "89126", "89127", "89128", "89129", "89130", "89131", "89132", "89133", "89134", "89135", "89136", "89137", "89138", "89139", "89140", "89141", "89142", "89143", "89144", "89145", "89146", "89147", "89148", "89149", "89150", "89151", "89152", "89153", "89154", "89155", "89156", "89157", "89158", "89159", "89160", "89161", "89162", "89163", "89164", "89165", "89166", "89169", "89170", "89173", "89177", "89178", "89179", "89180", "89183", "89185", "89191", "89193", "89195", "89199"],
    neighborhoods: ["The Strip", "Downtown", "Summerlin", "Henderson", "Paradise", "Spring Valley", "Enterprise"],
    nearbyTowns: ["Henderson", "North Las Vegas", "Boulder City", "Mesquite", "Pahrump"],
    seoKeywords: ["Las Vegas AI services", "tech Las Vegas NV", "automation Vegas", "Nevada tech solutions", "Las Vegas business tech"],
    businessInfo: {
      totalBusinesses: 65000,
      techBusinesses: 5500,
      serviceBusinesses: 26000
    }
  },
  {
    name: "Reno",
    slug: "reno",
    state: "Nevada",
    stateAbbr: "NV",
    population: 264165,
    metroPopulation: 490496,
    coordinates: { lat: 39.5296, lng: -119.8138 },
    distanceFromAlbuquerque: 985,
    marketSize: "medium",
    demographics: {
      medianIncome: 60365,
      medianAge: 35.9,
      growthRate: 5.2
    },
    topIndustries: ["Gaming", "Technology", "Logistics", "Manufacturing", "Healthcare"],
    zipCodes: ["89501", "89502", "89503", "89504", "89505", "89506", "89507", "89508", "89509", "89510", "89511", "89512", "89513", "89515", "89519", "89520", "89521", "89523", "89533", "89555", "89557", "89570", "89595", "89599"],
    neighborhoods: ["Downtown", "Midtown", "Old Southwest", "South Reno", "Northwest", "Sparks"],
    nearbyTowns: ["Sparks", "Carson City", "Fernley", "Incline Village"],
    seoKeywords: ["Reno tech services", "Northern Nevada AI", "Reno automation", "Biggest Little City tech"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 2200,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Henderson",
    slug: "henderson",
    state: "Nevada",
    stateAbbr: "NV",
    population: 317610,
    coordinates: { lat: 36.0395, lng: -114.9817 },
    distanceFromAlbuquerque: 580,
    marketSize: "large",
    demographics: {
      medianIncome: 74147,
      medianAge: 41.3,
      growthRate: 4.2
    },
    topIndustries: ["Healthcare", "Retail", "Manufacturing", "Technology", "Finance"],
    zipCodes: ["89002", "89009", "89011", "89012", "89014", "89015", "89016", "89044", "89052", "89053", "89074", "89077"],
    neighborhoods: ["Green Valley", "Seven Hills", "Anthem", "Lake Las Vegas", "MacDonald Ranch"],
    nearbyTowns: ["Las Vegas", "Boulder City", "Paradise", "Enterprise"],
    seoKeywords: ["Henderson NV tech services", "automation Henderson", "Las Vegas Valley tech"],
    businessInfo: {
      totalBusinesses: 15000,
      techBusinesses: 1800,
      serviceBusinesses: 6000
    }
  },

  // ARIZONA CITIES (Additional)
  {
    name: "Scottsdale",
    slug: "scottsdale",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 255310,
    coordinates: { lat: 33.4942, lng: -111.9261 },
    distanceFromAlbuquerque: 420,
    marketSize: "large",
    demographics: {
      medianIncome: 88506,
      medianAge: 47.1,
      growthRate: 3.8
    },
    topIndustries: ["Tourism", "Healthcare", "Finance", "Technology", "Real Estate"],
    zipCodes: ["85250", "85251", "85252", "85253", "85254", "85255", "85256", "85257", "85258", "85259", "85260", "85261", "85262", "85263", "85264", "85266", "85267", "85268", "85269", "85271"],
    neighborhoods: ["Old Town", "North Scottsdale", "South Scottsdale", "Paradise Valley", "Gainey Ranch"],
    nearbyTowns: ["Phoenix", "Tempe", "Mesa", "Paradise Valley", "Fountain Hills"],
    seoKeywords: ["Scottsdale tech services", "automation Scottsdale AZ", "luxury market tech"],
    businessInfo: {
      totalBusinesses: 22000,
      techBusinesses: 2400,
      serviceBusinesses: 8800
    }
  },

  // UTAH CITIES
  {
    name: "Salt Lake City",
    slug: "salt-lake-city",
    state: "Utah",
    stateAbbr: "UT",
    population: 200133,
    metroPopulation: 1232696,
    coordinates: { lat: 40.7608, lng: -111.8910 },
    distanceFromAlbuquerque: 600,
    marketSize: "large",
    demographics: {
      medianIncome: 53036,
      medianAge: 31.3,
      growthRate: 5.2
    },
    topIndustries: ["Technology", "Finance", "Healthcare", "Tourism", "Mining"],
    zipCodes: ["84101", "84102", "84103", "84104", "84105", "84106", "84107", "84108", "84109", "84110", "84111", "84112", "84113", "84114", "84115", "84116", "84117", "84118", "84119", "84120", "84121", "84122", "84123", "84124", "84125", "84126", "84127", "84128", "84129", "84130", "84131", "84132", "84133", "84134", "84136", "84137", "84138", "84139", "84141", "84143", "84144", "84145", "84147", "84148", "84150", "84151", "84152", "84157", "84158", "84165", "84170", "84171", "84180", "84184", "84189", "84190", "84199"],
    neighborhoods: ["Downtown", "Sugar House", "The Avenues", "Capitol Hill", "Rose Park", "Marmalade"],
    nearbyTowns: ["Sandy", "West Valley City", "Murray", "West Jordan", "South Jordan", "Draper"],
    seoKeywords: ["Salt Lake City AI services", "tech SLC Utah", "automation Salt Lake", "Silicon Slopes tech"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 2800,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Provo",
    slug: "provo",
    state: "Utah",
    stateAbbr: "UT",
    population: 116618,
    metroPopulation: 658754,
    coordinates: { lat: 40.2338, lng: -111.6585 },
    distanceFromAlbuquerque: 580,
    marketSize: "medium",
    demographics: {
      medianIncome: 48888,
      medianAge: 23.7,
      growthRate: 6.5
    },
    topIndustries: ["Education", "Technology", "Healthcare", "Software", "Professional Services"],
    zipCodes: ["84601", "84602", "84603", "84604", "84605", "84606"],
    neighborhoods: ["Downtown", "North Park", "Riverside", "Sunset", "Grandview"],
    nearbyTowns: ["Orem", "Springville", "American Fork", "Lehi", "Spanish Fork"],
    seoKeywords: ["Provo tech services", "Utah Valley AI", "Provo automation", "BYU tech corridor"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 1850,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Ogden",
    slug: "ogden",
    state: "Utah",
    stateAbbr: "UT",
    population: 87321,
    metroPopulation: 694863,
    coordinates: { lat: 41.2230, lng: -111.9738 },
    distanceFromAlbuquerque: 650,
    marketSize: "medium",
    demographics: {
      medianIncome: 48061,
      medianAge: 30.8,
      growthRate: 3.8
    },
    topIndustries: ["Manufacturing", "Healthcare", "Aerospace", "Outdoor Recreation", "Education"],
    zipCodes: ["84401", "84402", "84403", "84404", "84405", "84408", "84409", "84412", "84414", "84415"],
    neighborhoods: ["Downtown", "East Central", "Shadow Valley", "Mount Ogden", "Weber State"],
    nearbyTowns: ["Layton", "Roy", "Clearfield", "Kaysville", "Farmington"],
    seoKeywords: ["Ogden business services", "tech Ogden UT", "automation Weber County", "Northern Utah tech"],
    businessInfo: {
      totalBusinesses: 6200,
      techBusinesses: 420,
      serviceBusinesses: 2480
    }
  },

  // IDAHO CITIES
  {
    name: "Boise",
    slug: "boise",
    state: "Idaho",
    stateAbbr: "ID",
    population: 235684,
    metroPopulation: 764718,
    coordinates: { lat: 43.6150, lng: -116.2023 },
    distanceFromAlbuquerque: 1050,
    marketSize: "medium",
    demographics: {
      medianIncome: 60035,
      medianAge: 36.6,
      growthRate: 5.8
    },
    topIndustries: ["Technology", "Healthcare", "Manufacturing", "Government", "Construction"],
    zipCodes: ["83701", "83702", "83703", "83704", "83705", "83706", "83707", "83708", "83709", "83711", "83712", "83713", "83714", "83715", "83716", "83717", "83719", "83720", "83722", "83724", "83725", "83726", "83728", "83729", "83730", "83731", "83732", "83733", "83735", "83744", "83756", "83757", "83788", "83799"],
    neighborhoods: ["Downtown", "North End", "East End", "Southeast Boise", "Bench", "West Boise"],
    nearbyTowns: ["Meridian", "Nampa", "Caldwell", "Eagle", "Garden City"],
    seoKeywords: ["Boise AI services", "tech Boise ID", "automation Treasure Valley", "Idaho tech solutions"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 2200,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Meridian",
    slug: "meridian",
    state: "Idaho",
    stateAbbr: "ID",
    population: 117635,
    coordinates: { lat: 43.6121, lng: -116.3915 },
    distanceFromAlbuquerque: 1050,
    marketSize: "medium",
    demographics: {
      medianIncome: 71953,
      medianAge: 35.9,
      growthRate: 7.2
    },
    topIndustries: ["Healthcare", "Retail", "Technology", "Construction", "Professional Services"],
    zipCodes: ["83642", "83646", "83680"],
    neighborhoods: ["Downtown", "South Meridian", "North Meridian", "The Village"],
    nearbyTowns: ["Boise", "Eagle", "Star", "Nampa", "Kuna"],
    seoKeywords: ["Meridian ID tech services", "automation Meridian Idaho", "Treasure Valley tech"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 680,
      serviceBusinesses: 3000
    }
  },

  // MONTANA CITIES
  {
    name: "Billings",
    slug: "billings",
    state: "Montana",
    stateAbbr: "MT",
    population: 117116,
    metroPopulation: 184167,
    coordinates: { lat: 45.7833, lng: -108.5007 },
    distanceFromAlbuquerque: 1100,
    marketSize: "small",
    demographics: {
      medianIncome: 59656,
      medianAge: 37.5,
      growthRate: 2.8
    },
    topIndustries: ["Healthcare", "Energy", "Retail", "Transportation", "Agriculture"],
    zipCodes: ["59101", "59102", "59103", "59104", "59105", "59106", "59107", "59108", "59111", "59112", "59114", "59115", "59116", "59117"],
    neighborhoods: ["Downtown", "Heights", "West End", "South Side", "North Park"],
    nearbyTowns: ["Laurel", "Lockwood", "Shepherd", "Huntley", "Worden"],
    seoKeywords: ["Billings tech services", "Montana AI solutions", "automation Billings MT"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 320,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Missoula",
    slug: "missoula",
    state: "Montana",
    stateAbbr: "MT",
    population: 75516,
    metroPopulation: 118791,
    coordinates: { lat: 46.8721, lng: -113.9940 },
    distanceFromAlbuquerque: 1280,
    marketSize: "small",
    demographics: {
      medianIncome: 50236,
      medianAge: 31.5,
      growthRate: 3.2
    },
    topIndustries: ["Education", "Healthcare", "Technology", "Tourism", "Forestry"],
    zipCodes: ["59801", "59802", "59803", "59804", "59806", "59807", "59808", "59812"],
    neighborhoods: ["Downtown", "University District", "Northside", "Southside", "Rattlesnake"],
    nearbyTowns: ["Lolo", "Frenchtown", "Bonner", "East Missoula", "Clinton"],
    seoKeywords: ["Missoula business services", "tech Missoula MT", "Western Montana tech"],
    businessInfo: {
      totalBusinesses: 5200,
      techBusinesses: 380,
      serviceBusinesses: 2080
    }
  },

  // WYOMING CITIES
  {
    name: "Cheyenne",
    slug: "cheyenne",
    state: "Wyoming",
    stateAbbr: "WY",
    population: 65132,
    metroPopulation: 100512,
    coordinates: { lat: 41.1400, lng: -104.8202 },
    distanceFromAlbuquerque: 450,
    marketSize: "small",
    demographics: {
      medianIncome: 64598,
      medianAge: 36.5,
      growthRate: 1.8
    },
    topIndustries: ["Government", "Transportation", "Energy", "Healthcare", "Retail"],
    zipCodes: ["82001", "82002", "82003", "82005", "82006", "82007", "82008", "82009", "82010"],
    neighborhoods: ["Downtown", "South Cheyenne", "North Cheyenne", "East Cheyenne", "West Edge"],
    nearbyTowns: ["Laramie", "Fort Collins", "Greeley", "Pine Bluffs", "Burns"],
    seoKeywords: ["Cheyenne tech services", "Wyoming capital AI", "automation Cheyenne WY"],
    businessInfo: {
      totalBusinesses: 4500,
      techBusinesses: 180,
      serviceBusinesses: 1800
    }
  },
  {
    name: "Casper",
    slug: "casper",
    state: "Wyoming",
    stateAbbr: "WY",
    population: 59038,
    metroPopulation: 83280,
    coordinates: { lat: 42.8666, lng: -106.3131 },
    distanceFromAlbuquerque: 680,
    marketSize: "small",
    demographics: {
      medianIncome: 61947,
      medianAge: 36.0,
      growthRate: 0.8
    },
    topIndustries: ["Energy", "Healthcare", "Retail", "Government", "Tourism"],
    zipCodes: ["82601", "82602", "82604", "82605", "82609", "82615", "82630", "82633", "82636", "82637", "82638", "82640", "82644", "82646"],
    neighborhoods: ["Downtown", "Paradise Valley", "East Casper", "West Casper", "North Casper"],
    nearbyTowns: ["Mills", "Evansville", "Bar Nunn", "Glenrock", "Douglas"],
    seoKeywords: ["Casper business services", "tech Casper WY", "Central Wyoming tech"],
    businessInfo: {
      totalBusinesses: 3800,
      techBusinesses: 120,
      serviceBusinesses: 1520
    }
  },

  // Additional California cities to reach 100
  {
    name: "Modesto",
    slug: "modesto",
    state: "California",
    stateAbbr: "CA",
    population: 218464,
    metroPopulation: 552878,
    coordinates: { lat: 37.6391, lng: -120.9969 },
    distanceFromAlbuquerque: 990,
    marketSize: "medium",
    demographics: {
      medianIncome: 61587,
      medianAge: 33.4,
      growthRate: 2.5
    },
    topIndustries: ["Agriculture", "Healthcare", "Manufacturing", "Retail", "Transportation"],
    zipCodes: ["95350", "95351", "95352", "95353", "95354", "95355", "95356", "95357", "95358", "95397"],
    neighborhoods: ["Downtown", "College Area", "La Loma", "Village One", "Roseburg"],
    nearbyTowns: ["Turlock", "Ceres", "Riverbank", "Oakdale", "Patterson"],
    seoKeywords: ["Modesto tech services", "Central Valley AI Modesto", "automation Modesto CA"],
    businessInfo: {
      totalBusinesses: 13000,
      techBusinesses: 520,
      serviceBusinesses: 5200
    }
  },
  {
    name: "Fremont",
    slug: "fremont",
    state: "California",
    stateAbbr: "CA",
    population: 230504,
    coordinates: { lat: 37.5485, lng: -121.9886 },
    distanceFromAlbuquerque: 1050,
    marketSize: "large",
    demographics: {
      medianIncome: 142374,
      medianAge: 38.0,
      growthRate: 3.2
    },
    topIndustries: ["Technology", "Manufacturing", "Healthcare", "Biotechnology", "Clean Energy"],
    zipCodes: ["94536", "94537", "94538", "94539", "94555"],
    neighborhoods: ["Central District", "North Fremont", "South Fremont", "Ardenwood", "Mission San Jose"],
    nearbyTowns: ["Newark", "Union City", "Hayward", "Milpitas", "San Jose"],
    seoKeywords: ["Fremont tech services", "Bay Area AI Fremont", "automation Fremont CA"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 3200,
      serviceBusinesses: 5600
    }
  },
  {
    name: "Santa Rosa",
    slug: "santa-rosa",
    state: "California",
    stateAbbr: "CA",
    population: 178127,
    metroPopulation: 488863,
    coordinates: { lat: 38.4404, lng: -122.7141 },
    distanceFromAlbuquerque: 1100,
    marketSize: "medium",
    demographics: {
      medianIncome: 75630,
      medianAge: 38.8,
      growthRate: 2.2
    },
    topIndustries: ["Healthcare", "Wine Industry", "Tourism", "Technology", "Manufacturing"],
    zipCodes: ["95401", "95402", "95403", "95404", "95405", "95406", "95407", "95409"],
    neighborhoods: ["Downtown", "Railroad Square", "West End", "Bennett Valley", "Fountaingrove"],
    nearbyTowns: ["Petaluma", "Rohnert Park", "Windsor", "Sebastopol", "Healdsburg"],
    seoKeywords: ["Santa Rosa business services", "Wine Country tech", "automation Santa Rosa CA"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 850,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Oxnard",
    slug: "oxnard",
    state: "California",
    stateAbbr: "CA",
    population: 202063,
    coordinates: { lat: 34.1975, lng: -119.1771 },
    distanceFromAlbuquerque: 850,
    marketSize: "medium",
    demographics: {
      medianIncome: 68298,
      medianAge: 31.8,
      growthRate: 2.8
    },
    topIndustries: ["Agriculture", "Manufacturing", "Healthcare", "Military", "Transportation"],
    zipCodes: ["93030", "93031", "93032", "93033", "93034", "93035", "93036"],
    neighborhoods: ["Downtown", "The Village", "South Oxnard", "Rose Park", "College Park"],
    nearbyTowns: ["Ventura", "Camarillo", "Port Hueneme", "Santa Paula", "Fillmore"],
    seoKeywords: ["Oxnard tech services", "Ventura County AI", "automation Oxnard CA"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 450,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Huntington Beach",
    slug: "huntington-beach",
    state: "California",
    stateAbbr: "CA",
    population: 198711,
    coordinates: { lat: 33.6595, lng: -117.9988 },
    distanceFromAlbuquerque: 800,
    marketSize: "large",
    demographics: {
      medianIncome: 94957,
      medianAge: 42.3,
      growthRate: 1.8
    },
    topIndustries: ["Tourism", "Healthcare", "Aerospace", "Technology", "Retail"],
    zipCodes: ["92646", "92647", "92648", "92649"],
    neighborhoods: ["Downtown", "Bella Terra", "Goldenwest", "Huntington Harbour", "Bolsa Chica"],
    nearbyTowns: ["Westminster", "Fountain Valley", "Costa Mesa", "Newport Beach", "Seal Beach"],
    seoKeywords: ["Huntington Beach AI services", "Surf City tech", "automation HB Orange County"],
    businessInfo: {
      totalBusinesses: 13000,
      techBusinesses: 980,
      serviceBusinesses: 5200
    }
  },
  {
    name: "Glendale",
    slug: "glendale-ca",
    state: "California",
    stateAbbr: "CA",
    population: 196543,
    coordinates: { lat: 34.1425, lng: -118.2551 },
    distanceFromAlbuquerque: 790,
    marketSize: "large",
    demographics: {
      medianIncome: 66130,
      medianAge: 41.3,
      growthRate: 1.5
    },
    topIndustries: ["Healthcare", "Entertainment", "Finance", "Retail", "Technology"],
    zipCodes: ["91201", "91202", "91203", "91204", "91205", "91206", "91207", "91208", "91209", "91210", "91214", "91221", "91222", "91224", "91225", "91226"],
    neighborhoods: ["Downtown", "Montrose", "Rossmoyne", "Crescenta Highlands", "Citrus Grove"],
    nearbyTowns: ["Burbank", "Pasadena", "La Cañada Flintridge", "Eagle Rock", "Los Angeles"],
    seoKeywords: ["Glendale CA tech services", "automation Glendale California", "LA County tech Glendale"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 1850,
      serviceBusinesses: 5600
    }
  },
  {
    name: "Garden Grove",
    slug: "garden-grove",
    state: "California",
    stateAbbr: "CA",
    population: 171644,
    coordinates: { lat: 33.7743, lng: -117.9380 },
    distanceFromAlbuquerque: 790,
    marketSize: "medium",
    demographics: {
      medianIncome: 69278,
      medianAge: 37.2,
      growthRate: 1.2
    },
    topIndustries: ["Healthcare", "Manufacturing", "Retail", "Education", "Food Service"],
    zipCodes: ["92840", "92841", "92842", "92843", "92844", "92845", "92846"],
    neighborhoods: ["Downtown", "West Garden Grove", "Korean Business District", "Brookhurst"],
    nearbyTowns: ["Anaheim", "Westminster", "Santa Ana", "Fountain Valley", "Orange"],
    seoKeywords: ["Garden Grove business services", "tech Garden Grove CA", "Orange County automation GG"],
    businessInfo: {
      totalBusinesses: 10000,
      techBusinesses: 420,
      serviceBusinesses: 4000
    }
  },
  {
    name: "Visalia",
    slug: "visalia",
    state: "California",
    stateAbbr: "CA",
    population: 141384,
    metroPopulation: 473117,
    coordinates: { lat: 36.3302, lng: -119.2921 },
    distanceFromAlbuquerque: 930,
    marketSize: "medium",
    demographics: {
      medianIncome: 59708,
      medianAge: 30.6,
      growthRate: 3.2
    },
    topIndustries: ["Agriculture", "Healthcare", "Retail", "Government", "Manufacturing"],
    zipCodes: ["93277", "93278", "93279", "93290", "93291", "93292"],
    neighborhoods: ["Downtown", "Oval Park", "Beverly Glen", "Mill Creek", "Riverway"],
    nearbyTowns: ["Tulare", "Exeter", "Farmersville", "Lindsay", "Three Rivers"],
    seoKeywords: ["Visalia tech services", "Central Valley AI Visalia", "Tulare County tech"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 280,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Santa Clara",
    slug: "santa-clara",
    state: "California",
    stateAbbr: "CA",
    population: 127647,
    coordinates: { lat: 37.3541, lng: -121.9552 },
    distanceFromAlbuquerque: 1040,
    marketSize: "large",
    demographics: {
      medianIncome: 130890,
      medianAge: 35.2,
      growthRate: 3.8
    },
    topIndustries: ["Technology", "Semiconductors", "Software", "Data Centers", "Entertainment"],
    zipCodes: ["95050", "95051", "95052", "95053", "95054", "95055", "95056"],
    neighborhoods: ["Downtown", "Rivermark", "San Tomas", "Mission College Area"],
    nearbyTowns: ["San Jose", "Sunnyvale", "Cupertino", "Mountain View", "Milpitas"],
    seoKeywords: ["Santa Clara Silicon Valley tech", "AI Santa Clara CA", "tech hub Santa Clara"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 3800,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Thousand Oaks",
    slug: "thousand-oaks",
    state: "California",
    stateAbbr: "CA",
    population: 126966,
    coordinates: { lat: 34.1706, lng: -118.8376 },
    distanceFromAlbuquerque: 830,
    marketSize: "medium",
    demographics: {
      medianIncome: 107006,
      medianAge: 44.2,
      growthRate: 1.5
    },
    topIndustries: ["Biotechnology", "Healthcare", "Finance", "Education", "Retail"],
    zipCodes: ["91319", "91320", "91358", "91359", "91360", "91361", "91362"],
    neighborhoods: ["Downtown", "Newbury Park", "Westlake Village", "Oak Park", "Lang Ranch"],
    nearbyTowns: ["Simi Valley", "Agoura Hills", "Calabasas", "Camarillo", "Moorpark"],
    seoKeywords: ["Thousand Oaks tech services", "Conejo Valley AI", "automation Thousand Oaks CA"],
    businessInfo: {
      totalBusinesses: 9500,
      techBusinesses: 1250,
      serviceBusinesses: 3800
    }
  },
  {
    name: "Concord",
    slug: "concord-ca",
    state: "California",
    stateAbbr: "CA",
    population: 125410,
    coordinates: { lat: 37.9780, lng: -122.0311 },
    distanceFromAlbuquerque: 1080,
    marketSize: "medium",
    demographics: {
      medianIncome: 75164,
      medianAge: 38.0,
      growthRate: 2.2
    },
    topIndustries: ["Healthcare", "Retail", "Technology", "Manufacturing", "Construction"],
    zipCodes: ["94518", "94519", "94520", "94521", "94522", "94523", "94524", "94527", "94529"],
    neighborhoods: ["Downtown", "Treat", "Dana Estates", "Crystyl Ranch", "Ygnacio Valley"],
    nearbyTowns: ["Walnut Creek", "Pleasant Hill", "Martinez", "Clayton", "Pittsburg"],
    seoKeywords: ["Concord CA business services", "East Bay tech Concord", "automation Contra Costa"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 580,
      serviceBusinesses: 3000
    }
  },
  {
    name: "Sunnyvale",
    slug: "sunnyvale",
    state: "California",
    stateAbbr: "CA",
    population: 155805,
    coordinates: { lat: 37.3688, lng: -122.0363 },
    distanceFromAlbuquerque: 1040,
    marketSize: "large",
    demographics: {
      medianIncome: 148028,
      medianAge: 35.9,
      growthRate: 4.5
    },
    topIndustries: ["Technology", "Software", "Semiconductors", "Defense", "Healthcare"],
    zipCodes: ["94085", "94086", "94087", "94088", "94089"],
    neighborhoods: ["Downtown", "Heritage District", "Lakewood", "Cherry Chase", "Ponderosa"],
    nearbyTowns: ["Mountain View", "Cupertino", "Santa Clara", "Los Altos", "San Jose"],
    seoKeywords: ["Sunnyvale tech hub", "Silicon Valley AI Sunnyvale", "automation tech capital"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 4500,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Pasadena",
    slug: "pasadena",
    state: "California",
    stateAbbr: "CA",
    population: 138699,
    coordinates: { lat: 34.1478, lng: -118.1445 },
    distanceFromAlbuquerque: 790,
    marketSize: "large",
    demographics: {
      medianIncome: 85129,
      medianAge: 38.9,
      growthRate: 1.8
    },
    topIndustries: ["Healthcare", "Education", "Technology", "Research", "Tourism"],
    zipCodes: ["91101", "91102", "91103", "91104", "91105", "91106", "91107", "91108", "91109", "91110", "91114", "91115", "91116", "91117", "91118", "91121", "91123", "91124", "91125", "91126", "91129", "91182", "91184", "91185", "91188", "91189", "91191", "91199"],
    neighborhoods: ["Old Pasadena", "South Lake", "Playhouse District", "Bungalow Heaven", "San Rafael"],
    nearbyTowns: ["South Pasadena", "Altadena", "Sierra Madre", "San Marino", "Arcadia"],
    seoKeywords: ["Pasadena tech services", "Crown City AI", "automation Pasadena CA", "JPL tech corridor"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 1850,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Torrance",
    slug: "torrance",
    state: "California",
    stateAbbr: "CA",
    population: 147067,
    coordinates: { lat: 33.8358, lng: -118.3406 },
    distanceFromAlbuquerque: 800,
    marketSize: "large",
    demographics: {
      medianIncome: 85070,
      medianAge: 42.4,
      growthRate: 1.5
    },
    topIndustries: ["Manufacturing", "Healthcare", "Aerospace", "Automotive", "Technology"],
    zipCodes: ["90501", "90502", "90503", "90504", "90505", "90506", "90507", "90508", "90509", "90510"],
    neighborhoods: ["Old Torrance", "West Torrance", "Walteria", "South Bay Galleria", "Madrona"],
    nearbyTowns: ["Redondo Beach", "Carson", "Lomita", "Rolling Hills", "Palos Verdes"],
    seoKeywords: ["Torrance business services", "South Bay tech Torrance", "automation Torrance CA"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 1450,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Hayward",
    slug: "hayward",
    state: "California",
    stateAbbr: "CA",
    population: 162954,
    coordinates: { lat: 37.6688, lng: -122.0808 },
    distanceFromAlbuquerque: 1070,
    marketSize: "medium",
    demographics: {
      medianIncome: 80884,
      medianAge: 35.7,
      growthRate: 2.8
    },
    topIndustries: ["Manufacturing", "Healthcare", "Retail", "Education", "Technology"],
    zipCodes: ["94540", "94541", "94542", "94543", "94544", "94545", "94552", "94557"],
    neighborhoods: ["Downtown", "Jackson Triangle", "Longwood", "Mt. Eden", "Fairway Park"],
    nearbyTowns: ["San Leandro", "Castro Valley", "Union City", "Fremont", "San Lorenzo"],
    seoKeywords: ["Hayward tech services", "East Bay AI Hayward", "automation Hayward CA"],
    businessInfo: {
      totalBusinesses: 9000,
      techBusinesses: 650,
      serviceBusinesses: 3600
    }
  },
  {
    name: "Escondido",
    slug: "escondido",
    state: "California",
    stateAbbr: "CA",
    population: 151038,
    coordinates: { lat: 33.1192, lng: -117.0864 },
    distanceFromAlbuquerque: 820,
    marketSize: "medium",
    demographics: {
      medianIncome: 62073,
      medianAge: 33.6,
      growthRate: 2.2
    },
    topIndustries: ["Healthcare", "Manufacturing", "Retail", "Construction", "Agriculture"],
    zipCodes: ["92025", "92026", "92027", "92029", "92030", "92033", "92046"],
    neighborhoods: ["Downtown", "East Valley", "South Escondido", "Felicita", "Valley Center"],
    nearbyTowns: ["San Marcos", "Vista", "Poway", "Rancho Bernardo", "Valley Center"],
    seoKeywords: ["Escondido business services", "North County SD tech", "automation Escondido CA"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 420,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Berkeley",
    slug: "berkeley",
    state: "California",
    stateAbbr: "CA",
    population: 124321,
    coordinates: { lat: 37.8716, lng: -122.2727 },
    distanceFromAlbuquerque: 1080,
    marketSize: "large",
    demographics: {
      medianIncome: 85530,
      medianAge: 32.6,
      growthRate: 2.5
    },
    topIndustries: ["Education", "Research", "Technology", "Healthcare", "Biotechnology"],
    zipCodes: ["94701", "94702", "94703", "94704", "94705", "94706", "94707", "94708", "94709", "94710", "94712", "94720"],
    neighborhoods: ["Downtown", "Telegraph Avenue", "North Berkeley", "West Berkeley", "Elmwood"],
    nearbyTowns: ["Oakland", "Albany", "Emeryville", "Richmond", "El Cerrito"],
    seoKeywords: ["Berkeley tech services", "UC Berkeley AI", "East Bay innovation Berkeley"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 1850,
      serviceBusinesses: 3400
    }
  }
];

// Export combined markets for West Coast
export const westCoastMarkets: CityData[] = [...californiaMarkets];

// Helper function to get cities within radius of California centers
export function getCitiesNearCalifornia(radiusMiles: number = 750): CityData[] {
  // Using Los Angeles as the primary center point
  const losAngeles = californiaMarkets[0];
  return californiaMarkets.filter(city => {
    if (city.slug === 'los-angeles') return true;
    const distance = calculateDistance(
      losAngeles.coordinates.lat,
      losAngeles.coordinates.lng,
      city.coordinates.lat,
      city.coordinates.lng
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