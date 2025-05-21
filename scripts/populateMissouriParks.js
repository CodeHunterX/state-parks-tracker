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

const missouriParks = [
  {
    name: "Eleven Point State Park",
    description: "Features the Eleven Point River and scenic views.",
    location: "Alton, MO",
    latitude: 36.69,
    longitude: -91.40,
    state: "missouri"
  },
 
  {
    name: "Jay Nixon State Park",
    description: "Features forest trails and wildlife viewing.",
    location: "De Soto, MO",
    latitude: 38.13,
    longitude: -90.55,
    state: "missouri"
  },

  {
    name: "Jones-Confluence Point State Park",
    description: "Features the confluence of the Missouri and Mississippi Rivers.",
    location: "West Alton, MO",
    latitude: 38.81,
    longitude: -90.18,
    state: "missouri"
  },
 
  {
    name: "Morris State Park",
    description: "Features forest trails and wildlife viewing.",
    location: "Perryville, MO",
    latitude: 37.72,
    longitude: -89.87,
    state: "missouri"
  },

  {
    name: "Ozark Mountain State Park",
    description: "Features scenic mountain views and hiking trails.",
    location: "Mountain View, MO",
    latitude: 36.99,
    longitude: -91.70,
    state: "missouri"
  },
  {
    name: "Pershing State Park",
    description: "Features wetlands and historic sites.",
    location: "Laclede, MO",
    latitude: 39.80,
    longitude: -93.17,
    state: "missouri"
  },
  {
    name: "Pomme de Terre State Park",
    description: "Features Pomme de Terre Lake and recreational activities.",
    location: "Pittsburg, MO",
    latitude: 37.82,
    longitude: -93.28,
    state: "missouri"
  },
  {
    name: "Prairie State Park",
    description: "Features tallgrass prairie and bison herd.",
    location: "Mindemmines, MO",
    latitude: 37.13,
    longitude: -94.52,
    state: "missouri"
  },

  {
    name: "Robertsville State Park",
    description: "Features the Meramec River and forest trails.",
    location: "Robertsville, MO",
    latitude: 38.38,
    longitude: -90.80,
    state: "missouri"
  },

  {
    name: "Rock Island Trail State Park",
    description: "Features a rail-to-trail conversion and scenic views.",
    location: "Windsor, MO",
    latitude: 38.53,
    longitude: -93.52,
    state: "missouri"
  },
  {
    name: "Roger Pryor Pioneer Backcountry",
    description: "Features wilderness area and hiking trails.",
    location: "Doniphan, MO",
    latitude: 36.62,
    longitude: -90.82,
    state: "missouri"
  },

  {
    name: "Sam A. Baker State Park",
    description: "Features the St. Francis River and historic structures.",
    location: "Patterson, MO",
    latitude: 37.25,
    longitude: -90.55,
    state: "missouri"
  },

  {
    name: "Thousand Hills State Park",
    description: "Features Forest Lake and recreational activities.",
    location: "Kirksville, MO",
    latitude: 40.19,
    longitude: -92.58,
    state: "missouri"
  },

  {
    name: "Wakonda State Park",
    description: "Features Wakonda Lake and wildlife viewing.",
    location: "La Grange, MO",
    latitude: 40.04,
    longitude: -91.50,
    state: "missouri"
  },

  {
    name: "Watkins Woolen Mill State Park",
    description: "Features a historic woolen mill and lake.",
    location: "Lawson, MO",
    latitude: 39.42,
    longitude: -94.27,
    state: "missouri"
  }
];

async function populateMissouriParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of missouriParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Missouri parks have been added to the database');
  } catch (error) {
    console.error('Error adding Missouri parks:', error);
  }
}

populateMissouriParks(); 