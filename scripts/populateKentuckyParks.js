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

const kentuckyParks = [
  { name: 'Barren River Lake State Resort Park', location: 'Lucas, KY', description: 'Lakeside park with boating, fishing, and a golf course.', latitude: 36.8856, longitude: -86.1381, state: 'kentucky' },
  { name: 'Big Bone Lick State Historic Site', location: 'Union, KY', description: 'Known for Ice Age fossils and a bison herd.', latitude: 38.8881, longitude: -84.7517, state: 'kentucky' },
  { name: 'Blue Licks Battlefield State Resort Park', location: 'Carlisle, KY', description: 'Historic battlefield with hiking and a lodge.', latitude: 38.4322, longitude: -83.9931, state: 'kentucky' },
  { name: 'Buckhorn Lake State Resort Park', location: 'Buckhorn, KY', description: 'Mountain lake park with boating, fishing, and hiking.', latitude: 37.3472, longitude: -83.4456, state: 'kentucky' },
  { name: 'Carter Caves State Resort Park', location: 'Olive Hill, KY', description: 'Features caves, hiking, and a lodge in eastern Kentucky.', latitude: 38.3692, longitude: -83.1331, state: 'kentucky' },
  { name: 'Columbus-Belmont State Park', location: 'Columbus, KY', description: 'Civil War site with river views and a campground.', latitude: 36.7592, longitude: -89.1081, state: 'kentucky' },
  { name: 'Cumberland Falls State Resort Park', location: 'Corbin, KY', description: 'Home to the "Niagara of the South" and the famous moonbow.', latitude: 36.8381, longitude: -84.3406, state: 'kentucky' },
  { name: 'Dale Hollow Lake State Resort Park', location: 'Burkesville, KY', description: 'Lake park with boating, fishing, and a golf course.', latitude: 36.6642, longitude: -85.3006, state: 'kentucky' },
  { name: 'E.P. "Tom" Sawyer State Park', location: 'Louisville, KY', description: 'Urban park with sports facilities and trails.', latitude: 38.2850, longitude: -85.5742, state: 'kentucky' },
  { name: 'Fort Boonesborough State Park', location: 'Richmond, KY', description: 'Reconstructed pioneer fort and campground on the Kentucky River.', latitude: 37.8900, longitude: -84.2550, state: 'kentucky' },
  { name: 'General Burnside Island State Park', location: 'Burnside, KY', description: 'Island park on Lake Cumberland with golf and boating.', latitude: 36.9272, longitude: -84.5906, state: 'kentucky' },
  { name: 'Greenbo Lake State Resort Park', location: 'Greenup, KY', description: 'Lake park with fishing, hiking, and a lodge.', latitude: 38.5611, longitude: -82.9481, state: 'kentucky' },
  { name: 'Jenny Wiley State Resort Park', location: 'Prestonsburg, KY', description: 'Mountain park with a lake, theater, and hiking.', latitude: 37.7031, longitude: -82.7506, state: 'kentucky' },
  { name: 'John James Audubon State Park', location: 'Henderson, KY', description: 'Features a museum, nature center, and hiking trails.', latitude: 37.8661, longitude: -87.5661, state: 'kentucky' },
  { name: 'Kenlake State Resort Park', location: 'Hardin, KY', description: 'Lake park with boating, tennis, and a lodge.', latitude: 36.7650, longitude: -88.1350, state: 'kentucky' },
  { name: 'Kentucky Dam Village State Resort Park', location: 'Gilbertsville, KY', description: 'Large lakeside park with marina, golf, and a lodge.', latitude: 37.0161, longitude: -88.2872, state: 'kentucky' },
  { name: 'Kingdom Come State Park', location: 'Cumberland, KY', description: 'Mountain park with scenic overlooks and hiking.', latitude: 36.9781, longitude: -82.9972, state: 'kentucky' },
  { name: 'Kincaid Lake State Park', location: 'Falmouth, KY', description: 'Lake park with camping, fishing, and mini-golf.', latitude: 38.7000, longitude: -84.3300, state: 'kentucky' },
  { name: 'Lake Barkley State Resort Park', location: 'Cadiz, KY', description: 'Lakeside park with boating, fishing, and a lodge.', latitude: 36.8450, longitude: -87.9300, state: 'kentucky' },
  { name: 'Lake Cumberland State Resort Park', location: 'Jamestown, KY', description: 'Lake park with marina, fishing, and a lodge.', latitude: 36.9492, longitude: -85.3006, state: 'kentucky' },
  { name: 'Levi Jackson Wilderness Road Park', location: 'London, KY', description: 'Historic park with pioneer history and hiking.', latitude: 37.0950, longitude: -84.0831, state: 'kentucky' },
  { name: 'Lincoln Homestead State Park', location: 'Springfield, KY', description: 'Historic site with Lincoln family cabins and golf.', latitude: 37.7311, longitude: -85.2522, state: 'kentucky' },
  { name: 'Mineral Mound State Park', location: 'Eddyville, KY', description: 'Lake park with golf, boating, and fishing.', latitude: 37.0661, longitude: -88.0800, state: 'kentucky' },
  { name: 'My Old Kentucky Home State Park', location: 'Bardstown, KY', description: 'Historic mansion, golf, and outdoor theater.', latitude: 37.8092, longitude: -85.4661, state: 'kentucky' },
  { name: 'Natural Bridge State Resort Park', location: 'Slade, KY', description: 'Famous for its natural sandstone arch and hiking.', latitude: 37.7781, longitude: -83.6772, state: 'kentucky' },
  { name: 'Nolin Lake State Park', location: 'Mammoth Cave, KY', description: 'Lake park with boating, fishing, and camping.', latitude: 37.3161, longitude: -86.2472, state: 'kentucky' },
  { name: 'Old Fort Harrod State Park', location: 'Harrodsburg, KY', description: 'Reconstructed fort and pioneer history museum.', latitude: 37.7622, longitude: -84.8442, state: 'kentucky' },
  { name: 'Paintsville Lake State Park', location: 'Staffordsville, KY', description: 'Lake park with boating, fishing, and hiking.', latitude: 37.8592, longitude: -82.8006, state: 'kentucky' },
  { name: 'Pennyrile Forest State Resort Park', location: 'Dawson Springs, KY', description: 'Forest park with a lake, lodge, and hiking.', latitude: 37.1072, longitude: -87.6900, state: 'kentucky' },
  { name: 'Pine Mountain State Resort Park', location: 'Pineville, KY', description: 'Mountain park with hiking, golf, and a lodge.', latitude: 36.7622, longitude: -83.7361, state: 'kentucky' },
  { name: 'Rough River Dam State Resort Park', location: 'Falls of Rough, KY', description: 'Lake park with boating, fishing, and a lodge.', latitude: 37.6100, longitude: -86.4831, state: 'kentucky' },
  { name: 'Taylorsville Lake State Park', location: 'Taylorsville, KY', description: 'Lake park with boating, fishing, and camping.', latitude: 38.0100, longitude: -85.3200, state: 'kentucky' },
  { name: 'Waveland State Historic Site', location: 'Lexington, KY', description: 'Antebellum mansion and historic site.', latitude: 37.9781, longitude: -84.5081, state: 'kentucky' },
  { name: 'Wickliffe Mounds State Historic Site', location: 'Wickliffe, KY', description: 'Prehistoric Native American site and museum.', latitude: 36.9661, longitude: -89.0861, state: 'kentucky' },
  { name: 'Yatesville Lake State Park', location: 'Louisa, KY', description: 'Lake park with boating, fishing, and camping.', latitude: 38.1161, longitude: -82.7006, state: 'kentucky' },
  // ... (add the rest of the 45 parks as needed) ...
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of kentuckyParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Kentucky parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 