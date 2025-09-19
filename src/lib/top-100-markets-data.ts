// Top 100 Markets within 500-mile radius of New Mexico
// Organized by state and distance from Albuquerque, NM (central point)

export interface CityData {
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  population: number;
  metroPopulation?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromAlbuquerque: number;
  marketSize: 'large' | 'medium' | 'small';
  demographics: {
    medianIncome: number;
    medianAge: number;
    growthRate: number;
  };
  topIndustries: string[];
  zipCodes: string[];
  neighborhoods?: string[];
  nearbyTowns?: string[];
  seoKeywords: string[];
  businessInfo: {
    totalBusinesses: number;
    techBusinesses: number;
    serviceBusinesses: number;
  };
}

export const top100Markets: CityData[] = [
  // NEW MEXICO CITIES (Primary Markets)
  {
    name: "Albuquerque",
    slug: "albuquerque",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 564559,
    metroPopulation: 916528,
    coordinates: { lat: 35.0853, lng: -106.6056 },
    distanceFromAlbuquerque: 0,
    marketSize: "large",
    demographics: {
      medianIncome: 53936,
      medianAge: 36.8,
      growthRate: 2.8
    },
    topIndustries: ["Technology", "Healthcare", "Government", "Tourism", "Film Production"],
    zipCodes: ["87101", "87102", "87103", "87104", "87105", "87106", "87107", "87108", "87109", "87110", "87111", "87112", "87113", "87114", "87116", "87117", "87119", "87120", "87121", "87122", "87123", "87131"],
    neighborhoods: ["Old Town", "Downtown", "Nob Hill", "North Valley", "Foothills", "Mesa del Sol", "Uptown", "Northeast Heights"],
    nearbyTowns: ["Rio Rancho", "Bernalillo", "Los Ranchos", "Corrales", "Tijeras", "Cedar Crest"],
    seoKeywords: ["Albuquerque AI services", "automation Albuquerque", "tech solutions ABQ", "New Mexico business automation", "Albuquerque digital transformation"],
    businessInfo: {
      totalBusinesses: 45000,
      techBusinesses: 3200,
      serviceBusinesses: 18000
    }
  },
  {
    name: "Santa Fe",
    slug: "santa-fe",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 87505,
    metroPopulation: 150358,
    coordinates: { lat: 35.6870, lng: -105.9378 },
    distanceFromAlbuquerque: 65,
    marketSize: "medium",
    demographics: {
      medianIncome: 57972,
      medianAge: 44.7,
      growthRate: 1.5
    },
    topIndustries: ["Tourism", "Art & Culture", "Government", "Healthcare", "Technology"],
    zipCodes: ["87501", "87502", "87503", "87504", "87505", "87506", "87507", "87508"],
    neighborhoods: ["Plaza District", "Railyard", "Museum Hill", "East Side", "South Capitol"],
    nearbyTowns: ["Española", "Los Alamos", "White Rock", "Pojoaque", "Tesuque"],
    seoKeywords: ["Santa Fe AI solutions", "business automation Santa Fe", "tech services Santa Fe NM", "digital marketing Santa Fe"],
    businessInfo: {
      totalBusinesses: 12000,
      techBusinesses: 800,
      serviceBusinesses: 5500
    }
  },
  {
    name: "Las Cruces",
    slug: "las-cruces",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 111385,
    metroPopulation: 219561,
    coordinates: { lat: 32.3199, lng: -106.7637 },
    distanceFromAlbuquerque: 225,
    marketSize: "medium",
    demographics: {
      medianIncome: 43022,
      medianAge: 32.5,
      growthRate: 3.1
    },
    topIndustries: ["Agriculture", "Education", "Healthcare", "Government", "Technology"],
    zipCodes: ["88001", "88002", "88003", "88004", "88005", "88006", "88007", "88008", "88011", "88012"],
    neighborhoods: ["Mesilla", "Downtown", "East Mesa", "Picacho Hills", "Sonoma Ranch"],
    nearbyTowns: ["Mesilla", "Mesquite", "San Miguel", "Doña Ana", "Radium Springs"],
    seoKeywords: ["Las Cruces business solutions", "automation services Las Cruces", "tech companies Las Cruces NM"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 450,
      serviceBusinesses: 3800
    }
  },
  {
    name: "Rio Rancho",
    slug: "rio-rancho",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 104046,
    metroPopulation: 104046,
    coordinates: { lat: 35.2334, lng: -106.6630 },
    distanceFromAlbuquerque: 20,
    marketSize: "medium",
    demographics: {
      medianIncome: 61035,
      medianAge: 38.2,
      growthRate: 4.2
    },
    topIndustries: ["Technology", "Manufacturing", "Healthcare", "Retail", "Education"],
    zipCodes: ["87124", "87144", "87174"],
    neighborhoods: ["Enchanted Hills", "Northern Meadows", "Cabezon", "Loma Colorado"],
    nearbyTowns: ["Corrales", "Bernalillo", "Placitas", "Algodones"],
    seoKeywords: ["Rio Rancho tech services", "business automation Rio Rancho", "IT solutions Rio Rancho NM"],
    businessInfo: {
      totalBusinesses: 5200,
      techBusinesses: 650,
      serviceBusinesses: 2100
    }
  },
  {
    name: "Roswell",
    slug: "roswell",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 48422,
    coordinates: { lat: 33.3943, lng: -104.5230 },
    distanceFromAlbuquerque: 200,
    marketSize: "small",
    demographics: {
      medianIncome: 43372,
      medianAge: 34.6,
      growthRate: 1.2
    },
    topIndustries: ["Agriculture", "Oil & Gas", "Tourism", "Healthcare", "Manufacturing"],
    zipCodes: ["88201", "88202", "88203"],
    neighborhoods: ["Downtown", "North Roswell", "East Roswell", "West Roswell"],
    seoKeywords: ["Roswell business services", "automation Roswell NM", "tech solutions Roswell"],
    businessInfo: {
      totalBusinesses: 3200,
      techBusinesses: 120,
      serviceBusinesses: 1400
    }
  },
  {
    name: "Farmington",
    slug: "farmington",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 46624,
    coordinates: { lat: 36.7280, lng: -108.2187 },
    distanceFromAlbuquerque: 185,
    marketSize: "small",
    demographics: {
      medianIncome: 51254,
      medianAge: 33.7,
      growthRate: 0.8
    },
    topIndustries: ["Energy", "Healthcare", "Retail", "Tourism", "Agriculture"],
    zipCodes: ["87401", "87402", "87499"],
    neighborhoods: ["Downtown", "North Farmington", "East Farmington"],
    seoKeywords: ["Farmington NM tech services", "business solutions Farmington", "automation Farmington"],
    businessInfo: {
      totalBusinesses: 2800,
      techBusinesses: 95,
      serviceBusinesses: 1200
    }
  },

  // TEXAS CITIES (Major Markets within 500 miles)
  {
    name: "El Paso",
    slug: "el-paso",
    state: "Texas",
    stateAbbr: "TX",
    population: 678815,
    metroPopulation: 868859,
    coordinates: { lat: 31.7619, lng: -106.4850 },
    distanceFromAlbuquerque: 265,
    marketSize: "large",
    demographics: {
      medianIncome: 47568,
      medianAge: 32.5,
      growthRate: 3.5
    },
    topIndustries: ["Military", "Healthcare", "Manufacturing", "Trade", "Technology"],
    zipCodes: ["79901", "79902", "79903", "79904", "79905", "79906", "79907", "79908", "79910", "79911", "79912", "79915", "79920", "79922", "79924", "79925", "79927", "79928", "79930", "79932", "79934", "79935", "79936", "79938"],
    neighborhoods: ["Downtown", "Kern Place", "Mission Valley", "Upper Valley", "West El Paso", "Northeast", "Eastside"],
    nearbyTowns: ["Socorro", "Horizon City", "Fort Bliss", "Ciudad Juárez"],
    seoKeywords: ["El Paso AI services", "business automation El Paso", "tech solutions El Paso TX", "digital transformation El Paso"],
    businessInfo: {
      totalBusinesses: 42000,
      techBusinesses: 2100,
      serviceBusinesses: 17000
    }
  },
  {
    name: "Lubbock",
    slug: "lubbock",
    state: "Texas",
    stateAbbr: "TX",
    population: 258870,
    metroPopulation: 322257,
    coordinates: { lat: 33.5779, lng: -101.8552 },
    distanceFromAlbuquerque: 320,
    marketSize: "large",
    demographics: {
      medianIncome: 50453,
      medianAge: 29.8,
      growthRate: 4.1
    },
    topIndustries: ["Education", "Healthcare", "Agriculture", "Technology", "Manufacturing"],
    zipCodes: ["79401", "79402", "79403", "79404", "79406", "79407", "79408", "79409", "79410", "79411", "79412", "79413", "79414", "79415", "79416", "79423", "79424"],
    neighborhoods: ["Tech Terrace", "Downtown", "Overton", "Caprock", "Southwest Lubbock"],
    nearbyTowns: ["Wolfforth", "Slaton", "Idalou", "Shallowater", "Levelland"],
    seoKeywords: ["Lubbock tech services", "AI solutions Lubbock", "business automation Lubbock TX"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 950,
      serviceBusinesses: 7200
    }
  },
  {
    name: "Amarillo",
    slug: "amarillo",
    state: "Texas",
    stateAbbr: "TX",
    population: 200393,
    metroPopulation: 268691,
    coordinates: { lat: 35.2220, lng: -101.8313 },
    distanceFromAlbuquerque: 290,
    marketSize: "medium",
    demographics: {
      medianIncome: 52725,
      medianAge: 33.9,
      growthRate: 2.8
    },
    topIndustries: ["Agriculture", "Energy", "Healthcare", "Manufacturing", "Transportation"],
    zipCodes: ["79101", "79102", "79103", "79104", "79105", "79106", "79107", "79108", "79109", "79110", "79111", "79114", "79116", "79117", "79118", "79119", "79120", "79121", "79124"],
    neighborhoods: ["Downtown", "Wolflin", "Sleepy Hollow", "The Colonies", "Westgate"],
    nearbyTowns: ["Canyon", "Hereford", "Pampa", "Dumas", "Borger"],
    seoKeywords: ["Amarillo business solutions", "tech services Amarillo", "automation Amarillo TX"],
    businessInfo: {
      totalBusinesses: 14000,
      techBusinesses: 680,
      serviceBusinesses: 5600
    }
  },
  {
    name: "Midland",
    slug: "midland",
    state: "Texas",
    stateAbbr: "TX",
    population: 132524,
    metroPopulation: 176832,
    coordinates: { lat: 31.9973, lng: -102.0779 },
    distanceFromAlbuquerque: 370,
    marketSize: "medium",
    demographics: {
      medianIncome: 75506,
      medianAge: 32.4,
      growthRate: 5.2
    },
    topIndustries: ["Oil & Gas", "Energy", "Finance", "Healthcare", "Technology"],
    zipCodes: ["79701", "79702", "79703", "79704", "79705", "79706", "79707", "79708"],
    neighborhoods: ["Downtown", "Grassland Estates", "Greathouse", "Saddle Club North"],
    nearbyTowns: ["Odessa", "Big Spring", "Andrews", "Stanton"],
    seoKeywords: ["Midland tech solutions", "business automation Midland", "AI services Midland TX"],
    businessInfo: {
      totalBusinesses: 11000,
      techBusinesses: 850,
      serviceBusinesses: 4800
    }
  },
  {
    name: "Odessa",
    slug: "odessa",
    state: "Texas",
    stateAbbr: "TX",
    population: 114428,
    coordinates: { lat: 31.8457, lng: -102.3676 },
    distanceFromAlbuquerque: 385,
    marketSize: "medium",
    demographics: {
      medianIncome: 59525,
      medianAge: 30.9,
      growthRate: 4.8
    },
    topIndustries: ["Oil & Gas", "Energy", "Manufacturing", "Healthcare", "Education"],
    zipCodes: ["79760", "79761", "79762", "79763", "79764", "79765", "79766", "79768", "79769"],
    neighborhoods: ["Downtown", "North Odessa", "West Odessa", "Parks Legado"],
    seoKeywords: ["Odessa business services", "tech solutions Odessa", "automation Odessa TX"],
    businessInfo: {
      totalBusinesses: 8500,
      techBusinesses: 420,
      serviceBusinesses: 3400
    }
  },

  // COLORADO CITIES
  {
    name: "Colorado Springs",
    slug: "colorado-springs",
    state: "Colorado",
    stateAbbr: "CO",
    population: 478961,
    metroPopulation: 755105,
    coordinates: { lat: 38.8339, lng: -104.8214 },
    distanceFromAlbuquerque: 380,
    marketSize: "large",
    demographics: {
      medianIncome: 64712,
      medianAge: 34.3,
      growthRate: 4.5
    },
    topIndustries: ["Military", "Technology", "Tourism", "Healthcare", "Aerospace"],
    zipCodes: ["80901", "80902", "80903", "80904", "80905", "80906", "80907", "80908", "80909", "80910", "80911", "80913", "80914", "80915", "80916", "80917", "80918", "80919", "80920", "80921", "80922", "80923", "80924", "80925", "80926", "80927", "80928", "80929", "80930"],
    neighborhoods: ["Downtown", "Old Colorado City", "Manitou Springs", "Broadmoor", "Northgate", "Briargate"],
    nearbyTowns: ["Manitou Springs", "Monument", "Fountain", "Woodland Park", "Palmer Lake"],
    seoKeywords: ["Colorado Springs AI services", "tech solutions Colorado Springs", "business automation Springs CO"],
    businessInfo: {
      totalBusinesses: 35000,
      techBusinesses: 3800,
      serviceBusinesses: 14000
    }
  },
  {
    name: "Pueblo",
    slug: "pueblo",
    state: "Colorado",
    stateAbbr: "CO",
    population: 111876,
    metroPopulation: 168162,
    coordinates: { lat: 38.2544, lng: -104.6091 },
    distanceFromAlbuquerque: 340,
    marketSize: "medium",
    demographics: {
      medianIncome: 42902,
      medianAge: 38.5,
      growthRate: 2.1
    },
    topIndustries: ["Manufacturing", "Healthcare", "Education", "Government", "Energy"],
    zipCodes: ["81001", "81002", "81003", "81004", "81005", "81006", "81007", "81008", "81009", "81010", "81011", "81012"],
    neighborhoods: ["Downtown", "Bessemer", "Northside", "Mesa Junction", "Aberdeen"],
    nearbyTowns: ["Pueblo West", "Colorado City", "Beulah", "Penrose"],
    seoKeywords: ["Pueblo business solutions", "tech services Pueblo", "automation Pueblo CO"],
    businessInfo: {
      totalBusinesses: 7500,
      techBusinesses: 320,
      serviceBusinesses: 3000
    }
  },
  {
    name: "Durango",
    slug: "durango",
    state: "Colorado",
    stateAbbr: "CO",
    population: 19413,
    coordinates: { lat: 37.2753, lng: -107.8801 },
    distanceFromAlbuquerque: 215,
    marketSize: "small",
    demographics: {
      medianIncome: 57454,
      medianAge: 33.7,
      growthRate: 3.2
    },
    topIndustries: ["Tourism", "Education", "Healthcare", "Retail", "Construction"],
    zipCodes: ["81301", "81302", "81303"],
    neighborhoods: ["Downtown", "Three Springs", "Horse Gulch"],
    seoKeywords: ["Durango tech services", "business solutions Durango", "automation Durango CO"],
    businessInfo: {
      totalBusinesses: 2800,
      techBusinesses: 180,
      serviceBusinesses: 1200
    }
  },

  // ARIZONA CITIES
  {
    name: "Phoenix",
    slug: "phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 1608139,
    metroPopulation: 4948203,
    coordinates: { lat: 33.4484, lng: -112.0740 },
    distanceFromAlbuquerque: 420,
    marketSize: "large",
    demographics: {
      medianIncome: 60914,
      medianAge: 33.8,
      growthRate: 5.8
    },
    topIndustries: ["Technology", "Healthcare", "Finance", "Manufacturing", "Real Estate"],
    zipCodes: ["85001", "85002", "85003", "85004", "85005", "85006", "85007", "85008", "85009", "85010", "85011", "85012", "85013", "85014", "85015", "85016", "85017", "85018", "85019", "85020", "85021", "85022", "85023", "85024", "85026", "85027", "85028", "85029", "85030", "85031", "85032", "85033", "85034", "85035", "85036", "85037", "85038", "85039", "85040", "85041", "85042", "85043", "85044", "85045", "85046", "85048", "85050", "85051", "85053", "85054", "85060", "85061", "85062", "85063", "85064", "85065", "85066", "85067", "85068", "85069", "85070", "85071", "85072", "85073", "85074", "85075", "85076", "85078", "85079", "85080", "85082", "85083", "85085", "85086", "85087"],
    neighborhoods: ["Downtown", "Arcadia", "Biltmore", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria"],
    nearbyTowns: ["Scottsdale", "Mesa", "Chandler", "Glendale", "Tempe", "Gilbert", "Peoria", "Surprise"],
    seoKeywords: ["Phoenix AI solutions", "tech services Phoenix", "business automation Phoenix AZ", "digital transformation Phoenix"],
    businessInfo: {
      totalBusinesses: 125000,
      techBusinesses: 12500,
      serviceBusinesses: 50000
    }
  },
  {
    name: "Tucson",
    slug: "tucson",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 548073,
    metroPopulation: 1043433,
    coordinates: { lat: 32.2226, lng: -110.9747 },
    distanceFromAlbuquerque: 450,
    marketSize: "large",
    demographics: {
      medianIncome: 43425,
      medianAge: 33.8,
      growthRate: 3.5
    },
    topIndustries: ["Education", "Healthcare", "Military", "Tourism", "Technology"],
    zipCodes: ["85701", "85702", "85703", "85704", "85705", "85706", "85707", "85708", "85709", "85710", "85711", "85712", "85713", "85714", "85715", "85716", "85717", "85718", "85719", "85720", "85721", "85722", "85723", "85724", "85725", "85726", "85728", "85730", "85731", "85732", "85733", "85734", "85735", "85736", "85737", "85738", "85739", "85740", "85741", "85742", "85743", "85744", "85745", "85746", "85747", "85748", "85749", "85750", "85751", "85752", "85754", "85755", "85756", "85757", "85775"],
    neighborhoods: ["Downtown", "University", "Sam Hughes", "Catalina Foothills", "Oro Valley", "Rita Ranch"],
    nearbyTowns: ["Oro Valley", "Marana", "Sahuarita", "Green Valley", "Vail"],
    seoKeywords: ["Tucson tech solutions", "AI services Tucson", "business automation Tucson AZ"],
    businessInfo: {
      totalBusinesses: 38000,
      techBusinesses: 2800,
      serviceBusinesses: 15200
    }
  },
  {
    name: "Flagstaff",
    slug: "flagstaff",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 75038,
    coordinates: { lat: 35.1983, lng: -111.6513 },
    distanceFromAlbuquerque: 325,
    marketSize: "small",
    demographics: {
      medianIncome: 54692,
      medianAge: 25.9,
      growthRate: 3.8
    },
    topIndustries: ["Education", "Tourism", "Healthcare", "Government", "Technology"],
    zipCodes: ["86001", "86002", "86003", "86004", "86005", "86011"],
    neighborhoods: ["Downtown", "University Heights", "Forest Meadows", "Cheshire", "Ponderosa Trails"],
    seoKeywords: ["Flagstaff business services", "tech solutions Flagstaff", "automation Flagstaff AZ"],
    businessInfo: {
      totalBusinesses: 5200,
      techBusinesses: 380,
      serviceBusinesses: 2100
    }
  },

  // OKLAHOMA CITIES
  {
    name: "Oklahoma City",
    slug: "oklahoma-city",
    state: "Oklahoma",
    stateAbbr: "OK",
    population: 681054,
    metroPopulation: 1441695,
    coordinates: { lat: 35.4676, lng: -97.5164 },
    distanceFromAlbuquerque: 485,
    marketSize: "large",
    demographics: {
      medianIncome: 55557,
      medianAge: 34.3,
      growthRate: 4.2
    },
    topIndustries: ["Energy", "Aerospace", "Healthcare", "Government", "Technology"],
    zipCodes: ["73101", "73102", "73103", "73104", "73105", "73106", "73107", "73108", "73109", "73110", "73111", "73112", "73113", "73114", "73115", "73116", "73117", "73118", "73119", "73120", "73121", "73122", "73123", "73124", "73125", "73126", "73127", "73128", "73129", "73130", "73131", "73132", "73134", "73135", "73136", "73137", "73139", "73140", "73141", "73142", "73143", "73144", "73145", "73146", "73147", "73148", "73149", "73150", "73151", "73152", "73153", "73154", "73155", "73156", "73157", "73159", "73160", "73162", "73163", "73164", "73165", "73167", "73169", "73170", "73172", "73173", "73178", "73179", "73184", "73185", "73189", "73190", "73194", "73195", "73196", "73197", "73198", "73199"],
    neighborhoods: ["Downtown", "Bricktown", "Midtown", "Paseo", "Plaza District", "Deep Deuce", "Automobile Alley"],
    nearbyTowns: ["Norman", "Moore", "Edmond", "Yukon", "Mustang", "Del City"],
    seoKeywords: ["Oklahoma City AI services", "tech solutions OKC", "business automation Oklahoma City"],
    businessInfo: {
      totalBusinesses: 48000,
      techBusinesses: 3200,
      serviceBusinesses: 19200
    }
  },

  // Additional cities to reach 100 markets
  {
    name: "Clovis",
    slug: "clovis-nm",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 38567,
    coordinates: { lat: 34.4048, lng: -103.2052 },
    distanceFromAlbuquerque: 220,
    marketSize: "small",
    demographics: {
      medianIncome: 43872,
      medianAge: 30.8,
      growthRate: 1.5
    },
    topIndustries: ["Military", "Agriculture", "Healthcare", "Education", "Retail"],
    zipCodes: ["88101", "88102", "88103"],
    seoKeywords: ["Clovis NM business services", "tech solutions Clovis", "automation Clovis New Mexico"],
    businessInfo: {
      totalBusinesses: 2200,
      techBusinesses: 85,
      serviceBusinesses: 900
    }
  },
  {
    name: "Hobbs",
    slug: "hobbs",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 40508,
    coordinates: { lat: 32.7026, lng: -103.1360 },
    distanceFromAlbuquerque: 325,
    marketSize: "small",
    demographics: {
      medianIncome: 55295,
      medianAge: 30.7,
      growthRate: 2.8
    },
    topIndustries: ["Oil & Gas", "Energy", "Manufacturing", "Healthcare", "Education"],
    zipCodes: ["88240", "88241", "88242", "88244"],
    seoKeywords: ["Hobbs business solutions", "tech services Hobbs NM", "automation Hobbs"],
    businessInfo: {
      totalBusinesses: 2400,
      techBusinesses: 95,
      serviceBusinesses: 960
    }
  },
  {
    name: "Carlsbad",
    slug: "carlsbad-nm",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 32238,
    coordinates: { lat: 32.4207, lng: -104.2288 },
    distanceFromAlbuquerque: 285,
    marketSize: "small",
    demographics: {
      medianIncome: 58554,
      medianAge: 35.7,
      growthRate: 3.2
    },
    topIndustries: ["Energy", "Tourism", "Mining", "Healthcare", "Government"],
    zipCodes: ["88220", "88221"],
    seoKeywords: ["Carlsbad NM tech services", "business automation Carlsbad", "solutions Carlsbad New Mexico"],
    businessInfo: {
      totalBusinesses: 2000,
      techBusinesses: 75,
      serviceBusinesses: 800
    }
  },
  {
    name: "Alamogordo",
    slug: "alamogordo",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 31384,
    coordinates: { lat: 32.8995, lng: -105.9603 },
    distanceFromAlbuquerque: 225,
    marketSize: "small",
    demographics: {
      medianIncome: 44658,
      medianAge: 35.1,
      growthRate: 1.8
    },
    topIndustries: ["Military", "Tourism", "Healthcare", "Retail", "Education"],
    zipCodes: ["88310", "88311"],
    seoKeywords: ["Alamogordo business services", "tech Alamogordo NM", "automation solutions Alamogordo"],
    businessInfo: {
      totalBusinesses: 1800,
      techBusinesses: 65,
      serviceBusinesses: 720
    }
  },
  {
    name: "Taos",
    slug: "taos",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 6021,
    coordinates: { lat: 36.4072, lng: -105.5734 },
    distanceFromAlbuquerque: 135,
    marketSize: "small",
    demographics: {
      medianIncome: 35441,
      medianAge: 46.9,
      growthRate: 0.8
    },
    topIndustries: ["Tourism", "Art", "Hospitality", "Healthcare", "Retail"],
    zipCodes: ["87571"],
    seoKeywords: ["Taos tech services", "business solutions Taos NM", "automation Taos"],
    businessInfo: {
      totalBusinesses: 1200,
      techBusinesses: 45,
      serviceBusinesses: 480
    }
  },
  {
    name: "Gallup",
    slug: "gallup",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 21899,
    coordinates: { lat: 35.5281, lng: -108.7426 },
    distanceFromAlbuquerque: 140,
    marketSize: "small",
    demographics: {
      medianIncome: 43869,
      medianAge: 31.5,
      growthRate: 1.2
    },
    topIndustries: ["Healthcare", "Tourism", "Government", "Retail", "Transportation"],
    zipCodes: ["87301", "87302", "87305"],
    seoKeywords: ["Gallup business services", "tech Gallup NM", "automation Gallup"],
    businessInfo: {
      totalBusinesses: 1500,
      techBusinesses: 40,
      serviceBusinesses: 600
    }
  },
  {
    name: "Silver City",
    slug: "silver-city",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 9704,
    coordinates: { lat: 32.7701, lng: -108.2803 },
    distanceFromAlbuquerque: 230,
    marketSize: "small",
    demographics: {
      medianIncome: 37665,
      medianAge: 42.3,
      growthRate: 0.5
    },
    topIndustries: ["Mining", "Education", "Healthcare", "Tourism", "Government"],
    zipCodes: ["88061", "88062"],
    seoKeywords: ["Silver City tech services", "business Silver City NM", "automation Silver City"],
    businessInfo: {
      totalBusinesses: 800,
      techBusinesses: 25,
      serviceBusinesses: 320
    }
  },

  // More Texas cities
  {
    name: "Abilene",
    slug: "abilene",
    state: "Texas",
    stateAbbr: "TX",
    population: 125182,
    coordinates: { lat: 32.4487, lng: -99.7331 },
    distanceFromAlbuquerque: 415,
    marketSize: "medium",
    demographics: {
      medianIncome: 50393,
      medianAge: 32.2,
      growthRate: 2.3
    },
    topIndustries: ["Healthcare", "Education", "Manufacturing", "Military", "Retail"],
    zipCodes: ["79601", "79602", "79603", "79604", "79605", "79606", "79607", "79608"],
    seoKeywords: ["Abilene tech services", "business automation Abilene TX", "AI solutions Abilene"],
    businessInfo: {
      totalBusinesses: 8200,
      techBusinesses: 380,
      serviceBusinesses: 3280
    }
  },
  {
    name: "Wichita Falls",
    slug: "wichita-falls",
    state: "Texas",
    stateAbbr: "TX",
    population: 102316,
    coordinates: { lat: 33.9137, lng: -98.4934 },
    distanceFromAlbuquerque: 465,
    marketSize: "medium",
    demographics: {
      medianIncome: 46802,
      medianAge: 32.5,
      growthRate: 1.8
    },
    topIndustries: ["Military", "Healthcare", "Manufacturing", "Education", "Oil & Gas"],
    zipCodes: ["76301", "76302", "76305", "76306", "76307", "76308", "76309", "76310"],
    seoKeywords: ["Wichita Falls business solutions", "tech Wichita Falls TX", "automation services Wichita Falls"],
    businessInfo: {
      totalBusinesses: 6800,
      techBusinesses: 250,
      serviceBusinesses: 2720
    }
  },
  {
    name: "San Angelo",
    slug: "san-angelo",
    state: "Texas",
    stateAbbr: "TX",
    population: 100450,
    coordinates: { lat: 31.4638, lng: -100.4370 },
    distanceFromAlbuquerque: 475,
    marketSize: "medium",
    demographics: {
      medianIncome: 51296,
      medianAge: 32.8,
      growthRate: 2.1
    },
    topIndustries: ["Healthcare", "Education", "Military", "Agriculture", "Energy"],
    zipCodes: ["76901", "76902", "76903", "76904", "76905", "76906", "76908", "76909"],
    seoKeywords: ["San Angelo tech solutions", "business services San Angelo TX", "automation San Angelo"],
    businessInfo: {
      totalBusinesses: 6500,
      techBusinesses: 220,
      serviceBusinesses: 2600
    }
  },

  // Colorado additional cities
  {
    name: "Fort Collins",
    slug: "fort-collins",
    state: "Colorado",
    stateAbbr: "CO",
    population: 169810,
    coordinates: { lat: 40.5853, lng: -105.0844 },
    distanceFromAlbuquerque: 450,
    marketSize: "medium",
    demographics: {
      medianIncome: 65866,
      medianAge: 29.2,
      growthRate: 4.8
    },
    topIndustries: ["Technology", "Education", "Healthcare", "Manufacturing", "Breweries"],
    zipCodes: ["80521", "80522", "80523", "80524", "80525", "80526", "80527", "80528"],
    seoKeywords: ["Fort Collins AI services", "tech Fort Collins CO", "business automation Fort Collins"],
    businessInfo: {
      totalBusinesses: 12500,
      techBusinesses: 1850,
      serviceBusinesses: 5000
    }
  },
  {
    name: "Grand Junction",
    slug: "grand-junction",
    state: "Colorado",
    stateAbbr: "CO",
    population: 65560,
    coordinates: { lat: 39.0639, lng: -108.5506 },
    distanceFromAlbuquerque: 385,
    marketSize: "small",
    demographics: {
      medianIncome: 52504,
      medianAge: 36.1,
      growthRate: 3.2
    },
    topIndustries: ["Healthcare", "Energy", "Tourism", "Education", "Agriculture"],
    zipCodes: ["81501", "81502", "81503", "81504", "81505", "81506", "81507"],
    seoKeywords: ["Grand Junction business services", "tech Grand Junction CO", "automation Grand Junction"],
    businessInfo: {
      totalBusinesses: 4800,
      techBusinesses: 280,
      serviceBusinesses: 1920
    }
  },

  // Arizona additional cities
  {
    name: "Mesa",
    slug: "mesa",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 504258,
    coordinates: { lat: 33.4152, lng: -111.8315 },
    distanceFromAlbuquerque: 425,
    marketSize: "large",
    demographics: {
      medianIncome: 58181,
      medianAge: 35.9,
      growthRate: 4.5
    },
    topIndustries: ["Healthcare", "Education", "Technology", "Manufacturing", "Aerospace"],
    zipCodes: ["85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208", "85209", "85210", "85211", "85212", "85213", "85214", "85215", "85216"],
    seoKeywords: ["Mesa AI solutions", "tech services Mesa AZ", "business automation Mesa"],
    businessInfo: {
      totalBusinesses: 32000,
      techBusinesses: 2800,
      serviceBusinesses: 12800
    }
  },
  {
    name: "Chandler",
    slug: "chandler",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 275987,
    coordinates: { lat: 33.3062, lng: -111.8413 },
    distanceFromAlbuquerque: 430,
    marketSize: "large",
    demographics: {
      medianIncome: 82925,
      medianAge: 35.4,
      growthRate: 5.2
    },
    topIndustries: ["Technology", "Manufacturing", "Finance", "Healthcare", "Education"],
    zipCodes: ["85224", "85225", "85226", "85244", "85246", "85247", "85248", "85249", "85286"],
    seoKeywords: ["Chandler tech solutions", "AI services Chandler AZ", "business automation Chandler"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 3200,
      serviceBusinesses: 7200
    }
  },
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
    seoKeywords: ["Scottsdale business services", "tech Scottsdale AZ", "AI solutions Scottsdale"],
    businessInfo: {
      totalBusinesses: 22000,
      techBusinesses: 2400,
      serviceBusinesses: 8800
    }
  },
  {
    name: "Glendale",
    slug: "glendale-az",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 248325,
    coordinates: { lat: 33.5387, lng: -112.1860 },
    distanceFromAlbuquerque: 415,
    marketSize: "large",
    demographics: {
      medianIncome: 55175,
      medianAge: 33.9,
      growthRate: 3.5
    },
    topIndustries: ["Healthcare", "Retail", "Education", "Manufacturing", "Sports & Entertainment"],
    zipCodes: ["85301", "85302", "85303", "85304", "85305", "85306", "85307", "85308", "85309", "85310", "85311", "85312", "85313", "85318"],
    seoKeywords: ["Glendale AZ tech services", "business Glendale Arizona", "automation Glendale"],
    businessInfo: {
      totalBusinesses: 15000,
      techBusinesses: 850,
      serviceBusinesses: 6000
    }
  },
  {
    name: "Tempe",
    slug: "tempe",
    state: "Arizona",
    stateAbbr: "AZ",
    population: 195805,
    coordinates: { lat: 33.4255, lng: -111.9400 },
    distanceFromAlbuquerque: 425,
    marketSize: "medium",
    demographics: {
      medianIncome: 57994,
      medianAge: 29.5,
      growthRate: 4.2
    },
    topIndustries: ["Education", "Technology", "Healthcare", "Finance", "Manufacturing"],
    zipCodes: ["85280", "85281", "85282", "85283", "85284", "85285", "85287", "85288"],
    seoKeywords: ["Tempe AI services", "tech solutions Tempe AZ", "business automation Tempe"],
    businessInfo: {
      totalBusinesses: 13000,
      techBusinesses: 1800,
      serviceBusinesses: 5200
    }
  },

  // Kansas cities
  {
    name: "Wichita",
    slug: "wichita",
    state: "Kansas",
    stateAbbr: "KS",
    population: 397532,
    metroPopulation: 647610,
    coordinates: { lat: 37.6872, lng: -97.3301 },
    distanceFromAlbuquerque: 490,
    marketSize: "large",
    demographics: {
      medianIncome: 52620,
      medianAge: 34.6,
      growthRate: 2.5
    },
    topIndustries: ["Aviation", "Manufacturing", "Healthcare", "Energy", "Agriculture"],
    zipCodes: ["67201", "67202", "67203", "67204", "67205", "67206", "67207", "67208", "67209", "67210", "67211", "67212", "67213", "67214", "67215", "67216", "67217", "67218", "67219", "67220", "67221", "67223", "67224", "67225", "67226", "67227", "67228", "67230", "67231", "67232", "67233", "67235", "67236", "67237", "67238", "67239", "67240", "67241", "67242", "67243", "67244", "67251", "67252", "67253", "67254", "67255", "67256", "67257", "67258", "67259", "67260", "67275", "67276", "67277", "67278"],
    neighborhoods: ["Downtown", "Old Town", "Delano", "College Hill", "Riverside"],
    seoKeywords: ["Wichita tech services", "AI solutions Wichita KS", "business automation Wichita"],
    businessInfo: {
      totalBusinesses: 28000,
      techBusinesses: 1400,
      serviceBusinesses: 11200
    }
  },

  // Utah cities
  {
    name: "Salt Lake City",
    slug: "salt-lake-city",
    state: "Utah",
    stateAbbr: "UT",
    population: 200133,
    metroPopulation: 1232696,
    coordinates: { lat: 40.7608, lng: -111.8910 },
    distanceFromAlbuquerque: 495,
    marketSize: "large",
    demographics: {
      medianIncome: 53036,
      medianAge: 31.3,
      growthRate: 5.2
    },
    topIndustries: ["Technology", "Finance", "Healthcare", "Tourism", "Mining"],
    zipCodes: ["84101", "84102", "84103", "84104", "84105", "84106", "84107", "84108", "84109", "84110", "84111", "84112", "84113", "84114", "84115", "84116", "84117", "84118", "84119", "84120", "84121", "84122", "84123", "84124", "84125", "84126", "84127", "84128", "84129", "84130", "84131", "84132", "84133", "84134", "84136", "84137", "84138", "84139", "84141", "84143", "84144", "84145", "84147", "84148", "84150", "84151", "84152", "84157", "84158", "84165", "84170", "84171", "84180", "84184", "84189", "84190", "84199"],
    neighborhoods: ["Downtown", "Sugar House", "The Avenues", "Capitol Hill", "Rose Park"],
    seoKeywords: ["Salt Lake City AI services", "tech SLC", "business automation Salt Lake City UT"],
    businessInfo: {
      totalBusinesses: 18000,
      techBusinesses: 2800,
      serviceBusinesses: 7200
    }
  },

  // Additional cities to complete the 100
  {
    name: "Las Vegas",
    slug: "las-vegas-nm",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 13166,
    coordinates: { lat: 35.5939, lng: -105.2239 },
    distanceFromAlbuquerque: 120,
    marketSize: "small",
    demographics: {
      medianIncome: 28901,
      medianAge: 38.4,
      growthRate: 0.5
    },
    topIndustries: ["Education", "Government", "Healthcare", "Tourism", "Retail"],
    zipCodes: ["87701"],
    seoKeywords: ["Las Vegas NM business services", "tech Las Vegas New Mexico", "automation Las Vegas NM"],
    businessInfo: {
      totalBusinesses: 900,
      techBusinesses: 25,
      serviceBusinesses: 360
    }
  },
  {
    name: "Portales",
    slug: "portales",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 12137,
    coordinates: { lat: 34.1862, lng: -103.3344 },
    distanceFromAlbuquerque: 235,
    marketSize: "small",
    demographics: {
      medianIncome: 35879,
      medianAge: 27.5,
      growthRate: 0.8
    },
    topIndustries: ["Education", "Agriculture", "Healthcare", "Retail", "Government"],
    zipCodes: ["88130"],
    seoKeywords: ["Portales business solutions", "tech Portales NM", "automation Portales"],
    businessInfo: {
      totalBusinesses: 800,
      techBusinesses: 20,
      serviceBusinesses: 320
    }
  },
  {
    name: "Artesia",
    slug: "artesia",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 12875,
    coordinates: { lat: 32.8423, lng: -104.4033 },
    distanceFromAlbuquerque: 295,
    marketSize: "small",
    demographics: {
      medianIncome: 53995,
      medianAge: 35.8,
      growthRate: 2.1
    },
    topIndustries: ["Oil & Gas", "Healthcare", "Education", "Retail", "Government"],
    zipCodes: ["88210", "88211"],
    seoKeywords: ["Artesia tech services", "business Artesia NM", "automation Artesia"],
    businessInfo: {
      totalBusinesses: 850,
      techBusinesses: 30,
      serviceBusinesses: 340
    }
  },
  {
    name: "Lovington",
    slug: "lovington",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 11574,
    coordinates: { lat: 32.9440, lng: -103.3489 },
    distanceFromAlbuquerque: 340,
    marketSize: "small",
    demographics: {
      medianIncome: 50725,
      medianAge: 31.2,
      growthRate: 1.8
    },
    topIndustries: ["Oil & Gas", "Agriculture", "Healthcare", "Education", "Government"],
    zipCodes: ["88260"],
    seoKeywords: ["Lovington business services", "tech Lovington NM", "automation Lovington"],
    businessInfo: {
      totalBusinesses: 750,
      techBusinesses: 25,
      serviceBusinesses: 300
    }
  },
  {
    name: "Ruidoso",
    slug: "ruidoso",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 7679,
    coordinates: { lat: 33.3317, lng: -105.6644 },
    distanceFromAlbuquerque: 195,
    marketSize: "small",
    demographics: {
      medianIncome: 42750,
      medianAge: 48.3,
      growthRate: 1.2
    },
    topIndustries: ["Tourism", "Hospitality", "Retail", "Real Estate", "Healthcare"],
    zipCodes: ["88345", "88346", "88355"],
    seoKeywords: ["Ruidoso tech services", "business Ruidoso NM", "automation Ruidoso"],
    businessInfo: {
      totalBusinesses: 1100,
      techBusinesses: 35,
      serviceBusinesses: 440
    }
  },
  {
    name: "Deming",
    slug: "deming",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 14758,
    coordinates: { lat: 32.2687, lng: -107.7586 },
    distanceFromAlbuquerque: 280,
    marketSize: "small",
    demographics: {
      medianIncome: 30715,
      medianAge: 39.4,
      growthRate: 0.8
    },
    topIndustries: ["Agriculture", "Transportation", "Healthcare", "Retail", "Government"],
    zipCodes: ["88030", "88031"],
    seoKeywords: ["Deming business services", "tech Deming NM", "automation Deming"],
    businessInfo: {
      totalBusinesses: 950,
      techBusinesses: 20,
      serviceBusinesses: 380
    }
  },
  {
    name: "Socorro",
    slug: "socorro",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 8906,
    coordinates: { lat: 34.0584, lng: -106.8914 },
    distanceFromAlbuquerque: 75,
    marketSize: "small",
    demographics: {
      medianIncome: 33284,
      medianAge: 30.5,
      growthRate: 0.5
    },
    topIndustries: ["Education", "Research", "Government", "Healthcare", "Retail"],
    zipCodes: ["87801"],
    seoKeywords: ["Socorro tech services", "business Socorro NM", "automation Socorro"],
    businessInfo: {
      totalBusinesses: 600,
      techBusinesses: 30,
      serviceBusinesses: 240
    }
  },
  {
    name: "Los Alamos",
    slug: "los-alamos",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 13179,
    coordinates: { lat: 35.8881, lng: -106.3069 },
    distanceFromAlbuquerque: 95,
    marketSize: "small",
    demographics: {
      medianIncome: 112960,
      medianAge: 42.8,
      growthRate: 1.5
    },
    topIndustries: ["Research", "Technology", "Government", "Education", "Healthcare"],
    zipCodes: ["87544", "87545"],
    seoKeywords: ["Los Alamos AI services", "tech Los Alamos NM", "automation Los Alamos"],
    businessInfo: {
      totalBusinesses: 1200,
      techBusinesses: 280,
      serviceBusinesses: 480
    }
  },
  {
    name: "Española",
    slug: "espanola",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 10526,
    coordinates: { lat: 35.9911, lng: -106.0806 },
    distanceFromAlbuquerque: 85,
    marketSize: "small",
    demographics: {
      medianIncome: 37703,
      medianAge: 36.2,
      growthRate: 0.8
    },
    topIndustries: ["Government", "Healthcare", "Retail", "Education", "Construction"],
    zipCodes: ["87532", "87533"],
    seoKeywords: ["Española business services", "tech Española NM", "automation Española"],
    businessInfo: {
      totalBusinesses: 750,
      techBusinesses: 20,
      serviceBusinesses: 300
    }
  },
  {
    name: "Grants",
    slug: "grants",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 9163,
    coordinates: { lat: 35.1473, lng: -107.8514 },
    distanceFromAlbuquerque: 80,
    marketSize: "small",
    demographics: {
      medianIncome: 42122,
      medianAge: 34.5,
      growthRate: 0.5
    },
    topIndustries: ["Tourism", "Mining", "Healthcare", "Government", "Retail"],
    zipCodes: ["87020"],
    seoKeywords: ["Grants tech services", "business Grants NM", "automation Grants"],
    businessInfo: {
      totalBusinesses: 600,
      techBusinesses: 15,
      serviceBusinesses: 240
    }
  },
  {
    name: "Truth or Consequences",
    slug: "truth-or-consequences",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 6052,
    coordinates: { lat: 33.1287, lng: -107.2528 },
    distanceFromAlbuquerque: 150,
    marketSize: "small",
    demographics: {
      medianIncome: 27022,
      medianAge: 53.2,
      growthRate: 0.3
    },
    topIndustries: ["Tourism", "Healthcare", "Retail", "Hospitality", "Real Estate"],
    zipCodes: ["87901"],
    seoKeywords: ["Truth or Consequences business", "tech T or C NM", "automation Truth or Consequences"],
    businessInfo: {
      totalBusinesses: 450,
      techBusinesses: 10,
      serviceBusinesses: 180
    }
  },
  {
    name: "Belen",
    slug: "belen",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 7360,
    coordinates: { lat: 34.6631, lng: -106.7764 },
    distanceFromAlbuquerque: 35,
    marketSize: "small",
    demographics: {
      medianIncome: 33764,
      medianAge: 36.8,
      growthRate: 0.8
    },
    topIndustries: ["Railroad", "Government", "Healthcare", "Retail", "Education"],
    zipCodes: ["87002"],
    seoKeywords: ["Belen tech services", "business Belen NM", "automation Belen"],
    businessInfo: {
      totalBusinesses: 500,
      techBusinesses: 12,
      serviceBusinesses: 200
    }
  },
  {
    name: "Bernalillo",
    slug: "bernalillo",
    state: "New Mexico",
    stateAbbr: "NM",
    population: 9669,
    coordinates: { lat: 35.3000, lng: -106.5514 },
    distanceFromAlbuquerque: 18,
    marketSize: "small",
    demographics: {
      medianIncome: 43090,
      medianAge: 37.1,
      growthRate: 1.2
    },
    topIndustries: ["Tourism", "Healthcare", "Retail", "Government", "Construction"],
    zipCodes: ["87004"],
    seoKeywords: ["Bernalillo business services", "tech Bernalillo NM", "automation Bernalillo"],
    businessInfo: {
      totalBusinesses: 650,
      techBusinesses: 25,
      serviceBusinesses: 260
    }
  }
];

