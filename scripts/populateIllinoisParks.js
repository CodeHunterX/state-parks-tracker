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

const illinoisParks = [
  {
    name: "Apple River Canyon State Park",
    description: "Features deep canyons, rock formations, and the Apple River. Popular for hiking, camping, and fishing.",
    location: "Apple River, IL",
    latitude: 42.4500,
    longitude: -90.0500,
    state: "illinois"
  },
  {
    name: "Argyle Lake State Park",
    description: "Centered around a 93-acre lake, offering fishing, boating, and hiking opportunities.",
    location: "Colchester, IL",
    latitude: 40.4167,
    longitude: -90.7500,
    state: "illinois"
  },
  {
    name: "Beall Woods State Park",
    description: "Home to one of the last remaining old-growth forests in Illinois, with trees over 120 feet tall.",
    location: "Mount Carmel, IL",
    latitude: 38.4167,
    longitude: -87.8333,
    state: "illinois"
  },
  {
    name: "Beaver Dam State Park",
    description: "Features a 59-acre lake surrounded by rolling hills and woodlands.",
    location: "Plainview, IL",
    latitude: 39.2333,
    longitude: -89.9833,
    state: "illinois"
  },
  {
    name: "Buffalo Rock State Park",
    description: "Known for its scenic bluffs overlooking the Illinois River and the Effigy Tumuli earth sculptures.",
    location: "Ottawa, IL",
    latitude: 41.3333,
    longitude: -88.8667,
    state: "illinois"
  },
  {
    name: "Castle Rock State Park",
    description: "Features a scenic overlook of the Rock River and surrounding countryside.",
    location: "Oregon, IL",
    latitude: 42.0167,
    longitude: -89.3333,
    state: "illinois"
  },
  {
    name: "Cave-in-Rock State Park",
    description: "Famous for its 55-foot-wide cave overlooking the Ohio River, once used by river pirates.",
    location: "Cave-in-Rock, IL",
    latitude: 37.4667,
    longitude: -88.1667,
    state: "illinois"
  },
  {
    name: "Chain O'Lakes State Park",
    description: "Located in the heart of the Chain O'Lakes region, offering boating, fishing, and water recreation.",
    location: "Spring Grove, IL",
    latitude: 42.4167,
    longitude: -88.1667,
    state: "illinois"
  },
  {
    name: "Channahon State Park",
    description: "Features the confluence of the Des Plaines, Kankakee, and Illinois Rivers.",
    location: "Channahon, IL",
    latitude: 41.4333,
    longitude: -88.2167,
    state: "illinois"
  },
  {
    name: "Delabar State Park",
    description: "A small park along the Mississippi River offering fishing and picnicking opportunities.",
    location: "Monmouth, IL",
    latitude: 40.9167,
    longitude: -90.6333,
    state: "illinois"
  },
  {
    name: "Dixon Springs State Park",
    description: "Features unique geological formations and a natural spring.",
    location: "Golconda, IL",
    latitude: 37.3833,
    longitude: -88.6667,
    state: "illinois"
  },
  {
    name: "Ferne Clyffe State Park",
    description: "Known for its massive sandstone bluffs, waterfalls, and unique rock formations.",
    location: "Goreville, IL",
    latitude: 37.5833,
    longitude: -88.9667,
    state: "illinois"
  },
  {
    name: "Fort Massac State Park",
    description: "Historic site featuring a reconstructed 1802 American fort and scenic Ohio River views.",
    location: "Metropolis, IL",
    latitude: 37.1500,
    longitude: -88.7000,
    state: "illinois"
  },
  {
    name: "Fox Ridge State Park",
    description: "Features steep, wooded ridges and ravines with scenic overlooks.",
    location: "Charleston, IL",
    latitude: 39.4833,
    longitude: -88.1667,
    state: "illinois"
  },
  {
    name: "Giant City State Park",
    description: "Famous for its massive sandstone bluffs and unique rock formations.",
    location: "Makanda, IL",
    latitude: 37.6000,
    longitude: -89.2000,
    state: "illinois"
  },
  {
    name: "Hennepin Canal Parkway State Park",
    description: "Follows the historic Hennepin Canal, offering hiking, biking, and fishing opportunities.",
    location: "Sheffield, IL",
    latitude: 41.3500,
    longitude: -89.7333,
    state: "illinois"
  },
  {
    name: "Horseshoe Lake State Park",
    description: "Features a large oxbow lake formed by the Mississippi River.",
    location: "Granite City, IL",
    latitude: 38.7000,
    longitude: -90.1167,
    state: "illinois"
  },
  {
    name: "Illini State Park",
    description: "Located along the Illinois River, offering camping and water recreation.",
    location: "Marseilles, IL",
    latitude: 41.3333,
    longitude: -88.7000,
    state: "illinois"
  },
  {
    name: "Johnson-Sauk Trail State Park",
    description: "Centered around a 58-acre lake with fishing, boating, and hiking opportunities.",
    location: "Kewanee, IL",
    latitude: 41.2333,
    longitude: -89.9167,
    state: "illinois"
  },
  {
    name: "Jubilee College State Park",
    description: "Historic site featuring the remains of a 19th-century college and scenic hiking trails.",
    location: "Brimfield, IL",
    latitude: 40.7833,
    longitude: -89.7833,
    state: "illinois"
  },
  {
    name: "Kankakee River State Park",
    description: "Features 11 miles of river frontage with hiking, fishing, and canoeing opportunities.",
    location: "Bourbonnais, IL",
    latitude: 41.2167,
    longitude: -87.8667,
    state: "illinois"
  },
  {
    name: "Lake Le-Aqua-Na State Park",
    description: "Centered around a 40-acre lake with swimming, fishing, and camping facilities.",
    location: "Lena, IL",
    latitude: 42.3833,
    longitude: -89.8167,
    state: "illinois"
  },
  {
    name: "Lake Murphysboro State Park",
    description: "Features a 145-acre lake surrounded by rolling hills and woodlands.",
    location: "Murphysboro, IL",
    latitude: 37.7500,
    longitude: -89.3333,
    state: "illinois"
  },
  {
    name: "Lincoln Trail State Park",
    description: "Centered around a 146-acre lake with camping, fishing, and hiking opportunities.",
    location: "Marshall, IL",
    latitude: 39.4167,
    longitude: -87.7000,
    state: "illinois"
  },
  {
    name: "Lowden State Park",
    description: "Home to the famous Black Hawk Statue and scenic Rock River views.",
    location: "Oregon, IL",
    latitude: 42.0333,
    longitude: -89.3333,
    state: "illinois"
  },
  {
    name: "Matthiessen State Park",
    description: "Features canyons, streams, and unique rock formations.",
    location: "Utica, IL",
    latitude: 41.3167,
    longitude: -89.0167,
    state: "illinois"
  },
  {
    name: "Mississippi Palisades State Park",
    description: "Known for its dramatic limestone bluffs overlooking the Mississippi River.",
    location: "Savanna, IL",
    latitude: 42.0833,
    longitude: -90.1500,
    state: "illinois"
  },
  {
    name: "Moraine Hills State Park",
    description: "Features glacial moraines, wetlands, and a 48-acre lake.",
    location: "McHenry, IL",
    latitude: 42.3333,
    longitude: -88.2667,
    state: "illinois"
  },
  {
    name: "Morrison-Rockwood State Park",
    description: "Centered around a 50-acre lake with camping and water recreation.",
    location: "Morrison, IL",
    latitude: 41.8167,
    longitude: -89.9667,
    state: "illinois"
  },
  {
    name: "Nauvoo State Park",
    description: "Historic site near the former Mormon settlement of Nauvoo.",
    location: "Nauvoo, IL",
    latitude: 40.5500,
    longitude: -91.3833,
    state: "illinois"
  },
  {
    name: "Pere Marquette State Park",
    description: "Illinois' largest state park, featuring scenic bluffs overlooking the Illinois River.",
    location: "Grafton, IL",
    latitude: 38.9667,
    longitude: -90.5500,
    state: "illinois"
  },
  {
    name: "Red Hills State Park",
    description: "Features unique red clay hills and scenic hiking trails.",
    location: "Sumner, IL",
    latitude: 38.7167,
    longitude: -87.8667,
    state: "illinois"
  },
  {
    name: "Rock Cut State Park",
    description: "Features two lakes, extensive hiking trails, and camping facilities.",
    location: "Loves Park, IL",
    latitude: 42.3667,
    longitude: -88.9833,
    state: "illinois"
  },
  {
    name: "Rock Island Trail State Park",
    description: "Follows a former railroad corridor, offering hiking and biking opportunities.",
    location: "Peoria, IL",
    latitude: 40.6833,
    longitude: -89.5833,
    state: "illinois"
  },
  {
    name: "Shabbona Lake State Park",
    description: "Centered around a 318-acre lake with fishing, boating, and camping.",
    location: "Shabbona, IL",
    latitude: 41.7667,
    longitude: -88.8667,
    state: "illinois"
  },
  {
    name: "Siloam Springs State Park",
    description: "Features rolling hills, woodlands, and a small lake.",
    location: "Clayton, IL",
    latitude: 40.0167,
    longitude: -90.9500,
    state: "illinois"
  },
  {
    name: "South Shore State Park",
    description: "Located along Lake Michigan's shore, offering beach access and water recreation.",
    location: "Chicago, IL",
    latitude: 41.7833,
    longitude: -87.5833,
    state: "illinois"
  },
  {
    name: "Starved Rock State Park",
    description: "Illinois' most popular state park, featuring canyons, waterfalls, and scenic overlooks.",
    location: "Utica, IL",
    latitude: 41.3167,
    longitude: -88.9833,
    state: "illinois"
  },
  {
    name: "Walnut Point State Park",
    description: "Centered around a 59-acre lake with camping and fishing opportunities.",
    location: "Oakland, IL",
    latitude: 39.6500,
    longitude: -88.0167,
    state: "illinois"
  },
  {
    name: "White Pines Forest State Park",
    description: "Home to Illinois' last remaining stand of native white pines.",
    location: "Mount Morris, IL",
    latitude: 42.0333,
    longitude: -89.4333,
    state: "illinois"
  },
  {
    name: "William G. Stratton State Park",
    description: "Features a 48-acre lake with fishing, boating, and camping facilities.",
    location: "Morris, IL",
    latitude: 41.3667,
    longitude: -88.4167,
    state: "illinois"
  },
  {
    name: "Wolf Creek State Park",
    description: "Located along the shore of Lake Shelbyville, offering water recreation and camping.",
    location: "Windsor, IL",
    latitude: 39.4333,
    longitude: -88.6000,
    state: "illinois"
  }
];

async function populateIllinoisParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of illinoisParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Illinois parks have been added to the database');
  } catch (error) {
    console.error('Error adding Illinois parks:', error);
  }
}

populateIllinoisParks(); 