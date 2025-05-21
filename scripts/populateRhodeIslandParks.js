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

const rhodeIslandParks = [
  {
    name: 'Beavertail State Park',
    location: 'Jamestown, RI',
    description: 'Features scenic views of Narragansett Bay and historic lighthouse.',
    latitude: 41.4500,
    longitude: -71.4000,
    state: 'rhode_island'
  },
  {
    name: 'Brenton Point State Park',
    location: 'Newport, RI',
    description: 'Features scenic views of the Atlantic Ocean and historic site.',
    latitude: 41.4500,
    longitude: -71.3667,
    state: 'rhode_island'
  },
  {
    name: 'Burlingame State Park',
    location: 'Charlestown, RI',
    description: 'Features camping and water recreation on Watchaug Pond.',
    latitude: 41.3833,
    longitude: -71.6333,
    state: 'rhode_island'
  },
  {
    name: 'Colt State Park',
    location: 'Bristol, RI',
    description: 'Features scenic views of Narragansett Bay and historic site.',
    latitude: 41.6833,
    longitude: -71.2667,
    state: 'rhode_island'
  },
  {
    name: 'East Beach State Park',
    location: 'Charlestown, RI',
    description: 'Features beach access and scenic views of the Atlantic Ocean.',
    latitude: 41.3667,
    longitude: -71.6333,
    state: 'rhode_island'
  },
  {
    name: 'Fort Adams State Park',
    location: 'Newport, RI',
    description: 'Features historic fort and scenic views of Narragansett Bay.',
    latitude: 41.4833,
    longitude: -71.3333,
    state: 'rhode_island'
  },
  {
    name: 'Fort Wetherill State Park',
    location: 'Jamestown, RI',
    description: 'Features historic fort and scenic views of Narragansett Bay.',
    latitude: 41.4833,
    longitude: -71.3667,
    state: 'rhode_island'
  },
  {
    name: 'Goddard Memorial State Park',
    location: 'Warwick, RI',
    description: 'Features beach access and scenic views of Greenwich Bay.',
    latitude: 41.6833,
    longitude: -71.4333,
    state: 'rhode_island'
  },
  {
    name: 'Haines Memorial State Park',
    location: 'Barrington, RI',
    description: 'Features scenic views of Narragansett Bay.',
    latitude: 41.7333,
    longitude: -71.3167,
    state: 'rhode_island'
  },
  {
    name: 'Lincoln Woods State Park',
    location: 'Lincoln, RI',
    description: 'Features water recreation on Olney Pond and hiking trails.',
    latitude: 41.9000,
    longitude: -71.4333,
    state: 'rhode_island'
  },
  {
    name: 'Misquamicut State Beach',
    location: 'Westerly, RI',
    description: 'Features beach access and scenic views of the Atlantic Ocean.',
    latitude: 41.3167,
    longitude: -71.8167,
    state: 'rhode_island'
  },
  {
    name: 'Ninigret Conservation Area',
    location: 'Charlestown, RI',
    description: 'Features beach access and scenic views of Ninigret Pond.',
    latitude: 41.3667,
    longitude: -71.6333,
    state: 'rhode_island'
  },
  {
    name: 'Pulaski State Park',
    location: 'Glocester, RI',
    description: 'Features water recreation on Peck Pond.',
    latitude: 41.8833,
    longitude: -71.6833,
    state: 'rhode_island'
  },
  {
    name: 'Rocky Point State Park',
    location: 'Warwick, RI',
    description: 'Features scenic views of Narragansett Bay.',
    latitude: 41.6833,
    longitude: -71.3833,
    state: 'rhode_island'
  },
  {
    name: 'Scarborough State Beach',
    location: 'Narragansett, RI',
    description: 'Features beach access and scenic views of the Atlantic Ocean.',
    latitude: 41.4000,
    longitude: -71.4667,
    state: 'rhode_island'
  },
  {
    name: 'Sachuest Point National Wildlife Refuge',
    location: 'Middletown, RI',
    description: 'Features wildlife viewing and scenic views of the Atlantic Ocean.',
    latitude: 41.4833,
    longitude: -71.2500,
    state: 'rhode_island'
  }
];

async function populateRhodeIslandParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of rhodeIslandParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Rhode Island parks have been added to the database');
  } catch (error) {
    console.error('Error adding Rhode Island parks:', error);
  }
}

populateRhodeIslandParks(); 