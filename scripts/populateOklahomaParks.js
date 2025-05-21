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

const oklahomaParks = [
  {
    name: 'Alabaster Caverns State Park',
    location: 'Freedom, OK',
    description: 'Features the largest natural gypsum cave in the world open to the public.',
    latitude: 36.6950,
    longitude: -99.1500,
    state: 'oklahoma'
  },
  {
    name: 'Arrowhead State Park',
    location: 'Canadian, OK',
    description: 'Located on Lake Eufaula with boating, fishing, and camping facilities.',
    latitude: 35.1833,
    longitude: -95.6167,
    state: 'oklahoma'
  },
  {
    name: 'Black Mesa State Park',
    location: 'Kenton, OK',
    description: 'Features Oklahoma\'s highest point and unique high plains ecosystem.',
    latitude: 36.9333,
    longitude: -102.9167,
    state: 'oklahoma'
  },
  {
    name: 'Boiling Springs State Park',
    location: 'Woodward, OK',
    description: 'Known for its natural springs and scenic hiking trails.',
    latitude: 36.4333,
    longitude: -99.0500,
    state: 'oklahoma'
  },
  {
    name: 'Cherokee Landing State Park',
    location: 'Tahlequah, OK',
    description: 'Located on Lake Tenkiller with boating and fishing opportunities.',
    latitude: 35.6167,
    longitude: -95.0167,
    state: 'oklahoma'
  },
  {
    name: 'Clayton Lake State Park',
    location: 'Clayton, OK',
    description: 'Features dinosaur tracks and lake recreation.',
    latitude: 34.5833,
    longitude: -95.3500,
    state: 'oklahoma'
  },
  {
    name: 'Fort Cobb State Park',
    location: 'Fort Cobb, OK',
    description: 'Lake park with boating, fishing, and camping facilities.',
    latitude: 35.1167,
    longitude: -98.4333,
    state: 'oklahoma'
  },
  {
    name: 'Foss State Park',
    location: 'Foss, OK',
    description: 'Located on Foss Lake with water recreation and camping.',
    latitude: 35.4500,
    longitude: -99.1667,
    state: 'oklahoma'
  },
  {
    name: 'Gloss Mountain State Park',
    location: 'Fairview, OK',
    description: 'Features unique mesas and hiking trails.',
    latitude: 36.2833,
    longitude: -98.3500,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Bernice',
    location: 'Bernice, OK',
    description: 'Part of Grand Lake with boating and fishing access.',
    latitude: 36.6167,
    longitude: -94.7833,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Cherokee',
    location: 'Cherokee, OK',
    description: 'Part of Grand Lake with marina and camping facilities.',
    latitude: 36.7500,
    longitude: -98.3500,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Disney',
    location: 'Disney, OK',
    description: 'Part of Grand Lake with water recreation and camping.',
    latitude: 36.4833,
    longitude: -95.0167,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Honey Creek',
    location: 'Grove, OK',
    description: 'Part of Grand Lake with scenic views and water activities.',
    latitude: 36.5833,
    longitude: -94.7833,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Little Blue',
    location: 'Grove, OK',
    description: 'Part of Grand Lake with boating and fishing access.',
    latitude: 36.5667,
    longitude: -94.7833,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Spavinaw',
    location: 'Spavinaw, OK',
    description: 'Part of Grand Lake with water recreation and camping.',
    latitude: 36.3833,
    longitude: -95.0500,
    state: 'oklahoma'
  },
  {
    name: 'Grand Lake: Twin Bridges',
    location: 'Grove, OK',
    description: 'Part of Grand Lake with marina and camping facilities.',
    latitude: 36.5833,
    longitude: -94.7833,
    state: 'oklahoma'
  },
  {
    name: 'Great Plains State Park',
    location: 'Mountain Park, OK',
    description: 'Features lake recreation and camping in southwestern Oklahoma.',
    latitude: 34.7000,
    longitude: -98.9500,
    state: 'oklahoma'
  },
  {
    name: 'Lake Texoma State Park',
    location: 'Kingston, OK',
    description: 'Located on Lake Texoma with boating, fishing, and camping.',
    latitude: 33.9667,
    longitude: -96.6667,
    state: 'oklahoma'
  },
  {
    name: 'Lake Wister State Park',
    location: 'Wister, OK',
    description: 'Features lake recreation and camping in southeastern Oklahoma.',
    latitude: 34.9667,
    longitude: -94.7167,
    state: 'oklahoma'
  },
  {
    name: 'Little Sahara State Park',
    location: 'Waynoka, OK',
    description: 'Known for its sand dunes and off-road vehicle recreation.',
    latitude: 36.5833,
    longitude: -98.9167,
    state: 'oklahoma'
  },
  {
    name: 'McGee Creek State Park',
    location: 'Atoka, OK',
    description: 'Features lake recreation and camping in southeastern Oklahoma.',
    latitude: 34.7833,
    longitude: -96.2833,
    state: 'oklahoma'
  },
  {
    name: 'Natural Falls State Park',
    location: 'Colcord, OK',
    description: 'Known for its 77-foot waterfall and scenic hiking trails.',
    latitude: 36.4667,
    longitude: -94.7167,
    state: 'oklahoma'
  },
  {
    name: 'Osage Hills State Park',
    location: 'Pawhuska, OK',
    description: 'Features hiking trails and camping in the Osage Hills.',
    latitude: 36.7167,
    longitude: -96.3333,
    state: 'oklahoma'
  },
  {
    name: 'Quartz Mountain State Park',
    location: 'Lone Wolf, OK',
    description: 'Known for its scenic mountain views and lake recreation.',
    latitude: 34.9167,
    longitude: -99.3333,
    state: 'oklahoma'
  },
  {
    name: 'Raymond Gary State Park',
    location: 'Fort Towson, OK',
    description: 'Features lake recreation and camping in southeastern Oklahoma.',
    latitude: 34.0167,
    longitude: -95.2667,
    state: 'oklahoma'
  },
  {
    name: 'Salt Plains State Park',
    location: 'Jet, OK',
    description: 'Known for its unique salt flats and crystal digging.',
    latitude: 36.7333,
    longitude: -98.2167,
    state: 'oklahoma'
  },
  {
    name: 'Sequoyah Bay State Park',
    location: 'Wagoner, OK',
    description: 'Located on Fort Gibson Lake with boating and fishing.',
    latitude: 35.9667,
    longitude: -95.3667,
    state: 'oklahoma'
  },
  {
    name: 'Talimena State Park',
    location: 'Talihina, OK',
    description: 'Features scenic views along the Talimena Scenic Drive.',
    latitude: 34.7500,
    longitude: -94.9833,
    state: 'oklahoma'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of oklahomaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Oklahoma parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 