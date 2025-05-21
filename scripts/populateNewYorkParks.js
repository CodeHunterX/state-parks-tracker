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

const newYorkParks = [
  {
    name: 'Adirondack Park',
    location: 'Various locations, NY',
    description: 'Largest state park in the US, featuring mountains, lakes, and extensive hiking trails.',
    latitude: 44.0000,
    longitude: -74.0000,
    state: 'new_york'
  },
  {
    name: 'Allegany State Park',
    location: 'Salamanca, NY',
    description: 'Features camping, hiking, and winter sports in the Allegheny Mountains.',
    latitude: 42.0333,
    longitude: -78.7333,
    state: 'new_york'
  },
  {
    name: 'Battle Island State Park',
    location: 'Fulton, NY',
    description: 'Features golf course and scenic views of the Oswego River.',
    latitude: 43.3167,
    longitude: -76.4167,
    state: 'new_york'
  },
  {
    name: 'Bear Mountain State Park',
    location: 'Bear Mountain, NY',
    description: 'Features hiking trails, zoo, and scenic views of the Hudson River.',
    latitude: 41.3167,
    longitude: -73.9833,
    state: 'new_york'
  },
  {
    name: 'Beaver Island State Park',
    location: 'Grand Island, NY',
    description: 'Features beach access and water recreation on the Niagara River.',
    latitude: 43.0167,
    longitude: -78.9667,
    state: 'new_york'
  },
  {
    name: 'Bethpage State Park',
    location: 'Farmingdale, NY',
    description: 'Features five golf courses, including the famous Black Course.',
    latitude: 40.7500,
    longitude: -73.4833,
    state: 'new_york'
  },
  {
    name: 'Bowman Lake State Park',
    location: 'Oxford, NY',
    description: 'Features camping and swimming on Bowman Lake.',
    latitude: 42.4500,
    longitude: -75.6000,
    state: 'new_york'
  },
  {
    name: 'Buttermilk Falls State Park',
    location: 'Ithaca, NY',
    description: 'Features waterfalls, swimming, and hiking trails.',
    latitude: 42.4167,
    longitude: -76.5167,
    state: 'new_york'
  },
  {
    name: 'Caleb Smith State Park',
    location: 'Smithtown, NY',
    description: 'Features nature preserve and hiking trails.',
    latitude: 40.8500,
    longitude: -73.2000,
    state: 'new_york'
  },
  {
    name: 'Camp Hero State Park',
    location: 'Montauk, NY',
    description: 'Features historic military site and coastal trails.',
    latitude: 41.0667,
    longitude: -71.9167,
    state: 'new_york'
  },
  {
    name: 'Catskill Park',
    location: 'Various locations, NY',
    description: 'Features mountains, hiking trails, and scenic views.',
    latitude: 42.2000,
    longitude: -74.5000,
    state: 'new_york'
  },
  {
    name: 'Chittenango Falls State Park',
    location: 'Cazenovia, NY',
    description: 'Features 167-foot waterfall and hiking trails.',
    latitude: 42.9833,
    longitude: -75.8667,
    state: 'new_york'
  },
  {
    name: 'Clay Pit Ponds State Park',
    location: 'Staten Island, NY',
    description: 'Features unique ecosystem and hiking trails.',
    latitude: 40.5500,
    longitude: -74.1833,
    state: 'new_york'
  },
  {
    name: 'Cold Spring Harbor State Park',
    location: 'Cold Spring Harbor, NY',
    description: 'Features hiking trails and scenic views.',
    latitude: 40.8667,
    longitude: -73.4667,
    state: 'new_york'
  },
  {
    name: 'Connetquot River State Park',
    location: 'Oakdale, NY',
    description: 'Features historic site and nature trails.',
    latitude: 40.7500,
    longitude: -73.1167,
    state: 'new_york'
  },
  {
    name: 'Crown Point State Historic Site',
    location: 'Crown Point, NY',
    description: 'Features historic fort and scenic views of Lake Champlain.',
    latitude: 44.0333,
    longitude: -73.4333,
    state: 'new_york'
  },
  {
    name: 'Cumberland Bay State Park',
    location: 'Plattsburgh, NY',
    description: 'Features beach access and camping on Lake Champlain.',
    latitude: 44.7000,
    longitude: -73.4500,
    state: 'new_york'
  },
  {
    name: 'Darien Lakes State Park',
    location: 'Darien Center, NY',
    description: 'Features camping and water recreation.',
    latitude: 42.9167,
    longitude: -78.3833,
    state: 'new_york'
  },
  {
    name: 'De Veaux Woods State Park',
    location: 'Niagara Falls, NY',
    description: 'Features hiking trails and scenic views.',
    latitude: 43.0833,
    longitude: -79.0667,
    state: 'new_york'
  },
  {
    name: 'Delta Lake State Park',
    location: 'Rome, NY',
    description: 'Features camping and water recreation.',
    latitude: 43.2667,
    longitude: -75.4667,
    state: 'new_york'
  },
  {
    name: 'Devil\'s Hole State Park',
    location: 'Niagara Falls, NY',
    description: 'Features hiking trails and scenic views of the Niagara Gorge.',
    latitude: 43.1167,
    longitude: -79.0500,
    state: 'new_york'
  },
  {
    name: 'Eel Weir State Park',
    location: 'Ogdensburg, NY',
    description: 'Features camping and fishing on the St. Lawrence River.',
    latitude: 44.7000,
    longitude: -75.5000,
    state: 'new_york'
  },
  {
    name: 'Evangola State Park',
    location: 'Irving, NY',
    description: 'Features beach access and camping on Lake Erie.',
    latitude: 42.5833,
    longitude: -79.0333,
    state: 'new_york'
  },
  {
    name: 'Fair Haven Beach State Park',
    location: 'Fair Haven, NY',
    description: 'Features beach access and camping on Lake Ontario.',
    latitude: 43.3167,
    longitude: -76.7000,
    state: 'new_york'
  },
  {
    name: 'Fillmore Glen State Park',
    location: 'Moravia, NY',
    description: 'Features waterfalls and hiking trails.',
    latitude: 42.7167,
    longitude: -76.3667,
    state: 'new_york'
  },
  {
    name: 'Fort Niagara State Park',
    location: 'Youngstown, NY',
    description: 'Features historic fort and beach access on Lake Ontario.',
    latitude: 43.2667,
    longitude: -79.0667,
    state: 'new_york'
  },
  {
    name: 'Four Mile Creek State Park',
    location: 'Youngstown, NY',
    description: 'Features camping and scenic views of Lake Ontario.',
    latitude: 43.2667,
    longitude: -79.0500,
    state: 'new_york'
  },
  {
    name: 'Glimmerglass State Park',
    location: 'Cooperstown, NY',
    description: 'Features camping and scenic views of Otsego Lake.',
    latitude: 42.7167,
    longitude: -74.9167,
    state: 'new_york'
  },
  {
    name: 'Golden Hill State Park',
    location: 'Barker, NY',
    description: 'Features historic lighthouse and camping on Lake Ontario.',
    latitude: 43.3667,
    longitude: -78.4833,
    state: 'new_york'
  },
  {
    name: 'Goosepond Mountain State Park',
    location: 'Chester, NY',
    description: 'Features hiking trails and scenic views.',
    latitude: 41.3667,
    longitude: -74.2667,
    state: 'new_york'
  },
  {
    name: 'Grafton Lakes State Park',
    location: 'Grafton, NY',
    description: 'Features multiple lakes, camping, and hiking trails.',
    latitude: 42.7667,
    longitude: -73.4667,
    state: 'new_york'
  },
  {
    name: 'Green Lakes State Park',
    location: 'Fayetteville, NY',
    description: 'Features unique meromictic lakes and golf course.',
    latitude: 43.0500,
    longitude: -75.9667,
    state: 'new_york'
  },
  {
    name: 'Hamlin Beach State Park',
    location: 'Hamlin, NY',
    description: 'Features beach access and camping on Lake Ontario.',
    latitude: 43.3167,
    longitude: -77.9500,
    state: 'new_york'
  },
  {
    name: 'Harriman State Park',
    location: 'Harriman, NY',
    description: 'Features extensive hiking trails and lakes.',
    latitude: 41.3000,
    longitude: -74.1000,
    state: 'new_york'
  },
  {
    name: 'Heckscher State Park',
    location: 'East Islip, NY',
    description: 'Features beach access and camping on the Great South Bay.',
    latitude: 40.7000,
    longitude: -73.2000,
    state: 'new_york'
  },
  {
    name: 'High Tor State Park',
    location: 'New City, NY',
    description: 'Features scenic views of the Hudson River.',
    latitude: 41.1500,
    longitude: -73.9833,
    state: 'new_york'
  },
  {
    name: 'Hither Hills State Park',
    location: 'Montauk, NY',
    description: 'Features beach access and camping on the Atlantic Ocean.',
    latitude: 41.0167,
    longitude: -71.9333,
    state: 'new_york'
  },
  {
    name: 'Hudson Highlands State Park',
    location: 'Cold Spring, NY',
    description: 'Features hiking trails and scenic views of the Hudson River.',
    latitude: 41.4167,
    longitude: -73.9500,
    state: 'new_york'
  },
  {
    name: 'Hudson River Islands State Park',
    location: 'Athens, NY',
    description: 'Features islands and water recreation on the Hudson River.',
    latitude: 42.2667,
    longitude: -73.8167,
    state: 'new_york'
  },
  {
    name: 'James Baird State Park',
    location: 'LaGrange, NY',
    description: 'Features golf course and hiking trails.',
    latitude: 41.6667,
    longitude: -73.7667,
    state: 'new_york'
  },
  {
    name: 'John Boyd Thacher State Park',
    location: 'Voorheesville, NY',
    description: 'Features scenic views and hiking trails.',
    latitude: 42.6500,
    longitude: -74.0167,
    state: 'new_york'
  },
  {
    name: 'Jones Beach State Park',
    location: 'Wantagh, NY',
    description: 'Features beach access and water recreation on the Atlantic Ocean.',
    latitude: 40.5833,
    longitude: -73.5500,
    state: 'new_york'
  },
  {
    name: 'Keewaydin State Park',
    location: 'Alexandria Bay, NY',
    description: 'Features camping and scenic views of the St. Lawrence River.',
    latitude: 44.3333,
    longitude: -75.9167,
    state: 'new_york'
  },
  {
    name: 'Knox Farm State Park',
    location: 'East Aurora, NY',
    description: 'Features historic site and hiking trails.',
    latitude: 42.7667,
    longitude: -78.6167,
    state: 'new_york'
  },
  {
    name: 'Lake Taghkanic State Park',
    location: 'Ancram, NY',
    description: 'Features camping and water recreation.',
    latitude: 42.0667,
    longitude: -73.7167,
    state: 'new_york'
  },
  {
    name: 'Letchworth State Park',
    location: 'Castile, NY',
    description: 'Features "Grand Canyon of the East" with waterfalls and hiking trails.',
    latitude: 42.5833,
    longitude: -78.0500,
    state: 'new_york'
  },
  {
    name: 'Long Point State Park',
    location: 'Aurora, NY',
    description: 'Features camping and scenic views of Cayuga Lake.',
    latitude: 42.7167,
    longitude: -76.6667,
    state: 'new_york'
  },
  {
    name: 'Mackenzie-Childs Farm',
    location: 'Aurora, NY',
    description: 'Features historic site and scenic views of Cayuga Lake.',
    latitude: 42.7500,
    longitude: -76.7000,
    state: 'new_york'
  },
  {
    name: 'Mark Twain State Park',
    location: 'Elmira, NY',
    description: 'Features historic site and scenic views.',
    latitude: 42.1000,
    longitude: -76.8167,
    state: 'new_york'
  },
  {
    name: 'Midway State Park',
    location: 'Maple Springs, NY',
    description: 'Features historic amusement park and scenic views of Chautauqua Lake.',
    latitude: 42.1667,
    longitude: -79.4167,
    state: 'new_york'
  },
  {
    name: 'Mine Kill State Park',
    location: 'North Blenheim, NY',
    description: 'Features waterfalls and hiking trails.',
    latitude: 42.4667,
    longitude: -74.4333,
    state: 'new_york'
  },
  {
    name: 'Minnewaska State Park',
    location: 'Kerhonkson, NY',
    description: 'Features lakes, waterfalls, and extensive hiking trails.',
    latitude: 41.7333,
    longitude: -74.2333,
    state: 'new_york'
  },
  {
    name: 'Montauk Downs State Park',
    location: 'Montauk, NY',
    description: 'Features golf course and scenic views.',
    latitude: 41.0333,
    longitude: -71.9500,
    state: 'new_york'
  },
  {
    name: 'Montauk Point State Park',
    location: 'Montauk, NY',
    description: 'Features historic lighthouse and scenic views of the Atlantic Ocean.',
    latitude: 41.0667,
    longitude: -71.8667,
    state: 'new_york'
  },
  {
    name: 'Moreau Lake State Park',
    location: 'Gansevoort, NY',
    description: 'Features camping and water recreation.',
    latitude: 43.2333,
    longitude: -73.6833,
    state: 'new_york'
  },
  {
    name: 'Niagara Falls State Park',
    location: 'Niagara Falls, NY',
    description: 'Features the famous waterfalls and scenic views.',
    latitude: 43.0833,
    longitude: -79.0667,
    state: 'new_york'
  },
  {
    name: 'Nissequogue River State Park',
    location: 'Kings Park, NY',
    description: 'Features hiking trails and scenic views of the Nissequogue River.',
    latitude: 40.9000,
    longitude: -73.2333,
    state: 'new_york'
  },
  {
    name: 'Nyack Beach State Park',
    location: 'Upper Nyack, NY',
    description: 'Features hiking trails and scenic views of the Hudson River.',
    latitude: 41.1000,
    longitude: -73.9167,
    state: 'new_york'
  },
  {
    name: 'Orient Beach State Park',
    location: 'Orient, NY',
    description: 'Features beach access and camping on the Long Island Sound.',
    latitude: 41.1333,
    longitude: -72.2667,
    state: 'new_york'
  },
  {
    name: 'Point Au Roche State Park',
    location: 'Plattsburgh, NY',
    description: 'Features beach access and camping on Lake Champlain.',
    latitude: 44.7167,
    longitude: -73.3833,
    state: 'new_york'
  },
  {
    name: 'Robert H. Treman State Park',
    location: 'Ithaca, NY',
    description: 'Features waterfalls and hiking trails.',
    latitude: 42.3833,
    longitude: -76.5500,
    state: 'new_york'
  },
  {
    name: 'Robert Moses State Park',
    location: 'Babylon, NY',
    description: 'Features beach access and water recreation on the Atlantic Ocean.',
    latitude: 40.6333,
    longitude: -73.3000,
    state: 'new_york'
  },
  {
    name: 'Rock Island Lighthouse State Park',
    location: 'Fishers Landing, NY',
    description: 'Features historic lighthouse and scenic views of the St. Lawrence River.',
    latitude: 44.2833,
    longitude: -76.0167,
    state: 'new_york'
  },
  {
    name: 'Rocky Point State Park',
    location: 'Rocky Point, NY',
    description: 'Features beach access and hiking trails.',
    latitude: 40.9500,
    longitude: -72.9333,
    state: 'new_york'
  },
  {
    name: 'Sampson State Park',
    location: 'Romulus, NY',
    description: 'Features camping and water recreation on Seneca Lake.',
    latitude: 42.7333,
    longitude: -76.9167,
    state: 'new_york'
  },
  {
    name: 'Saratoga Spa State Park',
    location: 'Saratoga Springs, NY',
    description: 'Features historic site, golf course, and mineral springs.',
    latitude: 43.0500,
    longitude: -73.8000,
    state: 'new_york'
  },
  {
    name: 'Selkirk Shores State Park',
    location: 'Pulaski, NY',
    description: 'Features camping and beach access on Lake Ontario.',
    latitude: 43.5667,
    longitude: -76.2000,
    state: 'new_york'
  },
  {
    name: 'Seneca Lake State Park',
    location: 'Geneva, NY',
    description: 'Features water recreation and scenic views of Seneca Lake.',
    latitude: 42.8667,
    longitude: -76.9833,
    state: 'new_york'
  },
  {
    name: 'Shadmoor State Park',
    location: 'Montauk, NY',
    description: 'Features beach access and scenic views of the Atlantic Ocean.',
    latitude: 41.0333,
    longitude: -71.9333,
    state: 'new_york'
  },
  {
    name: 'Silver Lake State Park',
    location: 'Perry, NY',
    description: 'Features camping and water recreation.',
    latitude: 42.7167,
    longitude: -78.0167,
    state: 'new_york'
  },
  {
    name: 'Sonnenberg Gardens State Historic Park',
    location: 'Canandaigua, NY',
    description: 'Features historic mansion and gardens.',
    latitude: 42.8833,
    longitude: -77.2833,
    state: 'new_york'
  },
  {
    name: 'Southwick Beach State Park',
    location: 'Woodville, NY',
    description: 'Features beach access and camping on Lake Ontario.',
    latitude: 43.7833,
    longitude: -76.2167,
    state: 'new_york'
  },
  {
    name: 'Stony Brook State Park',
    location: 'Dansville, NY',
    description: 'Features waterfalls and hiking trails.',
    latitude: 42.5500,
    longitude: -77.6667,
    state: 'new_york'
  },
  {
    name: 'Sunken Meadow State Park',
    location: 'Kings Park, NY',
    description: 'Features beach access and golf course on the Long Island Sound.',
    latitude: 40.9167,
    longitude: -73.2500,
    state: 'new_york'
  },
  {
    name: 'Taconic State Park',
    location: 'Copake Falls, NY',
    description: 'Features camping and hiking trails in the Taconic Mountains.',
    latitude: 42.1167,
    longitude: -73.5167,
    state: 'new_york'
  },
  {
    name: 'Taughannock Falls State Park',
    location: 'Trumansburg, NY',
    description: 'Features 215-foot waterfall and hiking trails.',
    latitude: 42.5333,
    longitude: -76.6000,
    state: 'new_york'
  },
  {
    name: 'Valcour Island State Park',
    location: 'Plattsburgh, NY',
    description: 'Features historic site and camping on Lake Champlain.',
    latitude: 44.6167,
    longitude: -73.4167,
    state: 'new_york'
  },
  {
    name: 'Verona Beach State Park',
    location: 'Verona Beach, NY',
    description: 'Features camping and beach access on Oneida Lake.',
    latitude: 43.1833,
    longitude: -75.7167,
    state: 'new_york'
  },
  {
    name: 'Watkins Glen State Park',
    location: 'Watkins Glen, NY',
    description: 'Features 19 waterfalls and hiking trails.',
    latitude: 42.3667,
    longitude: -76.8667,
    state: 'new_york'
  },
  {
    name: 'Wellesley Island State Park',
    location: 'Fineview, NY',
    description: 'Features camping and scenic views of the St. Lawrence River.',
    latitude: 44.3167,
    longitude: -76.0000,
    state: 'new_york'
  },
  {
    name: 'Westcott Beach State Park',
    location: 'Sackets Harbor, NY',
    description: 'Features camping and beach access on Lake Ontario.',
    latitude: 43.9500,
    longitude: -76.1167,
    state: 'new_york'
  },
  {
    name: 'Whetstone Gulf State Park',
    location: 'Lowville, NY',
    description: 'Features scenic gorge and hiking trails.',
    latitude: 43.7833,
    longitude: -75.4667,
    state: 'new_york'
  },
  {
    name: 'Whirlpool State Park',
    location: 'Niagara Falls, NY',
    description: 'Features scenic views of the Niagara Whirlpool.',
    latitude: 43.1167,
    longitude: -79.0667,
    state: 'new_york'
  },
  {
    name: 'Wildwood State Park',
    location: 'Wading River, NY',
    description: 'Features camping and beach access on the Long Island Sound.',
    latitude: 40.9167,
    longitude: -72.8333,
    state: 'new_york'
  },
  {
    name: 'Wilson-Tuscarora State Park',
    location: 'Wilson, NY',
    description: 'Features camping and beach access on Lake Ontario.',
    latitude: 43.3167,
    longitude: -78.8167,
    state: 'new_york'
  },
  {
    name: 'Woodlawn Beach State Park',
    location: 'Hamburg, NY',
    description: 'Features beach access and swimming on Lake Erie.',
    latitude: 42.7167,
    longitude: -78.8833,
    state: 'new_york'
  }
];

async function populateNewYorkParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of newYorkParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All New York parks have been added to the database');
  } catch (error) {
    console.error('Error adding New York parks:', error);
  }
}

populateNewYorkParks(); 