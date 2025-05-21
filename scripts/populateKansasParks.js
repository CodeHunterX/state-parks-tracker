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

const kansasParks = [
  {
    name: "Cedar Bluff State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Ellis, KS",
    latitude: 38.78,
    longitude: -99.75,
    state: "kansas"
  },
  {
    name: "Cheney State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Cheney, KS",
    latitude: 37.63,
    longitude: -97.78,
    state: "kansas"
  },
  {
    name: "Clinton State Park",
    description: "Features a large lake with swimming, boating, and fishing opportunities.",
    location: "Lawrence, KS",
    latitude: 38.91,
    longitude: -95.39,
    state: "kansas"
  },
  {
    name: "Crawford State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Farlington, KS",
    latitude: 37.62,
    longitude: -94.83,
    state: "kansas"
  },
  {
    name: "Cross Timbers State Park",
    description: "Features scenic woodlands and hiking trails along the Verdigris River.",
    location: "Toronto, KS",
    latitude: 37.80,
    longitude: -95.95,
    state: "kansas"
  },
  {
    name: "Eisenhower State Park",
    description: "Features a large lake with fishing, boating, and camping facilities.",
    location: "Osage City, KS",
    latitude: 38.63,
    longitude: -95.82,
    state: "kansas"
  },
  {
    name: "El Dorado State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "El Dorado, KS",
    latitude: 37.85,
    longitude: -96.85,
    state: "kansas"
  },
  {
    name: "Elk City State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Independence, KS",
    latitude: 37.30,
    longitude: -95.70,
    state: "kansas"
  },
  {
    name: "Fall River State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Fall River, KS",
    latitude: 37.60,
    longitude: -96.03,
    state: "kansas"
  },
  {
    name: "Glen Elder State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Glen Elder, KS",
    latitude: 39.50,
    longitude: -98.31,
    state: "kansas"
  },
  {
    name: "Hillsdale State Park",
    description: "Features a large lake with fishing, boating, and camping facilities.",
    location: "Paola, KS",
    latitude: 38.67,
    longitude: -94.85,
    state: "kansas"
  },
  {
    name: "Kaw River State Park",
    description: "Features scenic views of the Kansas River and hiking trails.",
    location: "Topeka, KS",
    latitude: 39.11,
    longitude: -95.67,
    state: "kansas"
  },
  {
    name: "Kanopolis State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Marquette, KS",
    latitude: 38.71,
    longitude: -98.16,
    state: "kansas"
  },
  {
    name: "Lovewell State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Webber, KS",
    latitude: 39.90,
    longitude: -98.05,
    state: "kansas"
  },
  {
    name: "Meade State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Meade, KS",
    latitude: 37.28,
    longitude: -100.34,
    state: "kansas"
  },
  {
    name: "Milford State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Milford, KS",
    latitude: 39.17,
    longitude: -96.91,
    state: "kansas"
  },
  {
    name: "Mushroom Rock State Park",
    description: "Features unique rock formations and hiking trails.",
    location: "Brookville, KS",
    latitude: 38.73,
    longitude: -98.03,
    state: "kansas"
  },
  {
    name: "Perry State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Ozawkie, KS",
    latitude: 39.23,
    longitude: -95.47,
    state: "kansas"
  },
  {
    name: "Pomona State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Vassar, KS",
    latitude: 38.61,
    longitude: -95.45,
    state: "kansas"
  },
  {
    name: "Prairie Dog State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Norton, KS",
    latitude: 39.83,
    longitude: -99.87,
    state: "kansas"
  },
  {
    name: "Prairie Spirit Trail State Park",
    description: "Features a scenic rail trail for hiking and biking.",
    location: "Ottawa, KS",
    latitude: 38.61,
    longitude: -95.27,
    state: "kansas"
  },
  {
    name: "Sand Hills State Park",
    description: "Features unique sand dune formations and hiking trails.",
    location: "Hutchinson, KS",
    latitude: 38.06,
    longitude: -97.93,
    state: "kansas"
  },
  {
    name: "Scott State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Scott City, KS",
    latitude: 38.67,
    longitude: -100.91,
    state: "kansas"
  },
  {
    name: "Little Jerusalem Badlands State Park",
    description: "Features unique rock formations and scenic views.",
    location: "Oakley, KS",
    latitude: 38.88,
    longitude: -100.97,
    state: "kansas"
  },
  {
    name: "Tuttle Creek State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Manhattan, KS",
    latitude: 39.33,
    longitude: -96.65,
    state: "kansas"
  },
  {
    name: "Webster State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Stockton, KS",
    latitude: 39.42,
    longitude: -99.27,
    state: "kansas"
  },
  {
    name: "Wilson State Park",
    description: "Features a large reservoir with fishing, boating, and camping facilities.",
    location: "Sylvan Grove, KS",
    latitude: 38.82,
    longitude: -98.47,
    state: "kansas"
  }
];

async function populateKansasParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of kansasParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Kansas parks have been added to the database');
  } catch (error) {
    console.error('Error adding Kansas parks:', error);
  }
}

populateKansasParks(); 