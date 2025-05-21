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

const indianaParks = [
  {
    name: "Brown County State Park",
    description: "Indiana's largest state park featuring scenic vistas, hiking trails, and the historic Abe Martin Lodge.",
    location: "Nashville, IN",
    latitude: 39.11,
    longitude: -86.26,
    state: "indiana"
  },
  {
    name: "Chain O' Lakes State Park",
    description: "Features eight connected kettle lakes formed by glaciers, offering boating, fishing, and hiking opportunities.",
    location: "Albion, IN",
    latitude: 41.33,
    longitude: -85.38,
    state: "indiana"
  },
  {
    name: "Charlestown State Park",
    description: "Built on the grounds of the old Indiana Army Ammunition Plant, featuring Fourteen Mile Creek and scenic trails.",
    location: "Charlestown, IN",
    latitude: 38.43,
    longitude: -85.63,
    state: "indiana"
  },
  {
    name: "Clifty Falls State Park",
    description: "Known for its dramatic waterfalls, deep canyons, and scenic views of the Ohio River.",
    location: "Madison, IN",
    latitude: 38.75,
    longitude: -85.42,
    state: "indiana"
  },
  {
    name: "Falls of the Ohio State Park",
    description: "Features 390-million-year-old fossil beds and scenic views of the Ohio River.",
    location: "Clarksville, IN",
    latitude: 38.28,
    longitude: -85.76,
    state: "indiana"
  },
  {
    name: "Fort Harrison State Park",
    description: "Historic military site featuring the Fall Creek Trail and Delaware Lake.",
    location: "Indianapolis, IN",
    latitude: 39.86,
    longitude: -85.99,
    state: "indiana"
  },
  {
    name: "Harmonie State Park",
    description: "Located along the Wabash River, offering camping, fishing, and hiking trails.",
    location: "New Harmony, IN",
    latitude: 38.12,
    longitude: -87.93,
    state: "indiana"
  },
  {
    name: "Indiana Dunes State Park",
    description: "Features 3 miles of Lake Michigan shoreline, sand dunes, and diverse ecosystems.",
    location: "Chesterton, IN",
    latitude: 41.65,
    longitude: -87.05,
    state: "indiana"
  },
  {
    name: "Lincoln State Park",
    description: "Historic site where Abraham Lincoln spent his youth, featuring Lake Lincoln and hiking trails.",
    location: "Lincoln City, IN",
    latitude: 38.12,
    longitude: -86.99,
    state: "indiana"
  },
  {
    name: "McCormick's Creek State Park",
    description: "Indiana's first state park, featuring a canyon, waterfall, and historic Canyon Inn.",
    location: "Spencer, IN",
    latitude: 39.29,
    longitude: -86.72,
    state: "indiana"
  },
  {
    name: "Mounds State Park",
    description: "Features 10 Native American mounds and the historic Bronnenberg House.",
    location: "Anderson, IN",
    latitude: 40.10,
    longitude: -85.62,
    state: "indiana"
  },
  {
    name: "O'Bannon Woods State Park",
    description: "Located along the Ohio River, featuring the historic Wyandotte Caves and scenic trails.",
    location: "Corydon, IN",
    latitude: 38.22,
    longitude: -86.28,
    state: "indiana"
  },
  {
    name: "Ouabache State Park",
    description: "Features Kunkel Lake, camping facilities, and the historic Bison Range.",
    location: "Bluffton, IN",
    latitude: 40.75,
    longitude: -85.17,
    state: "indiana"
  },
  {
    name: "Pokagon State Park",
    description: "Features Lake James, the historic Potawatomi Inn, and winter toboggan run.",
    location: "Angola, IN",
    latitude: 41.72,
    longitude: -85.00,
    state: "indiana"
  },
  {
    name: "Potato Creek State Park",
    description: "Centered around Worster Lake, offering camping, fishing, and extensive hiking trails.",
    location: "North Liberty, IN",
    latitude: 41.63,
    longitude: -86.33,
    state: "indiana"
  },
  {
    name: "Prophetstown State Park",
    description: "Features the historic Prophet's Rock and scenic Wabash River views.",
    location: "West Lafayette, IN",
    latitude: 40.52,
    longitude: -86.85,
    state: "indiana"
  },
  {
    name: "Shades State Park",
    description: "Known for its deep canyons, unique rock formations, and scenic Sugar Creek.",
    location: "Waveland, IN",
    latitude: 39.95,
    longitude: -87.12,
    state: "indiana"
  },
  {
    name: "Shakamak State Park",
    description: "Features three lakes, camping facilities, and extensive hiking trails.",
    location: "Jasonville, IN",
    latitude: 39.17,
    longitude: -87.25,
    state: "indiana"
  },
  {
    name: "Spring Mill State Park",
    description: "Features a restored pioneer village, historic grist mill, and scenic trails.",
    location: "Mitchell, IN",
    latitude: 38.73,
    longitude: -86.42,
    state: "indiana"
  },
  {
    name: "Summit Lake State Park",
    description: "Centered around Summit Lake, offering camping, fishing, and hiking opportunities.",
    location: "New Castle, IN",
    latitude: 40.00,
    longitude: -85.25,
    state: "indiana"
  },
  {
    name: "Tippecanoe River State Park",
    description: "Features the scenic Tippecanoe River, camping, and extensive hiking trails.",
    location: "Winamac, IN",
    latitude: 41.13,
    longitude: -86.60,
    state: "indiana"
  },
  {
    name: "Turkey Run State Park",
    description: "Known for its sandstone ravines, suspension bridges, and scenic Sugar Creek.",
    location: "Marshall, IN",
    latitude: 39.88,
    longitude: -87.20,
    state: "indiana"
  },
  {
    name: "Versailles State Park",
    description: "Features Laughery Creek, camping facilities, and extensive hiking trails.",
    location: "Versailles, IN",
    latitude: 39.07,
    longitude: -85.25,
    state: "indiana"
  },
  {
    name: "White River State Park",
    description: "Urban park in downtown Indianapolis featuring museums, gardens, and the Indianapolis Zoo.",
    location: "Indianapolis, IN",
    latitude: 39.77,
    longitude: -86.17,
    state: "indiana"
  },
  {
    name: "Whitewater Memorial State Park",
    description: "Features Brookville Lake, camping facilities, and scenic hiking trails.",
    location: "Liberty, IN",
    latitude: 39.58,
    longitude: -84.92,
    state: "indiana"
  }
];

async function populateIndianaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of indianaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Indiana parks have been added to the database');
  } catch (error) {
    console.error('Error adding Indiana parks:', error);
  }
}

populateIndianaParks(); 