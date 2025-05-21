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

const parksData = [
  {
    name: 'Bicentennial Capitol Mall State Park',
    location: 'Nashville, TN',
    description: 'A 19-acre urban park featuring a 200-foot granite map of Tennessee, World War II Memorial, and Rivers of Tennessee Fountains.',
    latitude: 36.1667,
    longitude: -86.7833
  },
  {
    name: 'Big Bone Cave State Natural Area',
    location: 'Sparta, TN',
    description: 'Known for its large prehistoric animal bones and extensive cave system.',
    latitude: 36.0167,
    longitude: -85.5500
  },
  {
    name: 'Big Cypress Tree State Natural Area',
    location: 'Greenfield, TN',
    description: 'Home to one of the largest bald cypress trees in the United States.',
    latitude: 36.1500,
    longitude: -88.8000
  },
  {
    name: 'Big Hill Pond State Park',
    location: 'Pocahontas, TN',
    description: 'Features a 70-foot observation tower, boardwalk through a cypress swamp, and diverse wildlife.',
    latitude: 35.0333,
    longitude: -88.7833
  },
  {
    name: 'Bledsoe Creek State Park',
    location: 'Gallatin, TN',
    description: 'Located on Old Hickory Lake, offering camping, fishing, and hiking opportunities.',
    latitude: 36.3833,
    longitude: -86.4000
  },
  {
    name: 'Booker T. Washington State Park',
    location: 'Chattanooga, TN',
    description: 'Named after the famous educator, offering lake recreation and historical significance.',
    latitude: 35.1167,
    longitude: -85.1167
  },
  {
    name: 'Burgess Falls State Park',
    location: 'Sparta, TN',
    description: 'Features a series of waterfalls and hiking trails along the Falling Water River.',
    latitude: 36.0551,
    longitude: -85.6005
  },
  {
    name: 'Cedars of Lebanon State Park',
    location: 'Lebanon, TN',
    description: 'Known for its cedar glades and unique ecosystem, offering camping and hiking.',
    latitude: 36.1001,
    longitude: -86.3333
  },
  {
    name: 'Chickasaw State Park',
    location: 'Henderson, TN',
    description: 'Features a lake, swimming pool, and extensive trail system.',
    latitude: 35.3667,
    longitude: -88.6667
  },
  {
    name: 'Cove Lake State Park',
    location: 'Caryville, TN',
    description: 'Offers fishing, boating, and camping opportunities on Cove Lake.',
    latitude: 36.3167,
    longitude: -84.2167
  },
  {
    name: 'Cumberland Mountain State Park',
    location: 'Crossville, TN',
    description: 'Features a historic stone dam and beautiful hiking trails in the Cumberland Mountains.',
    latitude: 35.9333,
    longitude: -85.0167
  },
  {
    name: 'Cummins Falls State Park',
    location: 'Cookeville, TN',
    description: 'Home to Tennessee\'s eighth largest waterfall and scenic hiking trails.',
    latitude: 36.2833,
    longitude: -85.4667
  },
  {
    name: 'Davy Crockett Birthplace State Park',
    location: 'Limestone, TN',
    description: 'Historic site commemorating the birthplace of Davy Crockett, featuring a museum and camping.',
    latitude: 36.1667,
    longitude: -82.5833
  },
  {
    name: 'Dunbar Cave State Park',
    location: 'Clarksville, TN',
    description: 'Features a large cave system and lake, offering guided cave tours.',
    latitude: 36.5500,
    longitude: -87.3000
  },
  {
    name: 'Edgar Evins State Park',
    location: 'Silver Point, TN',
    description: 'Located on Center Hill Lake, offering water activities and hiking trails.',
    latitude: 36.0333,
    longitude: -85.7167
  },
  {
    name: 'Fall Creek Falls State Park',
    location: 'Pikeville, TN',
    description: 'Home to one of the highest waterfalls in the eastern United States and extensive recreational facilities.',
    latitude: 35.6667,
    longitude: -85.3667
  },
  {
    name: 'Fort Loudoun State Park',
    location: 'Vonore, TN',
    description: 'Historic site featuring a reconstructed 18th-century British fort and museum.',
    latitude: 35.5833,
    longitude: -84.2167
  },
  {
    name: 'Fort Pillow State Park',
    location: 'Henning, TN',
    description: 'Historic Civil War site with camping and hiking opportunities.',
    latitude: 35.6333,
    longitude: -89.8333
  },
  {
    name: 'Harrison Bay State Park',
    location: 'Harrison, TN',
    description: 'Located on Chickamauga Lake, offering water recreation and camping.',
    latitude: 35.1333,
    longitude: -85.1333
  },
  {
    name: 'Henry Horton State Park',
    location: 'Chapel Hill, TN',
    description: 'Features golf, fishing, and camping facilities along the Duck River.',
    latitude: 35.6333,
    longitude: -86.6833
  },
  {
    name: 'Hiwassee/Ocoee Scenic River State Park',
    location: 'Delano, TN',
    description: 'Known for whitewater rafting and scenic river views.',
    latitude: 35.2667,
    longitude: -84.5500
  },
  {
    name: 'Honey Creek State Natural Area',
    location: 'Jamestown, TN',
    description: 'Features rugged hiking trails and scenic views in the Big South Fork region.',
    latitude: 36.4833,
    longitude: -84.9500
  },
  {
    name: 'Indian Mountain State Park',
    location: 'Jellico, TN',
    description: 'Offers camping and hiking in the Cumberland Mountains.',
    latitude: 36.5833,
    longitude: -84.1167
  },
  {
    name: 'Johnsonville State Historic Park',
    location: 'New Johnsonville, TN',
    description: 'Civil War historic site with museum and hiking trails.',
    latitude: 36.0500,
    longitude: -87.9667
  },
  {
    name: 'Long Hunter State Park',
    location: 'Hermitage, TN',
    description: 'Features hiking trails and water recreation on J. Percy Priest Lake.',
    latitude: 36.1167,
    longitude: -86.5167
  },
  {
    name: 'Mousetail Landing State Park',
    location: 'Linden, TN',
    description: 'Located on the Tennessee River, offering camping and water activities.',
    latitude: 35.6167,
    longitude: -87.8500
  },
  {
    name: 'Montgomery Bell State Park',
    location: 'Burns, TN',
    description: 'Known for its historic iron industry and beautiful trails.',
    latitude: 36.0833,
    longitude: -87.2833
  },
  {
    name: 'Natchez Trace State Park',
    location: 'Wildersville, TN',
    description: 'Offers extensive hiking trails and lake activities.',
    latitude: 35.7167,
    longitude: -88.3333
  },
  {
    name: 'Nathan Bedford Forrest State Park',
    location: 'Eva, TN',
    description: 'Features a museum, camping, and water recreation on Kentucky Lake.',
    latitude: 36.1000,
    longitude: -87.9667
  },
  {
    name: 'Norris Dam State Park',
    location: 'Norris, TN',
    description: 'Historic park featuring the first TVA dam and extensive recreational facilities.',
    latitude: 36.2167,
    longitude: -84.0667
  },
  {
    name: 'Old Stone Fort State Archaeological Park',
    location: 'Manchester, TN',
    description: 'Ancient Native American site with museum and hiking trails.',
    latitude: 35.4833,
    longitude: -86.1000
  },
  {
    name: 'Paris Landing State Park',
    location: 'Buchanan, TN',
    description: 'Located on Kentucky Lake, offering golf, fishing, and camping.',
    latitude: 36.3833,
    longitude: -88.1167
  },
  {
    name: 'Pickett CCC Memorial State Park',
    location: 'Jamestown, TN',
    description: 'Features a lake, camping, and hiking in the Big South Fork region.',
    latitude: 36.5500,
    longitude: -84.7833
  },
  {
    name: 'Pickwick Landing State Park',
    location: 'Counce, TN',
    description: 'Located on Pickwick Lake, offering golf, fishing, and camping.',
    latitude: 35.0500,
    longitude: -88.2500
  },
  {
    name: 'Pinson Mounds State Archaeological Park',
    location: 'Pinson, TN',
    description: 'Features Native American mounds and museum.',
    latitude: 35.4833,
    longitude: -88.6833
  },
  {
    name: 'Port Royal State Park',
    location: 'Adams, TN',
    description: 'Historic site featuring a restored 1790s trading post.',
    latitude: 36.5500,
    longitude: -87.1500
  },
  {
    name: 'Radnor Lake State Park',
    location: 'Nashville, TN',
    description: 'Urban park known for wildlife viewing and hiking trails.',
    latitude: 36.0667,
    longitude: -86.8000
  },
  {
    name: 'Red Clay State Historic Park',
    location: 'Cleveland, TN',
    description: 'Historic Cherokee site with museum and hiking trails.',
    latitude: 35.0167,
    longitude: -84.9333
  },
  {
    name: 'Roan Mountain State Park',
    location: 'Roan Mountain, TN',
    description: 'Known for its rhododendron gardens and hiking trails.',
    latitude: 36.2000,
    longitude: -82.0667
  },
  {
    name: 'Rock Island State Park',
    location: 'Rock Island, TN',
    description: 'Features waterfalls, hiking trails, and water recreation.',
    latitude: 35.8167,
    longitude: -85.6333
  },
  {
    name: 'Sgt. Alvin C. York State Historic Park',
    location: 'Pall Mall, TN',
    description: 'Historic site honoring World War I hero Alvin C. York.',
    latitude: 36.5500,
    longitude: -84.9500
  },
  {
    name: 'Seven Islands State Birding Park',
    location: 'Kodak, TN',
    description: 'Known for bird watching and wildlife viewing.',
    latitude: 35.9667,
    longitude: -83.6167
  },
  {
    name: 'South Cumberland State Park',
    location: 'Monteagle, TN',
    description: 'Features multiple natural areas with waterfalls and hiking trails.',
    latitude: 35.2333,
    longitude: -85.8333
  },
  {
    name: 'Standing Stone State Park',
    location: 'Hilham, TN',
    description: 'Features a lake, camping, and hiking trails.',
    latitude: 36.5000,
    longitude: -85.4167
  },
  {
    name: 'Sycamore Shoals State Historic Park',
    location: 'Elizabethton, TN',
    description: 'Historic site featuring a reconstructed fort and museum.',
    latitude: 36.3500,
    longitude: -82.2500
  },
  {
    name: 'Tims Ford State Park',
    location: 'Winchester, TN',
    description: 'Located on Tims Ford Lake, offering golf, fishing, and camping.',
    latitude: 35.2167,
    longitude: -86.2500
  },
  {
    name: 'T.O. Fuller State Park',
    location: 'Memphis, TN',
    description: 'Features golf, camping, and hiking trails.',
    latitude: 35.0333,
    longitude: -90.1167
  },
  {
    name: 'Warriors\' Path State Park',
    location: 'Kingsport, TN',
    description: 'Located on Fort Patrick Henry Lake, offering water recreation and camping.',
    latitude: 36.4500,
    longitude: -82.4833
  }
];

async function populateParks() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    for (const park of parksData) {
      const parkRef = doc(collection(db, 'parks'));
      await setDoc(parkRef, park);
      console.log(`Added ${park.name} to database`);
    }
    
    console.log('Successfully populated parks database!');
    process.exit(0);
  } catch (error) {
    console.error('Error populating database:', error);
    process.exit(1);
  }
}

populateParks(); 