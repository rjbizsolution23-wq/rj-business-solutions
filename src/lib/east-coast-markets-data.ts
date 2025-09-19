// Top 100 Markets within 750-mile radius of East Coast (NYC/Boston corridor)
// Covers Northeast, Mid-Atlantic, and Southeast regions

import { CityData } from './top-100-markets-data';

export const eastCoastMarkets: CityData[] = [
  // NEW YORK STATE
  {
    name: "New York City",
    slug: "new-york-city",
    state: "New York",
    stateAbbr: "NY",
    population: 8336817,
    metroPopulation: 19979477,
    coordinates: { lat: 40.7128, lng: -74.0060 },
    distanceFromAlbuquerque: 2000,
    marketSize: "large",
    demographics: {
      medianIncome: 70663,
      medianAge: 36.9,
      growthRate: 2.1
    },
    topIndustries: ["Finance", "Technology", "Media", "Real Estate", "Healthcare", "Fashion", "Tourism"],
    zipCodes: ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10008", "10009", "10010", "10011", "10012", "10013", "10014", "10015", "10016", "10017", "10018", "10019", "10020", "10021", "10022", "10023", "10024", "10025", "10026", "10027", "10028", "10029", "10030", "10031", "10032", "10033", "10034", "10035", "10036", "10037", "10038", "10039", "10040", "10041", "10043", "10044", "10045", "10055", "10060", "10065", "10069", "10075", "10080", "10081", "10087", "10090", "10101", "10102", "10103", "10104", "10105", "10106", "10107", "10108", "10109", "10110", "10111", "10112", "10113", "10114", "10115", "10116", "10117", "10118", "10119", "10120", "10121", "10122", "10123", "10124", "10125", "10126", "10128", "10129", "10130", "10131", "10132", "10133", "10138", "10150", "10151", "10152", "10153", "10154", "10155", "10156", "10157", "10158", "10159", "10160", "10161", "10162", "10163", "10164", "10165", "10166", "10167", "10168", "10169", "10170", "10171", "10172", "10173", "10174", "10175", "10176", "10177", "10178", "10179", "10185", "10199", "10203", "10211", "10212", "10213", "10242", "10249", "10256", "10258", "10259", "10260", "10261", "10265", "10268", "10269", "10270", "10271", "10272", "10273", "10274", "10275", "10276", "10277", "10278", "10279", "10280", "10281", "10282", "10285", "10286", "10292"],
    neighborhoods: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Financial District", "Midtown", "Upper East Side", "Upper West Side", "Greenwich Village", "SoHo", "Tribeca", "Chelsea", "Harlem", "Williamsburg"],
    nearbyTowns: ["Newark", "Jersey City", "Yonkers", "White Plains", "New Rochelle", "Mount Vernon", "Stamford"],
    seoKeywords: ["New York City AI services", "NYC automation", "Manhattan tech solutions", "NYC business automation", "New York digital transformation", "Wall Street tech", "NYC AI consulting"],
    businessInfo: {
      totalBusinesses: 750000,
      techBusinesses: 95000,
      serviceBusinesses: 300000
    }
  },
  {
    name: "Buffalo",
    slug: "buffalo",
    state: "New York",
    stateAbbr: "NY",
    population: 278349,
    metroPopulation: 1166902,
    coordinates: { lat: 42.8865, lng: -78.8784 },
    distanceFromAlbuquerque: 1750,
    marketSize: "medium",
    demographics: {
      medianIncome: 40843,
      medianAge: 33.5,
      growthRate: 1.2
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Finance", "Tourism"],
    zipCodes: ["14201", "14202", "14203", "14204", "14205", "14206", "14207", "14208", "14209", "14210", "14211", "14212", "14213", "14214", "14215", "14216", "14217", "14218", "14219", "14220", "14221", "14222", "14223", "14224", "14225", "14226", "14227", "14228", "14231", "14233", "14240", "14241", "14260", "14261", "14263", "14264", "14265", "14267", "14269", "14270", "14272", "14273", "14276", "14280"],
    neighborhoods: ["Downtown", "Elmwood Village", "Allentown", "North Buffalo", "South Buffalo", "East Buffalo"],
    nearbyTowns: ["Niagara Falls", "Cheektowaga", "Tonawanda", "Amherst", "Lackawanna"],
    seoKeywords: ["Buffalo tech services", "Western NY AI", "Buffalo automation", "Erie County tech", "Buffalo business solutions"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 1200,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Rochester",
    slug: "rochester-ny",
    state: "New York",
    stateAbbr: "NY",
    population: 211328,
    metroPopulation: 1079671,
    coordinates: { lat: 43.1566, lng: -77.6088 },
    distanceFromAlbuquerque: 1800,
    marketSize: "medium",
    demographics: {
      medianIncome: 37395,
      medianAge: 31.8,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Education", "Optics", "Technology", "Manufacturing"],
    zipCodes: ["14601", "14602", "14603", "14604", "14605", "14606", "14607", "14608", "14609", "14610", "14611", "14612", "14613", "14614", "14615", "14616", "14617", "14618", "14619", "14620", "14621", "14622", "14623", "14624", "14625", "14626", "14627", "14638", "14639", "14642", "14643", "14644", "14645", "14646", "14647", "14649", "14650", "14651", "14652", "14653", "14692", "14694"],
    neighborhoods: ["Downtown", "Park Avenue", "South Wedge", "Highland Park", "19th Ward", "Charlotte"],
    nearbyTowns: ["Irondequoit", "Greece", "Henrietta", "Brighton", "Pittsford", "Webster"],
    seoKeywords: ["Rochester NY tech services", "Finger Lakes AI", "Rochester automation", "Monroe County tech"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 1100,
      serviceBusinesses: 5600
    }
  },
  {
    name: "Syracuse",
    slug: "syracuse",
    state: "New York",
    stateAbbr: "NY",
    population: 148620,
    metroPopulation: 662057,
    coordinates: { lat: 43.0481, lng: -76.1474 },
    distanceFromAlbuquerque: 1850,
    marketSize: "medium",
    demographics: {
      medianIncome: 38276,
      medianAge: 30.2,
      growthRate: 0.5
    },
    topIndustries: ["Education", "Healthcare", "Manufacturing", "Retail", "Technology"],
    zipCodes: ["13201", "13202", "13203", "13204", "13205", "13206", "13207", "13208", "13209", "13210", "13211", "13212", "13214", "13215", "13217", "13218", "13219", "13220", "13221", "13224", "13225", "13235", "13244", "13250", "13251", "13252", "13261", "13290"],
    neighborhoods: ["Downtown", "Armory Square", "University Hill", "Westcott", "Eastwood", "Valley"],
    nearbyTowns: ["Liverpool", "Baldwinsville", "Cicero", "DeWitt", "Manlius"],
    seoKeywords: ["Syracuse business services", "Central NY tech", "Syracuse automation", "Onondaga County AI"],
    businessInfo: {
      totalBusinesses: 9000,
      techBusinesses: 520,
      serviceBusinesses: 3600
    }
  },
  {
    name: "Albany",
    slug: "albany",
    state: "New York",
    stateAbbr: "NY",
    population: 99224,
    metroPopulation: 899262,
    coordinates: { lat: 42.6526, lng: -73.7562 },
    distanceFromAlbuquerque: 1900,
    marketSize: "medium",
    demographics: {
      medianIncome: 45825,
      medianAge: 31.4,
      growthRate: 1.5
    },
    topIndustries: ["Government", "Healthcare", "Education", "Technology", "Finance"],
    zipCodes: ["12201", "12202", "12203", "12204", "12205", "12206", "12207", "12208", "12209", "12210", "12211", "12212", "12214", "12220", "12222", "12223", "12224", "12225", "12226", "12227", "12228", "12229", "12230", "12231", "12232", "12233", "12234", "12235", "12236", "12237", "12238", "12239", "12240", "12241", "12242", "12243", "12244", "12245", "12246", "12247", "12248", "12249", "12250", "12252", "12255", "12256", "12257", "12260", "12261", "12288"],
    neighborhoods: ["Downtown", "Center Square", "Pine Hills", "Delaware Avenue", "New Scotland", "Arbor Hill"],
    nearbyTowns: ["Troy", "Schenectady", "Saratoga Springs", "Clifton Park", "Colonie"],
    seoKeywords: ["Albany tech services", "Capital Region AI", "Albany automation", "Tech Valley solutions"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 850,
      serviceBusinesses: 3000
    }
  },

  // MASSACHUSETTS
  {
    name: "Boston",
    slug: "boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: 675647,
    metroPopulation: 4941632,
    coordinates: { lat: 42.3601, lng: -71.0589 },
    distanceFromAlbuquerque: 2100,
    marketSize: "large",
    demographics: {
      medianIncome: 79018,
      medianAge: 32.6,
      growthRate: 3.5
    },
    topIndustries: ["Education", "Healthcare", "Technology", "Finance", "Biotechnology", "Tourism"],
    zipCodes: ["02101", "02108", "02109", "02110", "02111", "02112", "02113", "02114", "02115", "02116", "02117", "02118", "02119", "02120", "02121", "02122", "02123", "02124", "02125", "02126", "02127", "02128", "02129", "02130", "02131", "02132", "02133", "02134", "02135", "02136", "02137", "02163", "02196", "02199", "02201", "02203", "02204", "02205", "02206", "02207", "02208", "02209", "02210", "02211", "02212", "02215", "02216", "02217", "02222", "02228", "02241", "02266", "02283", "02284", "02293", "02295", "02297", "02298"],
    neighborhoods: ["Downtown", "Back Bay", "Beacon Hill", "North End", "South End", "Fenway", "Cambridge", "Somerville", "Brookline", "Jamaica Plain", "Roxbury", "Dorchester"],
    nearbyTowns: ["Cambridge", "Quincy", "Newton", "Brookline", "Somerville", "Waltham", "Medford"],
    seoKeywords: ["Boston AI services", "Boston tech solutions", "Massachusetts automation", "Boston business tech", "Back Bay AI", "Cambridge tech corridor"],
    businessInfo: {
      totalBusinesses: 85000,
      techBusinesses: 18000,
      serviceBusinesses: 34000
    }
  },
  {
    name: "Worcester",
    slug: "worcester",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: 206518,
    metroPopulation: 978798,
    coordinates: { lat: 42.2626, lng: -71.8023 },
    distanceFromAlbuquerque: 2080,
    marketSize: "medium",
    demographics: {
      medianIncome: 51647,
      medianAge: 33.4,
      growthRate: 2.1
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Biotechnology", "Retail"],
    zipCodes: ["01601", "01602", "01603", "01604", "01605", "01606", "01607", "01608", "01609", "01610", "01612", "01613", "01614", "01615", "01653", "01654", "01655"],
    neighborhoods: ["Downtown", "Shrewsbury Street", "West Side", "Green Island", "Canal District"],
    nearbyTowns: ["Shrewsbury", "Auburn", "Leicester", "Holden", "West Boylston"],
    seoKeywords: ["Worcester tech services", "Central Mass AI", "Worcester automation", "Worcester County tech"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 850,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Springfield",
    slug: "springfield-ma",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: 155929,
    metroPopulation: 699162,
    coordinates: { lat: 42.1015, lng: -72.5898 },
    distanceFromAlbuquerque: 2050,
    marketSize: "medium",
    demographics: {
      medianIncome: 39432,
      medianAge: 32.9,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Insurance", "Government"],
    zipCodes: ["01101", "01102", "01103", "01104", "01105", "01106", "01107", "01108", "01109", "01111", "01115", "01118", "01119", "01128", "01129", "01138", "01139", "01144", "01151", "01152", "01199"],
    neighborhoods: ["Downtown", "Metro Center", "Forest Park", "East Springfield", "Indian Orchard"],
    nearbyTowns: ["Chicopee", "Holyoke", "Westfield", "Agawam", "Longmeadow"],
    seoKeywords: ["Springfield MA tech services", "Western Mass AI", "Springfield automation", "Pioneer Valley tech"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 420,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Cambridge",
    slug: "cambridge-ma",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: 118403,
    coordinates: { lat: 42.3736, lng: -71.1097 },
    distanceFromAlbuquerque: 2100,
    marketSize: "large",
    demographics: {
      medianIncome: 103154,
      medianAge: 30.4,
      growthRate: 3.8
    },
    topIndustries: ["Education", "Technology", "Biotechnology", "Research", "Healthcare"],
    zipCodes: ["02138", "02139", "02140", "02141", "02142", "02238"],
    neighborhoods: ["Harvard Square", "Central Square", "Kendall Square", "Porter Square", "Inman Square"],
    nearbyTowns: ["Boston", "Somerville", "Arlington", "Belmont", "Watertown"],
    seoKeywords: ["Cambridge tech hub", "MIT AI services", "Harvard tech corridor", "Kendall Square automation"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 4500,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Lowell",
    slug: "lowell",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: 115554,
    coordinates: { lat: 42.6334, lng: -71.3162 },
    distanceFromAlbuquerque: 2090,
    marketSize: "medium",
    demographics: {
      medianIncome: 56878,
      medianAge: 32.6,
      growthRate: 2.5
    },
    topIndustries: ["Healthcare", "Education", "Technology", "Manufacturing", "Tourism"],
    zipCodes: ["01850", "01851", "01852", "01853", "01854"],
    neighborhoods: ["Downtown", "Highlands", "Belvidere", "Centralville", "Back Central"],
    nearbyTowns: ["Chelmsford", "Dracut", "Tewksbury", "Billerica", "Tyngsborough"],
    seoKeywords: ["Lowell business services", "Merrimack Valley tech", "Lowell automation", "Greater Lowell AI"],
    businessInfo: {
      totalBusinesses: 6500,
      techBusinesses: 580,
      serviceBusinesses: 2600
    }
  },

  // NEW JERSEY
  {
    name: "Newark",
    slug: "newark",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 311549,
    metroPopulation: 2100000,
    coordinates: { lat: 40.7357, lng: -74.1724 },
    distanceFromAlbuquerque: 1980,
    marketSize: "large",
    demographics: {
      medianIncome: 37476,
      medianAge: 33.8,
      growthRate: 2.2
    },
    topIndustries: ["Transportation", "Finance", "Healthcare", "Education", "Port Operations"],
    zipCodes: ["07101", "07102", "07103", "07104", "07105", "07106", "07107", "07108", "07112", "07114", "07175", "07182", "07184", "07188", "07189", "07191", "07192", "07193", "07194", "07195", "07198", "07199"],
    neighborhoods: ["Downtown", "Ironbound", "University Heights", "Weequahic", "Vailsburg"],
    nearbyTowns: ["Elizabeth", "East Orange", "Irvington", "Orange", "Bloomfield"],
    seoKeywords: ["Newark tech services", "Essex County AI", "Newark automation", "New Jersey tech hub"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 1500,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Jersey City",
    slug: "jersey-city",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 292449,
    coordinates: { lat: 40.7282, lng: -74.0776 },
    distanceFromAlbuquerque: 1985,
    marketSize: "large",
    demographics: {
      medianIncome: 75506,
      medianAge: 34.2,
      growthRate: 4.5
    },
    topIndustries: ["Finance", "Technology", "Real Estate", "Healthcare", "Transportation"],
    zipCodes: ["07097", "07302", "07303", "07304", "07305", "07306", "07307", "07308", "07310", "07311", "07395", "07399"],
    neighborhoods: ["Downtown", "Journal Square", "Newport", "Grove Street", "The Heights"],
    nearbyTowns: ["Hoboken", "Bayonne", "Union City", "Secaucus", "Kearny"],
    seoKeywords: ["Jersey City AI services", "Hudson County tech", "JC automation", "Gold Coast NJ tech"],
    businessInfo: {
      totalBusinesses: 16000,
      techBusinesses: 2800,
      serviceBusinesses: 6400
    }
  },
  {
    name: "Paterson",
    slug: "paterson",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 159732,
    coordinates: { lat: 40.9168, lng: -74.1718 },
    distanceFromAlbuquerque: 1980,
    marketSize: "medium",
    demographics: {
      medianIncome: 38024,
      medianAge: 32.5,
      growthRate: 1.2
    },
    topIndustries: ["Manufacturing", "Healthcare", "Retail", "Education", "Transportation"],
    zipCodes: ["07501", "07502", "07503", "07504", "07505", "07506", "07507", "07508", "07509", "07510", "07511", "07512", "07513", "07514", "07522", "07524", "07533", "07543", "07544"],
    neighborhoods: ["Downtown", "Eastside", "Hillcrest", "People's Park", "Riverside"],
    nearbyTowns: ["Clifton", "Wayne", "Fair Lawn", "Hawthorne", "Prospect Park"],
    seoKeywords: ["Paterson business services", "Passaic County tech", "Paterson automation", "Silk City AI"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 380,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Elizabeth",
    slug: "elizabeth",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 137298,
    coordinates: { lat: 40.6640, lng: -74.2107 },
    distanceFromAlbuquerque: 1980,
    marketSize: "medium",
    demographics: {
      medianIncome: 50135,
      medianAge: 33.1,
      growthRate: 2.8
    },
    topIndustries: ["Transportation", "Logistics", "Manufacturing", "Healthcare", "Retail"],
    zipCodes: ["07201", "07202", "07206", "07207", "07208"],
    neighborhoods: ["Downtown", "Elmora", "Peterstown", "Keighry Head", "Westminster"],
    nearbyTowns: ["Linden", "Union", "Hillside", "Roselle", "Newark"],
    seoKeywords: ["Elizabeth NJ tech services", "Union County AI", "Elizabeth automation", "Port Elizabeth tech"],
    businessInfo: {
      totalBusinesses: 7200,
      techBusinesses: 420,
      serviceBusinesses: 2880
    }
  },
  {
    name: "Trenton",
    slug: "trenton",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 90871,
    metroPopulation: 387340,
    coordinates: { lat: 40.2171, lng: -74.7429 },
    distanceFromAlbuquerque: 1950,
    marketSize: "medium",
    demographics: {
      medianIncome: 37026,
      medianAge: 33.6,
      growthRate: 0.8
    },
    topIndustries: ["Government", "Healthcare", "Education", "Manufacturing", "Services"],
    zipCodes: ["08608", "08609", "08610", "08611", "08618", "08619", "08620", "08625", "08628", "08629", "08638", "08644", "08645", "08646", "08647", "08648", "08650", "08666", "08690", "08691", "08695"],
    neighborhoods: ["Downtown", "North Trenton", "West Trenton", "East Trenton", "South Trenton"],
    nearbyTowns: ["Hamilton", "Ewing", "Lawrence", "Princeton", "Hopewell"],
    seoKeywords: ["Trenton tech services", "New Jersey capital AI", "Mercer County tech", "Trenton automation"],
    businessInfo: {
      totalBusinesses: 5000,
      techBusinesses: 280,
      serviceBusinesses: 2000
    }
  },

  // PENNSYLVANIA
  {
    name: "Philadelphia",
    slug: "philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: 1603797,
    metroPopulation: 6245051,
    coordinates: { lat: 39.9526, lng: -75.1652 },
    distanceFromAlbuquerque: 1900,
    marketSize: "large",
    demographics: {
      medianIncome: 49127,
      medianAge: 34.8,
      growthRate: 2.5
    },
    topIndustries: ["Healthcare", "Education", "Finance", "Technology", "Tourism", "Manufacturing"],
    zipCodes: ["19019", "19092", "19093", "19099", "19101", "19102", "19103", "19104", "19105", "19106", "19107", "19108", "19109", "19110", "19111", "19112", "19113", "19114", "19115", "19116", "19118", "19119", "19120", "19121", "19122", "19123", "19124", "19125", "19126", "19127", "19128", "19129", "19130", "19131", "19132", "19133", "19134", "19135", "19136", "19137", "19138", "19139", "19140", "19141", "19142", "19143", "19144", "19145", "19146", "19147", "19148", "19149", "19150", "19151", "19152", "19153", "19154", "19155", "19160", "19161", "19162", "19170", "19171", "19172", "19173", "19175", "19176", "19177", "19178", "19179", "19181", "19182", "19183", "19184", "19185", "19187", "19188", "19190", "19191", "19192", "19193", "19194", "19195", "19196", "19197", "19244", "19255"],
    neighborhoods: ["Center City", "University City", "Old City", "Society Hill", "Northern Liberties", "Fishtown", "South Philly", "West Philadelphia"],
    nearbyTowns: ["Camden", "Chester", "Norristown", "Bensalem", "Upper Darby"],
    seoKeywords: ["Philadelphia AI services", "Philly tech solutions", "Pennsylvania automation", "Philadelphia business tech", "Center City AI"],
    businessInfo: {
      totalBusinesses: 95000,
      techBusinesses: 8500,
      serviceBusinesses: 38000
    }
  },
  {
    name: "Pittsburgh",
    slug: "pittsburgh",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: 302971,
    metroPopulation: 2370930,
    coordinates: { lat: 40.4406, lng: -79.9959 },
    distanceFromAlbuquerque: 1650,
    marketSize: "large",
    demographics: {
      medianIncome: 50536,
      medianAge: 33.7,
      growthRate: 1.8
    },
    topIndustries: ["Healthcare", "Technology", "Education", "Finance", "Robotics", "Energy"],
    zipCodes: ["15201", "15202", "15203", "15204", "15205", "15206", "15207", "15208", "15209", "15210", "15211", "15212", "15213", "15214", "15215", "15216", "15217", "15218", "15219", "15220", "15221", "15222", "15223", "15224", "15225", "15226", "15227", "15228", "15229", "15230", "15231", "15232", "15233", "15234", "15235", "15236", "15237", "15238", "15239", "15240", "15241", "15242", "15243", "15244", "15250", "15251", "15252", "15253", "15254", "15255", "15257", "15258", "15259", "15260", "15261", "15262", "15264", "15265", "15266", "15267", "15268", "15270", "15272", "15274", "15275", "15276", "15277", "15278", "15279", "15281", "15282", "15283", "15286", "15289", "15290", "15295"],
    neighborhoods: ["Downtown", "Oakland", "Shadyside", "Squirrel Hill", "Lawrenceville", "Strip District", "South Side"],
    nearbyTowns: ["Bethel Park", "Mount Lebanon", "Ross Township", "Monroeville", "Penn Hills"],
    seoKeywords: ["Pittsburgh tech services", "Steel City AI", "Pittsburgh automation", "Robotics capital tech"],
    businessInfo: {
      totalBusinesses: 22000,
      techBusinesses: 3200,
      serviceBusinesses: 8800
    }
  },
  {
    name: "Allentown",
    slug: "allentown",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: 125845,
    metroPopulation: 861889,
    coordinates: { lat: 40.6084, lng: -75.4902 },
    distanceFromAlbuquerque: 1920,
    marketSize: "medium",
    demographics: {
      medianIncome: 43412,
      medianAge: 32.3,
      growthRate: 2.2
    },
    topIndustries: ["Healthcare", "Manufacturing", "Transportation", "Education", "Retail"],
    zipCodes: ["18101", "18102", "18103", "18104", "18105", "18106", "18109", "18195"],
    neighborhoods: ["Center City", "West End", "East Side", "South Side", "Old Allentown"],
    nearbyTowns: ["Bethlehem", "Easton", "Emmaus", "Whitehall", "Catasauqua"],
    seoKeywords: ["Allentown business services", "Lehigh Valley tech", "Allentown automation", "PA tech corridor"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 480,
      serviceBusinesses: 3000
    }
  },
  {
    name: "Erie",
    slug: "erie",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: 94831,
    metroPopulation: 272061,
    coordinates: { lat: 42.1292, lng: -80.0851 },
    distanceFromAlbuquerque: 1700,
    marketSize: "small",
    demographics: {
      medianIncome: 38487,
      medianAge: 34.5,
      growthRate: 0.5
    },
    topIndustries: ["Manufacturing", "Healthcare", "Education", "Tourism", "Insurance"],
    zipCodes: ["16501", "16502", "16503", "16504", "16505", "16506", "16507", "16508", "16509", "16510", "16511", "16512", "16514", "16515", "16522", "16530", "16531", "16534", "16538", "16541", "16544", "16546", "16550", "16553", "16563", "16565"],
    neighborhoods: ["Downtown", "Bayfront", "East Side", "West Side", "South Shore"],
    nearbyTowns: ["Millcreek", "Harborcreek", "Fairview", "Girard", "Edinboro"],
    seoKeywords: ["Erie PA tech services", "Lake Erie automation", "Northwest PA tech", "Erie business solutions"],
    businessInfo: {
      totalBusinesses: 5500,
      techBusinesses: 220,
      serviceBusinesses: 2200
    }
  },
  {
    name: "Reading",
    slug: "reading",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: 95112,
    metroPopulation: 428849,
    coordinates: { lat: 40.3357, lng: -75.9266 },
    distanceFromAlbuquerque: 1900,
    marketSize: "small",
    demographics: {
      medianIncome: 32131,
      medianAge: 29.9,
      growthRate: 1.5
    },
    topIndustries: ["Manufacturing", "Healthcare", "Agriculture", "Transportation", "Retail"],
    zipCodes: ["19601", "19602", "19603", "19604", "19605", "19606", "19607", "19608", "19609", "19610", "19611", "19612", "19640"],
    neighborhoods: ["Downtown", "Southside", "Northeast", "Northwest", "West Reading"],
    nearbyTowns: ["Wyomissing", "Shillington", "West Reading", "Mount Penn", "Sinking Spring"],
    seoKeywords: ["Reading business services", "Berks County tech", "Reading PA automation", "Pennsylvania Dutch tech"],
    businessInfo: {
      totalBusinesses: 5000,
      techBusinesses: 180,
      serviceBusinesses: 2000
    }
  },

  // CONNECTICUT
  {
    name: "Hartford",
    slug: "hartford",
    state: "Connecticut",
    stateAbbr: "CT",
    population: 121054,
    metroPopulation: 1204877,
    coordinates: { lat: 41.7658, lng: -72.6734 },
    distanceFromAlbuquerque: 2020,
    marketSize: "medium",
    demographics: {
      medianIncome: 36278,
      medianAge: 30.8,
      growthRate: 0.8
    },
    topIndustries: ["Insurance", "Healthcare", "Finance", "Education", "Government"],
    zipCodes: ["06101", "06102", "06103", "06104", "06105", "06106", "06107", "06108", "06109", "06110", "06111", "06112", "06114", "06115", "06117", "06118", "06119", "06120", "06123", "06126", "06127", "06128", "06129", "06131", "06132", "06133", "06134", "06137", "06138", "06140", "06141", "06142", "06143", "06144", "06145", "06146", "06147", "06150", "06151", "06152", "06153", "06154", "06155", "06156", "06160", "06161", "06167", "06176", "06180", "06183", "06199"],
    neighborhoods: ["Downtown", "West End", "Asylum Hill", "Frog Hollow", "Parkville", "Clay Arsenal"],
    nearbyTowns: ["West Hartford", "East Hartford", "Wethersfield", "Newington", "Bloomfield"],
    seoKeywords: ["Hartford tech services", "Insurance capital AI", "Hartford automation", "Connecticut tech hub"],
    businessInfo: {
      totalBusinesses: 8000,
      techBusinesses: 620,
      serviceBusinesses: 3200
    }
  },
  {
    name: "New Haven",
    slug: "new-haven",
    state: "Connecticut",
    stateAbbr: "CT",
    population: 134023,
    metroPopulation: 864835,
    coordinates: { lat: 41.3083, lng: -72.9279 },
    distanceFromAlbuquerque: 2000,
    marketSize: "medium",
    demographics: {
      medianIncome: 44507,
      medianAge: 30.1,
      growthRate: 2.2
    },
    topIndustries: ["Education", "Healthcare", "Biotechnology", "Technology", "Research"],
    zipCodes: ["06501", "06502", "06503", "06504", "06505", "06506", "06507", "06508", "06509", "06510", "06511", "06512", "06513", "06514", "06515", "06516", "06517", "06518", "06519", "06520", "06521", "06524", "06525", "06530", "06531", "06532", "06533", "06534", "06535", "06536", "06537", "06538", "06540"],
    neighborhoods: ["Downtown", "Yale", "East Rock", "Westville", "Fair Haven", "Wooster Square"],
    nearbyTowns: ["Hamden", "West Haven", "East Haven", "North Haven", "Branford"],
    seoKeywords: ["New Haven AI services", "Yale tech corridor", "New Haven automation", "Elm City tech"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 980,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Stamford",
    slug: "stamford",
    state: "Connecticut",
    stateAbbr: "CT",
    population: 135470,
    coordinates: { lat: 41.0534, lng: -73.5387 },
    distanceFromAlbuquerque: 1990,
    marketSize: "large",
    demographics: {
      medianIncome: 93825,
      medianAge: 37.2,
      growthRate: 3.5
    },
    topIndustries: ["Finance", "Technology", "Media", "Healthcare", "Real Estate"],
    zipCodes: ["06901", "06902", "06903", "06904", "06905", "06906", "06907", "06910", "06911", "06912", "06913", "06914", "06920", "06921", "06922", "06926", "06927"],
    neighborhoods: ["Downtown", "Harbor Point", "Springdale", "Glenbrook", "North Stamford"],
    nearbyTowns: ["Greenwich", "Norwalk", "Darien", "New Canaan", "Wilton"],
    seoKeywords: ["Stamford tech hub", "Fairfield County AI", "Stamford automation", "CT Gold Coast tech"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 2200,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Bridgeport",
    slug: "bridgeport",
    state: "Connecticut",
    stateAbbr: "CT",
    population: 148654,
    metroPopulation: 948053,
    coordinates: { lat: 41.1865, lng: -73.1952 },
    distanceFromAlbuquerque: 1990,
    marketSize: "medium",
    demographics: {
      medianIncome: 47484,
      medianAge: 34.2,
      growthRate: 1.2
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Transportation", "Services"],
    zipCodes: ["06601", "06602", "06604", "06605", "06606", "06607", "06608", "06610", "06611", "06612", "06614", "06615", "06650", "06673", "06699"],
    neighborhoods: ["Downtown", "Black Rock", "East End", "North End", "South End", "West Side"],
    nearbyTowns: ["Fairfield", "Stratford", "Trumbull", "Monroe", "Shelton"],
    seoKeywords: ["Bridgeport business services", "Park City tech", "Bridgeport automation", "Greater Bridgeport AI"],
    businessInfo: {
      totalBusinesses: 7200,
      techBusinesses: 380,
      serviceBusinesses: 2880
    }
  },

  // RHODE ISLAND
  {
    name: "Providence",
    slug: "providence",
    state: "Rhode Island",
    stateAbbr: "RI",
    population: 190934,
    metroPopulation: 1676579,
    coordinates: { lat: 41.8240, lng: -71.4128 },
    distanceFromAlbuquerque: 2070,
    marketSize: "medium",
    demographics: {
      medianIncome: 50637,
      medianAge: 30.8,
      growthRate: 2.5
    },
    topIndustries: ["Education", "Healthcare", "Finance", "Tourism", "Manufacturing"],
    zipCodes: ["02901", "02902", "02903", "02904", "02905", "02906", "02907", "02908", "02909", "02910", "02911", "02912", "02914", "02915", "02916", "02917", "02918", "02919", "02920", "02921", "02940"],
    neighborhoods: ["Downtown", "Federal Hill", "East Side", "College Hill", "West End", "South Providence"],
    nearbyTowns: ["Pawtucket", "Warwick", "Cranston", "East Providence", "North Providence"],
    seoKeywords: ["Providence tech services", "Rhode Island AI", "Providence automation", "Creative Capital tech"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 850,
      serviceBusinesses: 4400
    }
  },
  {
    name: "Warwick",
    slug: "warwick",
    state: "Rhode Island",
    stateAbbr: "RI",
    population: 82823,
    coordinates: { lat: 41.7001, lng: -71.4162 },
    distanceFromAlbuquerque: 2070,
    marketSize: "small",
    demographics: {
      medianIncome: 67895,
      medianAge: 44.6,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Retail", "Transportation", "Education", "Manufacturing"],
    zipCodes: ["02886", "02887", "02888", "02889"],
    neighborhoods: ["Warwick Neck", "Conimicut", "Oakland Beach", "Apponaug", "Cowesett"],
    nearbyTowns: ["Cranston", "West Warwick", "East Greenwich", "Coventry"],
    seoKeywords: ["Warwick RI business services", "Kent County tech", "Warwick automation"],
    businessInfo: {
      totalBusinesses: 4500,
      techBusinesses: 220,
      serviceBusinesses: 1800
    }
  },

  // MAINE
  {
    name: "Portland",
    slug: "portland-me",
    state: "Maine",
    stateAbbr: "ME",
    population: 68408,
    metroPopulation: 551740,
    coordinates: { lat: 43.6591, lng: -70.2568 },
    distanceFromAlbuquerque: 2180,
    marketSize: "small",
    demographics: {
      medianIncome: 61695,
      medianAge: 36.7,
      growthRate: 2.8
    },
    topIndustries: ["Healthcare", "Tourism", "Food & Beverage", "Technology", "Maritime"],
    zipCodes: ["04101", "04102", "04103", "04104", "04105", "04106", "04107", "04108", "04109", "04110", "04112", "04116", "04119", "04122", "04123", "04124"],
    neighborhoods: ["Old Port", "West End", "East End", "Back Cove", "Munjoy Hill", "Parkside"],
    nearbyTowns: ["South Portland", "Westbrook", "Scarborough", "Falmouth", "Cape Elizabeth"],
    seoKeywords: ["Portland Maine tech services", "Portland ME AI", "Maine automation", "Forest City tech"],
    businessInfo: {
      totalBusinesses: 5500,
      techBusinesses: 480,
      serviceBusinesses: 2200
    }
  },
  {
    name: "Lewiston",
    slug: "lewiston",
    state: "Maine",
    stateAbbr: "ME",
    population: 37121,
    coordinates: { lat: 44.1004, lng: -70.2148 },
    distanceFromAlbuquerque: 2150,
    marketSize: "small",
    demographics: {
      medianIncome: 42912,
      medianAge: 38.5,
      growthRate: 0.5
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Retail", "Services"],
    zipCodes: ["04240", "04241", "04243"],
    neighborhoods: ["Downtown", "Little Canada", "Montello Heights", "Riverside"],
    nearbyTowns: ["Auburn", "Lisbon", "Sabattus", "Greene", "Turner"],
    seoKeywords: ["Lewiston business services", "Androscoggin County tech", "Lewiston ME automation"],
    businessInfo: {
      totalBusinesses: 2200,
      techBusinesses: 85,
      serviceBusinesses: 880
    }
  },
  {
    name: "Bangor",
    slug: "bangor",
    state: "Maine",
    stateAbbr: "ME",
    population: 31753,
    metroPopulation: 152692,
    coordinates: { lat: 44.8012, lng: -68.7778 },
    distanceFromAlbuquerque: 2220,
    marketSize: "small",
    demographics: {
      medianIncome: 46231,
      medianAge: 35.9,
      growthRate: 0.8
    },
    topIndustries: ["Healthcare", "Education", "Retail", "Government", "Tourism"],
    zipCodes: ["04401", "04402"],
    neighborhoods: ["Downtown", "Broadway", "West Side", "East Side", "Little City"],
    nearbyTowns: ["Brewer", "Orono", "Old Town", "Hampden", "Hermon"],
    seoKeywords: ["Bangor Maine tech services", "Queen City tech", "Bangor automation", "Eastern Maine AI"],
    businessInfo: {
      totalBusinesses: 2800,
      techBusinesses: 120,
      serviceBusinesses: 1120
    }
  },

  // NEW HAMPSHIRE
  {
    name: "Manchester",
    slug: "manchester-nh",
    state: "New Hampshire",
    stateAbbr: "NH",
    population: 115644,
    metroPopulation: 422937,
    coordinates: { lat: 42.9956, lng: -71.4548 },
    distanceFromAlbuquerque: 2090,
    marketSize: "medium",
    demographics: {
      medianIncome: 61822,
      medianAge: 36.0,
      growthRate: 2.5
    },
    topIndustries: ["Healthcare", "Manufacturing", "Education", "Finance", "Technology"],
    zipCodes: ["03101", "03102", "03103", "03104", "03105", "03108", "03109"],
    neighborhoods: ["Downtown", "North End", "East Side", "West Side", "Millyard"],
    nearbyTowns: ["Nashua", "Concord", "Derry", "Bedford", "Londonderry"],
    seoKeywords: ["Manchester NH tech services", "Queen City NH AI", "Manchester automation", "New Hampshire tech hub"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 680,
      serviceBusinesses: 3000
    }
  },
  {
    name: "Nashua",
    slug: "nashua",
    state: "New Hampshire",
    stateAbbr: "NH",
    population: 91322,
    coordinates: { lat: 42.7654, lng: -71.4676 },
    distanceFromAlbuquerque: 2090,
    marketSize: "medium",
    demographics: {
      medianIncome: 77844,
      medianAge: 38.0,
      growthRate: 2.2
    },
    topIndustries: ["Technology", "Manufacturing", "Healthcare", "Retail", "Professional Services"],
    zipCodes: ["03060", "03061", "03062", "03063", "03064"],
    neighborhoods: ["Downtown", "French Hill", "Tree Streets", "South Nashua", "North End"],
    nearbyTowns: ["Hudson", "Merrimack", "Litchfield", "Amherst", "Hollis"],
    seoKeywords: ["Nashua business services", "Gate City tech", "Nashua NH automation", "Southern NH AI"],
    businessInfo: {
      totalBusinesses: 5800,
      techBusinesses: 750,
      serviceBusinesses: 2320
    }
  },
  {
    name: "Concord",
    slug: "concord-nh",
    state: "New Hampshire",
    stateAbbr: "NH",
    population: 43976,
    coordinates: { lat: 43.2081, lng: -71.5376 },
    distanceFromAlbuquerque: 2100,
    marketSize: "small",
    demographics: {
      medianIncome: 64033,
      medianAge: 39.2,
      growthRate: 1.5
    },
    topIndustries: ["Government", "Healthcare", "Insurance", "Retail", "Education"],
    zipCodes: ["03301", "03302", "03303", "03304", "03305"],
    neighborhoods: ["Downtown", "West End", "East Concord", "Penacook", "Heights"],
    nearbyTowns: ["Bow", "Pembroke", "Hopkinton", "Loudon", "Canterbury"],
    seoKeywords: ["Concord NH tech services", "New Hampshire capital tech", "Concord automation"],
    businessInfo: {
      totalBusinesses: 3200,
      techBusinesses: 180,
      serviceBusinesses: 1280
    }
  },

  // VERMONT
  {
    name: "Burlington",
    slug: "burlington-vt",
    state: "Vermont",
    stateAbbr: "VT",
    population: 44743,
    metroPopulation: 225562,
    coordinates: { lat: 44.4759, lng: -73.2121 },
    distanceFromAlbuquerque: 2050,
    marketSize: "small",
    demographics: {
      medianIncome: 50733,
      medianAge: 27.3,
      growthRate: 2.2
    },
    topIndustries: ["Education", "Healthcare", "Technology", "Tourism", "Food & Beverage"],
    zipCodes: ["05401", "05402", "05405", "05406", "05408"],
    neighborhoods: ["Downtown", "Old North End", "Hill Section", "New North End", "South End"],
    nearbyTowns: ["South Burlington", "Winooski", "Essex", "Colchester", "Shelburne"],
    seoKeywords: ["Burlington VT tech services", "Queen City Vermont AI", "Burlington automation", "Lake Champlain tech"],
    businessInfo: {
      totalBusinesses: 3800,
      techBusinesses: 420,
      serviceBusinesses: 1520
    }
  },
  {
    name: "Montpelier",
    slug: "montpelier",
    state: "Vermont",
    stateAbbr: "VT",
    population: 8074,
    coordinates: { lat: 44.2601, lng: -72.5754 },
    distanceFromAlbuquerque: 2080,
    marketSize: "small",
    demographics: {
      medianIncome: 60676,
      medianAge: 42.9,
      growthRate: 0.5
    },
    topIndustries: ["Government", "Insurance", "Education", "Healthcare", "Tourism"],
    zipCodes: ["05601", "05602", "05603", "05604", "05609", "05620", "05633"],
    neighborhoods: ["Downtown", "College Hill", "Meadow", "North End"],
    nearbyTowns: ["Barre", "Berlin", "Waterbury", "Northfield", "Plainfield"],
    seoKeywords: ["Montpelier business services", "Vermont capital tech", "Montpelier VT automation"],
    businessInfo: {
      totalBusinesses: 850,
      techBusinesses: 45,
      serviceBusinesses: 340
    }
  },

  // MARYLAND
  {
    name: "Baltimore",
    slug: "baltimore",
    state: "Maryland",
    stateAbbr: "MD",
    population: 585708,
    metroPopulation: 2844510,
    coordinates: { lat: 39.2904, lng: -76.6122 },
    distanceFromAlbuquerque: 1850,
    marketSize: "large",
    demographics: {
      medianIncome: 54124,
      medianAge: 35.5,
      growthRate: 1.2
    },
    topIndustries: ["Healthcare", "Education", "Biotechnology", "Finance", "Tourism", "Port Operations"],
    zipCodes: ["21201", "21202", "21203", "21204", "21205", "21206", "21207", "21208", "21209", "21210", "21211", "21212", "21213", "21214", "21215", "21216", "21217", "21218", "21219", "21220", "21221", "21222", "21223", "21224", "21225", "21226", "21227", "21228", "21229", "21230", "21231", "21233", "21234", "21235", "21236", "21237", "21239", "21240", "21241", "21244", "21250", "21251", "21252", "21263", "21264", "21265", "21268", "21270", "21273", "21274", "21275", "21278", "21279", "21280", "21281", "21282", "21283", "21284", "21285", "21286", "21287", "21288", "21289", "21290", "21297", "21298"],
    neighborhoods: ["Inner Harbor", "Fells Point", "Federal Hill", "Canton", "Mount Vernon", "Hampden", "Roland Park"],
    nearbyTowns: ["Towson", "Columbia", "Glen Burnie", "Dundalk", "Catonsville"],
    seoKeywords: ["Baltimore AI services", "Charm City tech", "Baltimore automation", "Maryland tech hub", "Inner Harbor tech"],
    businessInfo: {
      totalBusinesses: 38000,
      techBusinesses: 3200,
      serviceBusinesses: 15200
    }
  },
  {
    name: "Rockville",
    slug: "rockville",
    state: "Maryland",
    stateAbbr: "MD",
    population: 69657,
    coordinates: { lat: 39.0840, lng: -77.1528 },
    distanceFromAlbuquerque: 1850,
    marketSize: "large",
    demographics: {
      medianIncome: 105906,
      medianAge: 39.5,
      growthRate: 3.2
    },
    topIndustries: ["Biotechnology", "Healthcare", "Technology", "Government", "Professional Services"],
    zipCodes: ["20847", "20848", "20849", "20850", "20851", "20852", "20853", "20854", "20855", "20857"],
    neighborhoods: ["Town Center", "King Farm", "Fallsgrove", "West End", "Hungerford"],
    nearbyTowns: ["Gaithersburg", "Bethesda", "Silver Spring", "Potomac", "Germantown"],
    seoKeywords: ["Rockville tech services", "Montgomery County AI", "Rockville MD automation", "BioHealth Capital tech"],
    businessInfo: {
      totalBusinesses: 5500,
      techBusinesses: 1200,
      serviceBusinesses: 2200
    }
  },
  {
    name: "Annapolis",
    slug: "annapolis",
    state: "Maryland",
    stateAbbr: "MD",
    population: 40812,
    metroPopulation: 604621,
    coordinates: { lat: 38.9784, lng: -76.4922 },
    distanceFromAlbuquerque: 1860,
    marketSize: "small",
    demographics: {
      medianIncome: 83456,
      medianAge: 36.0,
      growthRate: 1.8
    },
    topIndustries: ["Government", "Military", "Tourism", "Healthcare", "Technology"],
    zipCodes: ["21401", "21402", "21403", "21404", "21405", "21409", "21411", "21412"],
    neighborhoods: ["Downtown", "Eastport", "West Annapolis", "Murray Hill", "Parole"],
    nearbyTowns: ["Arnold", "Severna Park", "Edgewater", "Crofton", "Davidsonville"],
    seoKeywords: ["Annapolis business services", "Maryland capital tech", "Annapolis automation", "Naval Academy tech"],
    businessInfo: {
      totalBusinesses: 3200,
      techBusinesses: 280,
      serviceBusinesses: 1280
    }
  },

  // DELAWARE
  {
    name: "Wilmington",
    slug: "wilmington-de",
    state: "Delaware",
    stateAbbr: "DE",
    population: 70898,
    metroPopulation: 736081,
    coordinates: { lat: 39.7391, lng: -75.5398 },
    distanceFromAlbuquerque: 1900,
    marketSize: "medium",
    demographics: {
      medianIncome: 45032,
      medianAge: 34.0,
      growthRate: 1.5
    },
    topIndustries: ["Finance", "Banking", "Healthcare", "Chemical", "Legal Services"],
    zipCodes: ["19801", "19802", "19803", "19804", "19805", "19806", "19807", "19808", "19809", "19810", "19850", "19880", "19884", "19885", "19886", "19887", "19889", "19890", "19891", "19892", "19893", "19894", "19895", "19896", "19897", "19898", "19899"],
    neighborhoods: ["Downtown", "Riverfront", "Trolley Square", "Little Italy", "Brandywine Hills"],
    nearbyTowns: ["Newark", "Dover", "Middletown", "Bear", "Glasgow"],
    seoKeywords: ["Wilmington Delaware tech", "Corporate capital AI", "Wilmington DE automation", "First State tech"],
    businessInfo: {
      totalBusinesses: 5500,
      techBusinesses: 420,
      serviceBusinesses: 2200
    }
  },
  {
    name: "Dover",
    slug: "dover",
    state: "Delaware",
    stateAbbr: "DE",
    population: 39403,
    metroPopulation: 183765,
    coordinates: { lat: 39.1582, lng: -75.5244 },
    distanceFromAlbuquerque: 1910,
    marketSize: "small",
    demographics: {
      medianIncome: 49714,
      medianAge: 33.5,
      growthRate: 2.2
    },
    topIndustries: ["Government", "Military", "Healthcare", "Education", "Manufacturing"],
    zipCodes: ["19901", "19902", "19903", "19904", "19905", "19906"],
    neighborhoods: ["Downtown", "East Dover", "West Dover", "North Dover", "South Dover"],
    nearbyTowns: ["Smyrna", "Milford", "Camden", "Harrington", "Felton"],
    seoKeywords: ["Dover Delaware business services", "Kent County tech", "Dover DE automation"],
    businessInfo: {
      totalBusinesses: 2500,
      techBusinesses: 120,
      serviceBusinesses: 1000
    }
  },

  // VIRGINIA
  {
    name: "Virginia Beach",
    slug: "virginia-beach",
    state: "Virginia",
    stateAbbr: "VA",
    population: 459470,
    metroPopulation: 1799674,
    coordinates: { lat: 36.8529, lng: -75.9780 },
    distanceFromAlbuquerque: 1800,
    marketSize: "large",
    demographics: {
      medianIncome: 76610,
      medianAge: 36.8,
      growthRate: 2.8
    },
    topIndustries: ["Military", "Tourism", "Healthcare", "Technology", "Maritime"],
    zipCodes: ["23450", "23451", "23452", "23453", "23454", "23455", "23456", "23457", "23458", "23459", "23460", "23461", "23462", "23463", "23464", "23465", "23466", "23467", "23471", "23479"],
    neighborhoods: ["Oceanfront", "Town Center", "Great Neck", "Kempsville", "Lynnhaven", "Sandbridge"],
    nearbyTowns: ["Norfolk", "Chesapeake", "Portsmouth", "Hampton", "Newport News"],
    seoKeywords: ["Virginia Beach tech services", "Hampton Roads AI", "VA Beach automation", "Coastal Virginia tech"],
    businessInfo: {
      totalBusinesses: 28000,
      techBusinesses: 2200,
      serviceBusinesses: 11200
    }
  },
  {
    name: "Norfolk",
    slug: "norfolk",
    state: "Virginia",
    stateAbbr: "VA",
    population: 238005,
    coordinates: { lat: 36.8508, lng: -76.2859 },
    distanceFromAlbuquerque: 1780,
    marketSize: "medium",
    demographics: {
      medianIncome: 53026,
      medianAge: 30.9,
      growthRate: 1.5
    },
    topIndustries: ["Military", "Port Operations", "Healthcare", "Education", "Maritime"],
    zipCodes: ["23501", "23502", "23503", "23504", "23505", "23506", "23507", "23508", "23509", "23510", "23511", "23513", "23514", "23515", "23517", "23518", "23519", "23520", "23521", "23523", "23529", "23541", "23551"],
    neighborhoods: ["Downtown", "Ghent", "Ocean View", "Park Place", "Larchmont", "Colonial Place"],
    nearbyTowns: ["Virginia Beach", "Chesapeake", "Portsmouth", "Hampton", "Suffolk"],
    seoKeywords: ["Norfolk business services", "Naval tech Norfolk", "Norfolk VA automation", "Tidewater tech"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 950,
      serviceBusinesses: 5600
    }
  },
  {
    name: "Richmond",
    slug: "richmond",
    state: "Virginia",
    stateAbbr: "VA",
    population: 230436,
    metroPopulation: 1314434,
    coordinates: { lat: 37.5407, lng: -77.4360 },
    distanceFromAlbuquerque: 1750,
    marketSize: "large",
    demographics: {
      medianIncome: 50581,
      medianAge: 34.0,
      growthRate: 3.2
    },
    topIndustries: ["Finance", "Government", "Healthcare", "Education", "Manufacturing"],
    zipCodes: ["23173", "23218", "23219", "23220", "23221", "23222", "23223", "23224", "23225", "23226", "23227", "23228", "23229", "23230", "23231", "23232", "23233", "23234", "23235", "23236", "23237", "23238", "23240", "23241", "23242", "23249", "23250", "23255", "23260", "23261", "23269", "23270", "23273", "23274", "23276", "23278", "23279", "23280", "23282", "23284", "23285", "23286", "23288", "23289", "23290", "23291", "23292", "23293", "23294", "23295", "23297", "23298"],
    neighborhoods: ["Downtown", "Fan District", "Carytown", "Museum District", "Church Hill", "Scott's Addition"],
    nearbyTowns: ["Henrico", "Chesterfield", "Midlothian", "Mechanicsville", "Glen Allen"],
    seoKeywords: ["Richmond tech services", "RVA automation", "Virginia capital AI", "Richmond business tech"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 1850,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Arlington",
    slug: "arlington",
    state: "Virginia",
    stateAbbr: "VA",
    population: 238643,
    coordinates: { lat: 38.8816, lng: -77.0910 },
    distanceFromAlbuquerque: 1820,
    marketSize: "large",
    demographics: {
      medianIncome: 120071,
      medianAge: 34.4,
      growthRate: 4.2
    },
    topIndustries: ["Government", "Technology", "Defense", "Consulting", "Professional Services"],
    zipCodes: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22210", "22211", "22212", "22213", "22214", "22215", "22216", "22217", "22218", "22219", "22222", "22223", "22225", "22226", "22227", "22229", "22230", "22234", "22240", "22241", "22242", "22243", "22244", "22245", "22246"],
    neighborhoods: ["Rosslyn", "Clarendon", "Ballston", "Crystal City", "Pentagon City", "Shirlington"],
    nearbyTowns: ["Alexandria", "Falls Church", "McLean", "Bethesda", "Washington DC"],
    seoKeywords: ["Arlington VA tech hub", "Amazon HQ2 tech", "Arlington automation", "Northern Virginia AI"],
    businessInfo: {
      totalBusinesses: 15000,
      techBusinesses: 3500,
      serviceBusinesses: 6000
    }
  },

  // WASHINGTON DC
  {
    name: "Washington",
    slug: "washington-dc",
    state: "District of Columbia",
    stateAbbr: "DC",
    population: 689545,
    metroPopulation: 6385162,
    coordinates: { lat: 38.9072, lng: -77.0369 },
    distanceFromAlbuquerque: 1820,
    marketSize: "large",
    demographics: {
      medianIncome: 90842,
      medianAge: 34.2,
      growthRate: 3.5
    },
    topIndustries: ["Government", "Professional Services", "Tourism", "Education", "Healthcare", "Technology"],
    zipCodes: ["20001", "20002", "20003", "20004", "20005", "20006", "20007", "20008", "20009", "20010", "20011", "20012", "20013", "20015", "20016", "20017", "20018", "20019", "20020", "20022", "20023", "20024", "20026", "20027", "20029", "20030", "20032", "20033", "20035", "20036", "20037", "20038", "20039", "20040", "20041", "20042", "20043", "20044", "20045", "20047", "20049", "20050", "20052", "20053", "20055", "20056", "20057", "20058", "20059", "20060", "20061", "20062", "20063", "20064", "20065", "20066", "20067", "20068", "20069", "20070", "20071", "20073", "20074", "20075", "20076", "20077", "20078", "20080", "20081", "20082", "20090", "20091", "20201", "20202", "20203", "20204", "20206", "20207", "20208", "20210", "20211", "20212", "20213", "20214", "20215", "20216", "20217", "20218", "20219", "20220", "20221", "20222", "20223", "20224", "20226", "20227", "20228", "20229", "20230", "20232", "20233", "20235", "20237", "20238", "20239", "20240", "20241", "20242", "20244", "20245", "20250", "20251", "20252", "20254", "20260", "20261", "20262", "20265", "20266", "20268", "20270", "20277", "20289", "20299", "20301", "20303", "20306", "20310", "20314", "20317", "20318", "20319", "20330", "20340", "20350", "20355", "20370", "20372", "20373", "20374", "20375", "20376", "20380", "20388", "20389", "20390", "20391", "20392", "20393", "20394", "20395", "20398", "20401", "20402", "20403", "20404", "20405", "20406", "20407", "20408", "20409", "20410", "20411", "20412", "20413", "20414", "20415", "20416", "20417", "20418", "20419", "20420", "20421", "20422", "20423", "20424", "20425", "20426", "20427", "20428", "20429", "20431", "20433", "20434", "20435", "20436", "20437", "20439", "20440", "20441", "20442", "20444", "20447", "20451", "20453", "20456", "20460", "20463", "20468", "20469", "20470", "20472", "20500", "20501", "20502", "20503", "20504", "20505", "20506", "20507", "20508", "20509", "20510", "20511", "20515", "20520", "20521", "20522", "20523", "20524", "20525", "20526", "20527", "20528", "20529", "20530", "20531", "20533", "20534", "20535", "20536", "20537", "20538", "20539", "20540", "20541", "20542", "20543", "20544", "20546", "20547", "20548", "20549", "20551", "20552", "20553", "20554", "20555", "20557", "20559", "20560", "20565", "20566", "20570", "20571", "20572", "20573", "20575", "20576", "20577", "20578", "20579", "20580", "20581", "20585", "20586", "20588", "20590", "20591", "20593", "20594", "20597", "20599"],
    neighborhoods: ["Downtown", "Georgetown", "Capitol Hill", "Dupont Circle", "Adams Morgan", "U Street", "Navy Yard", "Shaw"],
    nearbyTowns: ["Arlington", "Alexandria", "Bethesda", "Silver Spring", "College Park"],
    seoKeywords: ["Washington DC AI services", "DC tech solutions", "Capital tech hub", "Washington automation", "Federal tech corridor"],
    businessInfo: {
      totalBusinesses: 65000,
      techBusinesses: 8500,
      serviceBusinesses: 26000
    }
  },

  // NORTH CAROLINA
  {
    name: "Charlotte",
    slug: "charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    population: 874579,
    metroPopulation: 2660329,
    coordinates: { lat: 35.2271, lng: -80.8431 },
    distanceFromAlbuquerque: 1550,
    marketSize: "large",
    demographics: {
      medianIncome: 65359,
      medianAge: 34.3,
      growthRate: 5.2
    },
    topIndustries: ["Finance", "Banking", "Technology", "Healthcare", "Energy", "Manufacturing"],
    zipCodes: ["28201", "28202", "28203", "28204", "28205", "28206", "28207", "28208", "28209", "28210", "28211", "28212", "28213", "28214", "28215", "28216", "28217", "28218", "28219", "28220", "28221", "28222", "28223", "28224", "28226", "28227", "28228", "28229", "28230", "28231", "28232", "28233", "28234", "28235", "28236", "28237", "28240", "28241", "28242", "28243", "28244", "28246", "28247", "28250", "28253", "28254", "28255", "28256", "28258", "28260", "28262", "28263", "28265", "28266", "28269", "28270", "28271", "28272", "28273", "28274", "28275", "28277", "28278", "28280", "28281", "28282", "28284", "28285", "28287", "28288", "28289", "28290", "28296", "28297", "28299"],
    neighborhoods: ["Uptown", "South End", "NoDa", "Plaza Midwood", "Dilworth", "Myers Park", "Elizabeth"],
    nearbyTowns: ["Concord", "Gastonia", "Rock Hill", "Huntersville", "Matthews"],
    seoKeywords: ["Charlotte tech services", "Queen City AI", "Charlotte automation", "Banking capital tech", "CLT business solutions"],
    businessInfo: {
      totalBusinesses: 58000,
      techBusinesses: 6500,
      serviceBusinesses: 23200
    }
  },
  {
    name: "Raleigh",
    slug: "raleigh",
    state: "North Carolina",
    stateAbbr: "NC",
    population: 467665,
    metroPopulation: 1413982,
    coordinates: { lat: 35.7796, lng: -78.6382 },
    distanceFromAlbuquerque: 1650,
    marketSize: "large",
    demographics: {
      medianIncome: 69720,
      medianAge: 33.9,
      growthRate: 6.2
    },
    topIndustries: ["Technology", "Education", "Healthcare", "Biotechnology", "Research"],
    zipCodes: ["27601", "27602", "27603", "27604", "27605", "27606", "27607", "27608", "27609", "27610", "27611", "27612", "27613", "27614", "27615", "27616", "27617", "27619", "27620", "27621", "27622", "27623", "27624", "27625", "27626", "27627", "27628", "27629", "27634", "27635", "27636", "27640", "27650", "27656", "27658", "27661", "27668", "27675", "27676", "27690", "27695", "27697", "27698", "27699"],
    neighborhoods: ["Downtown", "North Hills", "Cameron Village", "Five Points", "Glenwood South", "Brier Creek"],
    nearbyTowns: ["Durham", "Chapel Hill", "Cary", "Apex", "Wake Forest"],
    seoKeywords: ["Raleigh tech hub", "Research Triangle AI", "Raleigh automation", "NC State tech corridor"],
    businessInfo: {
      totalBusinesses: 35000,
      techBusinesses: 5500,
      serviceBusinesses: 14000
    }
  },
  {
    name: "Greensboro",
    slug: "greensboro",
    state: "North Carolina",
    stateAbbr: "NC",
    population: 296710,
    metroPopulation: 789842,
    coordinates: { lat: 36.0726, lng: -79.7920 },
    distanceFromAlbuquerque: 1600,
    marketSize: "medium",
    demographics: {
      medianIncome: 48964,
      medianAge: 34.3,
      growthRate: 2.8
    },
    topIndustries: ["Manufacturing", "Healthcare", "Education", "Transportation", "Insurance"],
    zipCodes: ["27401", "27402", "27403", "27404", "27405", "27406", "27407", "27408", "27409", "27410", "27411", "27412", "27413", "27415", "27416", "27417", "27419", "27420", "27425", "27427", "27429", "27435", "27438", "27455", "27480", "27495", "27497", "27498", "27499"],
    neighborhoods: ["Downtown", "Fisher Park", "Irving Park", "College Hill", "Lindley Park"],
    nearbyTowns: ["High Point", "Winston-Salem", "Burlington", "Kernersville", "Jamestown"],
    seoKeywords: ["Greensboro business services", "Gate City tech", "Greensboro NC automation", "Triad tech hub"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 1200,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Durham",
    slug: "durham",
    state: "North Carolina",
    stateAbbr: "NC",
    population: 283506,
    metroPopulation: 644367,
    coordinates: { lat: 35.9940, lng: -78.8986 },
    distanceFromAlbuquerque: 1640,
    marketSize: "medium",
    demographics: {
      medianIncome: 60157,
      medianAge: 33.7,
      growthRate: 5.5
    },
    topIndustries: ["Healthcare", "Education", "Technology", "Biotechnology", "Research"],
    zipCodes: ["27701", "27702", "27703", "27704", "27705", "27706", "27707", "27708", "27709", "27710", "27711", "27712", "27713", "27715", "27717", "27722"],
    neighborhoods: ["Downtown", "Ninth Street", "Brightleaf", "Duke Park", "Trinity Park", "Southpoint"],
    nearbyTowns: ["Chapel Hill", "Raleigh", "Cary", "Morrisville", "Hillsborough"],
    seoKeywords: ["Durham tech services", "Bull City AI", "Durham NC automation", "Research Triangle tech"],
    businessInfo: {
      totalBusinesses: 16000,
      techBusinesses: 2200,
      serviceBusinesses: 6400
    }
  },

  // WEST VIRGINIA
  {
    name: "Charleston",
    slug: "charleston-wv",
    state: "West Virginia",
    stateAbbr: "WV",
    population: 46536,
    metroPopulation: 208089,
    coordinates: { lat: 38.3498, lng: -81.6326 },
    distanceFromAlbuquerque: 1550,
    marketSize: "small",
    demographics: {
      medianIncome: 48959,
      medianAge: 41.7,
      growthRate: -0.5
    },
    topIndustries: ["Government", "Healthcare", "Chemical", "Energy", "Finance"],
    zipCodes: ["25301", "25302", "25303", "25304", "25305", "25306", "25309", "25311", "25312", "25313", "25314", "25315", "25317", "25320", "25321", "25322", "25323", "25324", "25325", "25326", "25327", "25328", "25329", "25330", "25331", "25332", "25333", "25334", "25335", "25336", "25337", "25338", "25339", "25350", "25356", "25357", "25358", "25360", "25361", "25362", "25364", "25365", "25375", "25387", "25389", "25392", "25396"],
    neighborhoods: ["Downtown", "East End", "Kanawha City", "South Hills", "West Side"],
    nearbyTowns: ["South Charleston", "St. Albans", "Dunbar", "Nitro", "Hurricane"],
    seoKeywords: ["Charleston WV tech services", "West Virginia capital AI", "Charleston automation"],
    businessInfo: {
      totalBusinesses: 3500,
      techBusinesses: 120,
      serviceBusinesses: 1400
    }
  },

  // SOUTH CAROLINA
  {
    name: "Columbia",
    slug: "columbia-sc",
    state: "South Carolina",
    stateAbbr: "SC",
    population: 136632,
    metroPopulation: 838433,
    coordinates: { lat: 34.0007, lng: -81.0348 },
    distanceFromAlbuquerque: 1500,
    marketSize: "medium",
    demographics: {
      medianIncome: 47286,
      medianAge: 28.1,
      growthRate: 3.2
    },
    topIndustries: ["Government", "Education", "Healthcare", "Insurance", "Manufacturing"],
    zipCodes: ["29201", "29202", "29203", "29204", "29205", "29206", "29207", "29208", "29209", "29210", "29211", "29212", "29214", "29215", "29216", "29217", "29218", "29219", "29220", "29221", "29222", "29223", "29224", "29225", "29226", "29227", "29228", "29229", "29230", "29240", "29250", "29260", "29290", "29292"],
    neighborhoods: ["Downtown", "Five Points", "The Vista", "Forest Acres", "Shandon", "Rosewood"],
    nearbyTowns: ["Lexington", "West Columbia", "Cayce", "Forest Acres", "Irmo"],
    seoKeywords: ["Columbia SC tech services", "Midlands AI", "Columbia automation", "South Carolina capital tech"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 650,
      serviceBusinesses: 3400
    }
  },
  {
    name: "Charleston",
    slug: "charleston-sc",
    state: "South Carolina",
    stateAbbr: "SC",
    population: 150227,
    metroPopulation: 799636,
    coordinates: { lat: 32.7765, lng: -79.9311 },
    distanceFromAlbuquerque: 1600,
    marketSize: "medium",
    demographics: {
      medianIncome: 68438,
      medianAge: 34.3,
      growthRate: 4.8
    },
    topIndustries: ["Tourism", "Maritime", "Healthcare", "Technology", "Aerospace"],
    zipCodes: ["29401", "29402", "29403", "29404", "29405", "29406", "29407", "29409", "29410", "29411", "29412", "29413", "29414", "29415", "29416", "29417", "29418", "29419", "29420", "29422", "29423", "29424", "29425", "29426", "29429", "29430", "29431", "29432", "29433", "29434", "29435", "29436", "29437", "29438", "29439", "29440", "29442", "29445", "29446", "29447", "29448", "29449", "29450", "29451", "29452", "29453", "29455", "29456", "29457", "29458", "29461", "29464", "29465", "29466", "29468", "29469", "29470", "29471", "29472", "29474", "29475", "29476", "29477", "29478", "29479", "29480", "29481", "29482", "29483", "29484", "29485", "29486", "29487", "29488", "29492"],
    neighborhoods: ["Downtown", "French Quarter", "South of Broad", "West Ashley", "Mount Pleasant", "James Island"],
    nearbyTowns: ["North Charleston", "Mount Pleasant", "Summerville", "Goose Creek", "Hanahan"],
    seoKeywords: ["Charleston SC tech hub", "Holy City AI", "Charleston automation", "Lowcountry tech"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 1200,
      serviceBusinesses: 4400
    }
  }
];

// Export combined markets for East Coast
export const atlanticMarkets: CityData[] = [...eastCoastMarkets];

// Helper function to get cities within radius of East Coast centers
export function getCitiesNearEastCoast(radiusMiles: number = 750): CityData[] {
  // Using New York City as the primary center point
  const newYork = eastCoastMarkets[0];
  return eastCoastMarkets.filter(city => {
    if (city.slug === 'new-york-city') return true;
    const distance = calculateDistance(
      newYork.coordinates.lat,
      newYork.coordinates.lng,
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