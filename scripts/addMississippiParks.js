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

const mississippiParks = [
  { name: 'Buccaneer State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Waveland, Mississippi', latitude: 30.2362, longitude: -89.3981 },
  { name: 'Clarkco State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Quitman, Mississippi', latitude: 32.0212, longitude: -88.7670 },
  { name: 'Florewood State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Greenwood, Mississippi', latitude: 33.5168, longitude: -90.1798 },
  { name: 'George P. Cossar State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Oakland, Mississippi', latitude: 33.6171, longitude: -89.9176 },
  { name: 'Golden Memorial State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Walnut Grove, Mississippi', latitude: 32.6012, longitude: -89.4656 },
  { name: 'Great River Road State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Rosedale, Mississippi', latitude: 33.8571, longitude: -91.0262 },
  { name: 'Holmes County State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Durant, Mississippi', latitude: 33.0021, longitude: -89.9240 },
  { name: 'Hugh White State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Grenada, Mississippi', latitude: 33.8121, longitude: -89.7390 },
  { name: 'John W. Kyle State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Sardis, Mississippi', latitude: 34.3912, longitude: -89.7926 },
  { name: 'J.P. Coleman State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Iuka, Mississippi', latitude: 34.9490, longitude: -88.1962 },
  { name: 'Lake Lincoln State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Wesson, Mississippi', latitude: 31.5851, longitude: -90.4340 },
  { name: 'Lake Lowndes State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Columbus, Mississippi', latitude: 33.4232, longitude: -88.2876 },
  { name: "LeFleur's Bluff State Park", description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Jackson, Mississippi', latitude: 32.3342, longitude: -90.1531 },
  { name: 'Legion State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Louisville, Mississippi', latitude: 33.1401, longitude: -89.0687 },
  { name: 'Leroy Percy State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Hollandale, Mississippi', latitude: 33.2382, longitude: -90.9737 },
  { name: 'Natchez State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Natchez, Mississippi', latitude: 31.6012, longitude: -91.1981 },
  { name: 'Paul B. Johnson State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Hattiesburg, Mississippi', latitude: 31.2051, longitude: -89.2590 },
  { name: 'Percy Quin State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'McComb, Mississippi', latitude: 31.1801, longitude: -90.5051 },
  { name: 'Roosevelt State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Morton, Mississippi', latitude: 32.3742, longitude: -89.5276 },
  { name: 'Shepard State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Gautier, Mississippi', latitude: 30.3932, longitude: -88.6112 },
  { name: 'Tishomingo State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Tishomingo, Mississippi', latitude: 34.6040, longitude: -88.2090 },
  { name: 'Tombigbee State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Tupelo, Mississippi', latitude: 34.1932, longitude: -88.6540 },
  { name: 'Trace State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Pontotoc, Mississippi', latitude: 34.2062, longitude: -89.1440 },
  { name: 'Wall Doxey State Park', description: 'A beautiful park in Mississippi.', state: 'mississippi', location: 'Holly Springs, Mississippi', latitude: 34.7032, longitude: -89.4440 }
];

async function addMississippiParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of mississippiParks) {
      // Use park name as document ID (replace spaces with underscores and lowercase)
      const docId = park.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      await setDoc(doc(parksCollection, docId), park, { merge: true });
      console.log(`Added: ${park.name}`);
    }
    console.log('All Mississippi state parks added successfully!');
  } catch (error) {
    console.error('Error adding Mississippi parks:', error);
  }
  process.exit(0);
}

addMississippiParks(); 