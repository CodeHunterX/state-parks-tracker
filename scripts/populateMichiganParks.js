const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBsHvtw1SaoD7md_sEVg2OrxJzw7YAV-h8",
  authDomain: "park-tracker-97b96.firebaseapp.com",
  databaseURL: "https://park-tracker-97b96-default-rtdb.firebaseio.com",
  projectId: "park-tracker-97b96",
  storageBucket: "park-tracker-97b96.firebasestorage.app",
  messagingSenderId: "739891166534",
  appId: "1:739891166534:web:09de77d41eecb8c6eb7947",
  measurementId: "G-90PNWN9V13"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const michiganParks = [
  {
    name: "Algonac State Park",
    description: "Features scenic views of the St. Clair River and opportunities for boating and fishing.",
    location: "Algonac, MI",
    latitude: 42.62,
    longitude: -82.53,
    state: "michigan"
  },
  {
    name: "Aloha State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Cheboygan, MI",
    latitude: 45.57,
    longitude: -84.43,
    state: "michigan"
  },
  {
    name: "Baraga State Park",
    description: "Features scenic views of Keweenaw Bay and hiking trails.",
    location: "Baraga, MI",
    latitude: 46.78,
    longitude: -88.49,
    state: "michigan"
  },
  {
    name: "Bay City State Park",
    description: "Features a beach on Saginaw Bay and extensive hiking trails.",
    location: "Bay City, MI",
    latitude: 43.56,
    longitude: -83.88,
    state: "michigan"
  },
  {
    name: "Belle Isle Park",
    description: "Urban island park featuring a conservatory, aquarium, and scenic views of Detroit.",
    location: "Detroit, MI",
    latitude: 42.34,
    longitude: -82.98,
    state: "michigan"
  },
  {
    name: "Bewabic State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Crystal Falls, MI",
    latitude: 46.10,
    longitude: -88.33,
    state: "michigan"
  },
  {
    name: "Brimley State Park",
    description: "Features a beach on Lake Superior and scenic views.",
    location: "Brimley, MI",
    latitude: 46.41,
    longitude: -84.58,
    state: "michigan"
  },
  {
    name: "Burt Lake State Park",
    description: "Features a large lake with swimming, boating, and fishing opportunities.",
    location: "Indian River, MI",
    latitude: 45.44,
    longitude: -84.68,
    state: "michigan"
  },
  {
    name: "Cambridge Junction State Park",
    description: "Historic site featuring the Walker Tavern and pioneer history.",
    location: "Brooklyn, MI",
    latitude: 42.06,
    longitude: -84.23,
    state: "michigan"
  },
  {
    name: "Cheboygan State Park",
    description: "Features scenic views of Lake Huron and hiking trails.",
    location: "Cheboygan, MI",
    latitude: 45.65,
    longitude: -84.47,
    state: "michigan"
  },
  {
    name: "Clear Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Atlanta, MI",
    latitude: 45.07,
    longitude: -84.21,
    state: "michigan"
  },
  {
    name: "Coldwater Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Coldwater, MI",
    latitude: 41.94,
    longitude: -85.00,
    state: "michigan"
  },
  {
    name: "Craig Lake State Park",
    description: "Remote wilderness area featuring lakes and hiking trails.",
    location: "Michigamme, MI",
    latitude: 46.31,
    longitude: -88.07,
    state: "michigan"
  },
  {
    name: "Dodge #4 State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Howell, MI",
    latitude: 42.61,
    longitude: -83.93,
    state: "michigan"
  },
  {
    name: "Duck Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Whitehall, MI",
    latitude: 43.41,
    longitude: -86.35,
    state: "michigan"
  },
  {
    name: "Fayette State Park",
    description: "Historic site featuring a restored 19th-century iron smelting town.",
    location: "Garden, MI",
    latitude: 45.72,
    longitude: -86.67,
    state: "michigan"
  },
  {
    name: "Fisherman's Island State Park",
    description: "Features scenic views of Lake Michigan and hiking trails.",
    location: "Charlevoix, MI",
    latitude: 45.25,
    longitude: -85.33,
    state: "michigan"
  },
  {
    name: "Fort Wilkins State Park",
    description: "Historic site featuring a restored 1844 military outpost.",
    location: "Copper Harbor, MI",
    latitude: 47.47,
    longitude: -87.87,
    state: "michigan"
  },
  {
    name: "Grand Haven State Park",
    description: "Features a beach on Lake Michigan and scenic views.",
    location: "Grand Haven, MI",
    latitude: 43.06,
    longitude: -86.25,
    state: "michigan"
  },
  {
    name: "Grand Mere State Park",
    description: "Features sand dunes and hiking trails along Lake Michigan.",
    location: "Stevensville, MI",
    latitude: 42.00,
    longitude: -86.52,
    state: "michigan"
  },
  {
    name: "Harrisville State Park",
    description: "Features a beach on Lake Huron and scenic views.",
    location: "Harrisville, MI",
    latitude: 44.66,
    longitude: -83.29,
    state: "michigan"
  },
  {
    name: "Hartwick Pines State Park",
    description: "Features old-growth pine forest and logging museum.",
    location: "Grayling, MI",
    latitude: 44.73,
    longitude: -84.67,
    state: "michigan"
  },
  {
    name: "Hayes State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Onsted, MI",
    latitude: 42.06,
    longitude: -84.19,
    state: "michigan"
  },
  {
    name: "Hoeft State Park",
    description: "Features a beach on Lake Huron and scenic views.",
    location: "Rogers City, MI",
    latitude: 45.42,
    longitude: -83.82,
    state: "michigan"
  },
  {
    name: "Hoffmaster State Park",
    description: "Features sand dunes and hiking trails along Lake Michigan.",
    location: "Norton Shores, MI",
    latitude: 43.11,
    longitude: -86.27,
    state: "michigan"
  },
  {
    name: "Holland State Park",
    description: "Features a beach on Lake Michigan and scenic views.",
    location: "Holland, MI",
    latitude: 42.77,
    longitude: -86.21,
    state: "michigan"
  },
  {
    name: "Indian Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Manistique, MI",
    latitude: 45.96,
    longitude: -86.25,
    state: "michigan"
  },
  {
    name: "Interlochen State Park",
    description: "Features lakes with swimming, boating, and fishing opportunities.",
    location: "Interlochen, MI",
    latitude: 44.64,
    longitude: -85.77,
    state: "michigan"
  },
  {
    name: "Lake Gogebic State Park",
    description: "Features a large lake with swimming, boating, and fishing opportunities.",
    location: "Bergland, MI",
    latitude: 46.57,
    longitude: -89.58,
    state: "michigan"
  },
  {
    name: "Lakeport State Park",
    description: "Features a beach on Lake Huron and scenic views.",
    location: "Lakeport, MI",
    latitude: 43.12,
    longitude: -82.49,
    state: "michigan"
  },
  {
    name: "Leelanau State Park",
    description: "Features scenic views of Lake Michigan and hiking trails.",
    location: "Northport, MI",
    latitude: 45.12,
    longitude: -85.55,
    state: "michigan"
  },
  {
    name: "Ludington State Park",
    description: "Features sand dunes, beaches, and extensive hiking trails.",
    location: "Ludington, MI",
    latitude: 44.00,
    longitude: -86.47,
    state: "michigan"
  },
  {
    name: "Mackinac Island State Park",
    description: "Historic island featuring Fort Mackinac and scenic views.",
    location: "Mackinac Island, MI",
    latitude: 45.87,
    longitude: -84.62,
    state: "michigan"
  },
  {
    name: "Maybury State Park",
    description: "Features hiking and equestrian trails near Detroit.",
    location: "Northville, MI",
    latitude: 42.43,
    longitude: -83.58,
    state: "michigan"
  },
  {
    name: "McLain State Park",
    description: "Features a beach on Lake Superior and scenic views.",
    location: "Hancock, MI",
    latitude: 47.25,
    longitude: -88.60,
    state: "michigan"
  },
  {
    name: "Mears State Park",
    description: "Features a beach on Lake Michigan and scenic views.",
    location: "Pentwater, MI",
    latitude: 43.78,
    longitude: -86.45,
    state: "michigan"
  },
  {
    name: "Mitchell State Park",
    description: "Features lakes with swimming, boating, and fishing opportunities.",
    location: "Cadillac, MI",
    latitude: 44.25,
    longitude: -85.40,
    state: "michigan"
  },
  {
    name: "Muskallonge Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Newberry, MI",
    latitude: 46.67,
    longitude: -85.67,
    state: "michigan"
  },
  {
    name: "Muskegon State Park",
    description: "Features beaches on Lake Michigan and Muskegon Lake.",
    location: "Muskegon, MI",
    latitude: 43.27,
    longitude: -86.35,
    state: "michigan"
  },
  {
    name: "Negwegon State Park",
    description: "Features a beach on Lake Huron and hiking trails.",
    location: "Alpena, MI",
    latitude: 45.00,
    longitude: -83.33,
    state: "michigan"
  },
  {
    name: "Newaygo State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Newaygo, MI",
    latitude: 43.42,
    longitude: -85.80,
    state: "michigan"
  },
  {
    name: "North Higgins Lake State Park",
    description: "Features a large lake with swimming, boating, and fishing opportunities.",
    location: "Roscommon, MI",
    latitude: 44.50,
    longitude: -84.80,
    state: "michigan"
  },
  {
    name: "Orchard Beach State Park",
    description: "Features a beach on Lake Michigan and scenic views.",
    location: "Manistee, MI",
    latitude: 44.25,
    longitude: -86.33,
    state: "michigan"
  },
  {
    name: "Otsego Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Gaylord, MI",
    latitude: 45.02,
    longitude: -84.67,
    state: "michigan"
  },
  {
    name: "Palms Book State Park",
    description: "Features Kitch-iti-kipi, Michigan's largest natural freshwater spring.",
    location: "Manistique, MI",
    latitude: 46.00,
    longitude: -86.33,
    state: "michigan"
  },
  {
    name: "Petoskey State Park",
    description: "Features a beach on Lake Michigan and fossil hunting opportunities.",
    location: "Petoskey, MI",
    latitude: 45.37,
    longitude: -84.92,
    state: "michigan"
  },
  {
    name: "Porcupine Mountains State Park",
    description: "Features scenic views, waterfalls, and extensive hiking trails.",
    location: "Ontonagon, MI",
    latitude: 46.80,
    longitude: -89.80,
    state: "michigan"
  },
  {
    name: "Port Crescent State Park",
    description: "Features a beach on Lake Huron and scenic views.",
    location: "Port Austin, MI",
    latitude: 44.00,
    longitude: -83.00,
    state: "michigan"
  },
  {
    name: "Saugatuck Dunes State Park",
    description: "Features sand dunes and hiking trails along Lake Michigan.",
    location: "Saugatuck, MI",
    latitude: 42.67,
    longitude: -86.20,
    state: "michigan"
  },
  {
    name: "Seven Lakes State Park",
    description: "Features multiple lakes with swimming, boating, and fishing opportunities.",
    location: "Holly, MI",
    latitude: 42.81,
    longitude: -83.55,
    state: "michigan"
  },
  {
    name: "Silver Lake State Park",
    description: "Features sand dunes and ORV riding opportunities.",
    location: "Mears, MI",
    latitude: 43.67,
    longitude: -86.52,
    state: "michigan"
  },
  {
    name: "Sleeper State Park",
    description: "Features a beach on Lake Huron and scenic views.",
    location: "Caseville, MI",
    latitude: 43.92,
    longitude: -83.17,
    state: "michigan"
  },
  {
    name: "Sleepy Hollow State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Laingsburg, MI",
    latitude: 42.94,
    longitude: -84.38,
    state: "michigan"
  },
  {
    name: "South Higgins Lake State Park",
    description: "Features a large lake with swimming, boating, and fishing opportunities.",
    location: "Roscommon, MI",
    latitude: 44.50,
    longitude: -84.80,
    state: "michigan"
  },
  {
    name: "Straits State Park",
    description: "Features scenic views of the Mackinac Bridge and Straits of Mackinac.",
    location: "St. Ignace, MI",
    latitude: 45.87,
    longitude: -84.72,
    state: "michigan"
  },
  {
    name: "Tahquamenon Falls State Park",
    description: "Features Michigan's second largest waterfall and extensive hiking trails.",
    location: "Paradise, MI",
    latitude: 46.57,
    longitude: -85.25,
    state: "michigan"
  },
  {
    name: "Tawas Point State Park",
    description: "Features a beach on Lake Huron and scenic views.",
    location: "East Tawas, MI",
    latitude: 44.25,
    longitude: -83.45,
    state: "michigan"
  },
  {
    name: "Thompson's Harbor State Park",
    description: "Features a beach on Lake Huron and hiking trails.",
    location: "Rogers City, MI",
    latitude: 45.42,
    longitude: -83.82,
    state: "michigan"
  },
  {
    name: "Traverse City State Park",
    description: "Features a beach on Grand Traverse Bay and scenic views.",
    location: "Traverse City, MI",
    latitude: 44.75,
    longitude: -85.62,
    state: "michigan"
  },
  {
    name: "Twin Lakes State Park",
    description: "Features lakes with swimming, boating, and fishing opportunities.",
    location: "Stanton, MI",
    latitude: 43.29,
    longitude: -85.08,
    state: "michigan"
  },
  {
    name: "Van Buren State Park",
    description: "Features a beach on Lake Michigan and scenic views.",
    location: "South Haven, MI",
    latitude: 42.37,
    longitude: -86.27,
    state: "michigan"
  },
  {
    name: "Van Riper State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Champion, MI",
    latitude: 46.38,
    longitude: -87.94,
    state: "michigan"
  },
  {
    name: "Warren Dunes State Park",
    description: "Features sand dunes and a beach on Lake Michigan.",
    location: "Sawyer, MI",
    latitude: 41.90,
    longitude: -86.60,
    state: "michigan"
  },
  {
    name: "Warren Woods State Park",
    description: "Features old-growth forest and hiking trails.",
    location: "Three Oaks, MI",
    latitude: 41.83,
    longitude: -86.62,
    state: "michigan"
  },
  {
    name: "Watkins Lake State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Brooklyn, MI",
    latitude: 42.06,
    longitude: -84.23,
    state: "michigan"
  },
  {
    name: "Wells State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Cedar Springs, MI",
    latitude: 43.22,
    longitude: -85.55,
    state: "michigan"
  },
  {
    name: "Wilderness State Park",
    description: "Features a beach on Lake Michigan and extensive hiking trails.",
    location: "Carp Lake, MI",
    latitude: 45.72,
    longitude: -84.92,
    state: "michigan"
  },
  {
    name: "Wilson State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Harrison, MI",
    latitude: 44.02,
    longitude: -84.80,
    state: "michigan"
  },
  {
    name: "Young State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Boyne City, MI",
    latitude: 45.22,
    longitude: -85.02,
    state: "michigan"
  }
];

async function populateMichiganParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of michiganParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Michigan parks have been added to the database');
  } catch (error) {
    console.error('Error adding Michigan parks:', error);
  }
}

populateMichiganParks(); 