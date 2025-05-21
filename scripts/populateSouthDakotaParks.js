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

const southDakotaParks = [
  {
    name: "Adams Homestead and Nature Preserve",
    description: "Features historic homestead and one of the largest stands of cottonwood trees in the state.",
    location: "North Sioux City, SD",
    latitude: 42.54,
    longitude: -96.53,
    state: "southdakota"
  },
  {
    name: "Bear Butte State Park",
    description: "Features a geological laccolith and sacred religious site for the Lakota Indians.",
    location: "Sturgis, SD",
    latitude: 44.46,
    longitude: -103.45,
    state: "southdakota"
  },
  {
    name: "Big Stone Island State Park",
    description: "Features Lake Traverse access and wildlife viewing opportunities.",
    location: "Big Stone City, SD",
    latitude: 45.29,
    longitude: -96.46,
    state: "southdakota"
  },
  {
    name: "Custer State Park",
    description: "Features scenic drives, wildlife viewing, and extensive hiking trails.",
    location: "Custer, SD",
    latitude: 43.77,
    longitude: -103.60,
    state: "southdakota"
  },
  {
    name: "Fisher Grove State Park",
    description: "Features the Missouri River with fishing and boating opportunities.",
    location: "Selby, SD",
    latitude: 45.51,
    longitude: -100.03,
    state: "southdakota"
  },
  {
    name: "Fort Sisseton Historic State Park",
    description: "Features historic military fort and interpretive exhibits.",
    location: "Lake City, SD",
    latitude: 45.66,
    longitude: -97.53,
    state: "southdakota"
  },
  {
    name: "Good Earth State Park",
    description: "Features historic Native American site and interpretive exhibits.",
    location: "Sioux Falls, SD",
    latitude: 43.49,
    longitude: -96.61,
    state: "southdakota"
  },
  {
    name: "Hartford Beach State Park",
    description: "Features Big Stone Lake access and recreational activities.",
    location: "Milbank, SD",
    latitude: 45.39,
    longitude: -96.65,
    state: "southdakota"
  },
  {
    name: "Lake Herman State Park",
    description: "Features a scenic lake with fishing and boating opportunities.",
    location: "Madison, SD",
    latitude: 43.99,
    longitude: -97.11,
    state: "southdakota"
  },
  {
    name: "Newton Hills State Park",
    description: "Features scenic hiking trails and wildlife viewing opportunities.",
    location: "Canton, SD",
    latitude: 43.30,
    longitude: -96.58,
    state: "southdakota"
  },
  {
    name: "Palisades State Park",
    description: "Features unique rock formations and Split Rock Creek.",
    location: "Garretson, SD",
    latitude: 43.72,
    longitude: -96.50,
    state: "southdakota"
  },
  {
    name: "Spirit Mound Historic Prairie",
    description: "Features historic Native American site and prairie landscape.",
    location: "Vermillion, SD",
    latitude: 42.87,
    longitude: -96.93,
    state: "southdakota"
  },
  {
    name: "Union Grove State Park",
    description: "Features a scenic lake with fishing and boating opportunities.",
    location: "Irene, SD",
    latitude: 43.08,
    longitude: -97.36,
    state: "southdakota"
  }
];

async function populateSouthDakotaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of southDakotaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All South Dakota parks have been added to the database');
  } catch (error) {
    console.error('Error adding South Dakota parks:', error);
  }
}

populateSouthDakotaParks(); 