const { initializeApp } = require('firebase/app');
const { getFirestore, collection, setDoc, doc } = require('firebase/firestore');

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

const parks = [
  {
    name: 'Auerfarm State Park',
    state: 'connecticut',
    location: 'Bloomfield',
    description: 'Auerfarm State Park Scenic Reserve is a walk-in, undeveloped park featuring open fields and woodlands, popular for hiking and birdwatching.',
    latitude: 41.8412,
    longitude: -72.7412,
  }
];

async function addParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of parks) {
      // Use park name as document ID (replace spaces with underscores and lowercase)
      const docId = park.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      await setDoc(doc(parksCollection, docId), park, { merge: true });
      console.log(`Added: ${park.name}`);
    }
    console.log('All state parks added successfully!');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
  process.exit(0);
}

addParks(); 