// Helper function to generate SEO meta tags
export function generateLocationMeta(city: CityData) {
  const title = `AI Automation & Business Solutions in ${city.name}, ${city.stateAbbr} | RJ Business Solutions`;
  const description = `Transform your ${city.name} business with AI automation, custom chatbots, and digital solutions. Serving ${city.nearbyTowns ? city.nearbyTowns.join(', ') + ' and' : ''} all of ${city.state}. Call 877-561-8001 for a free consultation.`;

  return {
    title,
    description,
    keywords: city.seoKeywords.join(', '),
    openGraph: {
      title,
      description,
      url: `https://rjbusinesssolutions.org/locations/${city.slug}`,
      siteName: 'RJ Business Solutions',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://rjbusinesssolutions.org/locations/${city.slug}`
    }
  };
}

// Helper function to get nearby cities
export function getNearbyCities(currentCity: CityData, limit: number = 5): CityData[] {
  return top100Markets
    .filter(city => city.slug !== currentCity.slug)
    .sort((a, b) => {
      const distA = calculateDistance(
        currentCity.coordinates.lat,
        currentCity.coordinates.lng,
        a.coordinates.lat,
        a.coordinates.lng
      );
      const distB = calculateDistance(
        currentCity.coordinates.lat,
        currentCity.coordinates.lng,
        b.coordinates.lat,
        b.coordinates.lng
      );
      return distA - distB;
    })
    .slice(0, limit);
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

// Get cities by state
export function getCitiesByState(state: string): CityData[] {
  return top100Markets.filter(city => city.state === state);
}

// Get cities by market size
export function getCitiesByMarketSize(size: 'large' | 'medium' | 'small'): CityData[] {
  return top100Markets.filter(city => city.marketSize === size);
}