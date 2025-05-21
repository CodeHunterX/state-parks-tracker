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

const vermontParks = [
  {
    name: 'Allis State Park',
    location: 'Randolph, VT',
    description: 'Features scenic views from Bear Hill and hiking trails.',
    latitude: 43.9333,
    longitude: -72.6667,
    state: 'vermont'
  },
  {
    name: 'Bomoseen State Park',
    location: 'Castleton, VT',
    description: 'Features water recreation on Lake Bomoseen and camping.',
    latitude: 43.6333,
    longitude: -73.2167,
    state: 'vermont'
  },
  {
    name: 'Branbury State Park',
    location: 'Salisbury, VT',
    description: 'Features beach access on Lake Dunmore and hiking trails.',
    latitude: 43.9000,
    longitude: -73.1000,
    state: 'vermont'
  },
  {
    name: 'Brighton State Park',
    location: 'Island Pond, VT',
    description: 'Features water recreation on Spectacle Pond and camping.',
    latitude: 44.8167,
    longitude: -71.8833,
    state: 'vermont'
  },
  {
    name: 'Button Bay State Park',
    location: 'Ferrisburgh, VT',
    description: 'Features scenic views of Lake Champlain and camping.',
    latitude: 44.2167,
    longitude: -73.3667,
    state: 'vermont'
  },
  {
    name: 'Camp Plymouth State Park',
    location: 'Ludlow, VT',
    description: 'Features water recreation on Echo Lake and camping.',
    latitude: 43.4000,
    longitude: -72.7000,
    state: 'vermont'
  },
  {
    name: 'Coolidge State Park',
    location: 'Plymouth, VT',
    description: 'Features scenic views and hiking trails.',
    latitude: 43.5333,
    longitude: -72.7167,
    state: 'vermont'
  },
  {
    name: 'D.A.R. State Park',
    location: 'Addison, VT',
    description: 'Features beach access on Lake Champlain and camping.',
    latitude: 44.0833,
    longitude: -73.3667,
    state: 'vermont'
  },
  {
    name: 'Elmore State Park',
    location: 'Elmore, VT',
    description: 'Features beach access on Lake Elmore and hiking trails.',
    latitude: 44.5333,
    longitude: -72.5167,
    state: 'vermont'
  },
  {
    name: 'Emerald Lake State Park',
    location: 'East Dorset, VT',
    description: 'Features beach access on Emerald Lake and hiking trails.',
    latitude: 43.2333,
    longitude: -73.0167,
    state: 'vermont'
  },
  {
    name: 'Fort Dummer State Park',
    location: 'Brattleboro, VT',
    description: 'Features historic site and hiking trails.',
    latitude: 42.8500,
    longitude: -72.5667,
    state: 'vermont'
  },
  {
    name: 'Gifford Woods State Park',
    location: 'Killington, VT',
    description: 'Features old-growth forest and hiking trails.',
    latitude: 43.6667,
    longitude: -72.8167,
    state: 'vermont'
  },
  {
    name: 'Grand Isle State Park',
    location: 'Grand Isle, VT',
    description: 'Features beach access on Lake Champlain and camping.',
    latitude: 44.7167,
    longitude: -73.3000,
    state: 'vermont'
  },
  {
    name: 'Half Moon Pond State Park',
    location: 'Hubbardton, VT',
    description: 'Features water recreation and camping.',
    latitude: 43.7000,
    longitude: -73.2167,
    state: 'vermont'
  },
  {
    name: 'Jamaica State Park',
    location: 'Jamaica, VT',
    description: 'Features water recreation on the West River and hiking trails.',
    latitude: 43.1000,
    longitude: -72.7833,
    state: 'vermont'
  },
  {
    name: 'Knight Point State Park',
    location: 'North Hero, VT',
    description: 'Features beach access on Lake Champlain.',
    latitude: 44.8333,
    longitude: -73.2833,
    state: 'vermont'
  },
  {
    name: 'Lake Carmi State Park',
    location: 'Enosburg Falls, VT',
    description: 'Features water recreation and camping.',
    latitude: 44.9667,
    longitude: -72.8833,
    state: 'vermont'
  },
  {
    name: 'Lake Shaftsbury State Park',
    location: 'Shaftsbury, VT',
    description: 'Features water recreation and camping.',
    latitude: 42.9667,
    longitude: -73.2167,
    state: 'vermont'
  },
  {
    name: 'Little River State Park',
    location: 'Waterbury, VT',
    description: 'Features water recreation on Waterbury Reservoir and hiking trails.',
    latitude: 44.3333,
    longitude: -72.7167,
    state: 'vermont'
  },
  {
    name: 'Molly Stark State Park',
    location: 'Wilmington, VT',
    description: 'Features scenic views and hiking trails.',
    latitude: 42.8667,
    longitude: -72.9667,
    state: 'vermont'
  },
  {
    name: 'Mount Philo State Park',
    location: 'Charlotte, VT',
    description: 'Features scenic views of Lake Champlain and hiking trails.',
    latitude: 44.3167,
    longitude: -73.2167,
    state: 'vermont'
  },
  {
    name: 'Quechee State Park',
    location: 'Hartford, VT',
    description: 'Features scenic views of Quechee Gorge.',
    latitude: 43.6500,
    longitude: -72.4167,
    state: 'vermont'
  },
  {
    name: 'Ricker Pond State Park',
    location: 'Groton, VT',
    description: 'Features water recreation and camping.',
    latitude: 44.2333,
    longitude: -72.2167,
    state: 'vermont'
  },
  {
    name: 'Sand Bar State Park',
    location: 'Milton, VT',
    description: 'Features beach access on Lake Champlain.',
    latitude: 44.7167,
    longitude: -73.2167,
    state: 'vermont'
  },
  {
    name: 'Silver Lake State Park',
    location: 'Barnard, VT',
    description: 'Features water recreation and camping.',
    latitude: 43.7333,
    longitude: -72.5667,
    state: 'vermont'
  },
  {
    name: 'Smugglers Notch State Park',
    location: 'Stowe, VT',
    description: 'Features scenic views and hiking trails.',
    latitude: 44.5667,
    longitude: -72.7833,
    state: 'vermont'
  },
  {
    name: 'Stillwater State Park',
    location: 'Groton, VT',
    description: 'Features water recreation and camping.',
    latitude: 44.2333,
    longitude: -72.2500,
    state: 'vermont'
  },
  {
    name: 'Thetford Hill State Park',
    location: 'Thetford, VT',
    description: 'Features scenic views and hiking trails.',
    latitude: 43.8167,
    longitude: -72.2500,
    state: 'vermont'
  },
  {
    name: 'Townshend State Park',
    location: 'Townshend, VT',
    description: 'Features scenic views and hiking trails.',
    latitude: 43.0500,
    longitude: -72.6667,
    state: 'vermont'
  },
  {
    name: 'Underhill State Park',
    location: 'Underhill, VT',
    description: 'Features scenic views of Mount Mansfield and hiking trails.',
    latitude: 44.5333,
    longitude: -72.8833,
    state: 'vermont'
  },
  {
    name: 'Waterbury Center State Park',
    location: 'Waterbury Center, VT',
    description: 'Features water recreation on Waterbury Reservoir.',
    latitude: 44.3667,
    longitude: -72.7167,
    state: 'vermont'
  },
  {
    name: 'Wilgus State Park',
    location: 'Ascutney, VT',
    description: 'Features water recreation on the Connecticut River.',
    latitude: 43.4167,
    longitude: -72.4167,
    state: 'vermont'
  },
  {
    name: 'Woodford State Park',
    location: 'Bennington, VT',
    description: 'Features water recreation and camping.',
    latitude: 42.8833,
    longitude: -73.0667,
    state: 'vermont'
  }
];

async function populateVermontParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of vermontParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Vermont parks have been added to the database');
  } catch (error) {
    console.error('Error adding Vermont parks:', error);
  }
}

populateVermontParks(); 