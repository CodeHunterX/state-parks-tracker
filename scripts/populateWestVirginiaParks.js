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

const westVirginiaParks = [
  {
    name: 'Audra State Park',
    location: 'Buckhannon, WV',
    description: 'Features the Middle Fork River and scenic hiking trails.',
    latitude: 39.0333,
    longitude: -80.0500,
    state: 'west_virginia'
  },
  {
    name: 'Babcock State Park',
    location: 'Clifftop, WV',
    description: 'Known for the Glade Creek Grist Mill and scenic mountain views.',
    latitude: 37.9667,
    longitude: -80.9500,
    state: 'west_virginia'
  },
  {
    name: 'Beartown State Park',
    location: 'Hillsboro, WV',
    description: 'Features unique rock formations and boardwalk trails.',
    latitude: 38.0667,
    longitude: -80.2667,
    state: 'west_virginia'
  },
  {
    name: 'Beech Fork State Park',
    location: 'Barboursville, WV',
    description: 'Lake park with boating, fishing, and camping.',
    latitude: 38.4000,
    longitude: -82.2333,
    state: 'west_virginia'
  },
  {
    name: 'Berkeley Springs State Park',
    location: 'Berkeley Springs, WV',
    description: 'Historic mineral springs and spa town.',
    latitude: 39.6333,
    longitude: -78.2333,
    state: 'west_virginia'
  },
  {
    name: 'Blennerhassett Island State Park',
    location: 'Parkersburg, WV',
    description: 'Historic island with mansion tours and river access.',
    latitude: 39.2667,
    longitude: -81.5667,
    state: 'west_virginia'
  },
  {
    name: 'Bluestone State Park',
    location: 'Hinton, WV',
    description: 'Located on Bluestone Lake with boating and fishing.',
    latitude: 37.6333,
    longitude: -80.9000,
    state: 'west_virginia'
  },
  {
    name: 'Camp Creek and Forest State Park',
    location: 'Camp Creek, WV',
    description: 'Features waterfalls and hiking trails.',
    latitude: 37.5000,
    longitude: -81.1167,
    state: 'west_virginia'
  },
  {
    name: 'Carnifex Ferry Battlefield State Park',
    location: 'Summersville, WV',
    description: 'Civil War battlefield with hiking trails and museum.',
    latitude: 38.2167,
    longitude: -80.9333,
    state: 'west_virginia'
  },
  {
    name: 'Cathedral State Park',
    location: 'Aurora, WV',
    description: 'Features old-growth hemlock forest and hiking trails.',
    latitude: 39.3167,
    longitude: -79.5500,
    state: 'west_virginia'
  },
  {
    name: 'Fairfax Stone State Park',
    location: 'Thomas, WV',
    description: 'Historic marker of the Fairfax Line boundary.',
    latitude: 39.2167,
    longitude: -79.4833,
    state: 'west_virginia'
  },
  {
    name: 'Pinnacle Rock State Park',
    location: 'Bramwell, WV',
    description: 'Features a distinctive rock formation and hiking trails.',
    latitude: 37.3167,
    longitude: -81.3167,
    state: 'west_virginia'
  },
  {
    name: 'Summersville Lake State Park',
    location: 'Summersville, WV',
    description: 'Lake park with boating, fishing, and rock climbing.',
    latitude: 38.2333,
    longitude: -80.8500,
    state: 'west_virginia'
  },
  {
    name: 'Tu-Endie-Wei State Park',
    location: 'Point Pleasant, WV',
    description: 'Historic site of the Battle of Point Pleasant.',
    latitude: 38.8333,
    longitude: -82.1333,
    state: 'west_virginia'
  },
  {
    name: 'Valley Falls State Park',
    location: 'Fairmont, WV',
    description: 'Features waterfalls and hiking trails along the Tygart Valley River.',
    latitude: 39.4000,
    longitude: -80.1000,
    state: 'west_virginia'
  },
  {
    name: 'Watoga State Park',
    location: 'Marlinton, WV',
    description: 'West Virginia\'s largest state park with lake recreation and hiking.',
    latitude: 38.1167,
    longitude: -80.1500,
    state: 'west_virginia'
  },
  {
    name: 'Watters Smith State Park',
    location: 'Lost Creek, WV',
    description: 'Historic farm with hiking trails and pioneer history.',
    latitude: 39.1667,
    longitude: -80.3500,
    state: 'west_virginia'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of westVirginiaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All West Virginia parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 