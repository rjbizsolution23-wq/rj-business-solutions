export interface CityData {
  slug: string
  city: string
  state: string
  stateAbbr: string
  metro?: string
  population: string
  zipCodes: string[]
  areaCode: string
  neighborhoods?: string[]
  nearbyTowns?: string[]
  counties?: string[]
  lat: number
  lng: number
}

export const citiesData: CityData[] = [
  // TEXAS
  {
    slug: 'dallas',
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    metro: 'Dallas-Fort Worth Metroplex',
    population: '1.3M',
    zipCodes: ['75201', '75202', '75203', '75204', '75205', '75206', '75207', '75208', '75209', '75210'],
    areaCode: '214',
    neighborhoods: ['Downtown', 'Uptown', 'Deep Ellum', 'Bishop Arts', 'Highland Park', 'Oak Lawn', 'Victory Park', 'Design District'],
    nearbyTowns: ['Plano', 'Richardson', 'Garland', 'Irving', 'Mesquite', 'Carrollton', 'Frisco', 'McKinney'],
    counties: ['Dallas County', 'Collin County', 'Denton County'],
    lat: 32.7767,
    lng: -96.7970
  },
  {
    slug: 'fort-worth',
    city: 'Fort Worth',
    state: 'Texas',
    stateAbbr: 'TX',
    metro: 'Dallas-Fort Worth Metroplex',
    population: '950K',
    zipCodes: ['76102', '76103', '76104', '76105', '76106', '76107', '76108', '76109', '76110'],
    areaCode: '817',
    neighborhoods: ['Downtown', 'Sundance Square', 'West 7th', 'TCU', 'Fairmount', 'Near Southside'],
    nearbyTowns: ['Arlington', 'Mansfield', 'Euless', 'Bedford', 'Hurst', 'North Richland Hills'],
    counties: ['Tarrant County'],
    lat: 32.7555,
    lng: -97.3308
  },
  {
    slug: 'rockwall',
    city: 'Rockwall',
    state: 'Texas',
    stateAbbr: 'TX',
    metro: 'Dallas-Fort Worth Metroplex',
    population: '48K',
    zipCodes: ['75032', '75087'],
    areaCode: '972',
    nearbyTowns: ['Rowlett', 'Heath', 'Fate', 'Royse City', 'Wylie'],
    counties: ['Rockwall County'],
    lat: 32.9313,
    lng: -96.4597
  },
  {
    slug: 'houston',
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    metro: 'Greater Houston',
    population: '2.3M',
    zipCodes: ['77001', '77002', '77003', '77004', '77005', '77006', '77007', '77008', '77009', '77010'],
    areaCode: '713',
    neighborhoods: ['Downtown', 'Midtown', 'Montrose', 'The Heights', 'River Oaks', 'Memorial', 'Galleria', 'Energy Corridor'],
    nearbyTowns: ['Sugar Land', 'The Woodlands', 'Pearland', 'League City', 'Pasadena', 'Katy', 'Cypress'],
    counties: ['Harris County', 'Fort Bend County', 'Montgomery County'],
    lat: 29.7604,
    lng: -95.3698
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    metro: 'Greater Austin',
    population: '1M',
    zipCodes: ['78701', '78702', '78703', '78704', '78705', '78712', '78721', '78722', '78723'],
    areaCode: '512',
    neighborhoods: ['Downtown', 'South Congress', 'East Austin', 'West Lake Hills', 'Zilker', 'Hyde Park', 'Domain'],
    nearbyTowns: ['Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'Kyle', 'Buda'],
    counties: ['Travis County', 'Williamson County', 'Hays County'],
    lat: 30.2672,
    lng: -97.7431
  },
  {
    slug: 'san-antonio',
    city: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    metro: 'Greater San Antonio',
    population: '1.5M',
    zipCodes: ['78201', '78202', '78203', '78204', '78205', '78207', '78208', '78209', '78210'],
    areaCode: '210',
    neighborhoods: ['Downtown', 'Pearl District', 'Alamo Heights', 'King William', 'Southtown', 'Stone Oak'],
    nearbyTowns: ['New Braunfels', 'Boerne', 'Schertz', 'Seguin', 'Universal City'],
    counties: ['Bexar County', 'Comal County', 'Guadalupe County'],
    lat: 29.4241,
    lng: -98.4936
  },

  // ILLINOIS
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    metro: 'Chicagoland',
    population: '2.7M',
    zipCodes: ['60601', '60602', '60603', '60604', '60605', '60606', '60607', '60608', '60609', '60610'],
    areaCode: '312',
    neighborhoods: ['The Loop', 'River North', 'Gold Coast', 'Lincoln Park', 'Wicker Park', 'Bucktown', 'Lakeview'],
    nearbyTowns: ['Evanston', 'Oak Park', 'Naperville', 'Aurora', 'Joliet', 'Schaumburg', 'Arlington Heights'],
    counties: ['Cook County', 'DuPage County', 'Lake County', 'Will County'],
    lat: 41.8781,
    lng: -87.6298
  },

  // WISCONSIN
  {
    slug: 'milwaukee',
    city: 'Milwaukee',
    state: 'Wisconsin',
    stateAbbr: 'WI',
    metro: 'Greater Milwaukee',
    population: '590K',
    zipCodes: ['53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210'],
    areaCode: '414',
    neighborhoods: ['Downtown', 'Third Ward', 'Bay View', 'Riverwest', 'East Side', 'Walkers Point'],
    nearbyTowns: ['Wauwatosa', 'West Allis', 'Greenfield', 'Oak Creek', 'Franklin', 'Brookfield'],
    counties: ['Milwaukee County', 'Waukesha County', 'Ozaukee County'],
    lat: 43.0389,
    lng: -87.9065
  },

  // FLORIDA
  {
    slug: 'miami',
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    metro: 'Greater Miami',
    population: '470K',
    zipCodes: ['33101', '33125', '33126', '33127', '33128', '33129', '33130', '33131', '33132', '33133'],
    areaCode: '305',
    neighborhoods: ['Downtown', 'Brickell', 'Wynwood', 'Design District', 'Coral Gables', 'Coconut Grove', 'Miami Beach'],
    nearbyTowns: ['Fort Lauderdale', 'Hollywood', 'Hialeah', 'Pembroke Pines', 'Coral Springs', 'Aventura'],
    counties: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
    lat: 25.7617,
    lng: -80.1918
  },
  {
    slug: 'orlando',
    city: 'Orlando',
    state: 'Florida',
    stateAbbr: 'FL',
    metro: 'Greater Orlando',
    population: '310K',
    zipCodes: ['32801', '32802', '32803', '32804', '32805', '32806', '32807', '32808', '32809'],
    areaCode: '407',
    neighborhoods: ['Downtown', 'Winter Park', 'College Park', 'Thornton Park', 'Mills 50', 'Dr. Phillips'],
    nearbyTowns: ['Kissimmee', 'Sanford', 'Lake Mary', 'Winter Garden', 'Altamonte Springs', 'Oviedo'],
    counties: ['Orange County', 'Seminole County', 'Osceola County'],
    lat: 28.5383,
    lng: -81.3792
  },
  {
    slug: 'tampa',
    city: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    metro: 'Tampa Bay Area',
    population: '400K',
    zipCodes: ['33601', '33602', '33603', '33604', '33605', '33606', '33607', '33608', '33609'],
    areaCode: '813',
    neighborhoods: ['Downtown', 'Ybor City', 'Hyde Park', 'Westshore', 'Channelside', 'SoHo'],
    nearbyTowns: ['St. Petersburg', 'Clearwater', 'Brandon', 'Largo', 'Palm Harbor', 'Lakeland'],
    counties: ['Hillsborough County', 'Pinellas County', 'Pasco County'],
    lat: 27.9506,
    lng: -82.4572
  },
  {
    slug: 'jacksonville',
    city: 'Jacksonville',
    state: 'Florida',
    stateAbbr: 'FL',
    metro: 'Jacksonville Metro',
    population: '950K',
    zipCodes: ['32099', '32201', '32202', '32203', '32204', '32205', '32206', '32207', '32208'],
    areaCode: '904',
    neighborhoods: ['Downtown', 'Riverside', 'San Marco', 'Beaches', 'Southside', 'Arlington'],
    nearbyTowns: ['Orange Park', 'Fleming Island', 'Ponte Vedra Beach', 'St. Augustine'],
    counties: ['Duval County', 'Clay County', 'St. Johns County'],
    lat: 30.3322,
    lng: -81.6557
  },

  // NEW YORK
  {
    slug: 'new-york',
    city: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    metro: 'New York Metropolitan Area',
    population: '8.3M',
    zipCodes: ['10001', '10002', '10003', '10004', '10005', '10006', '10007', '10008', '10009', '10010'],
    areaCode: '212',
    neighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Midtown', 'Financial District', 'Upper East Side'],
    nearbyTowns: ['Jersey City', 'Newark', 'Yonkers', 'White Plains', 'New Rochelle', 'Stamford'],
    counties: ['New York County', 'Kings County', 'Queens County', 'Bronx County', 'Richmond County'],
    lat: 40.7128,
    lng: -74.0060
  },

  // CALIFORNIA
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    metro: 'Greater Los Angeles',
    population: '4M',
    zipCodes: ['90001', '90002', '90003', '90004', '90005', '90006', '90007', '90008', '90009', '90010'],
    areaCode: '213',
    neighborhoods: ['Downtown', 'Hollywood', 'Beverly Hills', 'Santa Monica', 'Venice', 'Westwood', 'Silver Lake'],
    nearbyTowns: ['Long Beach', 'Anaheim', 'Santa Ana', 'Irvine', 'Glendale', 'Pasadena', 'Burbank'],
    counties: ['Los Angeles County', 'Orange County', 'Ventura County'],
    lat: 34.0522,
    lng: -118.2437
  },
  {
    slug: 'san-francisco',
    city: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    metro: 'San Francisco Bay Area',
    population: '875K',
    zipCodes: ['94102', '94103', '94104', '94105', '94107', '94108', '94109', '94110', '94111', '94112'],
    areaCode: '415',
    neighborhoods: ['Financial District', 'SoMa', 'Mission', 'Castro', 'Marina', 'Pacific Heights', 'Nob Hill'],
    nearbyTowns: ['Oakland', 'San Jose', 'Berkeley', 'Palo Alto', 'Mountain View', 'Redwood City', 'San Mateo'],
    counties: ['San Francisco County', 'Alameda County', 'San Mateo County', 'Santa Clara County'],
    lat: 37.7749,
    lng: -122.4194
  },
  {
    slug: 'san-diego',
    city: 'San Diego',
    state: 'California',
    stateAbbr: 'CA',
    metro: 'San Diego County',
    population: '1.4M',
    zipCodes: ['92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108', '92109', '92110'],
    areaCode: '619',
    neighborhoods: ['Downtown', 'Gaslamp Quarter', 'La Jolla', 'Pacific Beach', 'Mission Beach', 'North Park', 'Hillcrest'],
    nearbyTowns: ['Chula Vista', 'Oceanside', 'Escondido', 'Carlsbad', 'El Cajon', 'Vista', 'San Marcos'],
    counties: ['San Diego County'],
    lat: 32.7157,
    lng: -117.1611
  },

  // ARIZONA
  {
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    metro: 'Valley of the Sun',
    population: '1.7M',
    zipCodes: ['85001', '85002', '85003', '85004', '85005', '85006', '85007', '85008', '85009', '85010'],
    areaCode: '602',
    neighborhoods: ['Downtown', 'Scottsdale', 'Tempe', 'Biltmore', 'Arcadia', 'Paradise Valley'],
    nearbyTowns: ['Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Avondale'],
    counties: ['Maricopa County'],
    lat: 33.4484,
    lng: -112.0740
  },

  // PENNSYLVANIA
  {
    slug: 'philadelphia',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    stateAbbr: 'PA',
    metro: 'Delaware Valley',
    population: '1.6M',
    zipCodes: ['19102', '19103', '19104', '19105', '19106', '19107', '19108', '19109', '19110', '19111'],
    areaCode: '215',
    neighborhoods: ['Center City', 'Old City', 'Rittenhouse Square', 'University City', 'Fishtown', 'Northern Liberties'],
    nearbyTowns: ['Camden', 'Cherry Hill', 'King of Prussia', 'Plymouth Meeting', 'Media', 'West Chester'],
    counties: ['Philadelphia County', 'Montgomery County', 'Bucks County', 'Delaware County'],
    lat: 39.9526,
    lng: -75.1652
  },

  // GEORGIA
  {
    slug: 'atlanta',
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    metro: 'Metro Atlanta',
    population: '500K',
    zipCodes: ['30301', '30302', '30303', '30304', '30305', '30306', '30307', '30308', '30309', '30310'],
    areaCode: '404',
    neighborhoods: ['Downtown', 'Midtown', 'Buckhead', 'Virginia-Highland', 'Little Five Points', 'West End'],
    nearbyTowns: ['Sandy Springs', 'Roswell', 'Alpharetta', 'Marietta', 'Decatur', 'Dunwoody', 'Peachtree City'],
    counties: ['Fulton County', 'DeKalb County', 'Cobb County', 'Gwinnett County'],
    lat: 33.7490,
    lng: -84.3880
  },

  // MASSACHUSETTS
  {
    slug: 'boston',
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    metro: 'Greater Boston',
    population: '690K',
    zipCodes: ['02108', '02109', '02110', '02111', '02112', '02113', '02114', '02115', '02116', '02117'],
    areaCode: '617',
    neighborhoods: ['Downtown', 'Back Bay', 'Beacon Hill', 'North End', 'South End', 'Fenway', 'Seaport'],
    nearbyTowns: ['Cambridge', 'Somerville', 'Brookline', 'Newton', 'Quincy', 'Waltham', 'Lexington'],
    counties: ['Suffolk County', 'Middlesex County', 'Norfolk County'],
    lat: 42.3601,
    lng: -71.0589
  },

  // WASHINGTON
  {
    slug: 'seattle',
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    metro: 'Puget Sound',
    population: '750K',
    zipCodes: ['98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109', '98110'],
    areaCode: '206',
    neighborhoods: ['Downtown', 'Capitol Hill', 'Queen Anne', 'Fremont', 'Ballard', 'Georgetown', 'SoDo'],
    nearbyTowns: ['Bellevue', 'Redmond', 'Kirkland', 'Renton', 'Tacoma', 'Everett', 'Kent'],
    counties: ['King County', 'Snohomish County', 'Pierce County'],
    lat: 47.6062,
    lng: -122.3321
  },

  // COLORADO
  {
    slug: 'denver',
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    metro: 'Denver Metro',
    population: '720K',
    zipCodes: ['80201', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210'],
    areaCode: '303',
    neighborhoods: ['Downtown', 'LoDo', 'RiNo', 'Cherry Creek', 'Highlands', 'Capitol Hill', 'Wash Park'],
    nearbyTowns: ['Aurora', 'Lakewood', 'Thornton', 'Westminster', 'Arvada', 'Littleton', 'Boulder'],
    counties: ['Denver County', 'Jefferson County', 'Arapahoe County', 'Adams County'],
    lat: 39.7392,
    lng: -104.9903
  },

  // MICHIGAN
  {
    slug: 'detroit',
    city: 'Detroit',
    state: 'Michigan',
    stateAbbr: 'MI',
    metro: 'Metro Detroit',
    population: '670K',
    zipCodes: ['48201', '48202', '48203', '48204', '48205', '48206', '48207', '48208', '48209', '48210'],
    areaCode: '313',
    neighborhoods: ['Downtown', 'Midtown', 'Corktown', 'Eastern Market', 'Greektown', 'New Center'],
    nearbyTowns: ['Warren', 'Sterling Heights', 'Ann Arbor', 'Dearborn', 'Livonia', 'Troy', 'Southfield'],
    counties: ['Wayne County', 'Oakland County', 'Macomb County'],
    lat: 42.3314,
    lng: -83.0458
  },

  // MINNESOTA
  {
    slug: 'minneapolis',
    city: 'Minneapolis',
    state: 'Minnesota',
    stateAbbr: 'MN',
    metro: 'Twin Cities',
    population: '430K',
    zipCodes: ['55401', '55402', '55403', '55404', '55405', '55406', '55407', '55408', '55409', '55410'],
    areaCode: '612',
    neighborhoods: ['Downtown', 'Uptown', 'North Loop', 'Northeast', 'Linden Hills', 'Dinkytown'],
    nearbyTowns: ['St. Paul', 'Bloomington', 'Plymouth', 'Minnetonka', 'Edina', 'St. Louis Park', 'Burnsville'],
    counties: ['Hennepin County', 'Ramsey County', 'Dakota County'],
    lat: 44.9778,
    lng: -93.2650
  },

  // NORTH CAROLINA
  {
    slug: 'charlotte',
    city: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    metro: 'Charlotte Metro',
    population: '875K',
    zipCodes: ['28201', '28202', '28203', '28204', '28205', '28206', '28207', '28208', '28209', '28210'],
    areaCode: '704',
    neighborhoods: ['Uptown', 'South End', 'NoDa', 'Plaza Midwood', 'Dilworth', 'Myers Park', 'Ballantyne'],
    nearbyTowns: ['Concord', 'Gastonia', 'Rock Hill', 'Huntersville', 'Matthews', 'Mint Hill', 'Fort Mill'],
    counties: ['Mecklenburg County', 'Union County', 'Cabarrus County'],
    lat: 35.2271,
    lng: -80.8431
  },
  {
    slug: 'raleigh',
    city: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    metro: 'Research Triangle',
    population: '470K',
    zipCodes: ['27601', '27602', '27603', '27604', '27605', '27606', '27607', '27608', '27609', '27610'],
    areaCode: '919',
    neighborhoods: ['Downtown', 'North Hills', 'Cameron Village', 'Five Points', 'Glenwood South'],
    nearbyTowns: ['Durham', 'Chapel Hill', 'Cary', 'Apex', 'Wake Forest', 'Holly Springs', 'Morrisville'],
    counties: ['Wake County', 'Durham County', 'Orange County'],
    lat: 35.7796,
    lng: -78.6382
  },

  // TENNESSEE
  {
    slug: 'nashville',
    city: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    metro: 'Nashville Metro',
    population: '690K',
    zipCodes: ['37201', '37202', '37203', '37204', '37205', '37206', '37207', '37208', '37209', '37210'],
    areaCode: '615',
    neighborhoods: ['Downtown', 'The Gulch', 'East Nashville', 'Germantown', '12 South', 'Green Hills'],
    nearbyTowns: ['Franklin', 'Brentwood', 'Murfreesboro', 'Hendersonville', 'Mount Juliet', 'Spring Hill'],
    counties: ['Davidson County', 'Williamson County', 'Rutherford County'],
    lat: 36.1627,
    lng: -86.7816
  },

  // OREGON
  {
    slug: 'portland',
    city: 'Portland',
    state: 'Oregon',
    stateAbbr: 'OR',
    metro: 'Portland Metro',
    population: '650K',
    zipCodes: ['97201', '97202', '97203', '97204', '97205', '97206', '97207', '97208', '97209', '97210'],
    areaCode: '503',
    neighborhoods: ['Downtown', 'Pearl District', 'Hawthorne', 'Alberta', 'Sellwood', 'Irvington', 'Belmont'],
    nearbyTowns: ['Beaverton', 'Lake Oswego', 'Tigard', 'Milwaukie', 'Oregon City', 'Gresham', 'Hillsboro'],
    counties: ['Multnomah County', 'Washington County', 'Clackamas County'],
    lat: 45.5152,
    lng: -122.6784
  },

  // NEVADA
  {
    slug: 'las-vegas',
    city: 'Las Vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    metro: 'Las Vegas Valley',
    population: '650K',
    zipCodes: ['89101', '89102', '89103', '89104', '89106', '89107', '89108', '89109', '89110', '89115'],
    areaCode: '702',
    neighborhoods: ['Downtown', 'The Strip', 'Summerlin', 'Henderson', 'Spring Valley', 'Enterprise'],
    nearbyTowns: ['North Las Vegas', 'Boulder City', 'Mesquite', 'Pahrump'],
    counties: ['Clark County'],
    lat: 36.1699,
    lng: -115.1398
  },

  // OHIO
  {
    slug: 'columbus',
    city: 'Columbus',
    state: 'Ohio',
    stateAbbr: 'OH',
    metro: 'Columbus Metro',
    population: '900K',
    zipCodes: ['43201', '43202', '43203', '43204', '43205', '43206', '43207', '43209', '43210', '43211'],
    areaCode: '614',
    neighborhoods: ['Downtown', 'Short North', 'German Village', 'Victorian Village', 'Clintonville', 'Grandview'],
    nearbyTowns: ['Dublin', 'Westerville', 'Grove City', 'Reynoldsburg', 'Upper Arlington', 'Gahanna'],
    counties: ['Franklin County', 'Delaware County', 'Fairfield County'],
    lat: 39.9612,
    lng: -82.9988
  },

  // MISSOURI
  {
    slug: 'kansas-city',
    city: 'Kansas City',
    state: 'Missouri',
    stateAbbr: 'MO',
    metro: 'Kansas City Metro',
    population: '500K',
    zipCodes: ['64101', '64102', '64105', '64106', '64108', '64109', '64110', '64111', '64112', '64113'],
    areaCode: '816',
    neighborhoods: ['Downtown', 'River Market', 'Crossroads', 'Westport', 'Plaza', 'Brookside'],
    nearbyTowns: ['Overland Park', 'Independence', 'Lee\'s Summit', 'Olathe', 'Blue Springs'],
    counties: ['Jackson County', 'Clay County', 'Platte County', 'Johnson County'],
    lat: 39.0997,
    lng: -94.5786
  },
  {
    slug: 'st-louis',
    city: 'St. Louis',
    state: 'Missouri',
    stateAbbr: 'MO',
    metro: 'Greater St. Louis',
    population: '300K',
    zipCodes: ['63101', '63102', '63103', '63104', '63105', '63106', '63107', '63108', '63109', '63110'],
    areaCode: '314',
    neighborhoods: ['Downtown', 'Central West End', 'The Grove', 'Soulard', 'Lafayette Square', 'The Hill'],
    nearbyTowns: ['Clayton', 'University City', 'Webster Groves', 'Kirkwood', 'Chesterfield', 'Florissant'],
    counties: ['St. Louis City', 'St. Louis County', 'St. Charles County'],
    lat: 38.6270,
    lng: -90.1994
  }
]

export function getCityBySlug(slug: string): CityData | undefined {
  return citiesData.find(city => city.slug === slug)
}

export function getCitiesByState(state: string): CityData[] {
  return citiesData.filter(city => city.state === state)
}

export function getAllStates(): string[] {
  return [...new Set(citiesData.map(city => city.state))].sort()
}