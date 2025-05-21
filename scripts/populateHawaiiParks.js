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

const hawaiiParks = [
  {
    name: "ʻĀhihi-Kīnaʻu Natural Area Reserve",
    description: "Features pristine coastal ecosystem and marine life viewing.",
    location: "Makena, HI",
    latitude: 20.63,
    longitude: -156.45,
    state: "hawaii"
  },
  {
    name: "ʻAkaka Falls State Park",
    description: "Features dramatic 442-foot waterfall and lush rainforest trails.",
    location: "Honomu, HI",
    latitude: 19.99,
    longitude: -155.15,
    state: "hawaii"
  },
  {
    name: "Hāpuna Beach State Recreation Area",
    description: "Features one of Hawaii's largest white sand beaches and excellent swimming.",
    location: "Waimea, HI",
    latitude: 19.99,
    longitude: -155.82,
    state: "hawaii"
  },
  {
    name: "Hawaiʻi Volcanoes National Park",
    description: "Features active volcanoes, lava flows, and unique volcanic landscapes.",
    location: "Volcano, HI",
    latitude: 19.42,
    longitude: -155.29,
    state: "hawaii"
  },
  {
    name: "ʻĪao Valley State Monument",
    description: "Features dramatic valley views and historic battle site.",
    location: "Wailuku, HI",
    latitude: 20.88,
    longitude: -156.55,
    state: "hawaii"
  },
  {
    name: "Kaʻena Point State Park",
    description: "Features coastal trails and wildlife viewing.",
    location: "Waialua, HI",
    latitude: 21.57,
    longitude: -158.28,
    state: "hawaii"
  },
  {
    name: "Kaiwi State Scenic Shoreline",
    description: "Features dramatic coastal views and hiking trails.",
    location: "Honolulu, HI",
    latitude: 21.28,
    longitude: -157.69,
    state: "hawaii"
  },
  {
    name: "Kalaupapa National Historical Park",
    description: "Features historic leprosy settlement and dramatic sea cliffs.",
    location: "Kalaupapa, HI",
    latitude: 21.19,
    longitude: -156.98,
    state: "hawaii"
  },
  {
    name: "Kaloko-Honokōhau National Historical Park",
    description: "Features ancient Hawaiian fishponds and cultural sites.",
    location: "Kailua-Kona, HI",
    latitude: 19.68,
    longitude: -156.02,
    state: "hawaii"
  },
  {
    name: "Kealakekua Bay State Historical Park",
    description: "Features historic Captain Cook monument and excellent snorkeling.",
    location: "Captain Cook, HI",
    latitude: 19.48,
    longitude: -155.93,
    state: "hawaii"
  },
  {
    name: "Kokeʻe State Park",
    description: "Features mountain trails and scenic canyon views.",
    location: "Waimea, HI",
    latitude: 22.13,
    longitude: -159.65,
    state: "hawaii"
  },
  {
    name: "Lapakahi State Historical Park",
    description: "Features ancient Hawaiian fishing village and cultural sites.",
    location: "Kapaau, HI",
    latitude: 20.17,
    longitude: -155.90,
    state: "hawaii"
  },
  {
    name: "Lava Tree State Monument",
    description: "Features unique lava tree molds and rainforest trails.",
    location: "Pāhoa, HI",
    latitude: 19.50,
    longitude: -154.90,
    state: "hawaii"
  },
  {
    name: "MacKenzie State Recreation Area",
    description: "Features rugged coastline and lava tube caves.",
    location: "Pāhoa, HI",
    latitude: 19.37,
    longitude: -154.97,
    state: "hawaii"
  },
  {
    name: "Mālaekahana State Recreation Area",
    description: "Features beautiful beach and camping opportunities.",
    location: "Lāʻie, HI",
    latitude: 21.65,
    longitude: -157.95,
    state: "hawaii"
  },
  {
    name: "Nā Pali Coast State Wilderness Park",
    description: "Features dramatic sea cliffs and hiking trails.",
    location: "Hanalei, HI",
    latitude: 22.17,
    longitude: -159.65,
    state: "hawaii"
  },
  {
    name: "Polihale State Park",
    description: "Features remote beach and dramatic mountain backdrop.",
    location: "Kekaha, HI",
    latitude: 22.08,
    longitude: -159.76,
    state: "hawaii"
  },
  {
    name: "Wailua River State Park",
    description: "Features river recreation and historic Hawaiian sites.",
    location: "Kapaʻa, HI",
    latitude: 22.05,
    longitude: -159.34,
    state: "hawaii"
  }
];

async function populateHawaiiParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of hawaiiParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Hawaii parks have been added to the database');
  } catch (error) {
    console.error('Error adding Hawaii parks:', error);
  }
}

populateHawaiiParks(); 