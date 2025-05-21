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

const alabamaParks = [
  { name: 'Bladon Springs State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 31.7352, longitude: -88.1981, location: 'Bladon Springs, Alabama' },
  { name: 'Blue Springs State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 31.8482, longitude: -85.4897, location: 'Clio, Alabama' },
  { name: "Buck's Pocket State Park", description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 34.4787, longitude: -86.0497, location: 'Grove Oak, Alabama' },
  { name: 'Cathedral Caverns State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 34.6062, longitude: -86.2122, location: 'Woodville, Alabama' },
  { name: 'Cheaha State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 33.4844, longitude: -85.8130, location: 'Delta, Alabama' },
  { name: 'Chewacla State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 32.5521, longitude: -85.4820, location: 'Auburn, Alabama' },
  { name: 'Chickasaw State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 32.0132, longitude: -87.5222, location: 'Gallion, Alabama' },
  { name: 'DeSoto State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 34.4965, longitude: -85.6172, location: 'Fort Payne, Alabama' },
  { name: 'Frank Jackson State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 31.3142, longitude: -86.4497, location: 'Opp, Alabama' },
  { name: 'Gulf State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 30.2642, longitude: -87.7008, location: 'Gulf Shores, Alabama' },
  { name: 'Joe Wheeler State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 34.8007, longitude: -87.3741, location: 'Rogersville, Alabama' },
  { name: 'Lake Guntersville State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 34.3954, longitude: -86.2089, location: 'Guntersville, Alabama' },
  { name: 'Lake Jackson RV Park at Florala', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 31.0088, longitude: -86.3062, location: 'Florala, Alabama' },
  { name: 'Lake Lurleen State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 33.2971, longitude: -87.6781, location: 'Coker, Alabama' },
  { name: 'Lakepoint State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 32.0072, longitude: -85.0797, location: 'Eufaula, Alabama' },
  { name: 'Meaher State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 30.6744, longitude: -87.9422, location: 'Spanish Fort, Alabama' },
  { name: 'Monte Sano State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 34.7473, longitude: -86.5112, location: 'Huntsville, Alabama' },
  { name: 'Oak Mountain State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 33.3242, longitude: -86.7267, location: 'Pelham, Alabama' },
  { name: 'Paul Grist State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 32.5352, longitude: -87.0997, location: 'Selma, Alabama' },
  { name: 'Rickwood Caverns State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 33.8082, longitude: -86.9158, location: 'Warrior, Alabama' },
  { name: 'Roland Cooper State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 32.1452, longitude: -87.3858, location: 'Camden, Alabama' },
  { name: 'Wind Creek State Park', description: 'A beautiful park in Alabama.', state: 'alabama', latitude: 32.8312, longitude: -85.9908, location: 'Alexander City, Alabama' }
];

async function addAlabamaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of alabamaParks) {
      // Use park name as document ID (replace spaces with underscores and lowercase)
      const docId = park.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      await setDoc(doc(parksCollection, docId), park, { merge: true });
      console.log(`Added: ${park.name}`);
    }
    console.log('All Alabama state parks added successfully!');
  } catch (error) {
    console.error('Error adding Alabama parks:', error);
  }
  process.exit(0);
}

addAlabamaParks(); 