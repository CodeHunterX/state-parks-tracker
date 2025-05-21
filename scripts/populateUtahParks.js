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

const utahParks = [
  {
    name: "Anasazi State Park Museum",
    description: "Features an Ancestral Puebloan village site with museum exhibits.",
    location: "Boulder, UT",
    latitude: 37.91,
    longitude: -111.42,
    state: "utah"
  },
  {
    name: "Antelope Island State Park",
    description: "Features bison herds, scenic views of Great Salt Lake, and hiking trails.",
    location: "Syracuse, UT",
    latitude: 41.05,
    longitude: -112.22,
    state: "utah"
  },
  {
    name: "Bear Lake State Park",
    description: "Features turquoise waters, beach recreation, and scenic mountain views.",
    location: "Garden City, UT",
    latitude: 41.95,
    longitude: -111.39,
    state: "utah"
  },
  {
    name: "Camp Floyd / Stagecoach Inn State Park",
    description: "Features historic military camp and stagecoach inn museum.",
    location: "Fairfield, UT",
    latitude: 40.26,
    longitude: -112.09,
    state: "utah"
  },
  {
    name: "Coral Pink Sand Dunes State Park",
    description: "Features unique pink sand dunes and off-highway vehicle recreation.",
    location: "Kanab, UT",
    latitude: 37.04,
    longitude: -112.72,
    state: "utah"
  },
  {
    name: "Dead Horse Point State Park",
    description: "Features dramatic canyon views and scenic overlooks.",
    location: "Moab, UT",
    latitude: 38.48,
    longitude: -109.74,
    state: "utah"
  },
  {
    name: "Deer Creek State Park",
    description: "Features reservoir recreation and mountain scenery.",
    location: "Heber City, UT",
    latitude: 40.45,
    longitude: -111.52,
    state: "utah"
  },
  {
    name: "East Canyon State Park",
    description: "Features reservoir recreation and scenic mountain views.",
    location: "Morgan, UT",
    latitude: 40.91,
    longitude: -111.72,
    state: "utah"
  },
  {
    name: "Edge of the Cedars State Park Museum",
    description: "Features Ancestral Puebloan ruins and archaeological museum.",
    location: "Blanding, UT",
    latitude: 37.62,
    longitude: -109.48,
    state: "utah"
  },
  {
    name: "Escalante Petrified Forest State Park",
    description: "Features petrified wood and reservoir recreation.",
    location: "Escalante, UT",
    latitude: 37.77,
    longitude: -111.60,
    state: "utah"
  },
  {
    name: "Flight Park State Recreation Area",
    description: "Features hang gliding and paragliding launch site.",
    location: "Salt Lake City, UT",
    latitude: 40.65,
    longitude: -111.83,
    state: "utah"
  },
  {
    name: "Fremont Indian State Park and Museum",
    description: "Features Fremont culture artifacts and rock art.",
    location: "Sevier, UT",
    latitude: 38.57,
    longitude: -112.33,
    state: "utah"
  },
  {
    name: "Frontier Homestead State Park Museum",
    description: "Features pioneer history and iron mining exhibits.",
    location: "Cedar City, UT",
    latitude: 37.68,
    longitude: -113.06,
    state: "utah"
  },
  {
    name: "Goblin Valley State Park",
    description: "Features unique rock formations and desert landscape.",
    location: "Green River, UT",
    latitude: 38.57,
    longitude: -110.71,
    state: "utah"
  },
  {
    name: "Goosenecks State Park",
    description: "Features dramatic river meanders and canyon views.",
    location: "Mexican Hat, UT",
    latitude: 37.17,
    longitude: -109.93,
    state: "utah"
  },
  {
    name: "Great Salt Lake State Park",
    description: "Features lake access and scenic views.",
    location: "Salt Lake City, UT",
    latitude: 40.73,
    longitude: -112.22,
    state: "utah"
  },
  {
    name: "Green River State Park",
    description: "Features river recreation and golf course.",
    location: "Green River, UT",
    latitude: 38.99,
    longitude: -110.16,
    state: "utah"
  },
  {
    name: "Gunlock State Park",
    description: "Features reservoir recreation and red rock scenery.",
    location: "Gunlock, UT",
    latitude: 37.28,
    longitude: -113.77,
    state: "utah"
  },
  {
    name: "Historic Union Pacific Rail Trail State Park",
    description: "Features historic rail trail for hiking and biking.",
    location: "Park City, UT",
    latitude: 40.65,
    longitude: -111.50,
    state: "utah"
  },
  {
    name: "Huntington State Park",
    description: "Features reservoir recreation and mountain views.",
    location: "Huntington, UT",
    latitude: 39.33,
    longitude: -110.96,
    state: "utah"
  },
  {
    name: "Hyrum State Park",
    description: "Features reservoir recreation and mountain scenery.",
    location: "Hyrum, UT",
    latitude: 41.63,
    longitude: -111.85,
    state: "utah"
  },
  {
    name: "Iron Mission State Park Museum",
    description: "Features pioneer iron industry history and artifacts.",
    location: "Cedar City, UT",
    latitude: 37.68,
    longitude: -113.06,
    state: "utah"
  },
  {
    name: "Jordan River Off-Highway Vehicle State Recreation Area",
    description: "Features OHV trails and riding areas.",
    location: "Salt Lake City, UT",
    latitude: 40.73,
    longitude: -111.93,
    state: "utah"
  },
  {
    name: "Jordanelle State Park",
    description: "Features reservoir recreation and mountain views.",
    location: "Heber City, UT",
    latitude: 40.63,
    longitude: -111.10,
    state: "utah"
  },
  {
    name: "Kodachrome Basin State Park",
    description: "Features colorful rock formations and desert landscape.",
    location: "Cannonville, UT",
    latitude: 37.50,
    longitude: -112.00,
    state: "utah"
  },
  {
    name: "Lost Creek State Park",
    description: "Features reservoir recreation and mountain scenery.",
    location: "Croydon, UT",
    latitude: 41.05,
    longitude: -111.50,
    state: "utah"
  },
  {
    name: "Millsite State Park",
    description: "Features reservoir recreation and desert landscape.",
    location: "Ferron, UT",
    latitude: 39.09,
    longitude: -111.10,
    state: "utah"
  },
  {
    name: "Otter Creek State Park",
    description: "Features reservoir recreation and mountain views.",
    location: "Antimony, UT",
    latitude: 38.23,
    longitude: -111.99,
    state: "utah"
  },
  {
    name: "Palmetto State Park",
    description: "Features unique rock formations and desert landscape.",
    location: "Hanksville, UT",
    latitude: 38.35,
    longitude: -110.71,
    state: "utah"
  },
  {
    name: "Piute State Park",
    description: "Features reservoir recreation and mountain scenery.",
    location: "Junction, UT",
    latitude: 38.23,
    longitude: -112.22,
    state: "utah"
  },
  {
    name: "Quail Creek State Park",
    description: "Features reservoir recreation and red rock scenery.",
    location: "Hurricane, UT",
    latitude: 37.17,
    longitude: -113.37,
    state: "utah"
  },
  {
    name: "Red Fleet State Park",
    description: "Features reservoir recreation and dinosaur tracks.",
    location: "Vernal, UT",
    latitude: 40.57,
    longitude: -109.42,
    state: "utah"
  },
  {
    name: "Rockport State Park",
    description: "Features reservoir recreation and mountain views.",
    location: "Peoa, UT",
    latitude: 40.76,
    longitude: -111.38,
    state: "utah"
  },
  {
    name: "Sand Hollow State Park",
    description: "Features reservoir recreation and red rock scenery.",
    location: "Hurricane, UT",
    latitude: 37.12,
    longitude: -113.37,
    state: "utah"
  },
  {
    name: "Snow Canyon State Park",
    description: "Features red rock formations and desert landscape.",
    location: "Ivins, UT",
    latitude: 37.20,
    longitude: -113.65,
    state: "utah"
  },
  {
    name: "Starvation State Park",
    description: "Features reservoir recreation and desert landscape.",
    location: "Duchesne, UT",
    latitude: 40.19,
    longitude: -110.42,
    state: "utah"
  },
  {
    name: "Steinaker State Park",
    description: "Features reservoir recreation and mountain views.",
    location: "Vernal, UT",
    latitude: 40.48,
    longitude: -109.55,
    state: "utah"
  },
  {
    name: "Territorial Statehouse State Park Museum",
    description: "Features Utah's first capitol building and pioneer history.",
    location: "Fillmore, UT",
    latitude: 38.97,
    longitude: -112.33,
    state: "utah"
  },
  {
    name: "This Is the Place Heritage Park",
    description: "Features pioneer history and living history exhibits.",
    location: "Salt Lake City, UT",
    latitude: 40.76,
    longitude: -111.83,
    state: "utah"
  },
  {
    name: "Utah Field House of Natural History State Park Museum",
    description: "Features dinosaur fossils and natural history exhibits.",
    location: "Vernal, UT",
    latitude: 40.45,
    longitude: -109.53,
    state: "utah"
  },
  {
    name: "Utah Lake State Park",
    description: "Features lake recreation and mountain views.",
    location: "Provo, UT",
    latitude: 40.23,
    longitude: -111.74,
    state: "utah"
  },
  {
    name: "Wasatch Mountain State Park",
    description: "Features mountain recreation and golf course.",
    location: "Midway, UT",
    latitude: 40.52,
    longitude: -111.47,
    state: "utah"
  },
  {
    name: "Willard Bay State Park",
    description: "Features reservoir recreation and bird watching.",
    location: "Willard, UT",
    latitude: 41.40,
    longitude: -112.05,
    state: "utah"
  },
  {
    name: "Yuba State Park",
    description: "Features reservoir recreation and desert landscape.",
    location: "Levan, UT",
    latitude: 39.38,
    longitude: -112.00,
    state: "utah"
  }
];

async function populateUtahParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of utahParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Utah parks have been added to the database');
  } catch (error) {
    console.error('Error adding Utah parks:', error);
  }
}

populateUtahParks(); 