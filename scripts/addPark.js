const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');

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

// Example park data - modify these values for your new park
const newPark = {
  name: 'New Park Name',
  location: 'City, TN',
  description: 'Description of the park and its features.',
  latitude: 35.0000,  // Replace with actual latitude
  longitude: -85.0000 // Replace with actual longitude
};

async function addPark() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const parkRef = doc(collection(db, 'parks'));
    await setDoc(parkRef, newPark);
    console.log(`Successfully added ${newPark.name} to database!`);
    process.exit(0);
  } catch (error) {
    console.error('Error adding park:', error);
    process.exit(1);
  }
}

addPark(); 