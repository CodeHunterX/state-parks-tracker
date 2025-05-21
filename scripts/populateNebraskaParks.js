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

const nebraskaParks = [
  {
    name: "Chadron State Park",
    description: "Nebraska's oldest state park, featuring scenic pine forests and hiking trails.",
    location: "Chadron, NE",
    latitude: 42.73,
    longitude: -103.00,
    state: "nebraska"
  },
  {
    name: "Eugene T. Mahoney State Park",
    description: "Features multiple recreational and meeting facilities, fronted by the Platte River.",
    location: "Ashland, NE",
    latitude: 41.05,
    longitude: -96.37,
    state: "nebraska"
  },
  {
    name: "Fort Robinson State Park",
    description: "Former U.S. Army fort featuring historic buildings and extensive recreational facilities.",
    location: "Crawford, NE",
    latitude: 42.67,
    longitude: -103.47,
    state: "nebraska"
  },
  {
    name: "Indian Cave State Park",
    description: "Features petroglyphs and a restored village of St. Deroin.",
    location: "Shubert, NE",
    latitude: 40.30,
    longitude: -95.85,
    state: "nebraska"
  },
  {
    name: "Niobrara State Park",
    description: "Features the historic Niobrara River railroad bridge and scenic river views.",
    location: "Niobrara, NE",
    latitude: 42.75,
    longitude: -98.05,
    state: "nebraska"
  },
  {
    name: "Platte River State Park",
    description: "Features modern observation towers and vintage cabins from earlier campgrounds.",
    location: "Louisville, NE",
    latitude: 41.03,
    longitude: -96.37,
    state: "nebraska"
  },
  {
    name: "Ponca State Park",
    description: "Located on the banks of the Missouri River, offering scenic views and recreational activities.",
    location: "Ponca, NE",
    latitude: 42.57,
    longitude: -96.70,
    state: "nebraska"
  },
  {
    name: "Smith Falls State Park",
    description: "Home to Nebraska's highest waterfall, featuring scenic views and hiking trails.",
    location: "Valentine, NE",
    latitude: 42.85,
    longitude: -100.00,
    state: "nebraska"
  }
];

async function populateNebraskaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of nebraskaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Nebraska parks have been added to the database');
  } catch (error) {
    console.error('Error adding Nebraska parks:', error);
  }
}

populateNebraskaParks(); 