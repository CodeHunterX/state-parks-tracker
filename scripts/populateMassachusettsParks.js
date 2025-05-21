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

const massachusettsParks = [
  {
    name: 'Ames Nowell State Park',
    location: 'Abington, MA',
    description: 'Features Cleveland Pond with fishing, boating, and hiking trails.',
    latitude: 42.1167,
    longitude: -70.9500,
    state: 'massachusetts'
  },
  {
    name: 'Ashland State Park',
    location: 'Ashland, MA',
    description: 'Features Ashland Reservoir with swimming, fishing, and hiking.',
    latitude: 42.2500,
    longitude: -71.4667,
    state: 'massachusetts'
  },
  {
    name: 'Beartown State Forest',
    location: 'Monterey, MA',
    description: 'Features Benedict Pond, camping, and extensive hiking trails.',
    latitude: 42.1833,
    longitude: -73.2833,
    state: 'massachusetts'
  },
  {
    name: 'Belle Isle Marsh Reservation',
    location: 'East Boston, MA',
    description: 'Features the last remaining salt marsh in Boston Harbor.',
    latitude: 42.3833,
    longitude: -70.9833,
    state: 'massachusetts'
  },
  {
    name: 'Blackstone River and Canal Heritage State Park',
    location: 'Uxbridge, MA',
    description: 'Features historic canal and river recreation.',
    latitude: 42.0667,
    longitude: -71.6333,
    state: 'massachusetts'
  },
  {
    name: 'Blue Hills Reservation',
    location: 'Milton, MA',
    description: 'Features Great Blue Hill and extensive hiking trails.',
    latitude: 42.2167,
    longitude: -71.1167,
    state: 'massachusetts'
  },
  {
    name: 'Borderland State Park',
    location: 'Easton, MA',
    description: 'Features historic mansion, ponds, and hiking trails.',
    latitude: 42.0667,
    longitude: -71.1333,
    state: 'massachusetts'
  },
  {
    name: 'Boston Harbor Islands State Park',
    location: 'Boston, MA',
    description: 'Features multiple islands with beaches, hiking, and historic sites.',
    latitude: 42.3167,
    longitude: -70.9333,
    state: 'massachusetts'
  },
  {
    name: 'Bradley Palmer State Park',
    location: 'Topsfield, MA',
    description: 'Features Ipswich River access and hiking trails.',
    latitude: 42.6333,
    longitude: -70.9500,
    state: 'massachusetts'
  },
  {
    name: 'Breakheart Reservation',
    location: 'Saugus, MA',
    description: 'Features two lakes, hiking trails, and scenic views.',
    latitude: 42.4833,
    longitude: -71.0167,
    state: 'massachusetts'
  },
  {
    name: 'Brighton State Park',
    location: 'Brighton, MA',
    description: 'Features urban recreation and sports facilities.',
    latitude: 42.3500,
    longitude: -71.1500,
    state: 'massachusetts'
  },
  {
    name: 'Brimfield State Forest',
    location: 'Brimfield, MA',
    description: 'Features camping and hiking trails.',
    latitude: 42.1167,
    longitude: -72.2000,
    state: 'massachusetts'
  },
  {
    name: 'Callahan State Park',
    location: 'Framingham, MA',
    description: 'Features multi-use trails for hiking and horseback riding.',
    latitude: 42.3167,
    longitude: -71.4667,
    state: 'massachusetts'
  },
  {
    name: 'Castle Island State Park',
    location: 'South Boston, MA',
    description: 'Features historic Fort Independence and harbor views.',
    latitude: 42.3333,
    longitude: -71.0167,
    state: 'massachusetts'
  },
  {
    name: 'Charles River Reservation',
    location: 'Boston, MA',
    description: 'Features riverfront trails and recreation areas.',
    latitude: 42.3667,
    longitude: -71.1167,
    state: 'massachusetts'
  },
  {
    name: 'Chester-Blandford State Forest',
    location: 'Chester, MA',
    description: 'Features Sanderson Brook Falls and hiking trails.',
    latitude: 42.2667,
    longitude: -72.9333,
    state: 'massachusetts'
  },
  {
    name: 'Chicopee Memorial State Park',
    location: 'Chicopee, MA',
    description: 'Features swimming, fishing, and sports facilities.',
    latitude: 42.1667,
    longitude: -72.5667,
    state: 'massachusetts'
  },
  {
    name: 'Clarksburg State Park',
    location: 'Clarksburg, MA',
    description: 'Features Mauserts Pond and hiking trails.',
    latitude: 42.7167,
    longitude: -73.0833,
    state: 'massachusetts'
  },
  {
    name: 'Cochituate State Park',
    location: 'Natick, MA',
    description: 'Features three ponds with swimming and boating.',
    latitude: 42.3167,
    longitude: -71.3667,
    state: 'massachusetts'
  },
  {
    name: 'D.A.R. State Forest',
    location: 'Goshen, MA',
    description: 'Features Upper Highland Lake and extensive hiking trails.',
    latitude: 42.4500,
    longitude: -72.8000,
    state: 'massachusetts'
  },
  {
    name: 'Demarest Lloyd State Park',
    location: 'Dartmouth, MA',
    description: 'Features beach access and coastal recreation.',
    latitude: 41.5500,
    longitude: -70.9667,
    state: 'massachusetts'
  },
  {
    name: 'Dighton Rock State Park',
    location: 'Berkley, MA',
    description: 'Features historic rock with mysterious inscriptions.',
    latitude: 41.8167,
    longitude: -71.1167,
    state: 'massachusetts'
  },
  {
    name: 'Dorchester Shores Reservation',
    location: 'Dorchester, MA',
    description: 'Features beach access and harbor views.',
    latitude: 42.3167,
    longitude: -71.0333,
    state: 'massachusetts'
  },
  {
    name: 'Douglas State Forest',
    location: 'Douglas, MA',
    description: 'Features Wallum Lake and extensive hiking trails.',
    latitude: 42.0667,
    longitude: -71.7333,
    state: 'massachusetts'
  },
  {
    name: 'Dunn State Park',
    location: 'Gardner, MA',
    description: 'Features Dunn Pond with swimming and fishing.',
    latitude: 42.5667,
    longitude: -71.9833,
    state: 'massachusetts'
  },
  {
    name: 'Erving State Forest',
    location: 'Erving, MA',
    description: 'Features Laurel Lake and hiking trails.',
    latitude: 42.6000,
    longitude: -72.4000,
    state: 'massachusetts'
  },
  {
    name: 'Federated Women\'s Club State Forest',
    location: 'Petersham, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.4833,
    longitude: -72.1833,
    state: 'massachusetts'
  },
  {
    name: 'Fort Phoenix State Reservation',
    location: 'Fairhaven, MA',
    description: 'Features historic fort and beach access.',
    latitude: 41.6333,
    longitude: -70.9000,
    state: 'massachusetts'
  },
  {
    name: 'Freetown-Fall River State Forest',
    location: 'Freetown, MA',
    description: 'Features Wading River and extensive hiking trails.',
    latitude: 41.7667,
    longitude: -71.0667,
    state: 'massachusetts'
  },
  {
    name: 'Gardner Heritage State Park',
    location: 'Gardner, MA',
    description: 'Features historic mill complex and museum.',
    latitude: 42.5667,
    longitude: -71.9833,
    state: 'massachusetts'
  },
  {
    name: 'Great Brook Farm State Park',
    location: 'Carlisle, MA',
    description: 'Features working dairy farm and hiking trails.',
    latitude: 42.5167,
    longitude: -71.3500,
    state: 'massachusetts'
  },
  {
    name: 'Halibut Point State Park',
    location: 'Rockport, MA',
    description: 'Features coastal views and historic quarry.',
    latitude: 42.6833,
    longitude: -70.6333,
    state: 'massachusetts'
  },
  {
    name: 'Hampton Ponds State Park',
    location: 'Westfield, MA',
    description: 'Features fishing and boating on Hampton Ponds.',
    latitude: 42.1500,
    longitude: -72.7500,
    state: 'massachusetts'
  },
  {
    name: 'Holyoke Heritage State Park',
    location: 'Holyoke, MA',
    description: 'Features historic canal system and museum.',
    latitude: 42.2000,
    longitude: -72.6167,
    state: 'massachusetts'
  },
  {
    name: 'Hopkinton State Park',
    location: 'Hopkinton, MA',
    description: 'Features Hopkinton Reservoir with swimming and boating.',
    latitude: 42.2167,
    longitude: -71.5167,
    state: 'massachusetts'
  },
  {
    name: 'Horseneck Beach State Reservation',
    location: 'Westport, MA',
    description: 'Features beach access and coastal recreation.',
    latitude: 41.5167,
    longitude: -71.0833,
    state: 'massachusetts'
  },
  {
    name: 'Jug End State Reservation',
    location: 'Egremont, MA',
    description: 'Features hiking trails and scenic views.',
    latitude: 42.1167,
    longitude: -73.4333,
    state: 'massachusetts'
  },
  {
    name: 'Kenneth Dubuque Memorial State Forest',
    location: 'Hawley, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.5667,
    longitude: -72.8833,
    state: 'massachusetts'
  },
  {
    name: 'Lake Wyola State Park',
    location: 'Shutesbury, MA',
    description: 'Features swimming and fishing on Lake Wyola.',
    latitude: 42.4500,
    longitude: -72.4167,
    state: 'massachusetts'
  },
  {
    name: 'Lawrence Heritage State Park',
    location: 'Lawrence, MA',
    description: 'Features historic mill complex and visitor center.',
    latitude: 42.7000,
    longitude: -71.1667,
    state: 'massachusetts'
  },
  {
    name: 'Leominster State Forest',
    location: 'Leominster, MA',
    description: 'Features Crow Hill and extensive hiking trails.',
    latitude: 42.5167,
    longitude: -71.8833,
    state: 'massachusetts'
  },
  {
    name: 'Lowell Heritage State Park',
    location: 'Lowell, MA',
    description: 'Features historic mill complex and canal system.',
    latitude: 42.6500,
    longitude: -71.3167,
    state: 'massachusetts'
  },
  {
    name: 'Lynn Heritage State Park',
    location: 'Lynn, MA',
    description: 'Features historic shoe factory and visitor center.',
    latitude: 42.4667,
    longitude: -70.9500,
    state: 'massachusetts'
  },
  {
    name: 'Manuel F. Correllus State Forest',
    location: 'Edgartown, MA',
    description: 'Features hiking trails and wildlife viewing on Martha\'s Vineyard.',
    latitude: 41.3833,
    longitude: -70.6167,
    state: 'massachusetts'
  },
  {
    name: 'Massasoit State Park',
    location: 'Taunton, MA',
    description: 'Features Middleboro Lake and hiking trails.',
    latitude: 41.8833,
    longitude: -70.9167,
    state: 'massachusetts'
  },
  {
    name: 'Maudslay State Park',
    location: 'Newburyport, MA',
    description: 'Features historic gardens and hiking trails.',
    latitude: 42.8167,
    longitude: -70.9333,
    state: 'massachusetts'
  },
  {
    name: 'Mohawk Trail State Forest',
    location: 'Charlemont, MA',
    description: 'Features camping and extensive hiking trails.',
    latitude: 42.6167,
    longitude: -72.9500,
    state: 'massachusetts'
  },
  {
    name: 'Monument Mountain Reservation',
    location: 'Great Barrington, MA',
    description: 'Features scenic summit and hiking trails.',
    latitude: 42.2500,
    longitude: -73.3667,
    state: 'massachusetts'
  },
  {
    name: 'Mount Greylock State Reservation',
    location: 'Lanesborough, MA',
    description: 'Features Massachusetts\' highest peak and extensive hiking trails.',
    latitude: 42.6333,
    longitude: -73.1667,
    state: 'massachusetts'
  },
  {
    name: 'Mount Sugarloaf State Reservation',
    location: 'Deerfield, MA',
    description: 'Features scenic views of the Connecticut River Valley.',
    latitude: 42.4667,
    longitude: -72.5833,
    state: 'massachusetts'
  },
  {
    name: 'Mount Tom State Reservation',
    location: 'Holyoke, MA',
    description: 'Features scenic views and hiking trails.',
    latitude: 42.2500,
    longitude: -72.6333,
    state: 'massachusetts'
  },
  {
    name: 'Myles Standish State Forest',
    location: 'Carver, MA',
    description: 'Features multiple ponds, camping, and extensive hiking trails.',
    latitude: 41.8833,
    longitude: -70.7167,
    state: 'massachusetts'
  },
  {
    name: 'Nahant Beach Reservation',
    location: 'Nahant, MA',
    description: 'Features beach access and coastal recreation.',
    latitude: 42.4167,
    longitude: -70.9333,
    state: 'massachusetts'
  },
  {
    name: 'Natural Bridge State Park',
    location: 'North Adams, MA',
    description: 'Features the only natural white marble arch in North America.',
    latitude: 42.7000,
    longitude: -73.1167,
    state: 'massachusetts'
  },
  {
    name: 'Nickerson State Park',
    location: 'Brewster, MA',
    description: 'Features multiple ponds, camping, and hiking trails.',
    latitude: 41.7500,
    longitude: -70.0333,
    state: 'massachusetts'
  },
  {
    name: 'October Mountain State Forest',
    location: 'Lee, MA',
    description: 'Features the largest state forest in Massachusetts with extensive hiking trails.',
    latitude: 42.3667,
    longitude: -73.1667,
    state: 'massachusetts'
  },
  {
    name: 'Otter River State Forest',
    location: 'Baldwinville, MA',
    description: 'Features Beaman Pond and camping.',
    latitude: 42.6167,
    longitude: -72.0667,
    state: 'massachusetts'
  },
  {
    name: 'Pittsfield State Forest',
    location: 'Pittsfield, MA',
    description: 'Features Berry Pond and extensive hiking trails.',
    latitude: 42.4500,
    longitude: -73.2667,
    state: 'massachusetts'
  },
  {
    name: 'Plymouth Long Beach',
    location: 'Plymouth, MA',
    description: 'Features beach access and coastal recreation.',
    latitude: 41.9667,
    longitude: -70.6500,
    state: 'massachusetts'
  },
  {
    name: 'Ponkapoag Pond',
    location: 'Canton, MA',
    description: 'Features fishing and boating on Ponkapoag Pond.',
    latitude: 42.2000,
    longitude: -71.1167,
    state: 'massachusetts'
  },
  {
    name: 'Purgatory Chasm State Reservation',
    location: 'Sutton, MA',
    description: 'Features dramatic rock formations and hiking trails.',
    latitude: 42.1167,
    longitude: -71.7167,
    state: 'massachusetts'
  },
  {
    name: 'Quabbin Reservoir',
    location: 'Belchertown, MA',
    description: 'Features fishing and scenic views of the reservoir.',
    latitude: 42.3500,
    longitude: -72.3167,
    state: 'massachusetts'
  },
  {
    name: 'Quinebaug Woods',
    location: 'Brimfield, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.1167,
    longitude: -72.2000,
    state: 'massachusetts'
  },
  {
    name: 'Roxbury Heritage State Park',
    location: 'Boston, MA',
    description: 'Features historic Dillaway-Thomas House and museum.',
    latitude: 42.3167,
    longitude: -71.0833,
    state: 'massachusetts'
  },
  {
    name: 'Rutland State Park',
    location: 'Rutland, MA',
    description: 'Features Whitehall Pond and hiking trails.',
    latitude: 42.3667,
    longitude: -71.9500,
    state: 'massachusetts'
  },
  {
    name: 'Salisbury Beach State Reservation',
    location: 'Salisbury, MA',
    description: 'Features beach access and camping.',
    latitude: 42.8333,
    longitude: -70.8167,
    state: 'massachusetts'
  },
  {
    name: 'Sandisfield State Forest',
    location: 'Sandisfield, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.1167,
    longitude: -73.1167,
    state: 'massachusetts'
  },
  {
    name: 'Savoy Mountain State Forest',
    location: 'Florida, MA',
    description: 'Features camping and extensive hiking trails.',
    latitude: 42.6833,
    longitude: -73.0167,
    state: 'massachusetts'
  },
  {
    name: 'Scusset Beach State Reservation',
    location: 'Sandwich, MA',
    description: 'Features beach access and views of Cape Cod Canal.',
    latitude: 41.7667,
    longitude: -70.5167,
    state: 'massachusetts'
  },
  {
    name: 'Shawme-Crowell State Forest',
    location: 'Sandwich, MA',
    description: 'Features camping and hiking trails.',
    latitude: 41.7500,
    longitude: -70.5000,
    state: 'massachusetts'
  },
  {
    name: 'Spencer State Forest',
    location: 'Spencer, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.2500,
    longitude: -72.0000,
    state: 'massachusetts'
  },
  {
    name: 'Squantum Point Park',
    location: 'Quincy, MA',
    description: 'Features harbor views and walking trails.',
    latitude: 42.3000,
    longitude: -71.0167,
    state: 'massachusetts'
  },
  {
    name: 'Stony Brook Reservation',
    location: 'Boston, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.2667,
    longitude: -71.1500,
    state: 'massachusetts'
  },
  {
    name: 'Sutton State Forest',
    location: 'Sutton, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.1167,
    longitude: -71.7500,
    state: 'massachusetts'
  },
  {
    name: 'Tolland State Forest',
    location: 'Tolland, MA',
    description: 'Features Otis Reservoir and camping.',
    latitude: 42.0667,
    longitude: -73.0167,
    state: 'massachusetts'
  },
  {
    name: 'Upton State Forest',
    location: 'Upton, MA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 42.1667,
    longitude: -71.6167,
    state: 'massachusetts'
  },
  {
    name: 'Wachusett Mountain State Reservation',
    location: 'Princeton, MA',
    description: 'Features summit views and extensive hiking trails.',
    latitude: 42.4833,
    longitude: -71.8833,
    state: 'massachusetts'
  },
  {
    name: 'Wachusett Reservoir',
    location: 'Clinton, MA',
    description: 'Features fishing and scenic views of the reservoir.',
    latitude: 42.3833,
    longitude: -71.7167,
    state: 'massachusetts'
  },
  {
    name: 'Waquoit Bay National Estuarine Research Reserve',
    location: 'Falmouth, MA',
    description: 'Features coastal trails and wildlife viewing.',
    latitude: 41.5833,
    longitude: -70.5167,
    state: 'massachusetts'
  },
  {
    name: 'Wendell State Forest',
    location: 'Wendell, MA',
    description: 'Features Ruggles Pond and hiking trails.',
    latitude: 42.5500,
    longitude: -72.4000,
    state: 'massachusetts'
  },
  {
    name: 'Willard Brook State Forest',
    location: 'Ashby, MA',
    description: 'Features Damon Pond and hiking trails.',
    latitude: 42.6667,
    longitude: -71.8167,
    state: 'massachusetts'
  },
  {
    name: 'William Cullen Bryant Homestead',
    location: 'Cummington, MA',
    description: 'Features historic home and hiking trails.',
    latitude: 42.4667,
    longitude: -72.9333,
    state: 'massachusetts'
  },
  {
    name: 'Windsor State Forest',
    location: 'Windsor, MA',
    description: 'Features Windsor Jambs and hiking trails.',
    latitude: 42.5167,
    longitude: -73.0667,
    state: 'massachusetts'
  },
  {
    name: 'Wompatuck State Park',
    location: 'Hingham, MA',
    description: 'Features camping and extensive hiking trails.',
    latitude: 42.2167,
    longitude: -70.8833,
    state: 'massachusetts'
  }
];

async function populateMassachusettsParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of massachusettsParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Massachusetts parks have been added to the database');
  } catch (error) {
    console.error('Error adding Massachusetts parks:', error);
  }
}

populateMassachusettsParks(); 