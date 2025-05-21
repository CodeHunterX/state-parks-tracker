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

const newHampshireParks = [
  {
    name: 'Bear Brook State Park',
    location: 'Allenstown, NH',
    description: 'Features camping, hiking trails, and a museum.',
    latitude: 43.1167,
    longitude: -71.3833,
    state: 'new_hampshire'
  },
  {
    name: 'Crawford Notch State Park',
    location: 'Hart\'s Location, NH',
    description: 'Features dramatic mountain scenery and hiking trails.',
    latitude: 44.2167,
    longitude: -71.4167,
    state: 'new_hampshire'
  },
  {
    name: 'Echo Lake State Park',
    location: 'North Conway, NH',
    description: 'Features swimming, fishing, and views of Cathedral Ledge.',
    latitude: 44.0667,
    longitude: -71.1167,
    state: 'new_hampshire'
  },
  {
    name: 'Ellacoya State Park',
    location: 'Gilford, NH',
    description: 'Features beach access and swimming on Lake Winnipesaukee.',
    latitude: 43.5500,
    longitude: -71.4000,
    state: 'new_hampshire'
  },
  {
    name: 'Endicott Rock',
    location: 'Laconia, NH',
    description: 'Features historic rock marking the head of navigation on Lake Winnipesaukee.',
    latitude: 43.5167,
    longitude: -71.4667,
    state: 'new_hampshire'
  },
  {
    name: 'Franconia Notch State Park',
    location: 'Franconia, NH',
    description: 'Features the Flume Gorge, Old Man of the Mountain site, and extensive hiking trails.',
    latitude: 44.1333,
    longitude: -71.6833,
    state: 'new_hampshire'
  },
  {
    name: 'Greenfield State Park',
    location: 'Greenfield, NH',
    description: 'Features camping and swimming on Otter Lake.',
    latitude: 42.9500,
    longitude: -71.8833,
    state: 'new_hampshire'
  },
  {
    name: 'Hampton Beach State Park',
    location: 'Hampton, NH',
    description: 'Features beach access and ocean swimming.',
    latitude: 42.9000,
    longitude: -70.8167,
    state: 'new_hampshire'
  },
  {
    name: 'Kingston State Park',
    location: 'Kingston, NH',
    description: 'Features swimming and picnicking on Great Pond.',
    latitude: 42.9167,
    longitude: -71.0667,
    state: 'new_hampshire'
  },
  {
    name: 'Lafayette Place',
    location: 'Lincoln, NH',
    description: 'Features camping and access to Franconia Ridge trails.',
    latitude: 44.1500,
    longitude: -71.6833,
    state: 'new_hampshire'
  },
  {
    name: 'Madison Boulder Natural Area',
    location: 'Madison, NH',
    description: 'Features one of the largest glacial erratics in North America.',
    latitude: 43.9000,
    longitude: -71.1500,
    state: 'new_hampshire'
  },
  {
    name: 'Milan Hill State Park',
    location: 'Milan, NH',
    description: 'Features camping and scenic views.',
    latitude: 44.5833,
    longitude: -71.1833,
    state: 'new_hampshire'
  },
  {
    name: 'Miller State Park',
    location: 'Peterborough, NH',
    description: 'Features Pack Monadnock Mountain and scenic views.',
    latitude: 42.8500,
    longitude: -71.8833,
    state: 'new_hampshire'
  },
  {
    name: 'Mollidgewock State Park',
    location: 'Errol, NH',
    description: 'Features camping and access to the Androscoggin River.',
    latitude: 44.7833,
    longitude: -71.1333,
    state: 'new_hampshire'
  },
  {
    name: 'Monadnock State Park',
    location: 'Jaffrey, NH',
    description: 'Features Mount Monadnock, one of the most climbed mountains in the world.',
    latitude: 42.8500,
    longitude: -72.1000,
    state: 'new_hampshire'
  },
  {
    name: 'Moores State Park',
    location: 'Lancaster, NH',
    description: 'Features swimming and picnicking on Forest Lake.',
    latitude: 44.4833,
    longitude: -71.5667,
    state: 'new_hampshire'
  },
  {
    name: 'Mount Sunapee State Park',
    location: 'Newbury, NH',
    description: 'Features skiing in winter and hiking trails in summer.',
    latitude: 43.3167,
    longitude: -72.0833,
    state: 'new_hampshire'
  },
  {
    name: 'North Hampton State Beach',
    location: 'North Hampton, NH',
    description: 'Features beach access and ocean swimming.',
    latitude: 42.9667,
    longitude: -70.8167,
    state: 'new_hampshire'
  },
  {
    name: 'Odiorne Point State Park',
    location: 'Rye, NH',
    description: 'Features coastal trails and historic sites.',
    latitude: 43.0333,
    longitude: -70.7167,
    state: 'new_hampshire'
  },
  {
    name: 'Pawtuckaway State Park',
    location: 'Nottingham, NH',
    description: 'Features camping, swimming, and hiking trails.',
    latitude: 43.1167,
    longitude: -71.1833,
    state: 'new_hampshire'
  },
  {
    name: 'Pillsbury State Park',
    location: 'Washington, NH',
    description: 'Features multiple ponds, camping, and hiking trails.',
    latitude: 43.1833,
    longitude: -72.0833,
    state: 'new_hampshire'
  },
  {
    name: 'Pisgah State Park',
    location: 'Winchester, NH',
    description: 'Features hiking trails and scenic views.',
    latitude: 42.7833,
    longitude: -72.4500,
    state: 'new_hampshire'
  },
  {
    name: 'Rhododendron State Park',
    location: 'Fitzwilliam, NH',
    description: 'Features a 16-acre grove of wild rhododendrons.',
    latitude: 42.8833,
    longitude: -72.1167,
    state: 'new_hampshire'
  },
  {
    name: 'Rollins State Park',
    location: 'Warner, NH',
    description: 'Features access to Mount Kearsarge and scenic views.',
    latitude: 43.3833,
    longitude: -71.8500,
    state: 'new_hampshire'
  },
  {
    name: 'Rye Harbor State Park',
    location: 'Rye, NH',
    description: 'Features harbor access and coastal views.',
    latitude: 43.0000,
    longitude: -70.7167,
    state: 'new_hampshire'
  },
  {
    name: 'Sculptured Rocks Natural Area',
    location: 'Groveton, NH',
    description: 'Features unique rock formations carved by the Cockermouth River.',
    latitude: 43.7167,
    longitude: -71.9667,
    state: 'new_hampshire'
  },
  {
    name: 'Silver Lake State Park',
    location: 'Hollis, NH',
    description: 'Features swimming and picnicking on Silver Lake.',
    latitude: 42.7333,
    longitude: -71.5667,
    state: 'new_hampshire'
  },
  {
    name: 'Umbagog Lake State Park',
    location: 'Errol, NH',
    description: 'Features camping and water recreation on Umbagog Lake.',
    latitude: 44.7500,
    longitude: -71.0500,
    state: 'new_hampshire'
  },
  {
    name: 'Wadleigh State Park',
    location: 'Sutton, NH',
    description: 'Features swimming and picnicking on Kezar Lake.',
    latitude: 43.3333,
    longitude: -71.9500,
    state: 'new_hampshire'
  },
  {
    name: 'Wallis Sands State Park',
    location: 'Rye, NH',
    description: 'Features beach access and ocean swimming.',
    latitude: 43.0000,
    longitude: -70.7667,
    state: 'new_hampshire'
  },
  {
    name: 'Wentworth-Coolidge Mansion Historic Site',
    location: 'Portsmouth, NH',
    description: 'Features historic mansion and gardens.',
    latitude: 43.0500,
    longitude: -70.7667,
    state: 'new_hampshire'
  },
  {
    name: 'Wentworth State Park',
    location: 'Wolfeboro, NH',
    description: 'Features camping and swimming on Lake Wentworth.',
    latitude: 43.5833,
    longitude: -71.2000,
    state: 'new_hampshire'
  },
  {
    name: 'White Lake State Park',
    location: 'Tamworth, NH',
    description: 'Features camping and swimming on White Lake.',
    latitude: 43.8500,
    longitude: -71.2000,
    state: 'new_hampshire'
  },
  {
    name: 'Winslow State Park',
    location: 'Wilmot, NH',
    description: 'Features access to Mount Kearsarge and scenic views.',
    latitude: 43.3833,
    longitude: -71.9000,
    state: 'new_hampshire'
  }
];

async function populateNewHampshireParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of newHampshireParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All New Hampshire parks have been added to the database');
  } catch (error) {
    console.error('Error adding New Hampshire parks:', error);
  }
}

populateNewHampshireParks(); 