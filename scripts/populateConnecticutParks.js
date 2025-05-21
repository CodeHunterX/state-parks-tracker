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

const connecticutParks = [
  {
    name: 'Above All State Park',
    location: 'Warren, CT',
    description: 'Undeveloped site with Cold War defense installation remnants.',
    latitude: 41.7333,
    longitude: -73.3500,
    state: 'connecticut'
  },
  {
    name: 'Auerfarm State Park Scenic Reserve',
    location: 'Bloomfield, CT',
    description: 'Farmland gifted to state with scenic views.',
    latitude: 41.8500,
    longitude: -72.7333,
    state: 'connecticut'
  },
  {
    name: 'Beaver Brook State Park',
    location: 'Chaplin, CT',
    description: 'Features Bibbins Pond, fishing, and hiking trails.',
    latitude: 41.8000,
    longitude: -72.1333,
    state: 'connecticut'
  },
  {
    name: 'Becket Hill State Park Reserve',
    location: 'Lyme, CT',
    description: 'Features Uncas Pond and hiking trails.',
    latitude: 41.3833,
    longitude: -72.3500,
    state: 'connecticut'
  },
  {
    name: 'Beckley Furnace Industrial Monument',
    location: 'North Canaan, CT',
    description: 'Historic iron-making furnace dating from 1847.',
    latitude: 42.0167,
    longitude: -73.3333,
    state: 'connecticut'
  },
  {
    name: 'Bennett\'s Pond State Park',
    location: 'Ridgefield, CT',
    description: 'Former estate and nursery called Outpost Farm.',
    latitude: 41.3167,
    longitude: -73.5000,
    state: 'connecticut'
  },
  {
    name: 'Bigelow Hollow State Park',
    location: 'Union, CT',
    description: 'Features Bigelow Pond, Mashapaug Lake, boat launch, and swimming.',
    latitude: 42.0167,
    longitude: -72.1500,
    state: 'connecticut'
  },
  {
    name: 'Black Rock State Park',
    location: 'Watertown, CT',
    description: 'Features camping, pond fishing, and Mattatuck Trail.',
    latitude: 41.6167,
    longitude: -73.1167,
    state: 'connecticut'
  },
  {
    name: 'Bluff Point State Park',
    location: 'Groton, CT',
    description: 'Coastal park with Long Island Sound access.',
    latitude: 41.3167,
    longitude: -72.0333,
    state: 'connecticut'
  },
  {
    name: 'Bolton Notch State Park',
    location: 'Bolton, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.7667,
    longitude: -72.4333,
    state: 'connecticut'
  },
  {
    name: 'Brainard Homestead State Park',
    location: 'East Haddam, CT',
    description: 'Historic homestead with hiking trails.',
    latitude: 41.4667,
    longitude: -72.4667,
    state: 'connecticut'
  },
  {
    name: 'Burr Pond State Park',
    location: 'Torrington, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.8167,
    longitude: -73.1333,
    state: 'connecticut'
  },
  {
    name: 'Camp Columbia State Park',
    location: 'Morris, CT',
    description: 'Historic site with hiking trails.',
    latitude: 41.6833,
    longitude: -73.2000,
    state: 'connecticut'
  },
  {
    name: 'Campbell Falls State Park',
    location: 'Norfolk, CT',
    description: 'Features scenic waterfall and hiking trails.',
    latitude: 42.0333,
    longitude: -73.4833,
    state: 'connecticut'
  },
  {
    name: 'Chatfield Hollow State Park',
    location: 'Killingworth, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.3667,
    longitude: -72.5833,
    state: 'connecticut'
  },
  {
    name: 'Collis P. Huntington State Park',
    location: 'Redding, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.3000,
    longitude: -73.3833,
    state: 'connecticut'
  },
  {
    name: 'Day Pond State Park',
    location: 'Colchester, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.5667,
    longitude: -72.4333,
    state: 'connecticut'
  },
  {
    name: 'Dennis Hill State Park',
    location: 'Norfolk, CT',
    description: 'Features scenic views and hiking trails.',
    latitude: 41.9667,
    longitude: -73.2000,
    state: 'connecticut'
  },
  {
    name: 'Devil\'s Hopyard State Park',
    location: 'East Haddam, CT',
    description: 'Features scenic waterfall and hiking trails.',
    latitude: 41.4667,
    longitude: -72.3500,
    state: 'connecticut'
  },
  {
    name: 'Dinosaur State Park',
    location: 'Rocky Hill, CT',
    description: 'Features dinosaur tracks and museum.',
    latitude: 41.6333,
    longitude: -72.6500,
    state: 'connecticut'
  },
  {
    name: 'Eagle Landing State Park',
    location: 'Haddam, CT',
    description: 'Features Connecticut River access and hiking trails.',
    latitude: 41.4667,
    longitude: -72.5167,
    state: 'connecticut'
  },
  {
    name: 'Fort Griswold Battlefield State Park',
    location: 'Groton, CT',
    description: 'Historic Revolutionary War battlefield.',
    latitude: 41.3500,
    longitude: -72.0833,
    state: 'connecticut'
  },
  {
    name: 'Fort Trumbull State Park',
    location: 'New London, CT',
    description: 'Historic fort with museum and scenic views.',
    latitude: 41.3500,
    longitude: -72.0833,
    state: 'connecticut'
  },
  {
    name: 'Gardner Lake State Park',
    location: 'Salem, CT',
    description: 'Features swimming, fishing, and boating.',
    latitude: 41.4833,
    longitude: -72.2333,
    state: 'connecticut'
  },
  {
    name: 'Gay City State Park',
    location: 'Hebron, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.6500,
    longitude: -72.4333,
    state: 'connecticut'
  },
  {
    name: 'George Dudley Seymour State Park',
    location: 'Haddam, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.4667,
    longitude: -72.5167,
    state: 'connecticut'
  },
  {
    name: 'Gillette Castle State Park',
    location: 'East Haddam, CT',
    description: 'Features historic castle and scenic views.',
    latitude: 41.4167,
    longitude: -72.4333,
    state: 'connecticut'
  },
  {
    name: 'Haddam Island State Park',
    location: 'Haddam, CT',
    description: 'Island park accessible by boat.',
    latitude: 41.4667,
    longitude: -72.5167,
    state: 'connecticut'
  },
  {
    name: 'Haddam Meadows State Park',
    location: 'Haddam, CT',
    description: 'Features Connecticut River access and hiking trails.',
    latitude: 41.4667,
    longitude: -72.5167,
    state: 'connecticut'
  },
  {
    name: 'Hammonasset Beach State Park',
    location: 'Madison, CT',
    description: 'Features beach access, camping, and hiking trails.',
    latitude: 41.2667,
    longitude: -72.5500,
    state: 'connecticut'
  },
  {
    name: 'Haystack Mountain State Park',
    location: 'Norfolk, CT',
    description: 'Features scenic views and hiking trails.',
    latitude: 41.9667,
    longitude: -73.2000,
    state: 'connecticut'
  },
  {
    name: 'Higganum Reservoir State Park',
    location: 'Haddam, CT',
    description: 'Features fishing and hiking trails.',
    latitude: 41.4667,
    longitude: -72.5167,
    state: 'connecticut'
  },
  {
    name: 'Housatonic Meadows State Park',
    location: 'Sharon, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.8500,
    longitude: -73.3667,
    state: 'connecticut'
  },
  {
    name: 'Hurd State Park',
    location: 'East Haddam, CT',
    description: 'Features Connecticut River access and hiking trails.',
    latitude: 41.4667,
    longitude: -72.4667,
    state: 'connecticut'
  },
  {
    name: 'Indian Well State Park',
    location: 'Shelton, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.3167,
    longitude: -73.1167,
    state: 'connecticut'
  },
  {
    name: 'James L. Goodwin State Forest',
    location: 'Hampton, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.7667,
    longitude: -72.0667,
    state: 'connecticut'
  },
  {
    name: 'Kent Falls State Park',
    location: 'Kent, CT',
    description: 'Features scenic waterfall and hiking trails.',
    latitude: 41.7667,
    longitude: -73.4000,
    state: 'connecticut'
  },
  {
    name: 'Kettletown State Park',
    location: 'Southbury, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.4667,
    longitude: -73.2167,
    state: 'connecticut'
  },
  {
    name: 'Lake Waramaug State Park',
    location: 'New Preston, CT',
    description: 'Features swimming, fishing, and camping.',
    latitude: 41.7000,
    longitude: -73.3667,
    state: 'connecticut'
  },
  {
    name: 'Lovers Leap State Park',
    location: 'New Milford, CT',
    description: 'Features scenic views and hiking trails.',
    latitude: 41.5833,
    longitude: -73.4167,
    state: 'connecticut'
  },
  {
    name: 'Macedonia Brook State Park',
    location: 'Kent, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.7667,
    longitude: -73.4833,
    state: 'connecticut'
  },
  {
    name: 'Machimoodus State Park',
    location: 'East Haddam, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.4667,
    longitude: -72.4667,
    state: 'connecticut'
  },
  {
    name: 'Mansfield Hollow State Park',
    location: 'Mansfield, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.7667,
    longitude: -72.2333,
    state: 'connecticut'
  },
  {
    name: 'Mashamoquet Brook State Park',
    location: 'Pomfret, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.8833,
    longitude: -71.9667,
    state: 'connecticut'
  },
  {
    name: 'Mianus River State Park',
    location: 'Stamford, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.1167,
    longitude: -73.5667,
    state: 'connecticut'
  },
  {
    name: 'Millers Pond State Park',
    location: 'Durham, CT',
    description: 'Features fishing and hiking trails.',
    latitude: 41.4667,
    longitude: -72.6833,
    state: 'connecticut'
  },
  {
    name: 'Mohawk Mountain State Park',
    location: 'Cornwall, CT',
    description: 'Features scenic views and hiking trails.',
    latitude: 41.8333,
    longitude: -73.3167,
    state: 'connecticut'
  },
  {
    name: 'Mohegan State Park',
    location: 'Montville, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.4667,
    longitude: -72.1167,
    state: 'connecticut'
  },
  {
    name: 'Mono Pond State Park',
    location: 'Columbia, CT',
    description: 'Features fishing and hiking trails.',
    latitude: 41.7000,
    longitude: -72.3000,
    state: 'connecticut'
  },
  {
    name: 'Moosup Valley State Park Trail',
    location: 'Plainfield, CT',
    description: 'Features hiking and biking trails.',
    latitude: 41.6667,
    longitude: -71.9000,
    state: 'connecticut'
  },
  {
    name: 'Mount Tom State Park',
    location: 'Litchfield, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.7000,
    longitude: -73.2167,
    state: 'connecticut'
  },
  {
    name: 'Natchaug State Forest',
    location: 'Eastford, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.8833,
    longitude: -72.1167,
    state: 'connecticut'
  },
  {
    name: 'Nathan Hale State Forest',
    location: 'Coventry, CT',
    description: 'Features hiking trails and historic sites.',
    latitude: 41.7833,
    longitude: -72.3333,
    state: 'connecticut'
  },
  {
    name: 'Natchaug State Park',
    location: 'Eastford, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.8833,
    longitude: -72.1167,
    state: 'connecticut'
  },
  {
    name: 'Nepaug State Forest',
    location: 'New Hartford, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.8333,
    longitude: -72.9667,
    state: 'connecticut'
  },
  {
    name: 'Nod Brook State Park',
    location: 'Avon, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.8167,
    longitude: -72.8667,
    state: 'connecticut'
  },
  {
    name: 'Nye-Holman State Forest',
    location: 'Canterbury, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.7000,
    longitude: -72.0000,
    state: 'connecticut'
  },
  {
    name: 'Osbornedale State Park',
    location: 'Derby, CT',
    description: 'Features hiking trails and historic sites.',
    latitude: 41.3167,
    longitude: -73.0833,
    state: 'connecticut'
  },
  {
    name: 'Pachaug State Forest',
    location: 'Voluntown, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.5667,
    longitude: -71.8333,
    state: 'connecticut'
  },
  {
    name: 'Paugnut State Forest',
    location: 'Torrington, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.8167,
    longitude: -73.1167,
    state: 'connecticut'
  },
  {
    name: 'Paugussett State Forest',
    location: 'Newtown, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.4167,
    longitude: -73.3000,
    state: 'connecticut'
  },
  {
    name: 'Peoples State Forest',
    location: 'Barkhamsted, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.9167,
    longitude: -72.9667,
    state: 'connecticut'
  },
  {
    name: 'Pootatuck State Forest',
    location: 'New Fairfield, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.4667,
    longitude: -73.4833,
    state: 'connecticut'
  },
  {
    name: 'Putnam Memorial State Park',
    location: 'Redding, CT',
    description: 'Features historic Revolutionary War sites.',
    latitude: 41.3000,
    longitude: -73.3833,
    state: 'connecticut'
  },
  {
    name: 'Quaddick State Park',
    location: 'Thompson, CT',
    description: 'Features swimming, fishing, and camping.',
    latitude: 41.9667,
    longitude: -71.8167,
    state: 'connecticut'
  },
  {
    name: 'Quinebaug Lake State Park',
    location: 'Eastford, CT',
    description: 'Features swimming, fishing, and camping.',
    latitude: 41.8833,
    longitude: -72.1167,
    state: 'connecticut'
  },
  {
    name: 'Quinnipiac River State Park',
    location: 'North Haven, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.3833,
    longitude: -72.8667,
    state: 'connecticut'
  },
  {
    name: 'River Highlands State Park',
    location: 'Cromwell, CT',
    description: 'Features Connecticut River access and hiking trails.',
    latitude: 41.6167,
    longitude: -72.6500,
    state: 'connecticut'
  },
  {
    name: 'Rocky Neck State Park',
    location: 'East Lyme, CT',
    description: 'Features beach access, camping, and hiking trails.',
    latitude: 41.3167,
    longitude: -72.2333,
    state: 'connecticut'
  },
  {
    name: 'Roraback State Forest',
    location: 'Canaan, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.9667,
    longitude: -73.3167,
    state: 'connecticut'
  },
  {
    name: 'Salt Rock State Campground',
    location: 'Baltic, CT',
    description: 'Features camping and hiking trails.',
    latitude: 41.6167,
    longitude: -72.0833,
    state: 'connecticut'
  },
  {
    name: 'Shenipsit State Forest',
    location: 'Stafford, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.9667,
    longitude: -72.3167,
    state: 'connecticut'
  },
  {
    name: 'Sherwood Island State Park',
    location: 'Westport, CT',
    description: 'Features beach access and hiking trails.',
    latitude: 41.1167,
    longitude: -73.3167,
    state: 'connecticut'
  },
  {
    name: 'Silver Sands State Park',
    location: 'Milford, CT',
    description: 'Features beach access and hiking trails.',
    latitude: 41.2167,
    longitude: -73.0667,
    state: 'connecticut'
  },
  {
    name: 'Sleeping Giant State Park',
    location: 'Hamden, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.4167,
    longitude: -72.8833,
    state: 'connecticut'
  },
  {
    name: 'Southford Falls State Park',
    location: 'Southbury, CT',
    description: 'Features scenic waterfall and hiking trails.',
    latitude: 41.4667,
    longitude: -73.2167,
    state: 'connecticut'
  },
  {
    name: 'Squantz Pond State Park',
    location: 'New Fairfield, CT',
    description: 'Features swimming, fishing, and hiking trails.',
    latitude: 41.4667,
    longitude: -73.4833,
    state: 'connecticut'
  },
  {
    name: 'Stratton Brook State Park',
    location: 'Simsbury, CT',
    description: 'Features swimming and hiking trails.',
    latitude: 41.8667,
    longitude: -72.8167,
    state: 'connecticut'
  },
  {
    name: 'Sunnybrook State Park',
    location: 'Torrington, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.8167,
    longitude: -73.1167,
    state: 'connecticut'
  },
  {
    name: 'Talcott Mountain State Park',
    location: 'Simsbury, CT',
    description: 'Features Heublein Tower and scenic views.',
    latitude: 41.8333,
    longitude: -72.8167,
    state: 'connecticut'
  },
  {
    name: 'Topsmead State Forest',
    location: 'Litchfield, CT',
    description: 'Features historic estate and hiking trails.',
    latitude: 41.7333,
    longitude: -73.2167,
    state: 'connecticut'
  },
  {
    name: 'Wadsworth Falls State Park',
    location: 'Middletown, CT',
    description: 'Features scenic waterfall and hiking trails.',
    latitude: 41.5167,
    longitude: -72.6500,
    state: 'connecticut'
  },
  {
    name: 'West Rock Ridge State Park',
    location: 'New Haven, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.3500,
    longitude: -72.9667,
    state: 'connecticut'
  },
  {
    name: 'Wharton Brook State Park',
    location: 'North Haven, CT',
    description: 'Features swimming and hiking trails.',
    latitude: 41.3833,
    longitude: -72.8667,
    state: 'connecticut'
  },
  {
    name: 'Whittemore Glen State Park',
    location: 'Naugatuck, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.4833,
    longitude: -73.0500,
    state: 'connecticut'
  },
  {
    name: 'Wolcott State Forest',
    location: 'Wolcott, CT',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.6000,
    longitude: -72.9667,
    state: 'connecticut'
  },
  {
    name: 'Wooster Mountain State Park',
    location: 'Danbury, CT',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.3667,
    longitude: -73.4500,
    state: 'connecticut'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of connecticutParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Connecticut parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 