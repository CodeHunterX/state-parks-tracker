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

const northCarolinaParks = [
  {
    name: 'Alamance Battleground State Historic Site',
    location: 'Burlington, NC',
    description: 'Historic site of the 1771 Regulator Movement battle.',
    latitude: 36.0167,
    longitude: -79.5167,
    state: 'north_carolina'
  },
  {
    name: 'Bald Head Island State Natural Area',
    location: 'Bald Head Island, NC',
    description: 'Features maritime forest and beach access on the southernmost point of North Carolina.',
    latitude: 33.8667,
    longitude: -78.0000,
    state: 'north_carolina'
  },
  {
    name: 'Carolina Beach State Park',
    location: 'Carolina Beach, NC',
    description: 'Features Venus flytrap habitat and beach access.',
    latitude: 34.0500,
    longitude: -77.9000,
    state: 'north_carolina'
  },
  {
    name: 'Carvers Creek State Park',
    location: 'Spring Lake, NC',
    description: 'Features longleaf pine forest and historic Rockefeller home.',
    latitude: 35.1833,
    longitude: -79.1167,
    state: 'north_carolina'
  },
  {
    name: 'Chimney Rock State Park',
    location: 'Chimney Rock, NC',
    description: 'Features dramatic rock formations and Hickory Nut Falls.',
    latitude: 35.4333,
    longitude: -82.2500,
    state: 'north_carolina'
  },
  {
    name: 'Cliffs of the Neuse State Park',
    location: 'Seven Springs, NC',
    description: 'Features dramatic cliffs along the Neuse River.',
    latitude: 35.2333,
    longitude: -77.9000,
    state: 'north_carolina'
  },
  {
    name: 'Crowders Mountain State Park',
    location: 'Kings Mountain, NC',
    description: 'Features dramatic cliffs and rock climbing opportunities.',
    latitude: 35.2167,
    longitude: -81.2833,
    state: 'north_carolina'
  },
  {
    name: 'Dismal Swamp State Park',
    location: 'South Mills, NC',
    description: 'Features boardwalk trails through the Great Dismal Swamp.',
    latitude: 36.5167,
    longitude: -76.3500,
    state: 'north_carolina'
  },
  {
    name: 'Eno River State Park',
    location: 'Durham, NC',
    description: 'Features river recreation and hiking trails near Durham.',
    latitude: 36.0833,
    longitude: -78.9333,
    state: 'north_carolina'
  },
  {
    name: 'Falls Lake State Recreation Area',
    location: 'Wake Forest, NC',
    description: 'Features multiple access areas around Falls Lake.',
    latitude: 36.0167,
    longitude: -78.7000,
    state: 'north_carolina'
  },
  {
    name: 'Fort Fisher State Recreation Area',
    location: 'Kure Beach, NC',
    description: 'Features beach access and Civil War history.',
    latitude: 33.9667,
    longitude: -77.9167,
    state: 'north_carolina'
  },
  {
    name: 'Fort Macon State Park',
    location: 'Atlantic Beach, NC',
    description: 'Features historic Civil War fort and beach access.',
    latitude: 34.7000,
    longitude: -76.6833,
    state: 'north_carolina'
  },
  {
    name: 'Goose Creek State Park',
    location: 'Washington, NC',
    description: 'Features boardwalk trails through coastal wetlands.',
    latitude: 35.4333,
    longitude: -76.9333,
    state: 'north_carolina'
  },
  {
    name: 'Gorges State Park',
    location: 'Sapphire, NC',
    description: 'Features waterfalls and rugged terrain in the Blue Ridge Mountains.',
    latitude: 35.1000,
    longitude: -82.9500,
    state: 'north_carolina'
  },
  {
    name: 'Grandfather Mountain State Park',
    location: 'Linville, NC',
    description: 'Features the iconic Grandfather Mountain and challenging hiking trails.',
    latitude: 36.1000,
    longitude: -81.8167,
    state: 'north_carolina'
  },
  {
    name: 'Hammocks Beach State Park',
    location: 'Swansboro, NC',
    description: 'Features Bear Island and pristine beach access.',
    latitude: 34.6667,
    longitude: -77.1333,
    state: 'north_carolina'
  },
  {
    name: 'Hanging Rock State Park',
    location: 'Danbury, NC',
    description: 'Features dramatic rock formations and waterfalls.',
    latitude: 36.4000,
    longitude: -80.2667,
    state: 'north_carolina'
  },
  {
    name: 'Haw River State Park',
    location: 'Browns Summit, NC',
    description: 'Features river recreation and hiking trails.',
    latitude: 36.2167,
    longitude: -79.7167,
    state: 'north_carolina'
  },
  {
    name: 'Jockey\'s Ridge State Park',
    location: 'Nags Head, NC',
    description: 'Features the tallest living sand dune on the East Coast.',
    latitude: 35.9500,
    longitude: -75.6333,
    state: 'north_carolina'
  },
  {
    name: 'Jones Lake State Park',
    location: 'Elizabethtown, NC',
    description: 'Features a unique Carolina bay lake.',
    latitude: 34.6833,
    longitude: -78.6000,
    state: 'north_carolina'
  },
  {
    name: 'Jordan Lake State Recreation Area',
    location: 'Apex, NC',
    description: 'Features multiple access areas around Jordan Lake.',
    latitude: 35.7167,
    longitude: -79.0167,
    state: 'north_carolina'
  },
  {
    name: 'Kerr Lake State Recreation Area',
    location: 'Henderson, NC',
    description: 'Features multiple access areas around Kerr Lake.',
    latitude: 36.5167,
    longitude: -78.3000,
    state: 'north_carolina'
  },
  {
    name: 'Lake James State Park',
    location: 'Nebo, NC',
    description: 'Features lake recreation and mountain views.',
    latitude: 35.7333,
    longitude: -81.8833,
    state: 'north_carolina'
  },
  {
    name: 'Lake Norman State Park',
    location: 'Troutman, NC',
    description: 'Features lake recreation near Charlotte.',
    latitude: 35.6833,
    longitude: -80.9333,
    state: 'north_carolina'
  },
  {
    name: 'Lake Waccamaw State Park',
    location: 'Lake Waccamaw, NC',
    description: 'Features a unique Carolina bay lake.',
    latitude: 34.2833,
    longitude: -78.5000,
    state: 'north_carolina'
  },
  {
    name: 'Lumber River State Park',
    location: 'Orrum, NC',
    description: 'Features river recreation and canoeing opportunities.',
    latitude: 34.4667,
    longitude: -79.0167,
    state: 'north_carolina'
  },
  {
    name: 'Mayo River State Park',
    location: 'Mayodan, NC',
    description: 'Features river recreation and hiking trails.',
    latitude: 36.4167,
    longitude: -79.9667,
    state: 'north_carolina'
  },
  {
    name: 'Medoc Mountain State Park',
    location: 'Hollister, NC',
    description: 'Features mountain hiking and fishing opportunities.',
    latitude: 36.3167,
    longitude: -77.9167,
    state: 'north_carolina'
  },
  {
    name: 'Merchants Millpond State Park',
    location: 'Gatesville, NC',
    description: 'Features a unique millpond ecosystem and canoeing.',
    latitude: 36.4500,
    longitude: -76.7000,
    state: 'north_carolina'
  },
  {
    name: 'Morrow Mountain State Park',
    location: 'Albemarle, NC',
    description: 'Features mountain hiking and lake recreation.',
    latitude: 35.3667,
    longitude: -80.0833,
    state: 'north_carolina'
  },
  {
    name: 'Mount Mitchell State Park',
    location: 'Burnsville, NC',
    description: 'Features the highest peak east of the Mississippi River.',
    latitude: 35.7667,
    longitude: -82.2667,
    state: 'north_carolina'
  },
  {
    name: 'Mount Jefferson State Natural Area',
    location: 'Jefferson, NC',
    description: 'Features dramatic mountain views and hiking trails.',
    latitude: 36.4000,
    longitude: -81.4667,
    state: 'north_carolina'
  },
  {
    name: 'New River State Park',
    location: 'Jefferson, NC',
    description: 'Features one of the oldest rivers in the world.',
    latitude: 36.4167,
    longitude: -81.4167,
    state: 'north_carolina'
  },
  {
    name: 'Pettigrew State Park',
    location: 'Creswell, NC',
    description: 'Features Lake Phelps and historic sites.',
    latitude: 35.7833,
    longitude: -76.5333,
    state: 'north_carolina'
  },
  {
    name: 'Pilot Mountain State Park',
    location: 'Pinnacle, NC',
    description: 'Features the iconic Pilot Mountain and hiking trails.',
    latitude: 36.3333,
    longitude: -80.4667,
    state: 'north_carolina'
  },
  {
    name: 'Raven Rock State Park',
    location: 'Lillington, NC',
    description: 'Features dramatic rock formations along the Cape Fear River.',
    latitude: 35.4667,
    longitude: -78.9000,
    state: 'north_carolina'
  },
  {
    name: 'Singletary Lake State Park',
    location: 'Kelly, NC',
    description: 'Features a unique Carolina bay lake.',
    latitude: 34.5833,
    longitude: -78.4500,
    state: 'north_carolina'
  },
  {
    name: 'South Mountains State Park',
    location: 'Connelly Springs, NC',
    description: 'Features waterfalls and rugged mountain terrain.',
    latitude: 35.5833,
    longitude: -81.6167,
    state: 'north_carolina'
  },
  {
    name: 'Stone Mountain State Park',
    location: 'Roaring Gap, NC',
    description: 'Features dramatic granite dome and waterfalls.',
    latitude: 36.3833,
    longitude: -81.0333,
    state: 'north_carolina'
  },
  {
    name: 'William B. Umstead State Park',
    location: 'Raleigh, NC',
    description: 'Features extensive hiking trails near Raleigh.',
    latitude: 35.8833,
    longitude: -78.7500,
    state: 'north_carolina'
  },
  {
    name: 'Weaverville State Park',
    location: 'Weaverville, NC',
    description: 'Features lake recreation and mountain views.',
    latitude: 35.7000,
    longitude: -82.5500,
    state: 'north_carolina'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    
    for (const park of northCarolinaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    
    console.log('All North Carolina parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 