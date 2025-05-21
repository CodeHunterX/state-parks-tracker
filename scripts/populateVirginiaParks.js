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

const virginiaParks = [
  {
    name: 'Falling Springs Falls',
    location: 'Covington, VA',
    description: 'A scenic 80-foot waterfall in the Alleghany Highlands, popular for its dramatic drop and natural beauty.',
    latitude: 37.7931,
    longitude: -79.9831,
    state: 'virginia'
  },
  {
    name: 'Green Pastures Recreation Area',
    location: 'Covington, VA',
    description: 'A historic recreation area in the George Washington and Jefferson National Forests, known for its trails and picnic spots.',
    latitude: 37.6747,
    longitude: -80.0031,
    state: 'virginia'
  },
  {
    name: 'Sweet Run State Park',
    location: 'Hillsboro, VA',
    description: 'Virginia\'s newest state park, featuring hiking, equestrian trails, and scenic views in Loudoun County.',
    latitude: 39.2150,
    longitude: -77.7260,
    state: 'virginia'
  },
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of virginiaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Virginia parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 