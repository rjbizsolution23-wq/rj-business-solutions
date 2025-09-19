// Top 100 Markets within 500-mile radius of Milwaukee, Wisconsin
// Organized by state and distance from Milwaukee, WI (central point)

import { CityData } from './top-100-markets-data';

export const milwaukeeMarkets: CityData[] = [
  // WISCONSIN CITIES (Primary Markets)
  {
    name: "Milwaukee",
    slug: "milwaukee",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 577222,
    metroPopulation: 1574731,
    coordinates: { lat: 43.0389, lng: -87.9065 },
    distanceFromAlbuquerque: 1280,
    marketSize: "large",
    demographics: {
      medianIncome: 43125,
      medianAge: 31.5,
      growthRate: 1.8
    },
    topIndustries: ["Manufacturing", "Healthcare", "Financial Services", "Technology", "Food & Beverage"],
    zipCodes: ["53201", "53202", "53203", "53204", "53205", "53206", "53207", "53208", "53209", "53210", "53211", "53212", "53213", "53214", "53215", "53216", "53217", "53218", "53219", "53220", "53221", "53222", "53223", "53224", "53225", "53226", "53227", "53228", "53233", "53234", "53235", "53237", "53259", "53263", "53274", "53278", "53288", "53290", "53293", "53295"],
    neighborhoods: ["Downtown", "Third Ward", "Bay View", "Walker's Point", "Riverwest", "East Side", "Brewers Hill", "Brady Street", "Wauwatosa", "Shorewood"],
    nearbyTowns: ["Wauwatosa", "West Allis", "Greenfield", "Oak Creek", "Franklin", "Cudahy", "St. Francis", "Glendale", "Whitefish Bay"],
    seoKeywords: ["Milwaukee AI services", "automation Milwaukee", "tech solutions Milwaukee WI", "Wisconsin business automation", "Milwaukee digital transformation"],
    businessInfo: {
      totalBusinesses: 42000,
      techBusinesses: 3500,
      serviceBusinesses: 16800
    }
  },
  {
    name: "Madison",
    slug: "madison",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 269840,
    metroPopulation: 680796,
    coordinates: { lat: 43.0731, lng: -89.4012 },
    distanceFromAlbuquerque: 1200,
    marketSize: "large",
    demographics: {
      medianIncome: 65332,
      medianAge: 31.2,
      growthRate: 3.5
    },
    topIndustries: ["Education", "Healthcare", "Technology", "Government", "Biotechnology"],
    zipCodes: ["53701", "53702", "53703", "53704", "53705", "53706", "53707", "53708", "53711", "53713", "53714", "53715", "53716", "53717", "53718", "53719", "53725", "53726", "53744", "53774", "53777", "53778", "53779", "53782", "53783", "53784", "53785", "53786", "53788", "53789", "53790", "53791", "53792", "53793", "53794"],
    neighborhoods: ["Downtown", "Capitol Square", "State Street", "University Heights", "Vilas", "Monroe Street", "Williamson Street", "Tenney-Lapham"],
    nearbyTowns: ["Middleton", "Fitchburg", "Sun Prairie", "Verona", "Monona", "McFarland", "Waunakee"],
    seoKeywords: ["Madison tech services", "AI solutions Madison WI", "business automation Madison", "Wisconsin capital tech"],
    businessInfo: {
      totalBusinesses: 25000,
      techBusinesses: 4200,
      serviceBusinesses: 10000
    }
  },
  {
    name: "Green Bay",
    slug: "green-bay",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 107395,
    metroPopulation: 328268,
    coordinates: { lat: 44.5192, lng: -88.0198 },
    distanceFromAlbuquerque: 1350,
    marketSize: "medium",
    demographics: {
      medianIncome: 48975,
      medianAge: 34.8,
      growthRate: 2.1
    },
    topIndustries: ["Manufacturing", "Healthcare", "Paper Industry", "Food Processing", "Tourism"],
    zipCodes: ["54301", "54302", "54303", "54304", "54305", "54306", "54307", "54308", "54311", "54313", "54324", "54344"],
    neighborhoods: ["Downtown", "Broadway District", "Astor", "Allouez", "Howard", "Suamico"],
    nearbyTowns: ["De Pere", "Ashwaubenon", "Allouez", "Howard", "Suamico", "Bellevue"],
    seoKeywords: ["Green Bay business solutions", "tech Green Bay WI", "automation services Green Bay"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 450,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Kenosha",
    slug: "kenosha",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 99986,
    metroPopulation: 169790,
    coordinates: { lat: 42.5847, lng: -87.8212 },
    distanceFromAlbuquerque: 1300,
    marketSize: "medium",
    demographics: {
      medianIncome: 56113,
      medianAge: 35.5,
      growthRate: 1.5
    },
    topIndustries: ["Manufacturing", "Healthcare", "Retail", "Education", "Logistics"],
    zipCodes: ["53140", "53141", "53142", "53143", "53144", "53158"],
    neighborhoods: ["Downtown", "Uptown", "Harbor Park", "Columbus Park", "Lincoln Park"],
    nearbyTowns: ["Pleasant Prairie", "Somers", "Bristol", "Salem Lakes", "Paddock Lake"],
    seoKeywords: ["Kenosha AI services", "business automation Kenosha WI", "tech solutions Kenosha"],
    businessInfo: {
      totalBusinesses: 6200,
      techBusinesses: 320,
      serviceBusinesses: 2480
    }
  },
  {
    name: "Racine",
    slug: "racine",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 76893,
    metroPopulation: 197726,
    coordinates: { lat: 42.7261, lng: -87.7829 },
    distanceFromAlbuquerque: 1295,
    marketSize: "medium",
    demographics: {
      medianIncome: 44346,
      medianAge: 35.2,
      growthRate: 0.8
    },
    topIndustries: ["Manufacturing", "Healthcare", "Education", "Retail", "Technology"],
    zipCodes: ["53401", "53402", "53403", "53404", "53405", "53406", "53407", "53408"],
    neighborhoods: ["Downtown", "West Racine", "North Bay", "Uptown", "Douglas Park"],
    nearbyTowns: ["Mount Pleasant", "Sturtevant", "Caledonia", "Wind Point", "North Bay"],
    seoKeywords: ["Racine business services", "tech Racine WI", "automation Racine"],
    businessInfo: {
      totalBusinesses: 4800,
      techBusinesses: 250,
      serviceBusinesses: 1920
    }
  },
  {
    name: "Appleton",
    slug: "appleton",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 75644,
    metroPopulation: 239287,
    coordinates: { lat: 44.2619, lng: -88.4154 },
    distanceFromAlbuquerque: 1320,
    marketSize: "medium",
    demographics: {
      medianIncome: 57440,
      medianAge: 36.2,
      growthRate: 2.5
    },
    topIndustries: ["Paper Manufacturing", "Healthcare", "Education", "Retail", "Financial Services"],
    zipCodes: ["54911", "54913", "54914", "54915", "54919", "54942", "54952", "54956"],
    neighborhoods: ["Downtown", "Lawrence University", "Memorial Park", "Erb Park", "Reid"],
    nearbyTowns: ["Neenah", "Menasha", "Kaukauna", "Little Chute", "Kimberly", "Combined Locks"],
    seoKeywords: ["Appleton tech services", "AI Appleton WI", "business automation Appleton"],
    businessInfo: {
      totalBusinesses: 5500,
      techBusinesses: 380,
      serviceBusinesses: 2200
    }
  },
  {
    name: "Waukesha",
    slug: "waukesha",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 71158,
    metroPopulation: 409472,
    coordinates: { lat: 43.0117, lng: -88.2315 },
    distanceFromAlbuquerque: 1275,
    marketSize: "medium",
    demographics: {
      medianIncome: 65652,
      medianAge: 38.5,
      growthRate: 1.8
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Financial Services", "Technology"],
    zipCodes: ["53186", "53187", "53188", "53189"],
    neighborhoods: ["Downtown", "Historic Five Points", "Spring City", "East Town", "West Side"],
    nearbyTowns: ["Brookfield", "Pewaukee", "New Berlin", "Muskego", "Menomonee Falls"],
    seoKeywords: ["Waukesha business solutions", "tech Waukesha WI", "automation Waukesha"],
    businessInfo: {
      totalBusinesses: 6800,
      techBusinesses: 520,
      serviceBusinesses: 2720
    }
  },
  {
    name: "Oshkosh",
    slug: "oshkosh",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 66816,
    metroPopulation: 171907,
    coordinates: { lat: 44.0248, lng: -88.5426 },
    distanceFromAlbuquerque: 1310,
    marketSize: "medium",
    demographics: {
      medianIncome: 48748,
      medianAge: 34.1,
      growthRate: 1.2
    },
    topIndustries: ["Manufacturing", "Education", "Healthcare", "Aviation", "Tourism"],
    zipCodes: ["54901", "54902", "54903", "54904", "54906"],
    neighborhoods: ["Downtown", "University Area", "South Side", "North Side", "Sawyer"],
    nearbyTowns: ["Neenah", "Omro", "Winneconne", "Berlin", "Ripon"],
    seoKeywords: ["Oshkosh AI services", "tech Oshkosh WI", "business automation Oshkosh"],
    businessInfo: {
      totalBusinesses: 4200,
      techBusinesses: 280,
      serviceBusinesses: 1680
    }
  },
  {
    name: "Eau Claire",
    slug: "eau-claire",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 69421,
    metroPopulation: 172007,
    coordinates: { lat: 44.8113, lng: -91.4985 },
    distanceFromAlbuquerque: 1180,
    marketSize: "medium",
    demographics: {
      medianIncome: 50251,
      medianAge: 32.5,
      growthRate: 2.8
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Technology", "Retail"],
    zipCodes: ["54701", "54702", "54703", "54720", "54729"],
    neighborhoods: ["Downtown", "Water Street", "Third Ward", "Eastside Hill", "Randall Park"],
    nearbyTowns: ["Altoona", "Chippewa Falls", "Lake Hallie", "Menomonie"],
    seoKeywords: ["Eau Claire business services", "tech Eau Claire WI", "automation Eau Claire"],
    businessInfo: {
      totalBusinesses: 4800,
      techBusinesses: 420,
      serviceBusinesses: 1920
    }
  },
  {
    name: "La Crosse",
    slug: "la-crosse",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: 52680,
    metroPopulation: 137661,
    coordinates: { lat: 43.8014, lng: -91.2396 },
    distanceFromAlbuquerque: 1200,
    marketSize: "small",
    demographics: {
      medianIncome: 48409,
      medianAge: 30.8,
      growthRate: 1.5
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Food Processing", "Tourism"],
    zipCodes: ["54601", "54602", "54603", "54650"],
    neighborhoods: ["Downtown", "Historic Cass Street", "Grandview", "North Side", "South Side"],
    nearbyTowns: ["Onalaska", "Holmen", "West Salem", "La Crescent"],
    seoKeywords: ["La Crosse tech services", "AI La Crosse WI", "business automation La Crosse"],
    businessInfo: {
      totalBusinesses: 3500,
      techBusinesses: 220,
      serviceBusinesses: 1400
    }
  },

  // ILLINOIS CITIES
  {
    name: "Chicago",
    slug: "chicago",
    state: "Illinois",
    stateAbbr: "IL",
    population: 2746388,
    metroPopulation: 9618502,
    coordinates: { lat: 41.8781, lng: -87.6298 },
    distanceFromAlbuquerque: 1335,
    marketSize: "large",
    demographics: {
      medianIncome: 62097,
      medianAge: 34.8,
      growthRate: 2.1
    },
    topIndustries: ["Finance", "Technology", "Healthcare", "Manufacturing", "Transportation", "Tourism"],
    zipCodes: ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60608", "60609", "60610", "60611", "60612", "60613", "60614", "60615", "60616", "60617", "60618", "60619", "60620", "60621", "60622", "60623", "60624", "60625", "60626", "60628", "60629", "60630", "60631", "60632", "60633", "60634", "60636", "60637", "60638", "60639", "60640", "60641", "60642", "60643", "60644", "60645", "60646", "60647", "60649", "60651", "60652", "60653", "60654", "60655", "60656", "60657", "60659", "60660", "60661", "60664", "60666", "60668", "60669", "60670", "60673", "60674", "60675", "60677", "60678", "60680", "60681", "60682", "60684", "60685", "60686", "60687", "60688", "60689", "60690", "60691", "60693", "60694", "60695", "60696", "60697", "60699", "60701", "60706", "60707", "60712", "60714", "60803", "60804", "60805", "60827"],
    neighborhoods: ["The Loop", "River North", "Lincoln Park", "Wicker Park", "Gold Coast", "Old Town", "Lakeview", "Bucktown", "West Loop", "South Loop", "Hyde Park", "Logan Square"],
    nearbyTowns: ["Evanston", "Oak Park", "Cicero", "Berwyn", "Skokie", "Des Plaines", "Arlington Heights", "Schaumburg", "Naperville", "Aurora"],
    seoKeywords: ["Chicago AI services", "automation Chicago", "tech solutions Chicago IL", "Illinois business automation", "Chicago digital transformation"],
    businessInfo: {
      totalBusinesses: 250000,
      techBusinesses: 28000,
      serviceBusinesses: 100000
    }
  },
  {
    name: "Rockford",
    slug: "rockford",
    state: "Illinois",
    stateAbbr: "IL",
    population: 148655,
    metroPopulation: 338798,
    coordinates: { lat: 42.2711, lng: -89.0940 },
    distanceFromAlbuquerque: 1250,
    marketSize: "medium",
    demographics: {
      medianIncome: 44476,
      medianAge: 36.5,
      growthRate: 0.5
    },
    topIndustries: ["Manufacturing", "Healthcare", "Aerospace", "Logistics", "Education"],
    zipCodes: ["61101", "61102", "61103", "61104", "61105", "61106", "61107", "61108", "61109", "61110", "61111", "61112", "61114", "61125"],
    neighborhoods: ["Downtown", "Midtown", "Churchill's Grove", "Rolling Green", "Edgewater"],
    nearbyTowns: ["Loves Park", "Machesney Park", "Belvidere", "Roscoe", "Rockton"],
    seoKeywords: ["Rockford business solutions", "tech Rockford IL", "automation Rockford"],
    businessInfo: {
      totalBusinesses: 9800,
      techBusinesses: 450,
      serviceBusinesses: 3920
    }
  },
  {
    name: "Peoria",
    slug: "peoria",
    state: "Illinois",
    stateAbbr: "IL",
    population: 113150,
    metroPopulation: 402391,
    coordinates: { lat: 40.6936, lng: -89.5890 },
    distanceFromAlbuquerque: 1180,
    marketSize: "medium",
    demographics: {
      medianIncome: 51771,
      medianAge: 35.1,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Finance", "Agriculture"],
    zipCodes: ["61601", "61602", "61603", "61604", "61605", "61606", "61607", "61614", "61615", "61625", "61629", "61630", "61633", "61634", "61635", "61636", "61637", "61638", "61639", "61640", "61641", "61643", "61650", "61651", "61652", "61653", "61654", "61655", "61656"],
    neighborhoods: ["Downtown", "West Bluff", "East Bluff", "North Valley", "Warehouse District"],
    nearbyTowns: ["Pekin", "East Peoria", "Morton", "Washington", "Metamora"],
    seoKeywords: ["Peoria AI services", "tech Peoria IL", "business automation Peoria"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 380,
      serviceBusinesses: 3000
    }
  },
  {
    name: "Springfield",
    slug: "springfield-il",
    state: "Illinois",
    stateAbbr: "IL",
    population: 114394,
    metroPopulation: 208640,
    coordinates: { lat: 39.7817, lng: -89.6501 },
    distanceFromAlbuquerque: 1150,
    marketSize: "medium",
    demographics: {
      medianIncome: 53571,
      medianAge: 38.2,
      growthRate: 0.3
    },
    topIndustries: ["Government", "Healthcare", "Education", "Insurance", "Tourism"],
    zipCodes: ["62701", "62702", "62703", "62704", "62705", "62706", "62707", "62708", "62711", "62712", "62715", "62716", "62719", "62721", "62722", "62723", "62726", "62736", "62739", "62746", "62756", "62757", "62761", "62762", "62763", "62764", "62765", "62766", "62767", "62769", "62776", "62777", "62781", "62786", "62791", "62794", "62796"],
    neighborhoods: ["Downtown", "West Side", "East Side", "North End", "South Side"],
    nearbyTowns: ["Chatham", "Sherman", "Rochester", "Pleasant Plains", "Petersburg"],
    seoKeywords: ["Springfield IL business services", "tech Springfield Illinois", "automation Springfield"],
    businessInfo: {
      totalBusinesses: 8200,
      techBusinesses: 420,
      serviceBusinesses: 3280
    }
  },
  {
    name: "Naperville",
    slug: "naperville",
    state: "Illinois",
    stateAbbr: "IL",
    population: 149540,
    coordinates: { lat: 41.7508, lng: -88.1535 },
    distanceFromAlbuquerque: 1310,
    marketSize: "large",
    demographics: {
      medianIncome: 125926,
      medianAge: 38.8,
      growthRate: 3.2
    },
    topIndustries: ["Technology", "Healthcare", "Finance", "Education", "Professional Services"],
    zipCodes: ["60540", "60563", "60564", "60565", "60566", "60567"],
    neighborhoods: ["Downtown", "South Naperville", "North Naperville", "Historic District"],
    nearbyTowns: ["Aurora", "Lisle", "Wheaton", "Warrenville", "Bolingbrook"],
    seoKeywords: ["Naperville tech services", "AI Naperville IL", "business automation Naperville"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 2200,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Aurora",
    slug: "aurora-il",
    state: "Illinois",
    stateAbbr: "IL",
    population: 180542,
    coordinates: { lat: 41.7606, lng: -88.3201 },
    distanceFromAlbuquerque: 1305,
    marketSize: "large",
    demographics: {
      medianIncome: 65195,
      medianAge: 32.9,
      growthRate: 2.8
    },
    topIndustries: ["Manufacturing", "Healthcare", "Education", "Retail", "Logistics"],
    zipCodes: ["60502", "60503", "60504", "60505", "60506", "60507", "60568", "60569", "60572", "60598", "60599"],
    neighborhoods: ["Downtown", "East Side", "West Side", "Far East Side", "Indian Trail"],
    nearbyTowns: ["Batavia", "North Aurora", "Montgomery", "Sugar Grove", "Oswego"],
    seoKeywords: ["Aurora IL business solutions", "tech Aurora Illinois", "automation Aurora"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 850,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Joliet",
    slug: "joliet",
    state: "Illinois",
    stateAbbr: "IL",
    population: 150362,
    coordinates: { lat: 41.5250, lng: -88.0817 },
    distanceFromAlbuquerque: 1315,
    marketSize: "medium",
    demographics: {
      medianIncome: 69682,
      medianAge: 33.7,
      growthRate: 3.5
    },
    topIndustries: ["Transportation", "Logistics", "Gaming", "Healthcare", "Manufacturing"],
    zipCodes: ["60431", "60432", "60433", "60434", "60435", "60436", "60451"],
    neighborhoods: ["Downtown", "Cathedral Area", "Forest Park", "West Side", "East Side"],
    nearbyTowns: ["Crest Hill", "Lockport", "Romeoville", "Plainfield", "Shorewood"],
    seoKeywords: ["Joliet AI services", "tech Joliet IL", "business automation Joliet"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 480,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Elgin",
    slug: "elgin",
    state: "Illinois",
    stateAbbr: "IL",
    population: 114797,
    coordinates: { lat: 42.0372, lng: -88.2812 },
    distanceFromAlbuquerque: 1295,
    marketSize: "medium",
    demographics: {
      medianIncome: 64896,
      medianAge: 32.5,
      growthRate: 2.1
    },
    topIndustries: ["Manufacturing", "Healthcare", "Retail", "Education", "Technology"],
    zipCodes: ["60120", "60121", "60123", "60124"],
    neighborhoods: ["Downtown", "East Side", "West Side", "Northwest", "Southwest"],
    nearbyTowns: ["South Elgin", "Bartlett", "Streamwood", "Hoffman Estates", "St. Charles"],
    seoKeywords: ["Elgin business services", "tech Elgin IL", "automation Elgin"],
    businessInfo: {
      totalBusinesses: 6800,
      techBusinesses: 520,
      serviceBusinesses: 2720
    }
  },

  // MICHIGAN CITIES
  {
    name: "Detroit",
    slug: "detroit",
    state: "Michigan",
    stateAbbr: "MI",
    population: 639111,
    metroPopulation: 4392041,
    coordinates: { lat: 42.3314, lng: -83.0458 },
    distanceFromAlbuquerque: 1480,
    marketSize: "large",
    demographics: {
      medianIncome: 34762,
      medianAge: 34.8,
      growthRate: 0.5
    },
    topIndustries: ["Automotive", "Healthcare", "Technology", "Finance", "Manufacturing"],
    zipCodes: ["48201", "48202", "48203", "48204", "48205", "48206", "48207", "48208", "48209", "48210", "48211", "48212", "48213", "48214", "48215", "48216", "48217", "48218", "48219", "48220", "48221", "48222", "48223", "48224", "48225", "48226", "48227", "48228", "48229", "48230", "48231", "48232", "48233", "48234", "48235", "48236", "48237", "48238", "48239", "48240", "48242", "48243", "48244", "48255", "48260", "48264", "48265", "48266", "48267", "48268", "48269", "48272", "48275", "48277", "48278", "48279", "48288"],
    neighborhoods: ["Downtown", "Midtown", "Corktown", "Greektown", "Eastern Market", "Belle Isle", "Rivertown", "New Center"],
    nearbyTowns: ["Dearborn", "Warren", "Sterling Heights", "Troy", "Southfield", "Livonia", "Pontiac", "Royal Oak"],
    seoKeywords: ["Detroit AI services", "tech Detroit MI", "business automation Detroit", "Motor City tech"],
    businessInfo: {
      totalBusinesses: 35000,
      techBusinesses: 3200,
      serviceBusinesses: 14000
    }
  },
  {
    name: "Grand Rapids",
    slug: "grand-rapids",
    state: "Michigan",
    stateAbbr: "MI",
    population: 198917,
    metroPopulation: 1087592,
    coordinates: { lat: 42.9634, lng: -85.6681 },
    distanceFromAlbuquerque: 1380,
    marketSize: "large",
    demographics: {
      medianIncome: 50103,
      medianAge: 31.2,
      growthRate: 3.2
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Technology", "Furniture"],
    zipCodes: ["49501", "49502", "49503", "49504", "49505", "49506", "49507", "49508", "49509", "49510", "49512", "49514", "49515", "49516", "49518", "49519", "49523", "49525", "49528", "49530", "49534", "49544", "49546", "49548", "49550", "49555", "49560", "49588", "49599"],
    neighborhoods: ["Downtown", "Eastown", "Heritage Hill", "West Side", "Creston", "East Hills"],
    nearbyTowns: ["Wyoming", "Kentwood", "Walker", "Grandville", "East Grand Rapids", "Rockford"],
    seoKeywords: ["Grand Rapids business solutions", "tech Grand Rapids MI", "automation Grand Rapids"],
    businessInfo: {
      totalBusinesses: 15000,
      techBusinesses: 1800,
      serviceBusinesses: 6000
    }
  },
  {
    name: "Lansing",
    slug: "lansing",
    state: "Michigan",
    stateAbbr: "MI",
    population: 112644,
    metroPopulation: 550391,
    coordinates: { lat: 42.7325, lng: -84.5555 },
    distanceFromAlbuquerque: 1420,
    marketSize: "medium",
    demographics: {
      medianIncome: 44233,
      medianAge: 32.2,
      growthRate: 1.2
    },
    topIndustries: ["Government", "Education", "Healthcare", "Insurance", "Manufacturing"],
    zipCodes: ["48901", "48906", "48909", "48910", "48911", "48912", "48913", "48915", "48916", "48917", "48918", "48919", "48921", "48922", "48924", "48929", "48930", "48933", "48937", "48950", "48951", "48956", "48980"],
    neighborhoods: ["Downtown", "Old Town", "REO Town", "Eastside", "Westside", "South Lansing"],
    nearbyTowns: ["East Lansing", "Okemos", "Haslett", "Mason", "St. Johns", "Charlotte"],
    seoKeywords: ["Lansing AI services", "tech Lansing MI", "business automation Lansing"],
    businessInfo: {
      totalBusinesses: 7800,
      techBusinesses: 650,
      serviceBusinesses: 3120
    }
  },
  {
    name: "Ann Arbor",
    slug: "ann-arbor",
    state: "Michigan",
    stateAbbr: "MI",
    population: 123851,
    metroPopulation: 372258,
    coordinates: { lat: 42.2808, lng: -83.7430 },
    distanceFromAlbuquerque: 1450,
    marketSize: "medium",
    demographics: {
      medianIncome: 65745,
      medianAge: 28.9,
      growthRate: 2.5
    },
    topIndustries: ["Education", "Healthcare", "Technology", "Research", "Biotechnology"],
    zipCodes: ["48103", "48104", "48105", "48106", "48107", "48108", "48109", "48113"],
    neighborhoods: ["Downtown", "Kerrytown", "Old West Side", "Burns Park", "Water Hill"],
    nearbyTowns: ["Ypsilanti", "Saline", "Chelsea", "Dexter", "Plymouth"],
    seoKeywords: ["Ann Arbor tech services", "AI Ann Arbor MI", "business automation Ann Arbor"],
    businessInfo: {
      totalBusinesses: 9500,
      techBusinesses: 1850,
      serviceBusinesses: 3800
    }
  },
  {
    name: "Kalamazoo",
    slug: "kalamazoo",
    state: "Michigan",
    stateAbbr: "MI",
    population: 72873,
    metroPopulation: 261670,
    coordinates: { lat: 42.2917, lng: -85.5872 },
    distanceFromAlbuquerque: 1385,
    marketSize: "small",
    demographics: {
      medianIncome: 42078,
      medianAge: 26.2,
      growthRate: 1.8
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Pharmaceuticals", "Brewing"],
    zipCodes: ["49001", "49002", "49003", "49004", "49005", "49006", "49007", "49008", "49009", "49019", "49024", "49048"],
    neighborhoods: ["Downtown", "Vine", "Stuart", "Westwood", "Milwood"],
    nearbyTowns: ["Portage", "Battle Creek", "Paw Paw", "Plainwell", "Oshtemo"],
    seoKeywords: ["Kalamazoo business services", "tech Kalamazoo MI", "automation Kalamazoo"],
    businessInfo: {
      totalBusinesses: 4500,
      techBusinesses: 380,
      serviceBusinesses: 1800
    }
  },

  // INDIANA CITIES
  {
    name: "Indianapolis",
    slug: "indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    population: 887642,
    metroPopulation: 2111040,
    coordinates: { lat: 39.7684, lng: -86.1581 },
    distanceFromAlbuquerque: 1300,
    marketSize: "large",
    demographics: {
      medianIncome: 50813,
      medianAge: 34.3,
      growthRate: 3.8
    },
    topIndustries: ["Healthcare", "Manufacturing", "Finance", "Sports", "Logistics"],
    zipCodes: ["46201", "46202", "46203", "46204", "46205", "46206", "46207", "46208", "46209", "46211", "46214", "46216", "46217", "46218", "46219", "46220", "46221", "46222", "46223", "46224", "46225", "46226", "46227", "46228", "46229", "46230", "46231", "46234", "46235", "46236", "46237", "46239", "46240", "46241", "46242", "46244", "46247", "46249", "46250", "46251", "46253", "46254", "46255", "46256", "46259", "46260", "46262", "46266", "46268", "46274", "46275", "46277", "46278", "46280", "46282", "46283", "46285", "46290", "46291", "46295", "46296", "46298"],
    neighborhoods: ["Downtown", "Broad Ripple", "Fountain Square", "Mass Ave", "Irvington", "Butler-Tarkington"],
    nearbyTowns: ["Carmel", "Fishers", "Noblesville", "Greenwood", "Plainfield", "Avon", "Brownsburg"],
    seoKeywords: ["Indianapolis AI services", "tech Indianapolis IN", "business automation Indianapolis"],
    businessInfo: {
      totalBusinesses: 58000,
      techBusinesses: 5200,
      serviceBusinesses: 23200
    }
  },
  {
    name: "Fort Wayne",
    slug: "fort-wayne",
    state: "Indiana",
    stateAbbr: "IN",
    population: 270402,
    metroPopulation: 423038,
    coordinates: { lat: 41.0793, lng: -85.1394 },
    distanceFromAlbuquerque: 1385,
    marketSize: "medium",
    demographics: {
      medianIncome: 49411,
      medianAge: 34.5,
      growthRate: 2.1
    },
    topIndustries: ["Manufacturing", "Healthcare", "Insurance", "Education", "Logistics"],
    zipCodes: ["46801", "46802", "46803", "46804", "46805", "46806", "46807", "46808", "46809", "46814", "46815", "46816", "46818", "46819", "46825", "46835", "46845", "46850", "46851", "46852", "46853", "46854", "46855", "46856", "46857", "46858", "46859", "46860", "46861", "46862", "46863", "46864", "46865", "46866", "46867", "46868", "46869", "46885", "46895", "46896", "46897", "46898", "46899"],
    neighborhoods: ["Downtown", "West Central", "East Central", "Southeast", "Southwest"],
    nearbyTowns: ["New Haven", "Leo-Cedarville", "Huntertown", "Grabill", "Woodburn"],
    seoKeywords: ["Fort Wayne business solutions", "tech Fort Wayne IN", "automation Fort Wayne"],
    businessInfo: {
      totalBusinesses: 16000,
      techBusinesses: 950,
      serviceBusinesses: 6400
    }
  },
  {
    name: "South Bend",
    slug: "south-bend",
    state: "Indiana",
    stateAbbr: "IN",
    population: 103453,
    metroPopulation: 324501,
    coordinates: { lat: 41.6764, lng: -86.2520 },
    distanceFromAlbuquerque: 1340,
    marketSize: "medium",
    demographics: {
      medianIncome: 42693,
      medianAge: 33.3,
      growthRate: 1.5
    },
    topIndustries: ["Education", "Healthcare", "Manufacturing", "Technology", "Tourism"],
    zipCodes: ["46601", "46613", "46614", "46615", "46616", "46617", "46619", "46620", "46624", "46626", "46628", "46629", "46634", "46635", "46637", "46660", "46680", "46699"],
    neighborhoods: ["Downtown", "East Bank", "Near Northwest", "Northeast", "Southeast"],
    nearbyTowns: ["Mishawaka", "Elkhart", "Goshen", "Niles", "Granger"],
    seoKeywords: ["South Bend AI services", "tech South Bend IN", "business automation South Bend"],
    businessInfo: {
      totalBusinesses: 6500,
      techBusinesses: 480,
      serviceBusinesses: 2600
    }
  },
  {
    name: "Gary",
    slug: "gary",
    state: "Indiana",
    stateAbbr: "IN",
    population: 69093,
    coordinates: { lat: 41.5934, lng: -87.3464 },
    distanceFromAlbuquerque: 1320,
    marketSize: "small",
    demographics: {
      medianIncome: 31936,
      medianAge: 37.9,
      growthRate: -1.2
    },
    topIndustries: ["Manufacturing", "Transportation", "Healthcare", "Education", "Gaming"],
    zipCodes: ["46401", "46402", "46403", "46404", "46406", "46407", "46408", "46409", "46410"],
    neighborhoods: ["Downtown", "Miller", "Tolleston", "Black Oak", "Glen Park"],
    nearbyTowns: ["Hammond", "East Chicago", "Merrillville", "Hobart", "Portage"],
    seoKeywords: ["Gary business services", "tech Gary IN", "automation Gary"],
    businessInfo: {
      totalBusinesses: 3200,
      techBusinesses: 120,
      serviceBusinesses: 1280
    }
  },

  // MINNESOTA CITIES
  {
    name: "Minneapolis",
    slug: "minneapolis",
    state: "Minnesota",
    stateAbbr: "MN",
    population: 429954,
    metroPopulation: 3690261,
    coordinates: { lat: 44.9778, lng: -93.2650 },
    distanceFromAlbuquerque: 1180,
    marketSize: "large",
    demographics: {
      medianIncome: 70099,
      medianAge: 32.3,
      growthRate: 3.5
    },
    topIndustries: ["Healthcare", "Finance", "Technology", "Retail", "Manufacturing"],
    zipCodes: ["55401", "55402", "55403", "55404", "55405", "55406", "55407", "55408", "55409", "55410", "55411", "55412", "55413", "55414", "55415", "55416", "55417", "55418", "55419", "55420", "55421", "55422", "55423", "55424", "55425", "55426", "55427", "55428", "55429", "55430", "55431", "55432", "55433", "55434", "55435", "55436", "55437", "55438", "55439", "55440", "55441", "55442", "55443", "55444", "55445", "55446", "55447", "55448", "55449", "55450", "55454", "55455", "55458", "55459", "55460", "55467", "55468", "55469", "55470", "55472", "55473", "55474", "55478", "55479", "55480", "55483", "55484", "55485", "55486", "55487", "55488"],
    neighborhoods: ["Downtown", "North Loop", "Northeast", "Uptown", "South Minneapolis", "Linden Hills", "Powderhorn"],
    nearbyTowns: ["St. Paul", "Bloomington", "Eden Prairie", "Minnetonka", "Plymouth", "Edina"],
    seoKeywords: ["Minneapolis AI services", "tech Minneapolis MN", "business automation Twin Cities"],
    businessInfo: {
      totalBusinesses: 32000,
      techBusinesses: 5800,
      serviceBusinesses: 12800
    }
  },
  {
    name: "St. Paul",
    slug: "st-paul",
    state: "Minnesota",
    stateAbbr: "MN",
    population: 311527,
    coordinates: { lat: 44.9537, lng: -93.0900 },
    distanceFromAlbuquerque: 1185,
    marketSize: "large",
    demographics: {
      medianIncome: 57876,
      medianAge: 31.9,
      growthRate: 2.8
    },
    topIndustries: ["Government", "Healthcare", "Education", "Finance", "Manufacturing"],
    zipCodes: ["55101", "55102", "55103", "55104", "55105", "55106", "55107", "55108", "55109", "55110", "55111", "55112", "55113", "55114", "55115", "55116", "55117", "55118", "55119", "55120", "55121", "55122", "55123", "55124", "55125", "55126", "55127", "55128", "55129", "55130", "55133", "55144", "55145", "55146", "55155", "55161", "55164", "55165", "55166", "55168", "55169", "55170", "55171", "55172", "55175", "55177", "55182", "55187", "55188", "55190", "55191"],
    neighborhoods: ["Downtown", "Summit Hill", "Highland Park", "Macalester-Groveland", "Como Park"],
    nearbyTowns: ["Minneapolis", "Maplewood", "Roseville", "Woodbury", "Cottage Grove"],
    seoKeywords: ["St. Paul business solutions", "tech St. Paul MN", "automation Saint Paul"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 2200,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Rochester",
    slug: "rochester-mn",
    state: "Minnesota",
    stateAbbr: "MN",
    population: 121395,
    metroPopulation: 228520,
    coordinates: { lat: 44.0121, lng: -92.4802 },
    distanceFromAlbuquerque: 1220,
    marketSize: "medium",
    demographics: {
      medianIncome: 73106,
      medianAge: 35.8,
      growthRate: 3.2
    },
    topIndustries: ["Healthcare", "Technology", "Education", "Manufacturing", "Agriculture"],
    zipCodes: ["55901", "55902", "55903", "55904", "55905", "55906", "55920"],
    neighborhoods: ["Downtown", "Historic Southwest", "Kutzky Park", "Slatterly Park"],
    nearbyTowns: ["Byron", "Stewartville", "Pine Island", "Kasson", "Eyota"],
    seoKeywords: ["Rochester MN AI services", "tech Rochester Minnesota", "business automation Rochester"],
    businessInfo: {
      totalBusinesses: 9200,
      techBusinesses: 1100,
      serviceBusinesses: 3680
    }
  },
  {
    name: "Duluth",
    slug: "duluth",
    state: "Minnesota",
    stateAbbr: "MN",
    population: 86697,
    metroPopulation: 291638,
    coordinates: { lat: 46.7867, lng: -92.1005 },
    distanceFromAlbuquerque: 1380,
    marketSize: "small",
    demographics: {
      medianIncome: 50578,
      medianAge: 33.6,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Education", "Tourism", "Shipping", "Manufacturing"],
    zipCodes: ["55801", "55802", "55803", "55804", "55805", "55806", "55807", "55808", "55810", "55811", "55812", "55814", "55815", "55816"],
    neighborhoods: ["Downtown", "Canal Park", "Lincoln Park", "East Hillside", "Lakeside"],
    nearbyTowns: ["Superior", "Hermantown", "Proctor", "Cloquet", "Two Harbors"],
    seoKeywords: ["Duluth business services", "tech Duluth MN", "automation Duluth"],
    businessInfo: {
      totalBusinesses: 5800,
      techBusinesses: 320,
      serviceBusinesses: 2320
    }
  },

  // IOWA CITIES
  {
    name: "Des Moines",
    slug: "des-moines",
    state: "Iowa",
    stateAbbr: "IA",
    population: 214133,
    metroPopulation: 699292,
    coordinates: { lat: 41.5868, lng: -93.6250 },
    distanceFromAlbuquerque: 1100,
    marketSize: "medium",
    demographics: {
      medianIncome: 53525,
      medianAge: 34.0,
      growthRate: 3.8
    },
    topIndustries: ["Insurance", "Finance", "Healthcare", "Government", "Technology"],
    zipCodes: ["50301", "50302", "50303", "50304", "50305", "50306", "50307", "50308", "50309", "50310", "50311", "50312", "50313", "50314", "50315", "50316", "50317", "50318", "50319", "50320", "50321", "50322", "50323", "50324", "50325", "50327", "50328", "50329", "50330", "50331", "50332", "50333", "50334", "50335", "50336", "50339", "50340", "50359", "50360", "50361", "50362", "50363", "50364", "50367", "50368", "50369", "50380", "50381", "50391", "50392", "50393", "50394", "50395", "50396", "50936", "50940", "50947", "50950", "50980", "50981", "50982", "50983"],
    neighborhoods: ["Downtown", "East Village", "Sherman Hill", "Drake", "Beaverdale"],
    nearbyTowns: ["West Des Moines", "Ankeny", "Urbandale", "Johnston", "Clive", "Waukee"],
    seoKeywords: ["Des Moines AI services", "tech Des Moines IA", "business automation Des Moines"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 1850,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Cedar Rapids",
    slug: "cedar-rapids",
    state: "Iowa",
    stateAbbr: "IA",
    population: 137710,
    metroPopulation: 276520,
    coordinates: { lat: 41.9779, lng: -91.6656 },
    distanceFromAlbuquerque: 1180,
    marketSize: "medium",
    demographics: {
      medianIncome: 58511,
      medianAge: 35.7,
      growthRate: 2.2
    },
    topIndustries: ["Manufacturing", "Healthcare", "Technology", "Food Processing", "Education"],
    zipCodes: ["52401", "52402", "52403", "52404", "52405", "52406", "52407", "52408", "52409", "52410", "52411", "52497", "52498", "52499"],
    neighborhoods: ["Downtown", "New Bohemia", "Wellington Heights", "Noelridge", "Kenwood"],
    nearbyTowns: ["Marion", "Hiawatha", "Robins", "Fairfax", "Ely"],
    seoKeywords: ["Cedar Rapids business solutions", "tech Cedar Rapids IA", "automation Cedar Rapids"],
    businessInfo: {
      totalBusinesses: 9500,
      techBusinesses: 650,
      serviceBusinesses: 3800
    }
  },
  {
    name: "Davenport",
    slug: "davenport",
    state: "Iowa",
    stateAbbr: "IA",
    population: 101724,
    metroPopulation: 384324,
    coordinates: { lat: 41.5236, lng: -90.5776 },
    distanceFromAlbuquerque: 1230,
    marketSize: "medium",
    demographics: {
      medianIncome: 48191,
      medianAge: 35.5,
      growthRate: 1.5
    },
    topIndustries: ["Manufacturing", "Healthcare", "Agriculture", "Retail", "Transportation"],
    zipCodes: ["52801", "52802", "52803", "52804", "52805", "52806", "52807", "52808", "52809"],
    neighborhoods: ["Downtown", "West End", "Village of East Davenport", "McClellan Heights"],
    nearbyTowns: ["Bettendorf", "Moline", "Rock Island", "East Moline", "Eldridge"],
    seoKeywords: ["Davenport AI services", "tech Davenport IA", "business automation Quad Cities"],
    businessInfo: {
      totalBusinesses: 6800,
      techBusinesses: 380,
      serviceBusinesses: 2720
    }
  },
  {
    name: "Iowa City",
    slug: "iowa-city",
    state: "Iowa",
    stateAbbr: "IA",
    population: 74828,
    metroPopulation: 173105,
    coordinates: { lat: 41.6611, lng: -91.5302 },
    distanceFromAlbuquerque: 1190,
    marketSize: "small",
    demographics: {
      medianIncome: 47799,
      medianAge: 25.6,
      growthRate: 3.2
    },
    topIndustries: ["Education", "Healthcare", "Research", "Technology", "Publishing"],
    zipCodes: ["52240", "52241", "52242", "52243", "52244", "52245", "52246"],
    neighborhoods: ["Downtown", "Northside", "Eastside", "Westside", "University Heights"],
    nearbyTowns: ["Coralville", "North Liberty", "Tiffin", "Solon", "Hills"],
    seoKeywords: ["Iowa City tech services", "AI Iowa City IA", "business automation Iowa City"],
    businessInfo: {
      totalBusinesses: 5200,
      techBusinesses: 680,
      serviceBusinesses: 2080
    }
  },

  // MISSOURI CITIES
  {
    name: "Kansas City",
    slug: "kansas-city-mo",
    state: "Missouri",
    stateAbbr: "MO",
    population: 508090,
    metroPopulation: 2192035,
    coordinates: { lat: 39.0997, lng: -94.5786 },
    distanceFromAlbuquerque: 950,
    marketSize: "large",
    demographics: {
      medianIncome: 54194,
      medianAge: 35.0,
      growthRate: 3.2
    },
    topIndustries: ["Healthcare", "Finance", "Technology", "Manufacturing", "Logistics"],
    zipCodes: ["64101", "64102", "64105", "64106", "64108", "64109", "64110", "64111", "64112", "64113", "64114", "64116", "64117", "64118", "64119", "64120", "64121", "64123", "64124", "64125", "64126", "64127", "64128", "64129", "64130", "64131", "64132", "64133", "64134", "64136", "64137", "64138", "64139", "64141", "64144", "64145", "64146", "64147", "64148", "64149", "64150", "64151", "64152", "64153", "64154", "64155", "64156", "64157", "64158", "64161", "64163", "64164", "64165", "64166", "64167", "64168", "64170", "64171", "64172", "64179", "64180", "64184", "64185", "64187", "64188", "64190", "64191", "64192", "64193", "64194", "64195", "64196", "64197", "64198", "64199"],
    neighborhoods: ["Downtown", "River Market", "Crossroads", "Westport", "Country Club Plaza", "Brookside"],
    nearbyTowns: ["Independence", "Lee's Summit", "Blue Springs", "Liberty", "Gladstone"],
    seoKeywords: ["Kansas City MO AI services", "tech Kansas City Missouri", "business automation KC"],
    businessInfo: {
      totalBusinesses: 35000,
      techBusinesses: 3800,
      serviceBusinesses: 14000
    }
  },
  {
    name: "St. Louis",
    slug: "st-louis",
    state: "Missouri",
    stateAbbr: "MO",
    population: 301578,
    metroPopulation: 2805473,
    coordinates: { lat: 38.6270, lng: -90.1994 },
    distanceFromAlbuquerque: 1150,
    marketSize: "large",
    demographics: {
      medianIncome: 45782,
      medianAge: 35.0,
      growthRate: 0.5
    },
    topIndustries: ["Healthcare", "Finance", "Manufacturing", "Biotechnology", "Transportation"],
    zipCodes: ["63101", "63102", "63103", "63104", "63105", "63106", "63107", "63108", "63109", "63110", "63111", "63112", "63113", "63114", "63115", "63116", "63117", "63118", "63119", "63120", "63121", "63122", "63123", "63124", "63125", "63126", "63127", "63128", "63129", "63130", "63131", "63132", "63133", "63134", "63135", "63136", "63137", "63138", "63139", "63140", "63141", "63143", "63144", "63145", "63146", "63147", "63150", "63151", "63155", "63156", "63157", "63158", "63160", "63163", "63164", "63166", "63167", "63169", "63171", "63177", "63178", "63179", "63180", "63182", "63188", "63195", "63196", "63197", "63198", "63199"],
    neighborhoods: ["Downtown", "Central West End", "The Grove", "Soulard", "Lafayette Square", "The Hill"],
    nearbyTowns: ["Clayton", "University City", "Kirkwood", "Webster Groves", "Florissant"],
    seoKeywords: ["St. Louis business solutions", "tech St. Louis MO", "automation Saint Louis"],
    businessInfo: {
      totalBusinesses: 22000,
      techBusinesses: 2400,
      serviceBusinesses: 8800
    }
  },
  {
    name: "Springfield",
    slug: "springfield-mo",
    state: "Missouri",
    stateAbbr: "MO",
    population: 169176,
    metroPopulation: 475432,
    coordinates: { lat: 37.2090, lng: -93.2923 },
    distanceFromAlbuquerque: 980,
    marketSize: "medium",
    demographics: {
      medianIncome: 37491,
      medianAge: 32.9,
      growthRate: 2.5
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Retail", "Transportation"],
    zipCodes: ["65801", "65802", "65803", "65804", "65805", "65806", "65807", "65808", "65809", "65810", "65814", "65817", "65890", "65897", "65898", "65899"],
    neighborhoods: ["Downtown", "Commercial Street", "Rountree", "Phelps Grove", "University Heights"],
    nearbyTowns: ["Nixa", "Ozark", "Republic", "Willard", "Battlefield"],
    seoKeywords: ["Springfield MO AI services", "tech Springfield Missouri", "business automation Springfield"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 580,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Columbia",
    slug: "columbia-mo",
    state: "Missouri",
    stateAbbr: "MO",
    population: 126254,
    metroPopulation: 180463,
    coordinates: { lat: 38.9517, lng: -92.3341 },
    distanceFromAlbuquerque: 1080,
    marketSize: "medium",
    demographics: {
      medianIncome: 48859,
      medianAge: 26.8,
      growthRate: 3.5
    },
    topIndustries: ["Education", "Healthcare", "Insurance", "Technology", "Government"],
    zipCodes: ["65201", "65202", "65203", "65205", "65211", "65212", "65215", "65216", "65217", "65218"],
    neighborhoods: ["Downtown", "East Campus", "Old Southwest", "North Central", "Grasslands"],
    nearbyTowns: ["Ashland", "Hallsville", "Centralia", "Fulton", "Boonville"],
    seoKeywords: ["Columbia MO tech services", "AI Columbia Missouri", "business automation Columbia"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 720,
      serviceBusinesses: 3400
    }
  },

  // OHIO CITIES
  {
    name: "Columbus",
    slug: "columbus-oh",
    state: "Ohio",
    stateAbbr: "OH",
    population: 905748,
    metroPopulation: 2138926,
    coordinates: { lat: 39.9612, lng: -82.9988 },
    distanceFromAlbuquerque: 1400,
    marketSize: "large",
    demographics: {
      medianIncome: 53985,
      medianAge: 32.3,
      growthRate: 4.2
    },
    topIndustries: ["Education", "Healthcare", "Finance", "Technology", "Insurance"],
    zipCodes: ["43085", "43201", "43202", "43203", "43204", "43205", "43206", "43207", "43209", "43210", "43211", "43212", "43213", "43214", "43215", "43216", "43217", "43218", "43219", "43220", "43221", "43222", "43223", "43224", "43226", "43227", "43228", "43229", "43230", "43231", "43232", "43234", "43235", "43236", "43240", "43251", "43260", "43266", "43268", "43270", "43271", "43272", "43279", "43287", "43291"],
    neighborhoods: ["Downtown", "Short North", "German Village", "Arena District", "Clintonville", "Grandview"],
    nearbyTowns: ["Dublin", "Westerville", "Reynoldsburg", "Grove City", "Hilliard", "Upper Arlington"],
    seoKeywords: ["Columbus AI services", "tech Columbus OH", "business automation Columbus Ohio"],
    businessInfo: {
      totalBusinesses: 62000,
      techBusinesses: 7800,
      serviceBusinesses: 24800
    }
  },
  {
    name: "Cleveland",
    slug: "cleveland",
    state: "Ohio",
    stateAbbr: "OH",
    population: 372624,
    metroPopulation: 2088251,
    coordinates: { lat: 41.4993, lng: -81.6944 },
    distanceFromAlbuquerque: 1480,
    marketSize: "large",
    demographics: {
      medianIncome: 35305,
      medianAge: 35.7,
      growthRate: 0.2
    },
    topIndustries: ["Healthcare", "Manufacturing", "Finance", "Professional Services", "Biotechnology"],
    zipCodes: ["44101", "44102", "44103", "44104", "44105", "44106", "44107", "44108", "44109", "44110", "44111", "44112", "44113", "44114", "44115", "44116", "44117", "44118", "44119", "44120", "44121", "44122", "44123", "44124", "44125", "44126", "44127", "44128", "44129", "44130", "44131", "44132", "44133", "44134", "44135", "44136", "44137", "44138", "44139", "44140", "44141", "44142", "44143", "44144", "44145", "44146", "44147", "44149", "44181", "44188", "44190", "44191", "44192", "44193", "44194", "44195", "44197", "44198", "44199"],
    neighborhoods: ["Downtown", "University Circle", "Ohio City", "Tremont", "Gordon Square", "Little Italy"],
    nearbyTowns: ["Lakewood", "Cleveland Heights", "Shaker Heights", "Parma", "Euclid"],
    seoKeywords: ["Cleveland business solutions", "tech Cleveland OH", "automation Cleveland"],
    businessInfo: {
      totalBusinesses: 28000,
      techBusinesses: 2200,
      serviceBusinesses: 11200
    }
  },
  {
    name: "Cincinnati",
    slug: "cincinnati",
    state: "Ohio",
    stateAbbr: "OH",
    population: 309317,
    metroPopulation: 2256884,
    coordinates: { lat: 39.1031, lng: -84.5120 },
    distanceFromAlbuquerque: 1350,
    marketSize: "large",
    demographics: {
      medianIncome: 45840,
      medianAge: 32.5,
      growthRate: 2.5
    },
    topIndustries: ["Healthcare", "Finance", "Manufacturing", "Education", "Consumer Goods"],
    zipCodes: ["45201", "45202", "45203", "45204", "45205", "45206", "45207", "45208", "45209", "45210", "45211", "45212", "45213", "45214", "45215", "45216", "45217", "45218", "45219", "45220", "45221", "45222", "45223", "45224", "45225", "45226", "45227", "45228", "45229", "45230", "45231", "45232", "45233", "45234", "45235", "45236", "45237", "45238", "45239", "45240", "45241", "45242", "45243", "45244", "45245", "45246", "45247", "45248", "45249", "45250", "45251", "45252", "45253", "45254", "45255", "45258", "45262", "45263", "45264", "45267", "45268", "45269", "45270", "45271", "45273", "45274", "45275", "45277", "45280", "45296", "45298", "45299", "45999"],
    neighborhoods: ["Downtown", "Over-the-Rhine", "Hyde Park", "Mount Adams", "Clifton", "Oakley"],
    nearbyTowns: ["Covington", "Newport", "Florence", "Hamilton", "Fairfield", "Mason"],
    seoKeywords: ["Cincinnati AI services", "tech Cincinnati OH", "business automation Cincinnati"],
    businessInfo: {
      totalBusinesses: 25000,
      techBusinesses: 2800,
      serviceBusinesses: 10000
    }
  },
  {
    name: "Toledo",
    slug: "toledo",
    state: "Ohio",
    stateAbbr: "OH",
    population: 270871,
    metroPopulation: 646604,
    coordinates: { lat: 41.6540, lng: -83.5379 },
    distanceFromAlbuquerque: 1420,
    marketSize: "medium",
    demographics: {
      medianIncome: 38139,
      medianAge: 34.2,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Glass Production", "Solar Energy"],
    zipCodes: ["43601", "43602", "43603", "43604", "43605", "43606", "43607", "43608", "43609", "43610", "43611", "43612", "43613", "43614", "43615", "43616", "43617", "43620", "43623", "43635", "43652", "43654", "43656", "43657", "43659", "43660", "43661", "43666", "43667", "43681", "43682", "43697", "43699"],
    neighborhoods: ["Downtown", "Old West End", "Ottawa Hills", "Point Place", "Oregon"],
    nearbyTowns: ["Maumee", "Perrysburg", "Sylvania", "Oregon", "Rossford"],
    seoKeywords: ["Toledo tech services", "AI Toledo OH", "business automation Toledo"],
    businessInfo: {
      totalBusinesses: 15000,
      techBusinesses: 780,
      serviceBusinesses: 6000
    }
  },
  {
    name: "Akron",
    slug: "akron",
    state: "Ohio",
    stateAbbr: "OH",
    population: 190469,
    metroPopulation: 702219,
    coordinates: { lat: 41.0814, lng: -81.5190 },
    distanceFromAlbuquerque: 1460,
    marketSize: "medium",
    demographics: {
      medianIncome: 40281,
      medianAge: 35.7,
      growthRate: 0.5
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Polymer Science", "Technology"],
    zipCodes: ["44301", "44302", "44303", "44304", "44305", "44306", "44307", "44308", "44309", "44310", "44311", "44312", "44313", "44314", "44315", "44316", "44317", "44319", "44320", "44321", "44322", "44325", "44326", "44328", "44333", "44334", "44372", "44393", "44396", "44398", "44399"],
    neighborhoods: ["Downtown", "Highland Square", "North Hill", "Firestone Park", "Wallhaven"],
    nearbyTowns: ["Cuyahoga Falls", "Barberton", "Stow", "Hudson", "Green"],
    seoKeywords: ["Akron business services", "tech Akron OH", "automation Akron"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 880,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Dayton",
    slug: "dayton",
    state: "Ohio",
    stateAbbr: "OH",
    population: 137644,
    metroPopulation: 814049,
    coordinates: { lat: 39.7589, lng: -84.1916 },
    distanceFromAlbuquerque: 1380,
    marketSize: "medium",
    demographics: {
      medianIncome: 34724,
      medianAge: 32.4,
      growthRate: 0.2
    },
    topIndustries: ["Aerospace", "Healthcare", "Research", "Manufacturing", "Technology"],
    zipCodes: ["45401", "45402", "45403", "45404", "45405", "45406", "45409", "45410", "45412", "45413", "45414", "45415", "45416", "45417", "45418", "45419", "45420", "45422", "45423", "45424", "45426", "45427", "45428", "45429", "45430", "45431", "45432", "45433", "45434", "45435", "45437", "45439", "45440", "45441", "45448", "45449", "45454", "45458", "45459", "45469", "45470", "45475", "45479", "45481", "45482", "45490"],
    neighborhoods: ["Downtown", "Oregon District", "Wright-Dunbar", "Old North Dayton", "South Park"],
    nearbyTowns: ["Kettering", "Beavercreek", "Huber Heights", "Fairborn", "Centerville"],
    seoKeywords: ["Dayton AI services", "tech Dayton OH", "business automation Dayton"],
    businessInfo: {
      totalBusinesses: 9500,
      techBusinesses: 950,
      serviceBusinesses: 3800
    }
  }
];

// Export combined markets
export const allMarkets: CityData[] = [...milwaukeeMarkets];

// Helper function to get cities within radius of Milwaukee
export function getCitiesNearMilwaukee(radiusMiles: number = 500): CityData[] {
  const milwaukee = milwaukeeMarkets[0];
  return milwaukeeMarkets.filter(city => {
    if (city.slug === 'milwaukee') return true;
    const distance = calculateDistance(
      milwaukee.coordinates.lat,
      milwaukee.coordinates.lng,
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