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

const northDakotaParks = [
  {
    name: "Beaver Lake State Park",
    description: "Features Beaver Lake with boating, fishing, and camping opportunities.",
    location: "Wishek, ND",
    latitude: 46.25,
    longitude: -99.56,
    state: "northdakota"
  },
  {
    name: "Butte Saint Paul State Recreation Area",
    description: "Features a scenic vista point in the Turtle Mountains.",
    location: "Bottineau, ND",
    latitude: 48.83,
    longitude: -100.45,
    state: "northdakota"
  },
  {
    name: "Cross Ranch State Park",
    description: "Features Missouri River access, boating, canoeing, and camping.",
    location: "Center, ND",
    latitude: 47.42,
    longitude: -101.07,
    state: "northdakota"
  },
  {
    name: "Crow Flies High State Recreation Area",
    description: "Features scenic views of Lake Sakakawea.",
    location: "New Town, ND",
    latitude: 47.98,
    longitude: -102.49,
    state: "northdakota"
  },
  {
    name: "Fort Abraham Lincoln State Park",
    description: "Features historic sites including On-A-Slant Indian Village and Custer's House.",
    location: "Mandan, ND",
    latitude: 46.77,
    longitude: -100.85,
    state: "northdakota"
  },
  {
    name: "Fort Ransom State Park",
    description: "Features preserved homesteader farms and Sheyenne River access.",
    location: "Fort Ransom, ND",
    latitude: 46.52,
    longitude: -97.93,
    state: "northdakota"
  },
  {
    name: "Fort Stevenson State Park",
    description: "Features Lake Sakakawea access and includes the Fort Stevenson State Park Arboretum.",
    location: "Garrison, ND",
    latitude: 47.58,
    longitude: -101.42,
    state: "northdakota"
  },
  {
    name: "Grahams Island State Park",
    description: "Features Devils Lake access and recreational activities.",
    location: "Devils Lake, ND",
    latitude: 48.11,
    longitude: -98.87,
    state: "northdakota"
  },
  {
    name: "Icelandic State Park",
    description: "Features historic buildings and Gunlogson Arboretum.",
    location: "Cavalier, ND",
    latitude: 48.77,
    longitude: -97.62,
    state: "northdakota"
  },
  {
    name: "Lake Metigoshe State Park",
    description: "Features Lake Metigoshe and Turtle Mountain scenery.",
    location: "Bottineau, ND",
    latitude: 48.99,
    longitude: -100.36,
    state: "northdakota"
  },
  {
    name: "Lake Sakakawea State Park",
    description: "Features Lake Sakakawea access and recreational activities.",
    location: "Pick City, ND",
    latitude: 47.51,
    longitude: -101.45,
    state: "northdakota"
  },
  {
    name: "Lewis and Clark State Park",
    description: "Features Lake Sakakawea access and historic Lewis and Clark expedition sites.",
    location: "Epping, ND",
    latitude: 47.86,
    longitude: -102.39,
    state: "northdakota"
  },
  {
    name: "Little Metigoshe State Park",
    description: "Features Lake Metigoshe access and Turtle Mountain scenery.",
    location: "Bottineau, ND",
    latitude: 48.99,
    longitude: -100.36,
    state: "northdakota"
  },
  {
    name: "Little Missouri State Park",
    description: "Features badlands scenery and hiking trails.",
    location: "Killdeer, ND",
    latitude: 47.61,
    longitude: -103.36,
    state: "northdakota"
  },
  {
    name: "Pelican Point State Recreation Area",
    description: "Features Lake Sakakawea access and wildlife viewing.",
    location: "Beulah, ND",
    latitude: 47.26,
    longitude: -101.78,
    state: "northdakota"
  },
  {
    name: "Pembina Gorge State Recreation Area",
    description: "Features scenic gorge and hiking trails.",
    location: "Walhalla, ND",
    latitude: 48.92,
    longitude: -97.92,
    state: "northdakota"
  },
  {
    name: "Rough Rider State Recreation Area",
    description: "Features Lake Sakakawea access and recreational activities.",
    location: "Pick City, ND",
    latitude: 47.51,
    longitude: -101.45,
    state: "northdakota"
  },
  {
    name: "Turtle Mountain State Park",
    description: "Features Turtle Mountain scenery and recreational activities.",
    location: "Bottineau, ND",
    latitude: 48.83,
    longitude: -100.45,
    state: "northdakota"
  },
  {
    name: "Turtle River State Park",
    description: "Features Turtle River and forest trails.",
    location: "Arvilla, ND",
    latitude: 47.95,
    longitude: -97.49,
    state: "northdakota"
  },
  {
    name: "Writing Rock State Historic Site",
    description: "Features ancient Native American petroglyphs.",
    location: "Grenora, ND",
    latitude: 48.62,
    longitude: -103.94,
    state: "northdakota"
  }
];

async function populateNorthDakotaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of northDakotaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All North Dakota parks have been added to the database');
  } catch (error) {
    console.error('Error adding North Dakota parks:', error);
  }
}

populateNorthDakotaParks(); 