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

const wisconsinParks = [
  {
    name: "Amnicon Falls State Park",
    description: "Features a series of waterfalls and a historic covered bridge on the Amnicon River.",
    location: "South Range, WI",
    latitude: 46.58,
    longitude: -91.89,
    state: "wisconsin"
  },
  {
    name: "Aztalan State Park",
    description: "Features a partially reconstructed Mississippian culture village from 1000-1300 CE, designated as a National Historic Landmark.",
    location: "Lake Mills, WI",
    latitude: 43.07,
    longitude: -88.86,
    state: "wisconsin"
  },
  {
    name: "Belmont Mound State Park",
    description: "Features a 64-foot observation tower atop a 400-foot hill, operated by the Belmont Lions Club.",
    location: "Belmont, WI",
    latitude: 42.74,
    longitude: -90.33,
    state: "wisconsin"
  },
  {
    name: "Big Bay State Park",
    description: "Features scenic Lake Superior shoreline and hiking trails on Madeline Island.",
    location: "La Pointe, WI",
    latitude: 46.79,
    longitude: -90.67,
    state: "wisconsin"
  },
  {
    name: "Big Foot Beach State Park",
    description: "Features Lake Geneva shoreline and recreational activities.",
    location: "Lake Geneva, WI",
    latitude: 42.58,
    longitude: -88.43,
    state: "wisconsin"
  },
  {
    name: "Blue Mound State Park",
    description: "Features the highest point in southern Wisconsin and extensive hiking trails.",
    location: "Blue Mounds, WI",
    latitude: 43.02,
    longitude: -89.83,
    state: "wisconsin"
  },
  {
    name: "Brunet Island State Park",
    description: "Features the Chippewa and Fisher Rivers with camping and water activities.",
    location: "Cornell, WI",
    latitude: 45.17,
    longitude: -91.15,
    state: "wisconsin"
  },
  {
    name: "Buckhorn State Park",
    description: "Features the Castle Rock Flowage with extensive water recreation opportunities.",
    location: "Necedah, WI",
    latitude: 44.08,
    longitude: -90.05,
    state: "wisconsin"
  },
  {
    name: "Cadiz Springs State Recreation Area",
    description: "Features two lakes with fishing and boating opportunities.",
    location: "Brodhead, WI",
    latitude: 42.62,
    longitude: -89.38,
    state: "wisconsin"
  },
  {
    name: "Campbellsport Drumlins State Park",
    description: "Features unique glacial landforms and hiking trails.",
    location: "Campbellsport, WI",
    latitude: 43.60,
    longitude: -88.28,
    state: "wisconsin"
  },
  {
    name: "Copper Falls State Park",
    description: "Features dramatic waterfalls and scenic gorge on the Bad River.",
    location: "Mellen, WI",
    latitude: 46.37,
    longitude: -90.64,
    state: "wisconsin"
  },
  {
    name: "Copper Culture State Park",
    description: "Features ancient Native American burial grounds and archaeological sites.",
    location: "Oconto, WI",
    latitude: 44.89,
    longitude: -87.87,
    state: "wisconsin"
  },
  {
    name: "Council Grounds State Park",
    description: "Features the Wisconsin River and extensive hiking trails.",
    location: "Merrill, WI",
    latitude: 45.18,
    longitude: -89.70,
    state: "wisconsin"
  },
  {
    name: "Cross Plains State Park",
    description: "Features the Ice Age Trail and scenic overlooks.",
    location: "Cross Plains, WI",
    latitude: 43.12,
    longitude: -89.65,
    state: "wisconsin"
  },
  {
    name: "Devil's Lake State Park",
    description: "Features dramatic quartzite bluffs and a large lake, part of the Ice Age National Scientific Reserve.",
    location: "Baraboo, WI",
    latitude: 43.42,
    longitude: -89.73,
    state: "wisconsin"
  },
  {
    name: "Governor Dodge State Park",
    description: "Features two lakes, scenic bluffs, and extensive hiking trails.",
    location: "Dodgeville, WI",
    latitude: 43.02,
    longitude: -90.13,
    state: "wisconsin"
  },
  {
    name: "Governor Nelson State Park",
    description: "Features Lake Mendota shoreline and prairie restoration areas.",
    location: "Waunakee, WI",
    latitude: 43.14,
    longitude: -89.45,
    state: "wisconsin"
  },
  {
    name: "Governor Thompson State Park",
    description: "Features the Peshtigo River and extensive forest trails.",
    location: "Crivitz, WI",
    latitude: 45.23,
    longitude: -88.13,
    state: "wisconsin"
  },
  {
    name: "Harrington Beach State Park",
    description: "Features Lake Michigan shoreline and a restored quarry lake.",
    location: "Belgium, WI",
    latitude: 43.50,
    longitude: -87.78,
    state: "wisconsin"
  },
  {
    name: "Hartman Creek State Park",
    description: "Features several lakes and extensive hiking trails.",
    location: "Waupaca, WI",
    latitude: 44.33,
    longitude: -89.22,
    state: "wisconsin"
  },
  {
    name: "Heritage Hill State Historical Park",
    description: "Features historic buildings and living history demonstrations.",
    location: "Green Bay, WI",
    latitude: 44.52,
    longitude: -88.02,
    state: "wisconsin"
  },
  {
    name: "High Cliff State Park",
    description: "Features Lake Winnebago shoreline and the Niagara Escarpment.",
    location: "Sherwood, WI",
    latitude: 44.16,
    longitude: -88.28,
    state: "wisconsin"
  },
  {
    name: "Interstate State Park",
    description: "Features the St. Croix River and unique glacial potholes, part of the Ice Age National Scientific Reserve.",
    location: "St. Croix Falls, WI",
    latitude: 45.40,
    longitude: -92.65,
    state: "wisconsin"
  },
  {
    name: "Kohler-Andrae State Park",
    description: "Features Lake Michigan shoreline and sand dunes.",
    location: "Sheboygan, WI",
    latitude: 43.50,
    longitude: -87.72,
    state: "wisconsin"
  },
  {
    name: "Lake Kegonsa State Park",
    description: "Features a large lake with swimming and boating opportunities.",
    location: "Stoughton, WI",
    latitude: 42.98,
    longitude: -89.22,
    state: "wisconsin"
  },
  {
    name: "Lake Wissota State Park",
    description: "Features a large lake with extensive water recreation opportunities.",
    location: "Chippewa Falls, WI",
    latitude: 44.93,
    longitude: -91.32,
    state: "wisconsin"
  },
  {
    name: "Lakeshore State Park",
    description: "Features Milwaukee's harbor and Lake Michigan shoreline.",
    location: "Milwaukee, WI",
    latitude: 43.03,
    longitude: -87.90,
    state: "wisconsin"
  },
  {
    name: "Merrick State Park",
    description: "Features the Mississippi River and extensive water recreation.",
    location: "Fountain City, WI",
    latitude: 44.13,
    longitude: -91.71,
    state: "wisconsin"
  },
  {
    name: "Mill Bluff State Park",
    description: "Features unique sandstone bluffs and hiking trails.",
    location: "Camp Douglas, WI",
    latitude: 43.93,
    longitude: -90.32,
    state: "wisconsin"
  },
  {
    name: "Mirror Lake State Park",
    description: "Features a scenic lake surrounded by sandstone bluffs.",
    location: "Lake Delton, WI",
    latitude: 43.56,
    longitude: -89.82,
    state: "wisconsin"
  },
  {
    name: "Natural Bridge State Park",
    description: "Features a natural sandstone arch and archaeological sites.",
    location: "Leland, WI",
    latitude: 43.33,
    longitude: -89.95,
    state: "wisconsin"
  },
  {
    name: "Nelson Dewey State Park",
    description: "Features the Mississippi River and historic Stonefield village.",
    location: "Cassville, WI",
    latitude: 42.72,
    longitude: -90.99,
    state: "wisconsin"
  },
  {
    name: "New Glarus Woods State Park",
    description: "Features hiking trails and Swiss cultural heritage.",
    location: "New Glarus, WI",
    latitude: 42.81,
    longitude: -89.64,
    state: "wisconsin"
  },
  {
    name: "Newport State Park",
    description: "Features Lake Michigan shoreline and extensive hiking trails.",
    location: "Ellison Bay, WI",
    latitude: 45.24,
    longitude: -86.99,
    state: "wisconsin"
  },
  {
    name: "Pattison State Park",
    description: "Features Big Manitou Falls, the highest waterfall in Wisconsin.",
    location: "Superior, WI",
    latitude: 46.54,
    longitude: -92.11,
    state: "wisconsin"
  },
  {
    name: "Peninsula State Park",
    description: "Features Green Bay shoreline and the historic Eagle Bluff Lighthouse.",
    location: "Fish Creek, WI",
    latitude: 45.17,
    longitude: -87.17,
    state: "wisconsin"
  },
  {
    name: "Perrot State Park",
    description: "Features the Mississippi River and Trempealeau Mountain.",
    location: "Trempealeau, WI",
    latitude: 44.02,
    longitude: -91.50,
    state: "wisconsin"
  },
  {
    name: "Potawatomi State Park",
    description: "Features Green Bay shoreline and the Ice Age Trail.",
    location: "Sturgeon Bay, WI",
    latitude: 44.87,
    longitude: -87.42,
    state: "wisconsin"
  },
  {
    name: "Rib Mountain State Park",
    description: "Features the highest point in Wisconsin and extensive hiking trails.",
    location: "Wausau, WI",
    latitude: 44.92,
    longitude: -89.69,
    state: "wisconsin"
  },
  {
    name: "Roche-a-Cri State Park",
    description: "Features ancient Native American petroglyphs and a scenic overlook.",
    location: "Friendship, WI",
    latitude: 44.00,
    longitude: -89.82,
    state: "wisconsin"
  },
  {
    name: "Rock Island State Park",
    description: "Features Lake Michigan shoreline and historic buildings.",
    location: "Washington Island, WI",
    latitude: 45.42,
    longitude: -86.83,
    state: "wisconsin"
  },
  {
    name: "Rocky Arbor State Park",
    description: "Features unique sandstone formations and hiking trails.",
    location: "Wisconsin Dells, WI",
    latitude: 43.65,
    longitude: -89.82,
    state: "wisconsin"
  },
  {
    name: "Straight Lake State Park",
    description: "Features a scenic lake and extensive hiking trails.",
    location: "Luck, WI",
    latitude: 45.57,
    longitude: -92.47,
    state: "wisconsin"
  },
  {
    name: "Tower Hill State Park",
    description: "Features a historic shot tower and the Wisconsin River.",
    location: "Spring Green, WI",
    latitude: 43.15,
    longitude: -90.07,
    state: "wisconsin"
  },
  {
    name: "Whitefish Dunes State Park",
    description: "Features Lake Michigan shoreline and extensive sand dunes.",
    location: "Sturgeon Bay, WI",
    latitude: 44.91,
    longitude: -87.19,
    state: "wisconsin"
  },
  {
    name: "Wildcat Mountain State Park",
    description: "Features the Kickapoo River and scenic overlooks.",
    location: "Ontario, WI",
    latitude: 43.70,
    longitude: -90.60,
    state: "wisconsin"
  },
  {
    name: "Willow River State Park",
    description: "Features a dramatic waterfall and extensive hiking trails.",
    location: "Hudson, WI",
    latitude: 45.02,
    longitude: -92.68,
    state: "wisconsin"
  },
  {
    name: "Wyalusing State Park",
    description: "Features the confluence of the Wisconsin and Mississippi Rivers.",
    location: "Bagley, WI",
    latitude: 42.98,
    longitude: -91.10,
    state: "wisconsin"
  },
  {
    name: "Yellowstone Lake State Park",
    description: "Features a large lake with extensive water recreation.",
    location: "Blanchardville, WI",
    latitude: 42.80,
    longitude: -89.86,
    state: "wisconsin"
  }
];

async function populateWisconsinParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of wisconsinParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Wisconsin parks have been added to the database');
  } catch (error) {
    console.error('Error adding Wisconsin parks:', error);
  }
}

populateWisconsinParks(); 