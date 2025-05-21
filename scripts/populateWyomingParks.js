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

const wyomingParks = [
  {
    name: "Bear River State Park",
    description: "Features river recreation and wildlife viewing near the Utah border.",
    location: "Evanston, WY",
    latitude: 41.27,
    longitude: -110.96,
    state: "wyoming"
  },
  {
    name: "Boysen State Park",
    description: "Features lake recreation and scenic views of the Wind River Canyon.",
    location: "Shoshoni, WY",
    latitude: 43.33,
    longitude: -108.08,
    state: "wyoming"
  },
  {
    name: "Buffalo Bill State Park",
    description: "Features reservoir recreation and scenic views of the Absaroka Mountains.",
    location: "Cody, WY",
    latitude: 44.50,
    longitude: -109.22,
    state: "wyoming"
  },
  {
    name: "Curt Gowdy State Park",
    description: "Features reservoir recreation and granite rock formations.",
    location: "Cheyenne, WY",
    latitude: 41.13,
    longitude: -105.25,
    state: "wyoming"
  },
  {
    name: "Edness K. Wilkins State Park",
    description: "Features river recreation and wildlife viewing in the North Platte River Valley.",
    location: "Casper, WY",
    latitude: 42.83,
    longitude: -106.37,
    state: "wyoming"
  },
  {
    name: "Glendo State Park",
    description: "Features reservoir recreation and scenic views of the Laramie Mountains.",
    location: "Glendo, WY",
    latitude: 42.50,
    longitude: -104.98,
    state: "wyoming"
  },
  {
    name: "Guernsey State Park",
    description: "Features reservoir recreation and historic Civilian Conservation Corps structures.",
    location: "Guernsey, WY",
    latitude: 42.27,
    longitude: -104.75,
    state: "wyoming"
  },
  {
    name: "Hawk Springs State Recreation Area",
    description: "Features lake recreation and wildlife viewing in the High Plains.",
    location: "Hawk Springs, WY",
    latitude: 41.78,
    longitude: -104.26,
    state: "wyoming"
  },
  {
    name: "Hot Springs State Park",
    description: "Features thermal springs and bison viewing in the Big Horn Basin.",
    location: "Thermopolis, WY",
    latitude: 43.65,
    longitude: -108.21,
    state: "wyoming"
  },
  {
    name: "Keyhole State Park",
    description: "Features reservoir recreation and scenic views of the Black Hills.",
    location: "Moorcroft, WY",
    latitude: 44.37,
    longitude: -104.82,
    state: "wyoming"
  },
  {
    name: "Seminoe State Park",
    description: "Features reservoir recreation and scenic views of the Seminoe Mountains.",
    location: "Sinclair, WY",
    latitude: 42.17,
    longitude: -106.92,
    state: "wyoming"
  },
  {
    name: "Sinks Canyon State Park",
    description: "Features dramatic canyon views and the unique Sinks and Rise of the Popo Agie River.",
    location: "Lander, WY",
    latitude: 42.75,
    longitude: -108.83,
    state: "wyoming"
  }
];

async function populateWyomingParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of wyomingParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Wyoming parks have been added to the database');
  } catch (error) {
    console.error('Error adding Wyoming parks:', error);
  }
}

populateWyomingParks(); 