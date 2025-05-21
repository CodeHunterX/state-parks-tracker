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

const arizonaParks = [
  {
    name: "Alamo Lake State Park",
    description: "Features a remote reservoir on the Bill Williams River with premiere bass fishing and stargazing opportunities.",
    location: "Wenden, AZ",
    latitude: 34.23,
    longitude: -113.56,
    state: "arizona"
  },
  {
    name: "Buckskin Mountain State Park",
    description: "Provides water recreation on the Colorado River in the Parker Valley.",
    location: "Parker, AZ",
    latitude: 34.15,
    longitude: -114.17,
    state: "arizona"
  },
  {
    name: "Catalina State Park",
    description: "Preserves a diverse desert landscape at the foot of the Santa Catalina Mountains.",
    location: "Tucson, AZ",
    latitude: 32.42,
    longitude: -110.92,
    state: "arizona"
  },
  {
    name: "Cattail Cove State Park",
    description: "Features a scenic cove on Lake Havasu with camping and water recreation.",
    location: "Lake Havasu City, AZ",
    latitude: 34.35,
    longitude: -114.15,
    state: "arizona"
  },
  {
    name: "Dead Horse Ranch State Park",
    description: "Features the Verde River with camping, fishing, and hiking trails.",
    location: "Cottonwood, AZ",
    latitude: 34.76,
    longitude: -112.02,
    state: "arizona"
  },
  {
    name: "Fool Hollow Lake Recreation Area",
    description: "Features a scenic lake with fishing, boating, and camping opportunities.",
    location: "Show Low, AZ",
    latitude: 34.25,
    longitude: -110.03,
    state: "arizona"
  },
  {
    name: "Fort Verde State Historic Park",
    description: "Features historic military fort and interpretive exhibits from the Indian Wars period.",
    location: "Camp Verde, AZ",
    latitude: 34.56,
    longitude: -111.85,
    state: "arizona"
  },
  {
    name: "Granite Mountain Hotshots Memorial State Park",
    description: "Honors the 19 Granite Mountain Hotshots who lost their lives fighting the Yarnell Hill Fire.",
    location: "Yarnell, AZ",
    latitude: 34.22,
    longitude: -112.75,
    state: "arizona"
  },
  {
    name: "Homolovi State Park",
    description: "Features ancient Hopi ruins and archaeological sites.",
    location: "Winslow, AZ",
    latitude: 35.08,
    longitude: -110.64,
    state: "arizona"
  },
  {
    name: "Jerome State Historic Park",
    description: "Features historic mining town and Douglas Mansion museum.",
    location: "Jerome, AZ",
    latitude: 34.75,
    longitude: -112.11,
    state: "arizona"
  },
  {
    name: "Kartchner Caverns State Park",
    description: "Features stunning limestone caves with guided tours.",
    location: "Benson, AZ",
    latitude: 31.84,
    longitude: -110.35,
    state: "arizona"
  },
  {
    name: "Lake Havasu State Park",
    description: "Features beach access, camping, and water recreation on Lake Havasu.",
    location: "Lake Havasu City, AZ",
    latitude: 34.47,
    longitude: -114.35,
    state: "arizona"
  },
  {
    name: "Lost Dutchman State Park",
    description: "Features dramatic mountain scenery and extensive hiking trails.",
    location: "Apache Junction, AZ",
    latitude: 33.45,
    longitude: -111.47,
    state: "arizona"
  },
  {
    name: "Lyman Lake State Park",
    description: "Features a large lake with fishing, boating, and camping.",
    location: "St. Johns, AZ",
    latitude: 34.36,
    longitude: -109.64,
    state: "arizona"
  },
  {
    name: "McFarland State Historic Park",
    description: "Features historic courthouse and museum.",
    location: "Florence, AZ",
    latitude: 33.03,
    longitude: -111.38,
    state: "arizona"
  },
  {
    name: "Oracle State Park",
    description: "Features hiking trails and wildlife viewing in the Sonoran Desert.",
    location: "Oracle, AZ",
    latitude: 32.61,
    longitude: -110.77,
    state: "arizona"
  },
  {
    name: "Patagonia Lake State Park",
    description: "Features a scenic lake with fishing, boating, and camping.",
    location: "Patagonia, AZ",
    latitude: 31.50,
    longitude: -110.87,
    state: "arizona"
  },
  {
    name: "Picacho Peak State Park",
    description: "Features dramatic peak with hiking trails and historic Civil War battle site.",
    location: "Picacho, AZ",
    latitude: 32.65,
    longitude: -111.40,
    state: "arizona"
  },
  {
    name: "Red Rock State Park",
    description: "Features dramatic red rock formations and hiking trails.",
    location: "Sedona, AZ",
    latitude: 34.82,
    longitude: -111.82,
    state: "arizona"
  },
  {
    name: "Riordan Mansion State Historic Park",
    description: "Features historic mansion and museum showcasing early 20th century life.",
    location: "Flagstaff, AZ",
    latitude: 35.19,
    longitude: -111.65,
    state: "arizona"
  },
  {
    name: "Roper Lake State Park",
    description: "Features a scenic lake with fishing, swimming, and camping.",
    location: "Safford, AZ",
    latitude: 32.80,
    longitude: -109.71,
    state: "arizona"
  },
  {
    name: "San Rafael State Natural Area",
    description: "Features pristine grassland and wildlife viewing opportunities.",
    location: "Patagonia, AZ",
    latitude: 31.53,
    longitude: -110.75,
    state: "arizona"
  },
  {
    name: "Slide Rock State Park",
    description: "Features natural water slide and historic apple farm.",
    location: "Sedona, AZ",
    latitude: 34.93,
    longitude: -111.73,
    state: "arizona"
  },
  {
    name: "Sonoita Creek State Natural Area",
    description: "Features riparian habitat and wildlife viewing opportunities.",
    location: "Elgin, AZ",
    latitude: 31.67,
    longitude: -110.65,
    state: "arizona"
  },
  {
    name: "Tombstone Courthouse State Historic Park",
    description: "Features historic courthouse and museum from the Wild West era.",
    location: "Tombstone, AZ",
    latitude: 31.71,
    longitude: -110.07,
    state: "arizona"
  },
  {
    name: "Tonto Natural Bridge State Park",
    description: "Features the world's largest travertine bridge and hiking trails.",
    location: "Pine, AZ",
    latitude: 34.32,
    longitude: -111.45,
    state: "arizona"
  },
  {
    name: "Tubac Presidio State Historic Park",
    description: "Features historic Spanish presidio and museum.",
    location: "Tubac, AZ",
    latitude: 31.57,
    longitude: -111.04,
    state: "arizona"
  },
  {
    name: "Yuma Quartermaster Depot State Historic Park",
    description: "Features historic military supply depot and museum.",
    location: "Yuma, AZ",
    latitude: 32.72,
    longitude: -114.62,
    state: "arizona"
  },
  {
    name: "Yuma Territorial Prison State Historic Park",
    description: "Features historic prison and museum from the Wild West era.",
    location: "Yuma, AZ",
    latitude: 32.72,
    longitude: -114.62,
    state: "arizona"
  }
];

async function populateArizonaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of arizonaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Arizona parks have been added to the database');
  } catch (error) {
    console.error('Error adding Arizona parks:', error);
  }
}

populateArizonaParks(); 