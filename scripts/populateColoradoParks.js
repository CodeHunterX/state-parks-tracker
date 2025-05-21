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

const coloradoParks = [
  {
    name: "Arkansas Headwaters Recreation Area",
    description: "Features world-class whitewater rafting and fishing on the Arkansas River.",
    location: "Salida, CO",
    latitude: 38.53,
    longitude: -105.99,
    state: "colorado"
  },
  {
    name: "Barr Lake State Park",
    description: "Features bird watching, fishing, and hiking trails around a large reservoir.",
    location: "Brighton, CO",
    latitude: 39.94,
    longitude: -104.75,
    state: "colorado"
  },
  {
    name: "Boyd Lake State Park",
    description: "Features water recreation, camping, and wildlife viewing.",
    location: "Loveland, CO",
    latitude: 40.42,
    longitude: -104.98,
    state: "colorado"
  },
  {
    name: "Castlewood Canyon State Park",
    description: "Features dramatic canyon views, hiking trails, and historic dam ruins.",
    location: "Franktown, CO",
    latitude: 39.32,
    longitude: -104.75,
    state: "colorado"
  },
  {
    name: "Chatfield State Park",
    description: "Features reservoir recreation, camping, and extensive trail system.",
    location: "Littleton, CO",
    latitude: 39.54,
    longitude: -105.07,
    state: "colorado"
  },
  {
    name: "Cherry Creek State Park",
    description: "Features reservoir recreation, camping, and wildlife viewing.",
    location: "Aurora, CO",
    latitude: 39.64,
    longitude: -104.83,
    state: "colorado"
  },
  {
    name: "Cheyenne Mountain State Park",
    description: "Features mountain trails and wildlife viewing near Colorado Springs.",
    location: "Colorado Springs, CO",
    latitude: 38.74,
    longitude: -104.87,
    state: "colorado"
  },
  {
    name: "Crawford State Park",
    description: "Features reservoir recreation and camping.",
    location: "Crawford, CO",
    latitude: 38.70,
    longitude: -107.61,
    state: "colorado"
  },
  {
    name: "Eldorado Canyon State Park",
    description: "Features world-renowned rock climbing and scenic canyon views.",
    location: "Boulder, CO",
    latitude: 39.93,
    longitude: -105.29,
    state: "colorado"
  },
  {
    name: "Eleven Mile State Park",
    description: "Features reservoir recreation and camping.",
    location: "Lake George, CO",
    latitude: 38.95,
    longitude: -105.51,
    state: "colorado"
  },
  {
    name: "Elkhead Reservoir State Park",
    description: "Features reservoir recreation and camping.",
    location: "Hayden, CO",
    latitude: 40.38,
    longitude: -107.25,
    state: "colorado"
  },
  {
    name: "Fishers Peak State Park",
    description: "Features dramatic peak views and hiking trails.",
    location: "Trinidad, CO",
    latitude: 37.15,
    longitude: -104.50,
    state: "colorado"
  },
  {
    name: "Golden Gate Canyon State Park",
    description: "Features mountain trails and scenic views.",
    location: "Golden, CO",
    latitude: 39.83,
    longitude: -105.40,
    state: "colorado"
  },
  {
    name: "Harvey Gap State Park",
    description: "Features reservoir recreation and camping.",
    location: "Rifle, CO",
    latitude: 39.58,
    longitude: -107.78,
    state: "colorado"
  },
  {
    name: "Highline Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Loma, CO",
    latitude: 39.19,
    longitude: -108.86,
    state: "colorado"
  },
  {
    name: "Jackson Lake State Park",
    description: "Features reservoir recreation and camping.",
    location: "Orchard, CO",
    latitude: 40.41,
    longitude: -104.07,
    state: "colorado"
  },
  {
    name: "James M. Robb - Colorado River State Park",
    description: "Features river recreation and wildlife viewing.",
    location: "Grand Junction, CO",
    latitude: 39.07,
    longitude: -108.57,
    state: "colorado"
  },
  {
    name: "John Martin Reservoir State Park",
    description: "Features reservoir recreation and camping.",
    location: "Las Animas, CO",
    latitude: 38.07,
    longitude: -103.11,
    state: "colorado"
  },
  {
    name: "Lake Pueblo State Park",
    description: "Features reservoir recreation and extensive trail system.",
    location: "Pueblo, CO",
    latitude: 38.25,
    longitude: -104.75,
    state: "colorado"
  },
  {
    name: "Lathrop State Park",
    description: "Features lake recreation and camping.",
    location: "Walsenburg, CO",
    latitude: 37.61,
    longitude: -104.79,
    state: "colorado"
  },
  {
    name: "Lone Mesa State Park",
    description: "Features remote wilderness and hunting opportunities.",
    location: "Dolores, CO",
    latitude: 37.75,
    longitude: -108.50,
    state: "colorado"
  },
  {
    name: "Lory State Park",
    description: "Features mountain trails and scenic views.",
    location: "Bellvue, CO",
    latitude: 40.58,
    longitude: -105.17,
    state: "colorado"
  },
  {
    name: "Mancos State Park",
    description: "Features lake recreation and camping.",
    location: "Mancos, CO",
    latitude: 37.45,
    longitude: -108.30,
    state: "colorado"
  },
  {
    name: "Mueller State Park",
    description: "Features mountain trails and wildlife viewing.",
    location: "Divide, CO",
    latitude: 38.83,
    longitude: -105.17,
    state: "colorado"
  },
  {
    name: "Navajo State Park",
    description: "Features reservoir recreation and camping.",
    location: "Arboles, CO",
    latitude: 37.00,
    longitude: -107.40,
    state: "colorado"
  },
  {
    name: "North Sterling State Park",
    description: "Features reservoir recreation and camping.",
    location: "Sterling, CO",
    latitude: 40.80,
    longitude: -103.20,
    state: "colorado"
  },
  {
    name: "Paonia State Park",
    description: "Features reservoir recreation and camping.",
    location: "Paonia, CO",
    latitude: 38.87,
    longitude: -107.59,
    state: "colorado"
  },
  {
    name: "Pearl Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Steamboat Springs, CO",
    latitude: 40.72,
    longitude: -106.83,
    state: "colorado"
  },
  {
    name: "Ridgway State Park",
    description: "Features reservoir recreation and camping.",
    location: "Ridgway, CO",
    latitude: 38.22,
    longitude: -107.75,
    state: "colorado"
  },
  {
    name: "Rifle Falls State Park",
    description: "Features dramatic waterfalls and hiking trails.",
    location: "Rifle, CO",
    latitude: 39.67,
    longitude: -107.70,
    state: "colorado"
  },
  {
    name: "Rifle Gap State Park",
    description: "Features reservoir recreation and camping.",
    location: "Rifle, CO",
    latitude: 39.63,
    longitude: -107.78,
    state: "colorado"
  },
  {
    name: "Roxborough State Park",
    description: "Features dramatic red rock formations and hiking trails.",
    location: "Littleton, CO",
    latitude: 39.43,
    longitude: -105.07,
    state: "colorado"
  },
  {
    name: "Spinney Mountain State Park",
    description: "Features reservoir recreation and camping.",
    location: "Lake George, CO",
    latitude: 38.93,
    longitude: -105.55,
    state: "colorado"
  },
  {
    name: "St. Vrain State Park",
    description: "Features lake recreation and wildlife viewing.",
    location: "Firestone, CO",
    latitude: 40.13,
    longitude: -104.98,
    state: "colorado"
  },
  {
    name: "Stagecoach State Park",
    description: "Features reservoir recreation and camping.",
    location: "Steamboat Springs, CO",
    latitude: 40.30,
    longitude: -106.87,
    state: "colorado"
  },
  {
    name: "State Forest State Park",
    description: "Features mountain trails and wildlife viewing.",
    location: "Walden, CO",
    latitude: 40.58,
    longitude: -105.92,
    state: "colorado"
  },
  {
    name: "Staunton State Park",
    description: "Features mountain trails and scenic views.",
    location: "Pine, CO",
    latitude: 39.50,
    longitude: -105.37,
    state: "colorado"
  },
  {
    name: "Steamboat Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Clark, CO",
    latitude: 40.75,
    longitude: -106.95,
    state: "colorado"
  },
  {
    name: "Sweetwater Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Gypsum, CO",
    latitude: 39.83,
    longitude: -107.17,
    state: "colorado"
  },
  {
    name: "Sweitzer Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Delta, CO",
    latitude: 38.73,
    longitude: -108.03,
    state: "colorado"
  },
  {
    name: "Sylvan Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Eagle, CO",
    latitude: 39.83,
    longitude: -106.67,
    state: "colorado"
  },
  {
    name: "Trinidad Lake State Park",
    description: "Features reservoir recreation and camping.",
    location: "Trinidad, CO",
    latitude: 37.17,
    longitude: -104.50,
    state: "colorado"
  },
  {
    name: "Vega State Park",
    description: "Features reservoir recreation and camping.",
    location: "Collbran, CO",
    latitude: 39.17,
    longitude: -107.83,
    state: "colorado"
  },
  {
    name: "Yampa River State Park",
    description: "Features river recreation and camping.",
    location: "Hayden, CO",
    latitude: 40.50,
    longitude: -107.25,
    state: "colorado"
  }
];

async function populateColoradoParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of coloradoParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Colorado parks have been added to the database');
  } catch (error) {
    console.error('Error adding Colorado parks:', error);
  }
}

populateColoradoParks(); 