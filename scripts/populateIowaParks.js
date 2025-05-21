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

const iowaParks = [
  {
    name: "Ambrose A. Call State Park",
    description: "Features heavily wooded hills and a reconstructed log cabin on the site of the first cabin in Kossuth County, built in 1854.",
    location: "Algona, IA",
    latitude: 43.07,
    longitude: -94.23,
    state: "iowa"
  },
  {
    name: "Backbone State Park",
    description: "Features a rock ridge up to 80 feet high, a recreational reservoir, and a museum on the Civilian Conservation Corps in Iowa.",
    location: "Strawberry Point, IA",
    latitude: 42.62,
    longitude: -91.55,
    state: "iowa"
  },
  {
    name: "Badger Creek State Recreation Area",
    description: "Features a 276-acre fishing lake outside Des Moines.",
    location: "Van Meter, IA",
    latitude: 41.53,
    longitude: -93.95,
    state: "iowa"
  },
  {
    name: "Banner Lakes at Summerset State Park",
    description: "Provides fishing and mountain biking opportunities on the site of a rehabilitated open-pit coal mine.",
    location: "Indianola, IA",
    latitude: 41.35,
    longitude: -93.55,
    state: "iowa"
  },
  {
    name: "Beed's Lake State Park",
    description: "Surrounds a 99-acre reservoir crossed by a 170-foot causeway built by the Civilian Conservation Corps.",
    location: "Hampton, IA",
    latitude: 42.74,
    longitude: -93.21,
    state: "iowa"
  },
  {
    name: "Bellevue State Park",
    description: "Features scenic views of the Mississippi River and historic sites.",
    location: "Bellevue, IA",
    latitude: 42.26,
    longitude: -90.43,
    state: "iowa"
  },
  {
    name: "Big Creek State Park",
    description: "Centered around a large lake with swimming, boating, and fishing opportunities.",
    location: "Polk City, IA",
    latitude: 41.77,
    longitude: -93.72,
    state: "iowa"
  },
  {
    name: "Black Hawk State Park",
    description: "Features scenic views of the Iowa River and historic sites.",
    location: "Lake View, IA",
    latitude: 42.31,
    longitude: -95.05,
    state: "iowa"
  },
  {
    name: "Brushy Creek State Recreation Area",
    description: "Features a large lake with fishing, boating, and camping facilities.",
    location: "Lehigh, IA",
    latitude: 42.36,
    longitude: -94.05,
    state: "iowa"
  },
  {
    name: "Cedar Rock State Park",
    description: "Features the historic Walter House designed by Frank Lloyd Wright.",
    location: "Quasqueton, IA",
    latitude: 42.40,
    longitude: -91.76,
    state: "iowa"
  },
  {
    name: "Clear Lake State Park",
    description: "Located on the shores of Clear Lake, offering swimming, boating, and fishing.",
    location: "Clear Lake, IA",
    latitude: 43.14,
    longitude: -93.38,
    state: "iowa"
  },
  {
    name: "Dolliver Memorial State Park",
    description: "Features scenic canyons and the historic Coon Valley.",
    location: "Lehigh, IA",
    latitude: 42.36,
    longitude: -94.05,
    state: "iowa"
  },
  {
    name: "Elk Rock State Park",
    description: "Features scenic views of the Des Moines River and Lake Red Rock.",
    location: "Knoxville, IA",
    latitude: 41.38,
    longitude: -93.11,
    state: "iowa"
  },
  {
    name: "Fort Defiance State Park",
    description: "Historic site featuring the remains of a frontier fort.",
    location: "Estherville, IA",
    latitude: 43.40,
    longitude: -94.83,
    state: "iowa"
  },
  {
    name: "Geode State Park",
    description: "Features a lake surrounded by wooded hills and camping facilities.",
    location: "Danville, IA",
    latitude: 40.86,
    longitude: -91.38,
    state: "iowa"
  },
  {
    name: "George Wyth Memorial State Park",
    description: "Features lakes, wetlands, and extensive hiking trails.",
    location: "Waterloo, IA",
    latitude: 42.49,
    longitude: -92.34,
    state: "iowa"
  },
  {
    name: "Green Valley State Park",
    description: "Features a large lake with fishing, boating, and camping facilities.",
    location: "Creston, IA",
    latitude: 41.06,
    longitude: -94.36,
    state: "iowa"
  },
  {
    name: "Gull Point State Park",
    description: "Located on the shores of West Okoboji Lake, offering swimming and boating.",
    location: "Milford, IA",
    latitude: 43.32,
    longitude: -95.15,
    state: "iowa"
  },
  {
    name: "Honey Creek State Park",
    description: "Features a resort area on Rathbun Lake with camping and water recreation.",
    location: "Moravia, IA",
    latitude: 40.89,
    longitude: -92.82,
    state: "iowa"
  },
  {
    name: "Lacey-Keosauqua State Park",
    description: "Features scenic views of the Des Moines River and historic sites.",
    location: "Keosauqua, IA",
    latitude: 40.73,
    longitude: -91.96,
    state: "iowa"
  },
  {
    name: "Lake Ahquabi State Park",
    description: "Features a lake with swimming, fishing, and camping facilities.",
    location: "Indianola, IA",
    latitude: 41.35,
    longitude: -93.55,
    state: "iowa"
  },
  {
    name: "Lake Anita State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Anita, IA",
    latitude: 41.45,
    longitude: -94.76,
    state: "iowa"
  },
  {
    name: "Lake Darling State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Brighton, IA",
    latitude: 41.17,
    longitude: -91.82,
    state: "iowa"
  },
  {
    name: "Lake Keomah State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Oskaloosa, IA",
    latitude: 41.29,
    longitude: -92.53,
    state: "iowa"
  },
  {
    name: "Lake Macbride State Park",
    description: "Features a large lake with swimming, boating, and fishing opportunities.",
    location: "Solon, IA",
    latitude: 41.80,
    longitude: -91.52,
    state: "iowa"
  },
  {
    name: "Lake Manawa State Park",
    description: "Features a lake with swimming, boating, and fishing opportunities.",
    location: "Council Bluffs, IA",
    latitude: 41.24,
    longitude: -95.85,
    state: "iowa"
  },
  {
    name: "Lake of Three Fires State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Bedford, IA",
    latitude: 40.67,
    longitude: -94.72,
    state: "iowa"
  },
  {
    name: "Lake Wapello State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Drakesville, IA",
    latitude: 40.80,
    longitude: -92.81,
    state: "iowa"
  },
  {
    name: "Ledges State Park",
    description: "Features scenic sandstone cliffs and canyons along Pease Creek.",
    location: "Madrid, IA",
    latitude: 42.05,
    longitude: -93.88,
    state: "iowa"
  },
  {
    name: "Lewis and Clark State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Onawa, IA",
    latitude: 42.16,
    longitude: -96.09,
    state: "iowa"
  },
  {
    name: "Maquoketa Caves State Park",
    description: "Features a series of caves, scenic bluffs, and hiking trails.",
    location: "Maquoketa, IA",
    latitude: 42.11,
    longitude: -90.78,
    state: "iowa"
  },
  {
    name: "McIntosh Woods State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Ventura, IA",
    latitude: 43.18,
    longitude: -93.47,
    state: "iowa"
  },
  {
    name: "Mines of Spain State Recreation Area",
    description: "Features scenic bluffs, historic sites, and hiking trails.",
    location: "Dubuque, IA",
    latitude: 42.47,
    longitude: -90.64,
    state: "iowa"
  },
  {
    name: "Nine Eagles State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Davis City, IA",
    latitude: 40.64,
    longitude: -93.81,
    state: "iowa"
  },
  {
    name: "Okamanpedan State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Emmetsburg, IA",
    latitude: 43.11,
    longitude: -94.68,
    state: "iowa"
  },
  {
    name: "Palisades-Kepler State Park",
    description: "Features scenic bluffs along the Cedar River and hiking trails.",
    location: "Mount Vernon, IA",
    latitude: 41.95,
    longitude: -91.40,
    state: "iowa"
  },
  {
    name: "Pikes Peak State Park",
    description: "Features scenic views of the Mississippi River and historic sites.",
    location: "McGregor, IA",
    latitude: 43.02,
    longitude: -91.16,
    state: "iowa"
  },
  {
    name: "Pine Lake State Park",
    description: "Features two lakes with fishing, boating, and camping facilities.",
    location: "Eldora, IA",
    latitude: 42.36,
    longitude: -93.10,
    state: "iowa"
  },
  {
    name: "Pleasant Creek State Recreation Area",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Palo, IA",
    latitude: 42.06,
    longitude: -91.79,
    state: "iowa"
  },
  {
    name: "Prairie Rose State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Harlan, IA",
    latitude: 41.65,
    longitude: -95.22,
    state: "iowa"
  },
  {
    name: "Preparation Canyon State Park",
    description: "Features scenic bluffs and hiking trails.",
    location: "Moorhead, IA",
    latitude: 41.92,
    longitude: -95.85,
    state: "iowa"
  },
  {
    name: "Red Haw State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Chariton, IA",
    latitude: 41.01,
    longitude: -93.31,
    state: "iowa"
  },
  {
    name: "Rice Lake State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Lake Mills, IA",
    latitude: 43.42,
    longitude: -93.53,
    state: "iowa"
  },
  {
    name: "Rock Creek State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Kellogg, IA",
    latitude: 41.71,
    longitude: -92.91,
    state: "iowa"
  },
  {
    name: "Springbrook State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Guthrie Center, IA",
    latitude: 41.68,
    longitude: -94.48,
    state: "iowa"
  },
  {
    name: "Stone State Park",
    description: "Features scenic bluffs and hiking trails.",
    location: "Sioux City, IA",
    latitude: 42.56,
    longitude: -96.48,
    state: "iowa"
  },
  {
    name: "Templar State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Rockwell City, IA",
    latitude: 42.40,
    longitude: -94.63,
    state: "iowa"
  },
  {
    name: "Twin Lakes State Park",
    description: "Features two lakes with fishing, boating, and camping facilities.",
    location: "Rockwell City, IA",
    latitude: 42.40,
    longitude: -94.63,
    state: "iowa"
  },
  {
    name: "Union Grove State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Gladbrook, IA",
    latitude: 42.18,
    longitude: -92.71,
    state: "iowa"
  },
  {
    name: "Viking Lake State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Stanton, IA",
    latitude: 40.98,
    longitude: -95.10,
    state: "iowa"
  },
  {
    name: "Volga River State Recreation Area",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Fayette, IA",
    latitude: 42.84,
    longitude: -91.80,
    state: "iowa"
  },
  {
    name: "Walnut Woods State Park",
    description: "Features scenic woodlands and hiking trails.",
    location: "West Des Moines, IA",
    latitude: 41.57,
    longitude: -93.73,
    state: "iowa"
  },
  {
    name: "Wanata State Park",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Peterson, IA",
    latitude: 42.91,
    longitude: -95.34,
    state: "iowa"
  },
  {
    name: "Waubonsie State Park",
    description: "Features scenic bluffs and hiking trails.",
    location: "Sidney, IA",
    latitude: 40.67,
    longitude: -95.69,
    state: "iowa"
  },
  {
    name: "Wildcat Den State Park",
    description: "Features scenic rock formations and hiking trails.",
    location: "Muscatine, IA",
    latitude: 41.47,
    longitude: -90.76,
    state: "iowa"
  },
  {
    name: "Wilson Island State Recreation Area",
    description: "Features a lake with fishing, boating, and camping facilities.",
    location: "Missouri Valley, IA",
    latitude: 41.56,
    longitude: -95.92,
    state: "iowa"
  }
];

async function populateIowaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of iowaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Iowa parks have been added to the database');
  } catch (error) {
    console.error('Error adding Iowa parks:', error);
  }
}

populateIowaParks(); 