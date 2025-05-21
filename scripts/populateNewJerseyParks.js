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

const newJerseyParks = [
  {
    name: 'Allaire State Park',
    location: 'Wall Township, NJ',
    description: 'Features the historic Allaire Village, a 19th-century iron-making town, and extensive hiking and biking trails.',
    latitude: 40.1583,
    longitude: -74.1167,
    state: 'new jersey'
  },
  {
    name: 'Allamuchy Mountain State Park',
    location: 'Allamuchy Township, NJ',
    description: 'Features extensive hiking and mountain biking trails through the Kittatinny Mountains.',
    latitude: 40.9167,
    longitude: -74.8167,
    state: 'new jersey'
  },
  {
    name: 'Barnegat Lighthouse State Park',
    location: 'Barnegat Light, NJ',
    description: 'Features the historic Barnegat Lighthouse and scenic views of the Atlantic Ocean.',
    latitude: 39.7667,
    longitude: -74.1000,
    state: 'new jersey'
  },
  {
    name: 'Bass River State Forest',
    location: 'Bass River Township, NJ',
    description: 'New Jersey\'s first state forest, featuring Lake Absegami and extensive hiking trails.',
    latitude: 39.6000,
    longitude: -74.4500,
    state: 'new jersey'
  },
  {
    name: 'Belleplain State Forest',
    location: 'Woodbine, NJ',
    description: 'Features Lake Nummy, camping, and hiking trails through pine and oak forests.',
    latitude: 39.2667,
    longitude: -74.8667,
    state: 'new jersey'
  },
  {
    name: 'Cape May Point State Park',
    location: 'Cape May Point, NJ',
    description: 'Features the historic Cape May Lighthouse and scenic views of the Atlantic Ocean.',
    latitude: 38.9333,
    longitude: -74.9667,
    state: 'new jersey'
  },
  {
    name: 'Cheesequake State Park',
    location: 'Old Bridge, NJ',
    description: 'Features diverse habitats including salt marsh, freshwater swamp, and upland forest.',
    latitude: 40.4333,
    longitude: -74.2667,
    state: 'new jersey'
  },
  {
    name: 'Corson\'s Inlet State Park',
    location: 'Ocean City, NJ',
    description: 'Features undeveloped beach and dune habitat along the Atlantic Ocean.',
    latitude: 39.2167,
    longitude: -74.6333,
    state: 'new jersey'
  },
  {
    name: 'Delaware and Raritan Canal State Park',
    location: 'Multiple locations, NJ',
    description: 'Features a historic canal towpath for hiking, biking, and horseback riding.',
    latitude: 40.3167,
    longitude: -74.7667,
    state: 'new jersey'
  },
  {
    name: 'Double Trouble State Park',
    location: 'Lacey Township, NJ',
    description: 'Features a historic cranberry farm and village in the Pine Barrens.',
    latitude: 39.8833,
    longitude: -74.2167,
    state: 'new jersey'
  },
  {
    name: 'Farny State Park',
    location: 'Rockaway Township, NJ',
    description: 'Features hiking trails and scenic views in the Highlands region.',
    latitude: 40.9667,
    longitude: -74.5167,
    state: 'new jersey'
  },
  {
    name: 'Fort Mott State Park',
    location: 'Pennsville, NJ',
    description: 'Features a historic coastal defense fort with views of the Delaware River.',
    latitude: 39.6000,
    longitude: -75.5500,
    state: 'new jersey'
  },
  {
    name: 'Hacklebarney State Park',
    location: 'Chester Township, NJ',
    description: 'Features scenic Black River gorge, waterfalls, and hiking trails.',
    latitude: 40.7333,
    longitude: -74.7167,
    state: 'new jersey'
  },
  {
    name: 'High Point State Park',
    location: 'Sussex, NJ',
    description: 'Features New Jersey\'s highest point and the High Point Monument.',
    latitude: 41.3167,
    longitude: -74.6667,
    state: 'new jersey'
  },
  {
    name: 'Hopatcong State Park',
    location: 'Landing, NJ',
    description: 'Features swimming, boating, and fishing on Lake Hopatcong.',
    latitude: 40.9167,
    longitude: -74.6500,
    state: 'new jersey'
  },
  {
    name: 'Island Beach State Park',
    location: 'Berkeley Township, NJ',
    description: 'Features 10 miles of undeveloped barrier island beach and dunes.',
    latitude: 39.8167,
    longitude: -74.0833,
    state: 'new jersey'
  },
  {
    name: 'Kittatinny Valley State Park',
    location: 'Andover, NJ',
    description: 'Features glacial lakes, hiking trails, and the historic Waterloo Village.',
    latitude: 41.0167,
    longitude: -74.7333,
    state: 'new jersey'
  },
  {
    name: 'Liberty State Park',
    location: 'Jersey City, NJ',
    description: 'Features views of the Statue of Liberty and Manhattan skyline.',
    latitude: 40.7000,
    longitude: -74.0500,
    state: 'new jersey'
  },
  {
    name: 'Long Pond Ironworks State Park',
    location: 'West Milford, NJ',
    description: 'Features historic ironworks ruins and hiking trails.',
    latitude: 41.1333,
    longitude: -74.3667,
    state: 'new jersey'
  },
  {
    name: 'Monmouth Battlefield State Park',
    location: 'Manalapan, NJ',
    description: 'Site of the 1778 Battle of Monmouth during the American Revolution.',
    latitude: 40.2667,
    longitude: -74.2667,
    state: 'new jersey'
  },
  {
    name: 'Norvin Green State Forest',
    location: 'Ringwood, NJ',
    description: 'Features hiking trails and scenic views in the Wanaque Valley.',
    latitude: 41.0833,
    longitude: -74.3167,
    state: 'new jersey'
  },
  {
    name: 'Parvin State Park',
    location: 'Pittsgrove, NJ',
    description: 'Features Parvin Lake, camping, and hiking trails.',
    latitude: 39.5000,
    longitude: -75.1167,
    state: 'new jersey'
  },
  {
    name: 'Pigeon Swamp State Park',
    location: 'South Brunswick, NJ',
    description: 'Features diverse wildlife habitat and hiking trails.',
    latitude: 40.3833,
    longitude: -74.5167,
    state: 'new jersey'
  },
  {
    name: 'Princeton Battlefield State Park',
    location: 'Princeton, NJ',
    description: 'Site of the 1777 Battle of Princeton during the American Revolution.',
    latitude: 40.3333,
    longitude: -74.6833,
    state: 'new jersey'
  },
  {
    name: 'Rancocas State Park',
    location: 'Hainesport, NJ',
    description: 'Features hiking trails through diverse forest habitats.',
    latitude: 39.9833,
    longitude: -74.8333,
    state: 'new jersey'
  },
  {
    name: 'Ringwood State Park',
    location: 'Ringwood, NJ',
    description: 'Features historic Ringwood Manor and extensive hiking trails.',
    latitude: 41.1333,
    longitude: -74.2500,
    state: 'new jersey'
  },
  {
    name: 'Round Valley Recreation Area',
    location: 'Clinton, NJ',
    description: 'Features Round Valley Reservoir, camping, and hiking trails.',
    latitude: 40.6167,
    longitude: -74.8167,
    state: 'new jersey'
  },
  {
    name: 'Spruce Run Recreation Area',
    location: 'Clinton, NJ',
    description: 'Features Spruce Run Reservoir, swimming, and boating.',
    latitude: 40.6333,
    longitude: -74.9167,
    state: 'new jersey'
  },
  {
    name: 'Stephens State Park',
    location: 'Hackettstown, NJ',
    description: 'Features the Musconetcong River and historic Morris Canal.',
    latitude: 40.8500,
    longitude: -74.8333,
    state: 'new jersey'
  },
  {
    name: 'Stokes State Forest',
    location: 'Sandyston, NJ',
    description: 'Features scenic views, camping, and extensive hiking trails.',
    latitude: 41.1833,
    longitude: -74.8000,
    state: 'new jersey'
  },
  {
    name: 'Swartswood State Park',
    location: 'Swartswood, NJ',
    description: 'Features Swartswood Lake, camping, and hiking trails.',
    latitude: 41.0833,
    longitude: -74.8167,
    state: 'new jersey'
  },
  {
    name: 'Voorhees State Park',
    location: 'Glen Gardner, NJ',
    description: 'Features camping, hiking trails, and an observatory.',
    latitude: 40.6833,
    longitude: -74.9167,
    state: 'new jersey'
  },
  {
    name: 'Washington Crossing State Park',
    location: 'Titusville, NJ',
    description: 'Site where George Washington crossed the Delaware River in 1776.',
    latitude: 40.3000,
    longitude: -74.8667,
    state: 'new jersey'
  },
  {
    name: 'Wawayanda State Park',
    location: 'Hewitt, NJ',
    description: 'Features Wawayanda Lake, camping, and extensive hiking trails.',
    latitude: 41.2000,
    longitude: -74.4167,
    state: 'new jersey'
  },
  {
    name: 'Wharton State Forest',
    location: 'Hammonton, NJ',
    description: 'New Jersey\'s largest state forest, featuring the historic Batsto Village.',
    latitude: 39.6500,
    longitude: -74.6500,
    state: 'new jersey'
  },
  {
    name: 'Worthington State Forest',
    location: 'Columbia, NJ',
    description: 'Features the Delaware Water Gap and Mount Tammany.',
    latitude: 40.9667,
    longitude: -75.1167,
    state: 'new jersey'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of newJerseyParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All New Jersey parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 