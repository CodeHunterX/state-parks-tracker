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

const nevadaParks = [
  {
    name: "Beaver Dam State Park",
    description: "Features remote canyon recreation and camping in eastern Nevada.",
    location: "Caliente, NV",
    latitude: 37.45,
    longitude: -114.03,
    state: "nevada"
  },
  {
    name: "Berlin–Ichthyosaur State Park",
    description: "Features fossil beds and historic mining ghost town.",
    location: "Austin, NV",
    latitude: 38.88,
    longitude: -117.61,
    state: "nevada"
  },
  {
    name: "Big Bend of the Colorado State Recreation Area",
    description: "Features Colorado River recreation and scenic views.",
    location: "Laughlin, NV",
    latitude: 35.17,
    longitude: -114.57,
    state: "nevada"
  },
  {
    name: "Cathedral Gorge State Park",
    description: "Features dramatic eroded spires and slot canyons.",
    location: "Panaca, NV",
    latitude: 37.81,
    longitude: -114.41,
    state: "nevada"
  },
  {
    name: "Cave Lake State Park",
    description: "Features mountain lake recreation and camping.",
    location: "Ely, NV",
    latitude: 39.23,
    longitude: -114.84,
    state: "nevada"
  },
  {
    name: "Dayton State Park",
    description: "Features historic mining sites and river recreation.",
    location: "Dayton, NV",
    latitude: 39.24,
    longitude: -119.59,
    state: "nevada"
  },
  {
    name: "Echo Canyon State Park",
    description: "Features reservoir recreation and scenic canyon views.",
    location: "Pioche, NV",
    latitude: 37.81,
    longitude: -114.43,
    state: "nevada"
  },
  {
    name: "Elgin Schoolhouse State Historic Site",
    description: "Features historic schoolhouse and pioneer history.",
    location: "Elgin, NV",
    latitude: 37.45,
    longitude: -114.51,
    state: "nevada"
  },
  {
    name: "Fort Churchill State Historic Park",
    description: "Features historic military fort and pioneer cemetery.",
    location: "Silver Springs, NV",
    latitude: 39.29,
    longitude: -119.27,
    state: "nevada"
  },
  {
    name: "Ice Age Fossils State Park",
    description: "Features fossil beds and interpretive trails.",
    location: "Las Vegas, NV",
    latitude: 36.21,
    longitude: -115.14,
    state: "nevada"
  },
  {
    name: "Kershaw–Ryan State Park",
    description: "Features historic gardens and canyon recreation.",
    location: "Caliente, NV",
    latitude: 37.61,
    longitude: -114.51,
    state: "nevada"
  },
  {
    name: "Lahontan State Recreation Area",
    description: "Features reservoir recreation and wildlife viewing.",
    location: "Fallon, NV",
    latitude: 39.42,
    longitude: -119.10,
    state: "nevada"
  },
  {
    name: "Lake Tahoe–Nevada State Park",
    description: "Features alpine lake recreation and scenic views.",
    location: "Incline Village, NV",
    latitude: 39.25,
    longitude: -119.95,
    state: "nevada"
  },
  {
    name: "Mormon Station State Historic Park",
    description: "Features historic trading post and pioneer history.",
    location: "Genoa, NV",
    latitude: 39.00,
    longitude: -119.85,
    state: "nevada"
  },
  {
    name: "Old Las Vegas Mormon Fort State Historic Park",
    description: "Features historic fort and pioneer settlement.",
    location: "Las Vegas, NV",
    latitude: 36.18,
    longitude: -115.13,
    state: "nevada"
  },
  {
    name: "Rye Patch State Recreation Area",
    description: "Features reservoir recreation and camping.",
    location: "Lovelock, NV",
    latitude: 40.50,
    longitude: -118.25,
    state: "nevada"
  },
  {
    name: "South Fork State Recreation Area",
    description: "Features reservoir recreation and wildlife viewing.",
    location: "Elko, NV",
    latitude: 40.72,
    longitude: -115.64,
    state: "nevada"
  },
  {
    name: "Spring Mountain Ranch State Park",
    description: "Features historic ranch and cultural events.",
    location: "Blue Diamond, NV",
    latitude: 36.13,
    longitude: -115.45,
    state: "nevada"
  },
  {
    name: "Spring Valley State Park",
    description: "Features reservoir recreation and scenic views.",
    location: "Pioche, NV",
    latitude: 38.20,
    longitude: -114.40,
    state: "nevada"
  },
  {
    name: "Valley of Fire State Park",
    description: "Features dramatic red rock formations and petroglyphs.",
    location: "Overton, NV",
    latitude: 36.43,
    longitude: -114.52,
    state: "nevada"
  },
  {
    name: "Van Sickle Bi-State Park",
    description: "Features mountain trails and scenic views.",
    location: "Stateline, NV",
    latitude: 38.96,
    longitude: -119.94,
    state: "nevada"
  },
  {
    name: "Walker River State Recreation Area",
    description: "Features river recreation and wildlife viewing.",
    location: "Yerington, NV",
    latitude: 38.99,
    longitude: -119.16,
    state: "nevada"
  },
  {
    name: "Ward Charcoal Ovens State Historic Park",
    description: "Features historic charcoal ovens and mining history.",
    location: "Ely, NV",
    latitude: 39.31,
    longitude: -114.79,
    state: "nevada"
  },
  {
    name: "Washoe Lake State Park",
    description: "Features lake recreation and wildlife viewing.",
    location: "Carson City, NV",
    latitude: 39.27,
    longitude: -119.80,
    state: "nevada"
  },
  {
    name: "Wild Horse State Recreation Area",
    description: "Features reservoir recreation and wildlife viewing.",
    location: "Elko, NV",
    latitude: 41.75,
    longitude: -115.79,
    state: "nevada"
  }
];

async function populateNevadaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of nevadaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Nevada parks have been added to the database');
  } catch (error) {
    console.error('Error adding Nevada parks:', error);
  }
}

populateNevadaParks(); 