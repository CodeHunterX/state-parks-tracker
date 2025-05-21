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

const maineParks = [
  {
    name: 'Allagash Wilderness Waterway',
    location: 'Aroostook/Piscataquis Counties, ME',
    description: '92-mile waterway along the Allagash River, offering canoeing, fishing, hunting, and camping.',
    latitude: 46.9667,
    longitude: -69.2000,
    state: 'maine'
  },
  {
    name: 'Androscoggin Riverlands',
    location: 'Turner, ME',
    description: 'Features multi-use trails along 12 miles of Androscoggin River frontage.',
    latitude: 44.2667,
    longitude: -70.2333,
    state: 'maine'
  },
  {
    name: 'Aroostook State Park',
    location: 'Presque Isle, ME',
    description: 'Maine\'s first state park, featuring Echo Lake, swimming, hiking, and camping.',
    latitude: 46.6833,
    longitude: -68.0167,
    state: 'maine'
  },
  {
    name: 'Baxter State Park',
    location: 'Piscataquis County, ME',
    description: 'Home to Mount Katahdin, Maine\'s highest peak, and the northern terminus of the Appalachian Trail.',
    latitude: 45.9000,
    longitude: -68.9333,
    state: 'maine'
  },
  {
    name: 'Birch Point State Park',
    location: 'Owls Head, ME',
    description: 'Features a pocket beach on Penobscot Bay.',
    latitude: 44.0833,
    longitude: -69.0667,
    state: 'maine'
  },
  {
    name: 'Bradbury Mountain State Park',
    location: 'Pownal, ME',
    description: 'Popular destination for mountain biking and hiking.',
    latitude: 43.9000,
    longitude: -70.1833,
    state: 'maine'
  },
  {
    name: 'Camden Hills State Park',
    location: 'Camden/Lincolnville, ME',
    description: 'Features Mount Battie and Mount Megunticook, offering panoramic views of Penobscot Bay.',
    latitude: 44.2167,
    longitude: -69.0500,
    state: 'maine'
  },
  {
    name: 'Cobscook Bay State Park',
    location: 'Edmunds Township, ME',
    description: 'Features dramatic tides and scenic views of Cobscook Bay.',
    latitude: 44.8667,
    longitude: -67.1833,
    state: 'maine'
  },
  {
    name: 'Crescent Beach State Park',
    location: 'Cape Elizabeth, ME',
    description: 'Features a mile-long sandy beach and picnic areas.',
    latitude: 43.5500,
    longitude: -70.2167,
    state: 'maine'
  },
  {
    name: 'Damariscotta Lake State Park',
    location: 'Jefferson, ME',
    description: 'Features swimming, boating, and fishing on Damariscotta Lake.',
    latitude: 44.2000,
    longitude: -69.5000,
    state: 'maine'
  },
  {
    name: 'Eagle Island State Historic Site',
    location: 'Harpswell, ME',
    description: 'Former summer home of Admiral Robert E. Peary, accessible by boat.',
    latitude: 43.7333,
    longitude: -70.0167,
    state: 'maine'
  },
  {
    name: 'Fort Edgecomb State Historic Site',
    location: 'Edgecomb, ME',
    description: 'Historic octagonal blockhouse built in 1808-1809.',
    latitude: 43.9667,
    longitude: -69.6500,
    state: 'maine'
  },
  {
    name: 'Fort Knox State Historic Site',
    location: 'Prospect, ME',
    description: 'Well-preserved 19th-century granite fort with scenic views of the Penobscot River.',
    latitude: 44.5667,
    longitude: -68.8000,
    state: 'maine'
  },
  {
    name: 'Grafton Notch State Park',
    location: 'Newry, ME',
    description: 'Features dramatic mountain scenery, waterfalls, and hiking trails.',
    latitude: 44.5833,
    longitude: -70.9500,
    state: 'maine'
  },
  {
    name: 'Holbrook Island Sanctuary State Park',
    location: 'Brooksville, ME',
    description: 'Features diverse habitats, hiking trails, and scenic views of Penobscot Bay.',
    latitude: 44.3333,
    longitude: -68.7500,
    state: 'maine'
  },
  {
    name: 'Lake St. George State Park',
    location: 'Liberty, ME',
    description: 'Features swimming, boating, and fishing on Lake St. George.',
    latitude: 44.3833,
    longitude: -69.3167,
    state: 'maine'
  },
  {
    name: 'Lily Bay State Park',
    location: 'Beaver Cove, ME',
    description: 'Features camping and scenic views of Moosehead Lake.',
    latitude: 45.5333,
    longitude: -69.5333,
    state: 'maine'
  },
  {
    name: 'Moose Point State Park',
    location: 'Searsport, ME',
    description: 'Features picnic areas and scenic views of Penobscot Bay.',
    latitude: 44.4500,
    longitude: -68.9167,
    state: 'maine'
  },
  {
    name: 'Mount Blue State Park',
    location: 'Weld, ME',
    description: 'Features hiking trails to the summit of Mount Blue and Webb Lake.',
    latitude: 44.7000,
    longitude: -70.4167,
    state: 'maine'
  },
  {
    name: 'Owls Head Light State Park',
    location: 'Owls Head, ME',
    description: 'Features a historic lighthouse and scenic views of Penobscot Bay.',
    latitude: 44.0833,
    longitude: -69.0500,
    state: 'maine'
  },
  {
    name: 'Peacock Beach State Park',
    location: 'Richmond, ME',
    description: 'Features swimming and picnicking on the Kennebec River.',
    latitude: 44.1000,
    longitude: -69.8000,
    state: 'maine'
  },
  {
    name: 'Popham Beach State Park',
    location: 'Phippsburg, ME',
    description: 'Features a long sandy beach and historic Fort Popham.',
    latitude: 43.7500,
    longitude: -69.7833,
    state: 'maine'
  },
  {
    name: 'Quoddy Head State Park',
    location: 'Lubec, ME',
    description: 'Features the easternmost point in the United States and West Quoddy Head Light.',
    latitude: 44.8167,
    longitude: -66.9500,
    state: 'maine'
  },
  {
    name: 'Rangeley Lake State Park',
    location: 'Rangeley, ME',
    description: 'Features camping and scenic views of Rangeley Lake.',
    latitude: 44.9667,
    longitude: -70.6500,
    state: 'maine'
  },
  {
    name: 'Reid State Park',
    location: 'Georgetown, ME',
    description: 'Features sandy beaches, saltwater lagoon, and hiking trails.',
    latitude: 43.7833,
    longitude: -69.7167,
    state: 'maine'
  },
  {
    name: 'Roque Bluffs State Park',
    location: 'Roque Bluffs, ME',
    description: 'Features a freshwater pond and ocean beach.',
    latitude: 44.6167,
    longitude: -67.4667,
    state: 'maine'
  },
  {
    name: 'Sebago Lake State Park',
    location: 'Naples, ME',
    description: 'Features camping, swimming, and boating on Maine\'s second-largest lake.',
    latitude: 43.8667,
    longitude: -70.5167,
    state: 'maine'
  },
  {
    name: 'Swan Lake State Park',
    location: 'Swanville, ME',
    description: 'Features swimming and picnicking on Swan Lake.',
    latitude: 44.5167,
    longitude: -68.9833,
    state: 'maine'
  },
  {
    name: 'Two Lights State Park',
    location: 'Cape Elizabeth, ME',
    description: 'Features rocky coastline and scenic views of Casco Bay.',
    latitude: 43.5500,
    longitude: -70.2000,
    state: 'maine'
  },
  {
    name: 'Vaughan Woods State Park',
    location: 'Hallowell, ME',
    description: 'Features hiking trails along the Salmon Falls River.',
    latitude: 44.2833,
    longitude: -69.7833,
    state: 'maine'
  },
  {
    name: 'Warren Island State Park',
    location: 'Isleboro, ME',
    description: 'Island park accessible by boat, featuring camping and hiking.',
    latitude: 44.2833,
    longitude: -68.9000,
    state: 'maine'
  },
  {
    name: 'Wolfe\'s Neck Woods State Park',
    location: 'Freeport, ME',
    description: 'Features hiking trails and scenic views of Casco Bay.',
    latitude: 43.8333,
    longitude: -70.0667,
    state: 'maine'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of maineParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Maine parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 