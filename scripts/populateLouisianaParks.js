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

const louisianaParks = [
  {
    name: 'Bayou Segnette State Park',
    location: 'Westwego, LA',
    description: 'Features a wave pool and camping near New Orleans.',
    latitude: 29.9000,
    longitude: -90.1500,
    state: 'louisiana'
  },
  {
    name: 'Bogue Chitto State Park',
    location: 'Franklinton, LA',
    description: 'Features river recreation, hiking trails, and camping.',
    latitude: 30.8500,
    longitude: -90.1500,
    state: 'louisiana'
  },
  {
    name: 'Chemin-A-Haut State Park',
    location: 'Bastrop, LA',
    description: 'Features swimming, fishing, and camping on Bayou Bartholomew.',
    latitude: 32.7833,
    longitude: -91.9167,
    state: 'louisiana'
  },
  {
    name: 'Chicot State Park',
    location: 'Ville Platte, LA',
    description: 'Features a 2,000-acre lake, hiking trails, and camping.',
    latitude: 30.8333,
    longitude: -92.3167,
    state: 'louisiana'
  },
  {
    name: 'Cypremort Point State Park',
    location: 'Cypremort Point, LA',
    description: 'Beach park on Vermilion Bay with fishing and camping.',
    latitude: 29.7500,
    longitude: -91.8500,
    state: 'louisiana'
  },
  {
    name: 'Fairview-Riverside State Park',
    location: 'Madisonville, LA',
    description: 'Historic site with river access and camping.',
    latitude: 30.4000,
    longitude: -90.1667,
    state: 'louisiana'
  },
  {
    name: 'Fontainebleau State Park',
    location: 'Mandeville, LA',
    description: 'Features beach access, hiking trails, and camping on Lake Pontchartrain.',
    latitude: 30.3667,
    longitude: -90.0500,
    state: 'louisiana'
  },
  {
    name: 'Grand Isle State Park',
    location: 'Grand Isle, LA',
    description: 'Beach park with fishing, swimming, and camping.',
    latitude: 29.2333,
    longitude: -89.9667,
    state: 'louisiana'
  },
  {
    name: 'Jimmie Davis State Park',
    location: 'Chatham, LA',
    description: 'Features fishing, boating, and camping on Caney Lake.',
    latitude: 32.3167,
    longitude: -92.7167,
    state: 'louisiana'
  },
  {
    name: 'Lake Bistineau State Park',
    location: 'Doyline, LA',
    description: 'Features fishing, boating, and camping on Lake Bistineau.',
    latitude: 32.5167,
    longitude: -93.3167,
    state: 'louisiana'
  },
  {
    name: 'Lake Bruin State Park',
    location: 'St. Joseph, LA',
    description: 'Features swimming, fishing, and camping on Lake Bruin.',
    latitude: 31.9667,
    longitude: -91.2333,
    state: 'louisiana'
  },
  {
    name: 'Lake Claiborne State Park',
    location: 'Homer, LA',
    description: 'Features fishing, boating, and camping on Lake Claiborne.',
    latitude: 32.7833,
    longitude: -92.9167,
    state: 'louisiana'
  },
  {
    name: 'Lake D\'Arbonne State Park',
    location: 'Farmerville, LA',
    description: 'Features fishing, boating, and camping on Lake D\'Arbonne.',
    latitude: 32.7333,
    longitude: -92.3833,
    state: 'louisiana'
  },
  {
    name: 'Lake Fausse Pointe State Park',
    location: 'St. Martinville, LA',
    description: 'Features fishing, boating, and camping in the Atchafalaya Basin.',
    latitude: 30.1167,
    longitude: -91.7167,
    state: 'louisiana'
  },
  {
    name: 'North Toledo Bend State Park',
    location: 'Zwolle, LA',
    description: 'Features fishing, boating, and camping on Toledo Bend Reservoir.',
    latitude: 31.6333,
    longitude: -93.6333,
    state: 'louisiana'
  },
  {
    name: 'Palmetto Island State Park',
    location: 'Abbeville, LA',
    description: 'Features hiking trails and camping in a palmetto forest.',
    latitude: 29.8833,
    longitude: -92.1333,
    state: 'louisiana'
  },
  {
    name: 'Poverty Point Reservoir State Park',
    location: 'Delhi, LA',
    description: 'Features fishing, boating, and camping on Poverty Point Reservoir.',
    latitude: 32.4667,
    longitude: -91.4833,
    state: 'louisiana'
  },
  {
    name: 'St. Bernard State Park',
    location: 'Braithwaite, LA',
    description: 'Features fishing, boating, and camping near New Orleans.',
    latitude: 29.8667,
    longitude: -89.8833,
    state: 'louisiana'
  },
  {
    name: 'Sam Houston Jones State Park',
    location: 'Lake Charles, LA',
    description: 'Features hiking trails and camping in a pine forest.',
    latitude: 30.2667,
    longitude: -93.2667,
    state: 'louisiana'
  },
  {
    name: 'South Toledo Bend State Park',
    location: 'Anacoco, LA',
    description: 'Features fishing, boating, and camping on Toledo Bend Reservoir.',
    latitude: 31.2500,
    longitude: -93.3667,
    state: 'louisiana'
  },
  {
    name: 'Tickfaw State Park',
    location: 'Springfield, LA',
    description: 'Features hiking trails and camping along Tickfaw River.',
    latitude: 30.4333,
    longitude: -90.6833,
    state: 'louisiana'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of louisianaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Louisiana parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 