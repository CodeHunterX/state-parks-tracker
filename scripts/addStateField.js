const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, setDoc } = require('firebase/firestore');

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

async function addStateField() {
  try {
    // Get all parks from the parks collection
    const parksCollection = collection(db, 'parks');
    const parksSnapshot = await getDocs(parksCollection);
    
    console.log(`Found ${parksSnapshot.size} parks to update`);
    
    // Update each park document
    for (const doc of parksSnapshot.docs) {
      const parkData = doc.data();
      
      // Only update if state field doesn't exist
      if (!parkData.state) {
        await setDoc(doc.ref, {
          ...parkData,
          state: 'tennessee'
        }, { merge: true });
        console.log(`Updated park: ${parkData.name}`);
      } else {
        console.log(`Park already has state field: ${parkData.name}`);
      }
    }
    
    console.log('Successfully updated all parks with state field');
  } catch (error) {
    console.error('Error updating parks:', error);
  }
  
  process.exit(0);
}

addStateField(); 