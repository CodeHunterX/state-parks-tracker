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

const montanaParks = [
  {
    name: "Ackley Lake State Park",
    description: "Features fishing and water recreation on a scenic lake.",
    location: "Hobson, MT",
    latitude: 47.00,
    longitude: -109.87,
    state: "montana"
  },
  {
    name: "Anaconda Smelter Stack State Park",
    description: "Features historic smelter stack and interpretive site.",
    location: "Anaconda, MT",
    latitude: 46.12,
    longitude: -112.95,
    state: "montana"
  },
  {
    name: "Bannack State Park",
    description: "Features well-preserved ghost town and historic buildings.",
    location: "Dillon, MT",
    latitude: 45.16,
    longitude: -112.99,
    state: "montana"
  },
  {
    name: "Beaverhead Rock State Park",
    description: "Features historic landmark and scenic views.",
    location: "Twin Bridges, MT",
    latitude: 45.38,
    longitude: -112.47,
    state: "montana"
  },
  {
    name: "Beavertail Hill State Park",
    description: "Features river recreation and camping.",
    location: "Clinton, MT",
    latitude: 46.77,
    longitude: -113.71,
    state: "montana"
  },
  {
    name: "Big Arm State Park",
    description: "Features lake recreation and scenic views.",
    location: "Big Arm, MT",
    latitude: 47.73,
    longitude: -114.28,
    state: "montana"
  },
  {
    name: "Black Sandy State Park",
    description: "Features reservoir recreation and camping.",
    location: "Helena, MT",
    latitude: 46.72,
    longitude: -111.83,
    state: "montana"
  },
  {
    name: "Brush Lake State Park",
    description: "Features unique mineral lake and camping.",
    location: "Dagmar, MT",
    latitude: 48.83,
    longitude: -104.17,
    state: "montana"
  },
  {
    name: "Chief Plenty Coups State Park",
    description: "Features historic home and cultural site.",
    location: "Pryor, MT",
    latitude: 45.43,
    longitude: -108.54,
    state: "montana"
  },
  {
    name: "Clark's Lookout State Park",
    description: "Features historic Lewis and Clark site.",
    location: "Dillon, MT",
    latitude: 45.22,
    longitude: -112.64,
    state: "montana"
  },
  {
    name: "Cooney State Park",
    description: "Features reservoir recreation and camping.",
    location: "Roberts, MT",
    latitude: 45.43,
    longitude: -109.41,
    state: "montana"
  },
  {
    name: "Council Grove State Park",
    description: "Features historic treaty site and river recreation.",
    location: "Missoula, MT",
    latitude: 46.87,
    longitude: -113.99,
    state: "montana"
  },
  {
    name: "Elkhorn State Park",
    description: "Features historic mining town and ghost town.",
    location: "Boulder, MT",
    latitude: 46.35,
    longitude: -112.10,
    state: "montana"
  },
  {
    name: "Finley Point State Park",
    description: "Features lake recreation and camping.",
    location: "Polson, MT",
    latitude: 47.72,
    longitude: -114.15,
    state: "montana"
  },
  {
    name: "First Peoples Buffalo Jump State Park",
    description: "Features historic buffalo jump and cultural site.",
    location: "Ulm, MT",
    latitude: 47.47,
    longitude: -111.53,
    state: "montana"
  },
  {
    name: "Fish Creek State Park",
    description: "Features mountain recreation and wildlife viewing.",
    location: "Plains, MT",
    latitude: 47.47,
    longitude: -114.88,
    state: "montana"
  },
  {
    name: "Fort Owen State Park",
    description: "Features historic trading post and cultural site.",
    location: "Stevensville, MT",
    latitude: 46.51,
    longitude: -114.09,
    state: "montana"
  },
  {
    name: "Frenchtown Pond State Park",
    description: "Features fishing and water recreation.",
    location: "Frenchtown, MT",
    latitude: 47.02,
    longitude: -114.23,
    state: "montana"
  },
  {
    name: "Giant Springs State Park",
    description: "Features natural springs and river recreation.",
    location: "Great Falls, MT",
    latitude: 47.53,
    longitude: -111.22,
    state: "montana"
  },
  {
    name: "Granite Ghost Town State Park",
    description: "Features historic mining town and ghost town.",
    location: "Philipsburg, MT",
    latitude: 46.31,
    longitude: -113.24,
    state: "montana"
  },
  {
    name: "Greycliff Prairie Dog Town State Park",
    description: "Features prairie dog colony and wildlife viewing.",
    location: "Greycliff, MT",
    latitude: 45.75,
    longitude: -109.78,
    state: "montana"
  },
  {
    name: "Hell Creek State Park",
    description: "Features reservoir recreation and camping.",
    location: "Jordan, MT",
    latitude: 47.60,
    longitude: -106.27,
    state: "montana"
  },
  {
    name: "Lake Elmo State Park",
    description: "Features lake recreation and wildlife viewing.",
    location: "Billings, MT",
    latitude: 45.72,
    longitude: -108.62,
    state: "montana"
  },
  {
    name: "Lake Mary Ronan State Park",
    description: "Features lake recreation and camping.",
    location: "Proctor, MT",
    latitude: 47.93,
    longitude: -114.40,
    state: "montana"
  },
  {
    name: "Lewis and Clark Caverns State Park",
    description: "Features limestone caverns and guided tours.",
    location: "Whitehall, MT",
    latitude: 45.84,
    longitude: -111.88,
    state: "montana"
  },
  {
    name: "Logan State Park",
    description: "Features reservoir recreation and camping.",
    location: "Libby, MT",
    latitude: 48.06,
    longitude: -115.50,
    state: "montana"
  },
  {
    name: "Lost Creek State Park",
    description: "Features scenic canyon and waterfall.",
    location: "Anaconda, MT",
    latitude: 46.16,
    longitude: -113.14,
    state: "montana"
  },
  {
    name: "Madison Buffalo Jump State Park",
    description: "Features historic buffalo jump and cultural site.",
    location: "Three Forks, MT",
    latitude: 45.80,
    longitude: -111.90,
    state: "montana"
  },
  {
    name: "Makoshika State Park",
    description: "Features badlands and dinosaur fossils.",
    location: "Glendive, MT",
    latitude: 47.07,
    longitude: -104.72,
    state: "montana"
  },
  {
    name: "Medicine Rocks State Park",
    description: "Features unique rock formations and camping.",
    location: "Ekalaka, MT",
    latitude: 46.00,
    longitude: -104.50,
    state: "montana"
  },
  {
    name: "Missouri Headwaters State Park",
    description: "Features historic Lewis and Clark site and river recreation.",
    location: "Three Forks, MT",
    latitude: 45.93,
    longitude: -111.50,
    state: "montana"
  },
  {
    name: "Painted Rocks State Park",
    description: "Features reservoir recreation and camping.",
    location: "Darby, MT",
    latitude: 46.05,
    longitude: -114.20,
    state: "montana"
  },
  {
    name: "Parker Homestead State Park",
    description: "Features historic homestead and cultural site.",
    location: "Dillon, MT",
    latitude: 45.22,
    longitude: -112.64,
    state: "montana"
  },
  {
    name: "Pictograph Cave State Park",
    description: "Features ancient rock art and cultural site.",
    location: "Billings, MT",
    latitude: 45.73,
    longitude: -108.41,
    state: "montana"
  },
  {
    name: "Pirogue Island State Park",
    description: "Features river recreation and wildlife viewing.",
    location: "Three Forks, MT",
    latitude: 45.89,
    longitude: -111.55,
    state: "montana"
  },
  {
    name: "Placid Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Seeley Lake, MT",
    latitude: 47.15,
    longitude: -113.45,
    state: "montana"
  },
  {
    name: "Rosebud Battlefield State Park",
    description: "Features historic battlefield and cultural site.",
    location: "Busby, MT",
    latitude: 45.23,
    longitude: -106.99,
    state: "montana"
  },
  {
    name: "Salmon Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Seeley Lake, MT",
    latitude: 47.18,
    longitude: -113.48,
    state: "montana"
  },
  {
    name: "Sluice Boxes State Park",
    description: "Features scenic canyon and river recreation.",
    location: "Belt, MT",
    latitude: 47.38,
    longitude: -110.92,
    state: "montana"
  },
  {
    name: "Smith River State Park",
    description: "Features river recreation and scenic float trips.",
    location: "White Sulphur Springs, MT",
    latitude: 46.55,
    longitude: -110.90,
    state: "montana"
  },
  {
    name: "Spring Meadow Lake State Park",
    description: "Features lake recreation and wildlife viewing.",
    location: "Helena, MT",
    latitude: 46.60,
    longitude: -112.02,
    state: "montana"
  },
  {
    name: "Thompson Falls State Park",
    description: "Features river recreation and scenic views.",
    location: "Thompson Falls, MT",
    latitude: 47.59,
    longitude: -115.34,
    state: "montana"
  },
  {
    name: "Tongue River Reservoir State Park",
    description: "Features reservoir recreation and camping.",
    location: "Decker, MT",
    latitude: 45.12,
    longitude: -106.80,
    state: "montana"
  },
  {
    name: "Tower Rock State Park",
    description: "Features unique rock formation and scenic views.",
    location: "Cascade, MT",
    latitude: 47.27,
    longitude: -111.70,
    state: "montana"
  },
  {
    name: "Travelers' Rest State Park",
    description: "Features historic Lewis and Clark site and cultural center.",
    location: "Lolo, MT",
    latitude: 46.75,
    longitude: -114.09,
    state: "montana"
  },
  {
    name: "Wayfarers State Park",
    description: "Features lake recreation and scenic views.",
    location: "Bigfork, MT",
    latitude: 48.07,
    longitude: -114.08,
    state: "montana"
  },
  {
    name: "Whitefish Lake State Park",
    description: "Features lake recreation and camping.",
    location: "Whitefish, MT",
    latitude: 48.41,
    longitude: -114.34,
    state: "montana"
  }
];

async function populateMontanaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of montanaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Montana parks have been added to the database');
  } catch (error) {
    console.error('Error adding Montana parks:', error);
  }
}

populateMontanaParks(); 