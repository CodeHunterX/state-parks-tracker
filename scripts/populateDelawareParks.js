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

const delawareParks = [
  {
    name: 'Alapocas Run State Park',
    location: 'Wilmington, DE',
    description: 'Protects a portion of the Brandywine and includes the Blue Ball Barn, originally built in 1914 by Alfred I. du Pont.',
    latitude: 39.7833,
    longitude: -75.5667,
    state: 'delaware'
  },
  {
    name: 'Auburn Valley State Park',
    location: 'Yorklyn, DE',
    description: 'Former estate of the Marshall family, includes the 1897 Auburn Heights Mansion and the Marshall Steam Museum\'s collection of antique steam-powered cars.',
    latitude: 39.8000,
    longitude: -75.6833,
    state: 'delaware'
  },
  {
    name: 'Bellevue State Park',
    location: 'Wilmington, DE',
    description: 'Former estate of William du Pont, Jr., includes tennis courts, horse racing barn, and Bellevue Hall, a replica of James Madison\'s Montpelier.',
    latitude: 39.7833,
    longitude: -75.4833,
    state: 'delaware'
  },
  {
    name: 'Brandywine Creek State Park',
    location: 'Wilmington, DE',
    description: 'Much of this park was once part of Henry A. du Pont\'s Winterthur estate and was used as a dairy farm from the 1870s through the 1920s.',
    latitude: 39.8333,
    longitude: -75.5667,
    state: 'delaware'
  },
  {
    name: 'Cape Henlopen State Park',
    location: 'Lewes, DE',
    description: 'Features beaches, dunes, and historic military structures, including Fort Miles from World War II.',
    latitude: 38.7833,
    longitude: -75.1000,
    state: 'delaware'
  },
  {
    name: 'Delaware Seashore State Park',
    location: 'Rehoboth Beach, DE',
    description: 'Features ocean beaches, fishing, and the Indian River Inlet Bridge.',
    latitude: 38.6833,
    longitude: -75.0667,
    state: 'delaware'
  },
  {
    name: 'Fenwick Island State Park',
    location: 'Fenwick Island, DE',
    description: 'Features ocean beaches and fishing opportunities.',
    latitude: 38.4500,
    longitude: -75.0500,
    state: 'delaware'
  },
  {
    name: 'First State Heritage Park',
    location: 'Dover, DE',
    description: 'Urban park featuring historic sites and museums in Delaware\'s capital city.',
    latitude: 39.1583,
    longitude: -75.5247,
    state: 'delaware'
  },
  {
    name: 'Fort Delaware State Park',
    location: 'Delaware City, DE',
    description: 'Historic Civil War fort on Pea Patch Island, accessible by ferry.',
    latitude: 39.5833,
    longitude: -75.5833,
    state: 'delaware'
  },
  {
    name: 'Fort DuPont State Park',
    location: 'Delaware City, DE',
    description: 'Former military installation with historic buildings and recreational facilities.',
    latitude: 39.5667,
    longitude: -75.5833,
    state: 'delaware'
  },
  {
    name: 'Holts Landing State Park',
    location: 'Millville, DE',
    description: 'Features bay beaches, fishing, and a boat ramp.',
    latitude: 38.5500,
    longitude: -75.1167,
    state: 'delaware'
  },
  {
    name: 'Killens Pond State Park',
    location: 'Felton, DE',
    description: 'Features a 66-acre millpond, camping, and water park.',
    latitude: 38.9667,
    longitude: -75.5667,
    state: 'delaware'
  },
  {
    name: 'Lums Pond State Park',
    location: 'Bear, DE',
    description: 'Features Delaware\'s largest freshwater pond, camping, and extensive trail system.',
    latitude: 39.5667,
    longitude: -75.7167,
    state: 'delaware'
  },
  {
    name: 'Trap Pond State Park',
    location: 'Laurel, DE',
    description: 'Features one of the northernmost natural stands of bald cypress trees, camping, and boating.',
    latitude: 38.5167,
    longitude: -75.4667,
    state: 'delaware'
  },
  {
    name: 'White Clay Creek State Park',
    location: 'Newark, DE',
    description: 'Features extensive trail system, historic sites, and scenic views of White Clay Creek.',
    latitude: 39.7333,
    longitude: -75.7833,
    state: 'delaware'
  },
  {
    name: 'Wilmington State Parks',
    location: 'Wilmington, DE',
    description: 'Collection of parks including Brandywine Park, Rockford Park, and H. Fletcher Brown Park.',
    latitude: 39.7500,
    longitude: -75.5500,
    state: 'delaware'
  },
  {
    name: 'Fox Point State Park',
    location: 'Wilmington, DE',
    description: 'Features Delaware River waterfront access and scenic views.',
    latitude: 39.7333,
    longitude: -75.5167,
    state: 'delaware'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of delawareParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Delaware parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 