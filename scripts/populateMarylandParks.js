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

const marylandParks = [
  {
    name: 'Assateague State Park',
    location: 'Berlin, MD',
    description: 'Features beach access, camping, and wild horses on Assateague Island.',
    latitude: 38.2333,
    longitude: -75.1500,
    state: 'maryland'
  },
  {
    name: 'Big Run State Park',
    location: 'Swanton, MD',
    description: 'Features camping and hiking trails in Garrett County.',
    latitude: 39.5000,
    longitude: -79.4167,
    state: 'maryland'
  },
  {
    name: 'Calvert Cliffs State Park',
    location: 'Lusby, MD',
    description: 'Features fossil hunting, hiking trails, and scenic views of the Chesapeake Bay.',
    latitude: 38.4000,
    longitude: -76.4167,
    state: 'maryland'
  },
  {
    name: 'Catoctin Mountain Park',
    location: 'Thurmont, MD',
    description: 'Features hiking trails, camping, and scenic mountain views.',
    latitude: 39.6500,
    longitude: -77.4667,
    state: 'maryland'
  },
  {
    name: 'Cedarville State Forest',
    location: 'Brandywine, MD',
    description: 'Features hiking trails, camping, and wildlife viewing.',
    latitude: 38.6500,
    longitude: -76.8167,
    state: 'maryland'
  },
  {
    name: 'Chapman State Park',
    location: 'La Plata, MD',
    description: 'Features water recreation and hiking trails.',
    latitude: 38.5167,
    longitude: -76.9667,
    state: 'maryland'
  },
  {
    name: 'Cunningham Falls State Park',
    location: 'Thurmont, MD',
    description: 'Features the largest cascading waterfall in Maryland and camping.',
    latitude: 39.5833,
    longitude: -77.4667,
    state: 'maryland'
  },
  {
    name: 'Dans Mountain State Park',
    location: 'Lonaconing, MD',
    description: 'Features scenic views and hiking trails.',
    latitude: 39.5667,
    longitude: -78.8833,
    state: 'maryland'
  },
  {
    name: 'Deep Creek Lake State Park',
    location: 'Swanton, MD',
    description: 'Features water recreation, camping, and hiking trails.',
    latitude: 39.5000,
    longitude: -79.3167,
    state: 'maryland'
  },
  {
    name: 'Elk Neck State Park',
    location: 'North East, MD',
    description: 'Features beach access, camping, and scenic views of the Chesapeake Bay.',
    latitude: 39.5000,
    longitude: -75.9500,
    state: 'maryland'
  },
  {
    name: 'Fort Frederick State Park',
    location: 'Big Pool, MD',
    description: 'Features historic fort, camping, and hiking trails.',
    latitude: 39.6167,
    longitude: -78.0000,
    state: 'maryland'
  },
  {
    name: 'Fort Tonoloway State Park',
    location: 'Hancock, MD',
    description: 'Features historic site and scenic views of the Potomac River.',
    latitude: 39.7000,
    longitude: -78.1833,
    state: 'maryland'
  },
  {
    name: 'Gambrill State Park',
    location: 'Frederick, MD',
    description: 'Features scenic views and extensive hiking trails.',
    latitude: 39.4667,
    longitude: -77.5000,
    state: 'maryland'
  },
  {
    name: 'Greenbrier State Park',
    location: 'Boonsboro, MD',
    description: 'Features swimming, camping, and hiking trails.',
    latitude: 39.5333,
    longitude: -77.6333,
    state: 'maryland'
  },
  {
    name: 'Greenwell State Park',
    location: 'Hollywood, MD',
    description: 'Features hiking trails and scenic views of the Patuxent River.',
    latitude: 38.3167,
    longitude: -76.5500,
    state: 'maryland'
  },
  {
    name: 'Hart-Miller Island State Park',
    location: 'Baltimore, MD',
    description: 'Features beach access and wildlife viewing in the Chesapeake Bay.',
    latitude: 39.2667,
    longitude: -76.3667,
    state: 'maryland'
  },
  {
    name: 'Herrington Manor State Park',
    location: 'Oakland, MD',
    description: 'Features lake recreation, camping, and hiking trails.',
    latitude: 39.4500,
    longitude: -79.4667,
    state: 'maryland'
  },
  {
    name: 'Janes Island State Park',
    location: 'Crisfield, MD',
    description: 'Features camping, kayaking, and scenic views of the Chesapeake Bay.',
    latitude: 37.9667,
    longitude: -75.8500,
    state: 'maryland'
  },
  {
    name: 'Martinak State Park',
    location: 'Denton, MD',
    description: 'Features camping and scenic views of the Choptank River.',
    latitude: 38.8667,
    longitude: -75.8333,
    state: 'maryland'
  },
  {
    name: 'New Germany State Park',
    location: 'Grantsville, MD',
    description: 'Features lake recreation, camping, and hiking trails.',
    latitude: 39.6167,
    longitude: -79.1333,
    state: 'maryland'
  },
  {
    name: 'North Point State Park',
    location: 'Edgemere, MD',
    description: 'Features beach access and scenic views of the Chesapeake Bay.',
    latitude: 39.2667,
    longitude: -76.4667,
    state: 'maryland'
  },
  {
    name: 'Patapsco Valley State Park',
    location: 'Ellicott City, MD',
    description: 'Features extensive hiking trails, camping, and scenic river views.',
    latitude: 39.2667,
    longitude: -76.7667,
    state: 'maryland'
  },
  {
    name: 'Pocomoke River State Park',
    location: 'Snow Hill, MD',
    description: 'Features camping and scenic views of the Pocomoke River.',
    latitude: 38.1000,
    longitude: -75.3667,
    state: 'maryland'
  },
  {
    name: 'Point Lookout State Park',
    location: 'Scotland, MD',
    description: 'Features beach access, camping, and historic Civil War site.',
    latitude: 38.0500,
    longitude: -76.3167,
    state: 'maryland'
  },
  {
    name: 'Potomac-Garrett State Forest',
    location: 'Oakland, MD',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 39.4167,
    longitude: -79.4167,
    state: 'maryland'
  },
  {
    name: 'Rocky Gap State Park',
    location: 'Flintstone, MD',
    description: 'Features lake recreation, camping, and hiking trails.',
    latitude: 39.7000,
    longitude: -78.6333,
    state: 'maryland'
  },
  {
    name: 'Rosaryville State Park',
    location: 'Upper Marlboro, MD',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 38.7500,
    longitude: -76.7833,
    state: 'maryland'
  },
  {
    name: 'Sandy Point State Park',
    location: 'Annapolis, MD',
    description: 'Features beach access and scenic views of the Chesapeake Bay.',
    latitude: 39.0167,
    longitude: -76.4000,
    state: 'maryland'
  },
  {
    name: 'Seneca Creek State Park',
    location: 'Gaithersburg, MD',
    description: 'Features lake recreation and hiking trails.',
    latitude: 39.1667,
    longitude: -77.2667,
    state: 'maryland'
  },
  {
    name: 'Smallwood State Park',
    location: 'Marbury, MD',
    description: 'Features camping and scenic views of the Potomac River.',
    latitude: 38.5667,
    longitude: -77.1667,
    state: 'maryland'
  },
  {
    name: 'South Mountain State Park',
    location: 'Boonsboro, MD',
    description: 'Features hiking trails and scenic mountain views.',
    latitude: 39.5000,
    longitude: -77.6333,
    state: 'maryland'
  },
  {
    name: 'St. Clement\'s Island State Park',
    location: 'Colton\'s Point, MD',
    description: 'Features historic site and scenic views of the Potomac River.',
    latitude: 38.2167,
    longitude: -76.7333,
    state: 'maryland'
  },
  {
    name: 'St. Mary\'s River State Park',
    location: 'Callaway, MD',
    description: 'Features water recreation and hiking trails.',
    latitude: 38.2333,
    longitude: -76.5167,
    state: 'maryland'
  },
  {
    name: 'Susquehanna State Park',
    location: 'Havre de Grace, MD',
    description: 'Features historic site, camping, and scenic views of the Susquehanna River.',
    latitude: 39.6000,
    longitude: -76.1167,
    state: 'maryland'
  },
  {
    name: 'Swallow Falls State Park',
    location: 'Oakland, MD',
    description: 'Features waterfalls and hiking trails.',
    latitude: 39.5000,
    longitude: -79.4167,
    state: 'maryland'
  },
  {
    name: 'Tuckahoe State Park',
    location: 'Queen Anne, MD',
    description: 'Features lake recreation, camping, and hiking trails.',
    latitude: 38.9667,
    longitude: -75.9500,
    state: 'maryland'
  },
  {
    name: 'Washington Monument State Park',
    location: 'Boonsboro, MD',
    description: 'Features historic monument and scenic views.',
    latitude: 39.5000,
    longitude: -77.6167,
    state: 'maryland'
  },
  {
    name: 'Worcester County State Park',
    location: 'Snow Hill, MD',
    description: 'Features beach access and camping.',
    latitude: 38.1667,
    longitude: -75.3667,
    state: 'maryland'
  }
];

async function populateMarylandParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of marylandParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Maryland parks have been added to the database');
  } catch (error) {
    console.error('Error adding Maryland parks:', error);
  }
}

populateMarylandParks(); 