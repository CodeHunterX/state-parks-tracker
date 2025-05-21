const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, setDoc, getDoc } = require('firebase/firestore');

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

const states = ['tennessee', 'georgia', 'alabama', 'mississippi', 'florida'];

async function migrateParks() {
  try {
    // Create new parks collection
    const parksCollection = collection(db, 'parks');
    
    // Migrate parks from each state
    for (const state of states) {
      const stateCollection = collection(db, `${state}_parks`);
      const stateSnapshot = await getDocs(stateCollection);
      
      for (const doc of stateSnapshot.docs) {
        const parkData = doc.data();
        // Add state field to park data
        const newParkData = {
          ...parkData,
          state: state
        };
        // Add to new parks collection
        await setDoc(doc(parksCollection, doc.id), newParkData);
        console.log(`Migrated ${state} park: ${parkData.name}`);
      }
    }
    
    console.log('Parks migration completed successfully');
  } catch (error) {
    console.error('Error migrating parks:', error);
  }
}

async function migrateVisitedParks() {
  try {
    // Get all users
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const visitedParks = [];
      
      // Collect visited parks from each state
      for (const state of states) {
        const stateVisitedParks = userData[`visited${state.charAt(0).toUpperCase() + state.slice(1)}Parks`] || [];
        visitedParks.push(...stateVisitedParks);
      }
      
      // Update user document with new visitedParks array
      await setDoc(doc(usersCollection, userDoc.id), {
        visitedParks: visitedParks
      }, { merge: true });
      
      console.log(`Migrated visited parks for user: ${userDoc.id}`);
    }
    
    console.log('Visited parks migration completed successfully');
  } catch (error) {
    console.error('Error migrating visited parks:', error);
  }
}

async function migrate() {
  console.log('Starting migration...');
  await migrateParks();
  await migrateVisitedParks();
  console.log('Migration completed!');
  process.exit(0);
}

migrate(); 