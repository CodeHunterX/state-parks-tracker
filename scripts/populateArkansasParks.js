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

const arkansasParks = [
  {
    name: 'Arkansas Museum of Natural Resources',
    location: 'Smackover, AR',
    description: 'Museum showcasing Arkansas\'s oil and brine industry history.',
    latitude: 33.3667,
    longitude: -92.7333,
    state: 'arkansas'
  },
  {
    name: 'Arkansas Post Museum',
    location: 'Gillett, AR',
    description: 'Historic site preserving Arkansas\'s first European settlement.',
    latitude: 34.0167,
    longitude: -91.3500,
    state: 'arkansas'
  },
  {
    name: 'Bull Shoals-White River State Park',
    location: 'Bull Shoals, AR',
    description: 'Features fishing, boating, and camping on Bull Shoals Lake.',
    latitude: 36.3833,
    longitude: -92.5833,
    state: 'arkansas'
  },
  {
    name: 'Cane Creek State Park',
    location: 'Star City, AR',
    description: 'Offers hiking trails and lake recreation in the Arkansas Delta.',
    latitude: 33.9333,
    longitude: -91.8333,
    state: 'arkansas'
  },
  {
    name: 'Conway Cemetery State Park',
    location: 'Lafayette County, AR',
    description: 'Historic cemetery preserving Arkansas pioneer history.',
    latitude: 33.2167,
    longitude: -93.4333,
    state: 'arkansas'
  },
  {
    name: 'Cossatot River State Park-Natural Area',
    location: 'Wickes, AR',
    description: 'Features the Cossatot River, known for whitewater rafting.',
    latitude: 34.3167,
    longitude: -94.1167,
    state: 'arkansas'
  },
  {
    name: 'Crater of Diamonds State Park',
    location: 'Murfreesboro, AR',
    description: 'World\'s only diamond-producing site open to the public.',
    latitude: 34.0333,
    longitude: -93.6667,
    state: 'arkansas'
  },
  {
    name: 'Crowley\'s Ridge State Park',
    location: 'Paragould, AR',
    description: 'Features unique geological formation and hiking trails.',
    latitude: 36.1167,
    longitude: -90.5667,
    state: 'arkansas'
  },
  {
    name: 'Daisy State Park',
    location: 'Kirby, AR',
    description: 'Located on Lake Greeson with boating and fishing.',
    latitude: 34.2333,
    longitude: -93.6333,
    state: 'arkansas'
  },
  {
    name: 'Davidsonville Historic State Park',
    location: 'Pocahontas, AR',
    description: 'Preserves Arkansas\'s first town site and courthouse.',
    latitude: 36.1500,
    longitude: -91.0667,
    state: 'arkansas'
  },
  {
    name: 'DeGray Lake Resort State Park',
    location: 'Bismarck, AR',
    description: 'Features a resort lodge, golf course, and lake recreation.',
    latitude: 34.3167,
    longitude: -93.1667,
    state: 'arkansas'
  },
  {
    name: 'Delta Heritage Trail State Park',
    location: 'Helena-West Helena, AR',
    description: 'Rail-to-trail conversion offering hiking and biking.',
    latitude: 34.5167,
    longitude: -90.5833,
    state: 'arkansas'
  },
  {
    name: 'Devil\'s Den State Park',
    location: 'West Fork, AR',
    description: 'Known for its caves, hiking trails, and CCC architecture.',
    latitude: 35.7833,
    longitude: -94.2500,
    state: 'arkansas'
  },
  {
    name: 'Hampson Archeological Museum State Park',
    location: 'Wilson, AR',
    description: 'Museum showcasing Native American artifacts and history.',
    latitude: 35.5667,
    longitude: -90.0333,
    state: 'arkansas'
  },
  {
    name: 'Herman Davis State Park',
    location: 'Manila, AR',
    description: 'Memorial park honoring World War I hero Herman Davis.',
    latitude: 35.8833,
    longitude: -90.1667,
    state: 'arkansas'
  },
  {
    name: 'Historic Washington State Park',
    location: 'Washington, AR',
    description: 'Preserves 19th-century town and Confederate capital.',
    latitude: 33.7667,
    longitude: -93.6833,
    state: 'arkansas'
  },
  {
    name: 'Hobbs State Park-Conservation Area',
    location: 'Rogers, AR',
    description: 'Largest state park with diverse ecosystems and trails.',
    latitude: 36.3667,
    longitude: -93.9167,
    state: 'arkansas'
  },
  {
    name: 'Jacksonport State Park',
    location: 'Jacksonport, AR',
    description: 'Historic river port town with museum and steamboat history.',
    latitude: 35.6333,
    longitude: -91.3000,
    state: 'arkansas'
  },
  {
    name: 'Jenkins\' Ferry Battleground State Park',
    location: 'Leola, AR',
    description: 'Civil War battlefield with interpretive trails.',
    latitude: 34.2167,
    longitude: -92.5500,
    state: 'arkansas'
  },
  {
    name: 'Lake Catherine State Park',
    location: 'Hot Springs, AR',
    description: 'Features waterfalls, hiking trails, and lake recreation.',
    latitude: 34.4333,
    longitude: -92.9167,
    state: 'arkansas'
  },
  {
    name: 'Lake Charles State Park',
    location: 'Powhatan, AR',
    description: 'Offers fishing, boating, and camping on Lake Charles.',
    latitude: 36.0833,
    longitude: -91.1167,
    state: 'arkansas'
  },
  {
    name: 'Lake Chicot State Park',
    location: 'Lake Village, AR',
    description: 'Arkansas\'s largest natural lake with fishing and boating.',
    latitude: 33.3167,
    longitude: -91.2833,
    state: 'arkansas'
  },
  {
    name: 'Lake Dardanelle State Park',
    location: 'Russellville, AR',
    description: 'Features fishing, boating, and visitor center on the lake.',
    latitude: 35.2833,
    longitude: -93.1667,
    state: 'arkansas'
  },
  {
    name: 'Lake Fort Smith State Park',
    location: 'Mountainburg, AR',
    description: 'Offers lake recreation and access to the Ozark Highlands Trail.',
    latitude: 35.6667,
    longitude: -94.3333,
    state: 'arkansas'
  },
  {
    name: 'Lake Frierson State Park',
    location: 'Jonesboro, AR',
    description: 'Features fishing, boating, and camping on the lake.',
    latitude: 35.8333,
    longitude: -90.7000,
    state: 'arkansas'
  },
  {
    name: 'Lake Ouachita State Park',
    location: 'Mountain Pine, AR',
    description: 'Arkansas\'s largest lake with water recreation and camping.',
    latitude: 34.5833,
    longitude: -93.1667,
    state: 'arkansas'
  },
  {
    name: 'Lake Poinsett State Park',
    location: 'Harrisburg, AR',
    description: 'Offers fishing, boating, and camping on the lake.',
    latitude: 35.5667,
    longitude: -90.7000,
    state: 'arkansas'
  },
  {
    name: 'Lake Sylvia Recreation Area',
    location: 'Perryville, AR',
    description: 'Scenic lake with hiking trails and camping.',
    latitude: 34.9667,
    longitude: -92.8000,
    state: 'arkansas'
  },
  {
    name: 'Logoly State Park',
    location: 'McNeil, AR',
    description: 'Arkansas\'s first environmental education state park.',
    latitude: 33.3500,
    longitude: -93.2167,
    state: 'arkansas'
  },
  {
    name: 'Louisiana Purchase State Park',
    location: 'Brinkley, AR',
    description: 'Marks the initial point of the Louisiana Purchase survey.',
    latitude: 34.6500,
    longitude: -91.0500,
    state: 'arkansas'
  },
  {
    name: 'Lower White River Museum State Park',
    location: 'Des Arc, AR',
    description: 'Museum showcasing the history of the White River.',
    latitude: 34.9667,
    longitude: -91.5000,
    state: 'arkansas'
  },
  {
    name: 'Mammoth Spring State Park',
    location: 'Mammoth Spring, AR',
    description: 'Features one of the world\'s largest springs and historic train depot.',
    latitude: 36.4833,
    longitude: -91.5333,
    state: 'arkansas'
  },
  {
    name: 'Marks\' Mills Battleground State Park',
    location: 'New Edinburg, AR',
    description: 'Civil War battlefield with interpretive trails.',
    latitude: 33.7667,
    longitude: -92.2167,
    state: 'arkansas'
  },
  {
    name: 'Millwood State Park',
    location: 'Ashdown, AR',
    description: 'Features fishing, boating, and camping on Millwood Lake.',
    latitude: 33.6667,
    longitude: -94.0167,
    state: 'arkansas'
  },
  {
    name: 'Mississippi River State Park',
    location: 'Marianna, AR',
    description: 'Offers river recreation and access to the St. Francis National Forest.',
    latitude: 34.7667,
    longitude: -90.7667,
    state: 'arkansas'
  },
  {
    name: 'Moro Bay State Park',
    location: 'Jersey, AR',
    description: 'Features fishing, boating, and camping on Moro Bay.',
    latitude: 33.3167,
    longitude: -92.3167,
    state: 'arkansas'
  },
  {
    name: 'Mount Magazine State Park',
    location: 'Paris, AR',
    description: 'Arkansas\'s highest point with lodge, hiking, and hang gliding.',
    latitude: 35.1667,
    longitude: -93.6500,
    state: 'arkansas'
  },
  {
    name: 'Mount Nebo State Park',
    location: 'Dardanelle, AR',
    description: 'Mountain park with lodge, cabins, and scenic views.',
    latitude: 35.2167,
    longitude: -93.2333,
    state: 'arkansas'
  },
  {
    name: 'Ozark Folk Center State Park',
    location: 'Mountain View, AR',
    description: 'Living history park preserving Ozark culture and crafts.',
    latitude: 35.8667,
    longitude: -92.1167,
    state: 'arkansas'
  },
  {
    name: 'Parkin Archeological State Park',
    location: 'Parkin, AR',
    description: 'Preserves Native American village site and museum.',
    latitude: 35.2667,
    longitude: -90.5500,
    state: 'arkansas'
  },
  {
    name: 'Petit Jean State Park',
    location: 'Morrilton, AR',
    description: 'Arkansas\'s first state park with lodge, cabins, and hiking.',
    latitude: 35.1167,
    longitude: -92.9333,
    state: 'arkansas'
  },
  {
    name: 'Pinnacle Mountain State Park',
    location: 'Roland, AR',
    description: 'Features hiking trails and scenic views of the Arkansas River Valley.',
    latitude: 34.8333,
    longitude: -92.4833,
    state: 'arkansas'
  },
  {
    name: 'Plantation Agriculture Museum',
    location: 'Scott, AR',
    description: 'Museum showcasing Arkansas\'s agricultural history.',
    latitude: 34.6833,
    longitude: -92.0833,
    state: 'arkansas'
  },
  {
    name: 'Plum Bayou Mounds Archeological State Park',
    location: 'Scott, AR',
    description: 'Preserves Native American ceremonial mounds and museum.',
    latitude: 34.6167,
    longitude: -92.0333,
    state: 'arkansas'
  },
  {
    name: 'Poison Springs Battleground State Park',
    location: 'Chidester, AR',
    description: 'Civil War battlefield with interpretive trails.',
    latitude: 33.6333,
    longitude: -93.0000,
    state: 'arkansas'
  },
  {
    name: 'Powhatan Historic State Park',
    location: 'Powhatan, AR',
    description: 'Preserves 19th-century courthouse and town site.',
    latitude: 36.0833,
    longitude: -91.1167,
    state: 'arkansas'
  },
  {
    name: 'Prairie Grove Battlefield State Park',
    location: 'Prairie Grove, AR',
    description: 'Civil War battlefield with living history events.',
    latitude: 35.9833,
    longitude: -94.3167,
    state: 'arkansas'
  },
  {
    name: 'Queen Wilhelmina State Park',
    location: 'Mena, AR',
    description: 'Mountain park with lodge and scenic views.',
    latitude: 34.6833,
    longitude: -94.2333,
    state: 'arkansas'
  },
  {
    name: 'South Arkansas Arboretum',
    location: 'El Dorado, AR',
    description: 'Botanical garden showcasing native Arkansas plants.',
    latitude: 33.2000,
    longitude: -92.6500,
    state: 'arkansas'
  },
  {
    name: 'Toltec Mounds Archeological State Park',
    location: 'Scott, AR',
    description: 'Preserves Native American ceremonial mounds and museum.',
    latitude: 34.6333,
    longitude: -92.0667,
    state: 'arkansas'
  },
  {
    name: 'Village Creek State Park',
    location: 'Wynne, AR',
    description: 'Features fishing, boating, and camping on the lake.',
    latitude: 35.2333,
    longitude: -90.7833,
    state: 'arkansas'
  },
  {
    name: 'White Oak Lake State Park',
    location: 'Bluff City, AR',
    description: 'Offers fishing, boating, and camping on the lake.',
    latitude: 33.7167,
    longitude: -93.1000,
    state: 'arkansas'
  },
  {
    name: 'Withrow Springs State Park',
    location: 'Huntsville, AR',
    description: 'Features springs, hiking trails, and camping.',
    latitude: 36.1667,
    longitude: -93.7167,
    state: 'arkansas'
  },
  {
    name: 'Woolly Hollow State Park',
    location: 'Greenbrier, AR',
    description: 'Features lake recreation and historic schoolhouse.',
    latitude: 35.2167,
    longitude: -92.3167,
    state: 'arkansas'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of arkansasParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Arkansas parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 