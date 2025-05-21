const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');

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

const additionalParks = [
  {
    name: 'Big Ridge State Park',
    location: 'Maynardville, TN',
    description: 'Located on Norris Lake, offering camping, hiking, and water recreation.',
    latitude: 36.2333,
    longitude: -83.7833
  },
  {
    name: 'Cordell Hull Birthplace State Park',
    location: 'Byrdstown, TN',
    description: 'Historic site featuring the birthplace of Cordell Hull, known as the "Father of the United Nations".',
    latitude: 36.5667,
    longitude: -85.1333
  },
  {
    name: 'Cumberland Trail State Park',
    location: 'Caryville, TN',
    description: 'A linear park featuring over 300 miles of hiking trails along the Cumberland Plateau.',
    latitude: 36.3167,
    longitude: -84.2167
  },
  {
    name: 'David Crockett State Park',
    location: 'Lawrenceburg, TN',
    description: 'Features a museum, camping, and hiking trails honoring the life of David Crockett.',
    latitude: 35.2333,
    longitude: -87.3333
  },
  {
    name: 'Frozen Head State Park',
    location: 'Wartburg, TN',
    description: 'Known for its rugged terrain, waterfalls, and the famous Barkley Marathons.',
    latitude: 36.1333,
    longitude: -84.5000
  },
  {
    name: 'Harpeth River State Park',
    location: 'Kingston Springs, TN',
    description: 'Features the historic Narrows of the Harpeth, offering canoeing and hiking.',
    latitude: 36.1000,
    longitude: -87.1167
  },
  {
    name: 'Meeman-Shelby Forest State Park',
    location: 'Millington, TN',
    description: 'Located along the Mississippi River, offering camping, hiking, and wildlife viewing.',
    latitude: 35.3667,
    longitude: -90.0167
  },
  {
    name: 'Middle Fork Bottoms State Natural Area',
    location: 'Dickson, TN',
    description: 'Features a unique wetland ecosystem and diverse wildlife.',
    latitude: 36.0667,
    longitude: -87.3667
  },
  {
    name: 'North Chickamauga Creek Gorge State Natural Area',
    location: 'Soddy-Daisy, TN',
    description: 'Known for its scenic gorge, waterfalls, and hiking trails.',
    latitude: 35.2333,
    longitude: -85.1833
  },
  {
    name: 'Panther Creek State Park',
    location: 'Morristown, TN',
    description: 'Located on Cherokee Lake, offering camping, hiking, and water recreation.',
    latitude: 36.2167,
    longitude: -83.2833
  },
  {
    name: 'Reelfoot Lake State Park',
    location: 'Tiptonville, TN',
    description: 'Known for its unique ecosystem, created by the 1811-1812 New Madrid earthquakes.',
    latitude: 36.3833,
    longitude: -89.3833
  },
  {
    name: 'Rocky Fork State Park',
    location: 'Flag Pond, TN',
    description: 'Features pristine streams, waterfalls, and extensive hiking trails.',
    latitude: 36.0167,
    longitude: -82.5667
  },
  {
    name: 'Savage Gulf State Natural Area',
    location: 'Palmer, TN',
    description: 'Part of the South Cumberland State Park, known for its deep gorges and waterfalls.',
    latitude: 35.2500,
    longitude: -85.7833
  },
  {
    name: 'Scott\'s Gulf State Natural Area',
    location: 'Sparta, TN',
    description: 'Features the Caney Fork River Gorge and scenic overlooks.',
    latitude: 35.8333,
    longitude: -85.4667
  }
];

async function addParks() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    for (const park of additionalParks) {
      const parkRef = doc(collection(db, 'parks'));
      await setDoc(parkRef, park);
      console.log(`Added ${park.name} to database`);
    }
    
    console.log('Successfully added all parks to database!');
    process.exit(0);
  } catch (error) {
    console.error('Error adding parks:', error);
    process.exit(1);
  }
}

addParks(); 