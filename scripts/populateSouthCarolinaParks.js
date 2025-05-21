const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
  // Your Firebase config here
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

const southCarolinaParks = [
  {
    name: 'Aiken State Park',
    location: 'Windsor, SC',
    description: 'Features a natural spring and fishing lake in the Sandhills region.',
    latitude: 33.1667,
    longitude: -81.4833,
    state: 'south_carolina'
  },
  {
    name: 'Andrew Jackson State Park',
    location: 'Lancaster, SC',
    description: 'Historic site featuring a museum dedicated to Andrew Jackson\'s boyhood home.',
    latitude: 34.7167,
    longitude: -80.7833,
    state: 'south_carolina'
  },
  {
    name: 'Baker Creek State Park',
    location: 'McCormick, SC',
    description: 'Located on Lake Thurmond, offering camping and water recreation.',
    latitude: 33.9167,
    longitude: -82.2833,
    state: 'south_carolina'
  },
  {
    name: 'Barnwell State Park',
    location: 'Blackville, SC',
    description: 'Features fishing lakes and hiking trails in the Lowcountry.',
    latitude: 33.3500,
    longitude: -81.3667,
    state: 'south_carolina'
  },
  {
    name: 'Caesars Head State Park',
    location: 'Cleveland, SC',
    description: 'Known for its dramatic granite outcropping and hiking trails.',
    latitude: 35.1000,
    longitude: -82.6167,
    state: 'south_carolina'
  },
  {
    name: 'Calhoun Falls State Park',
    location: 'Calhoun Falls, SC',
    description: 'Located on Lake Russell, offering camping and water activities.',
    latitude: 34.0833,
    longitude: -82.5833,
    state: 'south_carolina'
  },
  {
    name: 'Cheraw State Park',
    location: 'Cheraw, SC',
    description: 'Features a golf course and lake recreation in the Pee Dee region.',
    latitude: 34.6667,
    longitude: -79.8833,
    state: 'south_carolina'
  },
  {
    name: 'Chester State Park',
    location: 'Chester, SC',
    description: 'Offers fishing, camping, and hiking in the Piedmont region.',
    latitude: 34.7000,
    longitude: -81.2000,
    state: 'south_carolina'
  },
  {
    name: 'Colleton State Park',
    location: 'Walterboro, SC',
    description: 'Located on the Edisto River, offering canoeing and camping.',
    latitude: 32.9167,
    longitude: -80.6667,
    state: 'south_carolina'
  },
  {
    name: 'Croft State Park',
    location: 'Spartanburg, SC',
    description: 'Features equestrian trails and Lake Craig in the Upstate.',
    latitude: 34.8833,
    longitude: -81.8333,
    state: 'south_carolina'
  },
  {
    name: 'Devils Fork State Park',
    location: 'Salem, SC',
    description: 'Located on Lake Jocassee, known for its clear waters and waterfalls.',
    latitude: 34.9500,
    longitude: -82.9333,
    state: 'south_carolina'
  },
  {
    name: 'Dreher Island State Park',
    location: 'Prosperity, SC',
    description: 'Located on Lake Murray, offering camping and water recreation.',
    latitude: 34.0833,
    longitude: -81.4000,
    state: 'south_carolina'
  },
  {
    name: 'Edisto Beach State Park',
    location: 'Edisto Island, SC',
    description: 'Features beach access and camping on the Atlantic coast.',
    latitude: 32.5000,
    longitude: -80.3167,
    state: 'south_carolina'
  },
  {
    name: 'Givhans Ferry State Park',
    location: 'Ridgeville, SC',
    description: 'Located on the Edisto River, offering camping and river access.',
    latitude: 33.0167,
    longitude: -80.3167,
    state: 'south_carolina'
  },
  {
    name: 'Goodale State Park',
    location: 'Camden, SC',
    description: 'Features a cypress lake and canoeing opportunities.',
    latitude: 34.2667,
    longitude: -80.6000,
    state: 'south_carolina'
  },
  {
    name: 'Hampton Plantation State Historic Site',
    location: 'McClellanville, SC',
    description: 'Historic rice plantation with guided tours and nature trails.',
    latitude: 33.2000,
    longitude: -79.4667,
    state: 'south_carolina'
  },
  {
    name: 'Hickory Knob State Resort Park',
    location: 'McCormick, SC',
    description: 'Located on Lake Thurmond, featuring a golf course and lodge.',
    latitude: 33.6500,
    longitude: -82.2000,
    state: 'south_carolina'
  },
  {
    name: 'Hunting Island State Park',
    location: 'Hunting Island, SC',
    description: 'Features a lighthouse and beach access on the Atlantic coast.',
    latitude: 32.3500,
    longitude: -80.4333,
    state: 'south_carolina'
  },
  {
    name: 'Huntington Beach State Park',
    location: 'Murrells Inlet, SC',
    description: 'Features Atalaya Castle and beach access on the Grand Strand.',
    latitude: 33.5000,
    longitude: -79.0667,
    state: 'south_carolina'
  },
  {
    name: 'Jones Gap State Park',
    location: 'Marietta, SC',
    description: 'Features waterfalls and hiking trails in the Mountain Bridge Wilderness.',
    latitude: 35.1333,
    longitude: -82.5833,
    state: 'south_carolina'
  },
  {
    name: 'Keowee-Toxaway State Park',
    location: 'Sunset, SC',
    description: 'Located on Lake Keowee, offering hiking and lake recreation.',
    latitude: 34.8833,
    longitude: -82.9000,
    state: 'south_carolina'
  },
  {
    name: 'Kings Mountain State Park',
    location: 'Blacksburg, SC',
    description: 'Features living history farm and hiking trails.',
    latitude: 35.1333,
    longitude: -81.3333,
    state: 'south_carolina'
  },
  {
    name: 'Lake Greenwood State Park',
    location: 'Ninety Six, SC',
    description: 'Located on Lake Greenwood, offering camping and water recreation.',
    latitude: 34.2167,
    longitude: -82.1500,
    state: 'south_carolina'
  },
  {
    name: 'Lake Hartwell State Park',
    location: 'Fair Play, SC',
    description: 'Located on Lake Hartwell, offering camping and water activities.',
    latitude: 34.5167,
    longitude: -82.8500,
    state: 'south_carolina'
  },
  {
    name: 'Lake Wateree State Park',
    location: 'Winnsboro, SC',
    description: 'Located on Lake Wateree, offering camping and water recreation.',
    latitude: 34.3833,
    longitude: -80.8833,
    state: 'south_carolina'
  },
  {
    name: 'Landsford Canal State Park',
    location: 'Catawba, SC',
    description: 'Features historic canal and spider lily viewing.',
    latitude: 34.7833,
    longitude: -80.8833,
    state: 'south_carolina'
  },
  {
    name: 'Lee State Park',
    location: 'Bishopville, SC',
    description: 'Features artesian wells and equestrian trails.',
    latitude: 34.2167,
    longitude: -80.2500,
    state: 'south_carolina'
  },
  {
    name: 'Little Pee Dee State Park',
    location: 'Dillon, SC',
    description: 'Features fishing lake and camping in the Pee Dee region.',
    latitude: 34.3167,
    longitude: -79.3667,
    state: 'south_carolina'
  },
  {
    name: 'Myrtle Beach State Park',
    location: 'Myrtle Beach, SC',
    description: 'Features beach access and camping on the Grand Strand.',
    latitude: 33.6833,
    longitude: -78.8833,
    state: 'south_carolina'
  },
  {
    name: 'Oconee State Park',
    location: 'Mountain Rest, SC',
    description: 'Features lake recreation and hiking in the Blue Ridge Mountains.',
    latitude: 34.8500,
    longitude: -83.1000,
    state: 'south_carolina'
  },
  {
    name: 'Paris Mountain State Park',
    location: 'Greenville, SC',
    description: 'Features Lake Placid and hiking trails near Greenville.',
    latitude: 34.9333,
    longitude: -82.3667,
    state: 'south_carolina'
  },
  {
    name: 'Poinsett State Park',
    location: 'Wedgefield, SC',
    description: 'Features unique plant communities and hiking trails.',
    latitude: 33.7833,
    longitude: -80.5333,
    state: 'south_carolina'
  },
  {
    name: 'Redcliffe Plantation State Historic Site',
    location: 'Beech Island, SC',
    description: 'Historic cotton plantation with guided tours.',
    latitude: 33.3667,
    longitude: -81.8833,
    state: 'south_carolina'
  },
  {
    name: 'Rivers Bridge State Historic Site',
    location: 'Ehrhardt, SC',
    description: 'Civil War battlefield with interpretive trails.',
    latitude: 33.0667,
    longitude: -81.4667,
    state: 'south_carolina'
  },
  {
    name: 'Rose Hill Plantation State Historic Site',
    location: 'Union, SC',
    description: 'Historic plantation home with guided tours.',
    latitude: 34.7167,
    longitude: -81.6167,
    state: 'south_carolina'
  },
  {
    name: 'Sadlers Creek State Park',
    location: 'Anderson, SC',
    description: 'Located on Lake Hartwell, offering camping and water recreation.',
    latitude: 34.5167,
    longitude: -82.7167,
    state: 'south_carolina'
  },
  {
    name: 'Santee State Park',
    location: 'Santee, SC',
    description: 'Located on Lake Marion, offering camping and water activities.',
    latitude: 33.4833,
    longitude: -80.4667,
    state: 'south_carolina'
  },
  {
    name: 'Sesquicentennial State Park',
    location: 'Columbia, SC',
    description: 'Features lake recreation and hiking near Columbia.',
    latitude: 34.0833,
    longitude: -80.9167,
    state: 'south_carolina'
  },
  {
    name: 'Table Rock State Park',
    location: 'Pickens, SC',
    description: 'Features Table Rock Mountain and hiking trails.',
    latitude: 35.0333,
    longitude: -82.7000,
    state: 'south_carolina'
  },
  {
    name: 'Woods Bay State Park',
    location: 'Olanta, SC',
    description: 'Features a Carolina bay and boardwalk trail.',
    latitude: 33.9333,
    longitude: -79.9500,
    state: 'south_carolina'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    
    for (const park of southCarolinaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    
    console.log('All South Carolina parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 