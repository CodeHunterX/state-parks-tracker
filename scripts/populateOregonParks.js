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

const oregonParks = [
  {
    name: "Lake Owyhee State Park",
    description: "Features dramatic canyon scenery and reservoir recreation.",
    location: "Ontario, OR",
    latitude: 43.64,
    longitude: -117.24,
    state: "oregon"
  },
  {
    name: "Catherine Creek State Park",
    description: "Features scenic canyon views and hiking trails.",
    location: "Union, OR",
    latitude: 45.22,
    longitude: -117.86,
    state: "oregon"
  },
  {
    name: "Hat Rock State Park",
    description: "Features unique rock formation and river recreation.",
    location: "Hermiston, OR",
    latitude: 45.92,
    longitude: -119.17,
    state: "oregon"
  },
  {
    name: "The Cove Palisades State Park",
    description: "Features dramatic canyon views and lake recreation.",
    location: "Culver, OR",
    latitude: 44.57,
    longitude: -121.27,
    state: "oregon"
  },
  {
    name: "Prineville Reservoir State Park",
    description: "Features reservoir recreation and scenic views.",
    location: "Prineville, OR",
    latitude: 44.15,
    longitude: -120.85,
    state: "oregon"
  },
  {
    name: "White River Falls State Park",
    description: "Features dramatic waterfall and historic power plant.",
    location: "Tygh Valley, OR",
    latitude: 45.25,
    longitude: -121.15,
    state: "oregon"
  },
  {
    name: "La Pine State Park",
    description: "Features river recreation and forest camping.",
    location: "La Pine, OR",
    latitude: 43.67,
    longitude: -121.53,
    state: "oregon"
  },
  {
    name: "Tumalo State Park",
    description: "Features river recreation and mountain views.",
    location: "Bend, OR",
    latitude: 44.15,
    longitude: -121.33,
    state: "oregon"
  },
  {
    name: "Smith Rock State Park",
    description: "Features dramatic rock formations and world-class rock climbing.",
    location: "Terrebonne, OR",
    latitude: 44.37,
    longitude: -121.14,
    state: "oregon"
  },
  {
    name: "Humbug Mountain State Park",
    description: "Features coastal forest and beach access.",
    location: "Port Orford, OR",
    latitude: 42.69,
    longitude: -124.42,
    state: "oregon"
  },
  {
    name: "Port Orford Heads State Park",
    description: "Features historic Coast Guard station and scenic views.",
    location: "Port Orford, OR",
    latitude: 42.74,
    longitude: -124.50,
    state: "oregon"
  },
  {
    name: "Cape Blanco State Park",
    description: "Features historic lighthouse and scenic coastal views.",
    location: "Sixes, OR",
    latitude: 42.84,
    longitude: -124.56,
    state: "oregon"
  },
  {
    name: "Bullards Beach State Park",
    description: "Features beach recreation and historic lighthouse.",
    location: "Bandon, OR",
    latitude: 43.12,
    longitude: -124.42,
    state: "oregon"
  },
  {
    name: "Alfred A. Loeb State Park",
    description: "Features myrtlewood forest and river recreation.",
    location: "Brookings, OR",
    latitude: 42.09,
    longitude: -124.12,
    state: "oregon"
  },
  {
    name: "Elijah Bristow State Park",
    description: "Features river recreation and forest trails.",
    location: "Eugene, OR",
    latitude: 43.92,
    longitude: -122.87,
    state: "oregon"
  },
  {
    name: "Cape Arago State Park",
    description: "Features dramatic coastal views and marine life viewing.",
    location: "Coos Bay, OR",
    latitude: 43.30,
    longitude: -124.40,
    state: "oregon"
  },
  {
    name: "Shore Acres State Park",
    description: "Features formal gardens and dramatic coastal views.",
    location: "Coos Bay, OR",
    latitude: 43.32,
    longitude: -124.38,
    state: "oregon"
  },
  {
    name: "William M. Tugman State Park",
    description: "Features lake recreation and coastal forest.",
    location: "Lakeside, OR",
    latitude: 43.58,
    longitude: -124.17,
    state: "oregon"
  },
  {
    name: "Sunset Bay State Park",
    description: "Features protected beach and scenic coastal views.",
    location: "Coos Bay, OR",
    latitude: 43.33,
    longitude: -124.37,
    state: "oregon"
  },
  {
    name: "Illinois River Forks State Park",
    description: "Features river recreation and forest trails.",
    location: "Cave Junction, OR",
    latitude: 42.15,
    longitude: -123.65,
    state: "oregon"
  },
  {
    name: "Molalla River State Park",
    description: "Features river recreation and forest trails.",
    location: "Canby, OR",
    latitude: 45.25,
    longitude: -122.65,
    state: "oregon"
  },
  {
    name: "Beaver Creek State Natural Area",
    description: "Features coastal forest and wildlife viewing.",
    location: "Waldport, OR",
    latitude: 44.42,
    longitude: -124.07,
    state: "oregon"
  },
  {
    name: "Umpqua Lighthouse State Park",
    description: "Features historic lighthouse and scenic coastal views.",
    location: "Winchester Bay, OR",
    latitude: 43.80,
    longitude: -124.11,
    state: "oregon"
  },
  {
    name: "Carl G. Washburne Memorial State Park",
    description: "Features beach access and forest camping.",
    location: "Florence, OR",
    latitude: 44.17,
    longitude: -124.11,
    state: "oregon"
  },
  {
    name: "Jessie M. Honeyman Memorial State Park",
    description: "Features sand dunes and lake recreation.",
    location: "Florence, OR",
    latitude: 43.92,
    longitude: -124.11,
    state: "oregon"
  },
  {
    name: "Willamette Mission State Park",
    description: "Features historic mission site and river recreation.",
    location: "Salem, OR",
    latitude: 45.10,
    longitude: -123.00,
    state: "oregon"
  },
  {
    name: "Milo McIver State Park",
    description: "Features river recreation and forest trails.",
    location: "Estacada, OR",
    latitude: 45.32,
    longitude: -122.25,
    state: "oregon"
  },
  {
    name: "Ainsworth State Park",
    description: "Features scenic gorge views and waterfall access.",
    location: "Cascade Locks, OR",
    latitude: 45.55,
    longitude: -122.08,
    state: "oregon"
  },
  {
    name: "Guy W. Talbot State Park",
    description: "Features scenic waterfall and forest trails.",
    location: "Troutdale, OR",
    latitude: 45.55,
    longitude: -122.15,
    state: "oregon"
  },
  {
    name: "Mayer State Park",
    description: "Features scenic gorge views and river recreation.",
    location: "Rowena, OR",
    latitude: 45.67,
    longitude: -121.30,
    state: "oregon"
  },
  {
    name: "Memaloose State Park",
    description: "Features scenic gorge views and river recreation.",
    location: "The Dalles, OR",
    latitude: 45.70,
    longitude: -121.33,
    state: "oregon"
  },
  {
    name: "Starvation Creek State Park",
    description: "Features scenic waterfall and gorge views.",
    location: "Cascade Locks, OR",
    latitude: 45.68,
    longitude: -121.70,
    state: "oregon"
  },
  {
    name: "Viento State Park",
    description: "Features scenic gorge views and river recreation.",
    location: "Hood River, OR",
    latitude: 45.68,
    longitude: -121.77,
    state: "oregon"
  },
  {
    name: "Rooster Rock State Park",
    description: "Features scenic gorge views and river recreation.",
    location: "Troutdale, OR",
    latitude: 45.55,
    longitude: -122.25,
    state: "oregon"
  },
  {
    name: "Fort Stevens State Park",
    description: "Features historic military fort and beach recreation.",
    location: "Astoria, OR",
    latitude: 46.20,
    longitude: -123.96,
    state: "oregon"
  },
  {
    name: "Bob Straub State Park",
    description: "Features beach recreation and scenic coastal views.",
    location: "Pacific City, OR",
    latitude: 45.20,
    longitude: -123.96,
    state: "oregon"
  },
  {
    name: "Cape Lookout State Park",
    description: "Features dramatic coastal views and beach recreation.",
    location: "Tillamook, OR",
    latitude: 45.35,
    longitude: -123.97,
    state: "oregon"
  },
  {
    name: "Ecola State Park",
    description: "Features dramatic coastal views and beach access.",
    location: "Cannon Beach, OR",
    latitude: 45.92,
    longitude: -123.97,
    state: "oregon"
  },
  {
    name: "Oswald West State Park",
    description: "Features scenic coastal views and forest trails.",
    location: "Manzanita, OR",
    latitude: 45.75,
    longitude: -123.97,
    state: "oregon"
  },
  {
    name: "Nehalem Bay State Park",
    description: "Features beach recreation and bay views.",
    location: "Manzanita, OR",
    latitude: 45.70,
    longitude: -123.93,
    state: "oregon"
  },
  {
    name: "Ona Beach State Park",
    description: "Features beach recreation and river access.",
    location: "Newport, OR",
    latitude: 44.52,
    longitude: -124.07,
    state: "oregon"
  },
  {
    name: "South Beach State Park",
    description: "Features beach recreation and scenic coastal views.",
    location: "Newport, OR",
    latitude: 44.58,
    longitude: -124.07,
    state: "oregon"
  },
  {
    name: "Cascadia State Park",
    description: "Features scenic waterfall and forest trails.",
    location: "Sweet Home, OR",
    latitude: 44.40,
    longitude: -122.48,
    state: "oregon"
  },
  {
    name: "Silver Falls State Park",
    description: "Features dramatic waterfalls and forest trails.",
    location: "Silverton, OR",
    latitude: 44.88,
    longitude: -122.65,
    state: "oregon"
  },
  {
    name: "Beverly Beach State Park",
    description: "Features beach recreation and scenic coastal views.",
    location: "Newport, OR",
    latitude: 44.72,
    longitude: -124.07,
    state: "oregon"
  },
  {
    name: "Collier Memorial State Park",
    description: "Features historic logging museum and forest trails.",
    location: "Chiloquin, OR",
    latitude: 42.57,
    longitude: -121.87,
    state: "oregon"
  },
  {
    name: "L. L. 'Stub' Stewart State Park",
    description: "Features forest recreation and mountain biking trails.",
    location: "Banks, OR",
    latitude: 45.70,
    longitude: -123.20,
    state: "oregon"
  },
  {
    name: "State Capitol State Park",
    description: "Features historic capitol building and formal gardens.",
    location: "Salem, OR",
    latitude: 44.94,
    longitude: -123.03,
    state: "oregon"
  },
  {
    name: "Bates State Park",
    description: "Features historic logging town and forest trails.",
    location: "Prairie City, OR",
    latitude: 44.45,
    longitude: -118.70,
    state: "oregon"
  },
  {
    name: "Cottonwood Canyon State Park",
    description: "Features dramatic canyon scenery and river recreation.",
    location: "Wasco, OR",
    latitude: 45.10,
    longitude: -120.35,
    state: "oregon"
  }
];

async function populateOregonParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of oregonParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Oregon parks have been added to the database');
  } catch (error) {
    console.error('Error adding Oregon parks:', error);
  }
}

populateOregonParks(); 