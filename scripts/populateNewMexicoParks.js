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

const newMexicoParks = [
  {
    name: "Bluewater Lake State Park",
    description: "Features a 1,200-acre reservoir in the Zuni Mountains with fishing and water recreation.",
    location: "Grants, NM",
    latitude: 35.28,
    longitude: -108.13,
    state: "new mexico"
  },
  {
    name: "Bottomless Lakes State Park",
    description: "Features eight cenotes with greenish-blue water and unique geological formations.",
    location: "Roswell, NM",
    latitude: 33.36,
    longitude: -104.33,
    state: "new mexico"
  },
  {
    name: "Brantley Lake State Park",
    description: "Features New Mexico's southernmost lake, a 4,000-acre reservoir on the Pecos River.",
    location: "Carlsbad, NM",
    latitude: 32.53,
    longitude: -104.37,
    state: "new mexico"
  },
  {
    name: "Caballo Lake State Park",
    description: "Features an 11,500-acre reservoir on the Rio Grande with water recreation.",
    location: "Truth or Consequences, NM",
    latitude: 32.95,
    longitude: -107.30,
    state: "new mexico"
  },
  {
    name: "Cerrillos Hills State Park",
    description: "Features historic mining trails and scenic views of the Cerrillos Hills.",
    location: "Santa Fe, NM",
    latitude: 35.53,
    longitude: -106.13,
    state: "new mexico"
  },
  {
    name: "City of Rocks State Park",
    description: "Features unique volcanic rock formations and desert landscape.",
    location: "Faywood, NM",
    latitude: 32.35,
    longitude: -107.98,
    state: "new mexico"
  },
  {
    name: "Clayton Lake State Park",
    description: "Features reservoir recreation and dinosaur trackways.",
    location: "Clayton, NM",
    latitude: 36.58,
    longitude: -103.30,
    state: "new mexico"
  },
  {
    name: "Conchas Lake State Park",
    description: "Features reservoir recreation and scenic views of the Canadian River.",
    location: "Conchas Dam, NM",
    latitude: 35.37,
    longitude: -104.20,
    state: "new mexico"
  },
  {
    name: "Coyote Creek State Park",
    description: "Features mountain stream fishing and forest recreation.",
    location: "Guadalupita, NM",
    latitude: 36.13,
    longitude: -105.27,
    state: "new mexico"
  },
  {
    name: "Eagle Nest Lake State Park",
    description: "Features alpine lake recreation and scenic mountain views.",
    location: "Eagle Nest, NM",
    latitude: 36.55,
    longitude: -105.26,
    state: "new mexico"
  },
  {
    name: "Elephant Butte Lake State Park",
    description: "Features New Mexico's largest lake with extensive water recreation.",
    location: "Truth or Consequences, NM",
    latitude: 33.15,
    longitude: -107.18,
    state: "new mexico"
  },
  {
    name: "El Vado Lake State Park",
    description: "Features reservoir recreation and mountain scenery.",
    location: "Tierra Amarilla, NM",
    latitude: 36.60,
    longitude: -106.73,
    state: "new mexico"
  },
  {
    name: "Fenton Lake State Park",
    description: "Features mountain lake recreation and forest camping.",
    location: "Jemez Springs, NM",
    latitude: 35.88,
    longitude: -106.68,
    state: "new mexico"
  },
  {
    name: "Heron Lake State Park",
    description: "Features reservoir recreation and scenic mountain views.",
    location: "Los Ojos, NM",
    latitude: 36.68,
    longitude: -106.70,
    state: "new mexico"
  },
  {
    name: "Hyde Memorial State Park",
    description: "Features mountain recreation and forest camping near Santa Fe.",
    location: "Santa Fe, NM",
    latitude: 35.72,
    longitude: -105.82,
    state: "new mexico"
  },
  {
    name: "Leasburg Dam State Park",
    description: "Features river recreation and desert landscape.",
    location: "Radium Springs, NM",
    latitude: 32.50,
    longitude: -106.92,
    state: "new mexico"
  },
  {
    name: "Living Desert Zoo and Gardens State Park",
    description: "Features native wildlife and desert plant exhibits.",
    location: "Carlsbad, NM",
    latitude: 32.42,
    longitude: -104.23,
    state: "new mexico"
  },
  {
    name: "Manzano Mountains State Park",
    description: "Features mountain recreation and forest camping.",
    location: "Mountainair, NM",
    latitude: 34.65,
    longitude: -106.35,
    state: "new mexico"
  },
  {
    name: "Morphy Lake State Park",
    description: "Features mountain lake recreation and forest camping.",
    location: "Mora, NM",
    latitude: 35.97,
    longitude: -105.32,
    state: "new mexico"
  },
  {
    name: "Navajo Lake State Park",
    description: "Features reservoir recreation and scenic canyon views.",
    location: "Navajo Dam, NM",
    latitude: 36.80,
    longitude: -107.62,
    state: "new mexico"
  },
  {
    name: "Oasis State Park",
    description: "Features desert recreation and unique geological formations.",
    location: "Portales, NM",
    latitude: 34.28,
    longitude: -103.33,
    state: "new mexico"
  },
  {
    name: "Pancho Villa State Park",
    description: "Features historic military site and desert recreation.",
    location: "Columbus, NM",
    latitude: 31.83,
    longitude: -107.63,
    state: "new mexico"
  },
  {
    name: "Percha Dam State Park",
    description: "Features river recreation and desert landscape.",
    location: "Arrey, NM",
    latitude: 32.85,
    longitude: -107.30,
    state: "new mexico"
  },
  {
    name: "Rio Grande Nature Center State Park",
    description: "Features wildlife viewing and river recreation.",
    location: "Albuquerque, NM",
    latitude: 35.13,
    longitude: -106.68,
    state: "new mexico"
  },
  {
    name: "Rockhound State Park",
    description: "Features mineral collecting and desert recreation.",
    location: "Deming, NM",
    latitude: 32.03,
    longitude: -107.85,
    state: "new mexico"
  },
  {
    name: "Santa Rosa Lake State Park",
    description: "Features reservoir recreation and scenic views.",
    location: "Santa Rosa, NM",
    latitude: 34.93,
    longitude: -104.68,
    state: "new mexico"
  },
  {
    name: "Storrie Lake State Park",
    description: "Features reservoir recreation and mountain views.",
    location: "Las Vegas, NM",
    latitude: 35.60,
    longitude: -105.22,
    state: "new mexico"
  },
  {
    name: "Sugarite Canyon State Park",
    description: "Features mountain recreation and historic coal mining site.",
    location: "Raton, NM",
    latitude: 36.95,
    longitude: -104.38,
    state: "new mexico"
  },
  {
    name: "Sumner Lake State Park",
    description: "Features reservoir recreation and desert landscape.",
    location: "Fort Sumner, NM",
    latitude: 34.60,
    longitude: -104.38,
    state: "new mexico"
  },
  {
    name: "Ute Lake State Park",
    description: "Features reservoir recreation and scenic views.",
    location: "Logan, NM",
    latitude: 35.95,
    longitude: -103.33,
    state: "new mexico"
  },
  {
    name: "Villanueva State Park",
    description: "Features river recreation and scenic canyon views.",
    location: "Villanueva, NM",
    latitude: 35.27,
    longitude: -105.36,
    state: "new mexico"
  },
  {
    name: "Winston State Park",
    description: "Features mountain recreation and forest camping.",
    location: "Winston, NM",
    latitude: 33.35,
    longitude: -107.65,
    state: "new mexico"
  },
  {
    name: "Zaragoza State Park",
    description: "Features reservoir recreation and desert landscape.",
    location: "Deming, NM",
    latitude: 32.27,
    longitude: -107.75,
    state: "new mexico"
  }
];

async function populateNewMexicoParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of newMexicoParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All New Mexico parks have been added to the database');
  } catch (error) {
    console.error('Error adding New Mexico parks:', error);
  }
}

populateNewMexicoParks(); 