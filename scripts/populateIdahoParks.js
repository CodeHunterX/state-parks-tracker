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

const idahoParks = [
  {
    name: "Bear Lake State Park",
    description: "Features turquoise waters, sandy beaches, and water recreation.",
    location: "Paris, ID",
    latitude: 42.17,
    longitude: -111.33,
    state: "idaho"
  },
  {
    name: "Bruneau Dunes State Park",
    description: "Features the tallest single-structured sand dune in North America.",
    location: "Bruneau, ID",
    latitude: 42.90,
    longitude: -115.70,
    state: "idaho"
  },
  {
    name: "Castle Rocks State Park",
    description: "Features unique rock formations and hiking trails.",
    location: "Almo, ID",
    latitude: 42.32,
    longitude: -113.60,
    state: "idaho"
  },
  {
    name: "City of Rocks National Reserve",
    description: "Features dramatic granite spires and rock climbing opportunities.",
    location: "Almo, ID",
    latitude: 42.08,
    longitude: -113.72,
    state: "idaho"
  },
  {
    name: "Coeur d'Alene Parkway State Park",
    description: "Features scenic lake views and recreational trails.",
    location: "Coeur d'Alene, ID",
    latitude: 47.67,
    longitude: -116.78,
    state: "idaho"
  },
  {
    name: "Dworshak State Park",
    description: "Features reservoir recreation and camping.",
    location: "Orofino, ID",
    latitude: 46.50,
    longitude: -116.32,
    state: "idaho"
  },
  {
    name: "Eagle Island State Park",
    description: "Features swimming, boating, and picnic areas.",
    location: "Eagle, ID",
    latitude: 43.69,
    longitude: -116.35,
    state: "idaho"
  },
  {
    name: "Farragut State Park",
    description: "Features lake recreation and extensive trail system.",
    location: "Athol, ID",
    latitude: 47.95,
    longitude: -116.55,
    state: "idaho"
  },
  {
    name: "Harriman State Park",
    description: "Features historic ranch buildings and wildlife viewing.",
    location: "Island Park, ID",
    latitude: 44.65,
    longitude: -111.10,
    state: "idaho"
  },
  {
    name: "Hells Gate State Park",
    description: "Features river recreation and scenic canyon views.",
    location: "Lewiston, ID",
    latitude: 46.38,
    longitude: -117.03,
    state: "idaho"
  },
  {
    name: "Henrys Lake State Park",
    description: "Features fishing and mountain views.",
    location: "Island Park, ID",
    latitude: 44.60,
    longitude: -111.35,
    state: "idaho"
  },
  {
    name: "Heyburn State Park",
    description: "Features lake recreation and historic buildings.",
    location: "Plummer, ID",
    latitude: 47.35,
    longitude: -116.75,
    state: "idaho"
  },
  {
    name: "Lake Cascade State Park",
    description: "Features reservoir recreation and camping.",
    location: "Cascade, ID",
    latitude: 44.52,
    longitude: -116.05,
    state: "idaho"
  },
  {
    name: "Lake Walcott State Park",
    description: "Features reservoir recreation and wildlife viewing.",
    location: "Rupert, ID",
    latitude: 42.68,
    longitude: -113.32,
    state: "idaho"
  },
  {
    name: "Lucky Peak State Park",
    description: "Features reservoir recreation and scenic views.",
    location: "Boise, ID",
    latitude: 43.55,
    longitude: -116.08,
    state: "idaho"
  },
  {
    name: "Massacre Rocks State Park",
    description: "Features historic Oregon Trail sites and river recreation.",
    location: "American Falls, ID",
    latitude: 42.67,
    longitude: -113.00,
    state: "idaho"
  },
  {
    name: "McCroskey State Park",
    description: "Features mountain trails and scenic views.",
    location: "Moscow, ID",
    latitude: 47.00,
    longitude: -116.75,
    state: "idaho"
  },
  {
    name: "Old Mission State Park",
    description: "Features historic mission building and cultural sites.",
    location: "Cataldo, ID",
    latitude: 47.55,
    longitude: -116.33,
    state: "idaho"
  },
  {
    name: "Ponderosa State Park",
    description: "Features lake recreation and wildlife viewing.",
    location: "McCall, ID",
    latitude: 44.93,
    longitude: -116.10,
    state: "idaho"
  },
  {
    name: "Priest Lake State Park",
    description: "Features lake recreation and mountain views.",
    location: "Coolin, ID",
    latitude: 48.60,
    longitude: -116.83,
    state: "idaho"
  },
  {
    name: "Round Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Sagle, ID",
    latitude: 48.32,
    longitude: -116.53,
    state: "idaho"
  },
  {
    name: "Three Island Crossing State Park",
    description: "Features historic Oregon Trail crossing and river recreation.",
    location: "Glenns Ferry, ID",
    latitude: 42.95,
    longitude: -115.30,
    state: "idaho"
  },
  {
    name: "Thousand Springs State Park",
    description: "Features waterfalls and historic sites.",
    location: "Hagerman, ID",
    latitude: 42.82,
    longitude: -114.90,
    state: "idaho"
  },
  {
    name: "Trail of the Coeur d'Alenes",
    description: "Features scenic rail trail and wildlife viewing.",
    location: "Plummer, ID",
    latitude: 47.33,
    longitude: -116.88,
    state: "idaho"
  },
  {
    name: "Winchester Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Winchester, ID",
    latitude: 46.23,
    longitude: -116.62,
    state: "idaho"
  }
];

async function populateIdahoParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of idahoParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Idaho parks have been added to the database');
  } catch (error) {
    console.error('Error adding Idaho parks:', error);
  }
}

populateIdahoParks(); 