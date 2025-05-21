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

const minnesotaParks = [
  {
    name: "Afton State Park",
    description: "Features scenic views of the St. Croix River and extensive hiking trails.",
    location: "Hastings, MN",
    latitude: 44.86,
    longitude: -92.78,
    state: "minnesota"
  },
  {
    name: "Banning State Park",
    description: "Features the Kettle River, sandstone cliffs, and historic quarry ruins.",
    location: "Sandstone, MN",
    latitude: 46.17,
    longitude: -92.87,
    state: "minnesota"
  },
  {
    name: "Bear Head Lake State Park",
    description: "Features a pristine lake surrounded by forest and abundant wildlife.",
    location: "Ely, MN",
    latitude: 47.82,
    longitude: -92.08,
    state: "minnesota"
  },
  {
    name: "Beaver Creek Valley State Park",
    description: "Features a deep valley with a spring-fed creek and limestone bluffs.",
    location: "Caledonia, MN",
    latitude: 43.63,
    longitude: -91.55,
    state: "minnesota"
  },
  {
    name: "Big Bog State Recreation Area",
    description: "Features the largest peat bog in the lower 48 states and a boardwalk trail.",
    location: "Waskish, MN",
    latitude: 48.19,
    longitude: -94.55,
    state: "minnesota"
  },
  {
    name: "Big Stone Lake State Park",
    description: "Features a large lake with fishing and boating opportunities.",
    location: "Ortonville, MN",
    latitude: 45.32,
    longitude: -96.47,
    state: "minnesota"
  },
  {
    name: "Blue Mounds State Park",
    description: "Features a tall quartzite cliff and a bison herd.",
    location: "Luverne, MN",
    latitude: 43.70,
    longitude: -96.20,
    state: "minnesota"
  },
  {
    name: "Buffalo River State Park",
    description: "Features tallgrass prairie and the Buffalo River.",
    location: "Glyndon, MN",
    latitude: 46.94,
    longitude: -96.58,
    state: "minnesota"
  },
  {
    name: "Camden State Park",
    description: "Features the Redwood River and scenic bluffs.",
    location: "Lynd, MN",
    latitude: 44.37,
    longitude: -95.95,
    state: "minnesota"
  },
  {
    name: "Carley State Park",
    description: "Features a spring-fed stream and rare wildflowers.",
    location: "Plainview, MN",
    latitude: 44.10,
    longitude: -92.16,
    state: "minnesota"
  },
  {
    name: "Cascade River State Park",
    description: "Features waterfalls and Lake Superior shoreline.",
    location: "Lutsen, MN",
    latitude: 47.71,
    longitude: -90.54,
    state: "minnesota"
  },
  {
    name: "Charles A. Lindbergh State Park",
    description: "Features the boyhood home of Charles Lindbergh and the Mississippi River.",
    location: "Little Falls, MN",
    latitude: 45.98,
    longitude: -94.36,
    state: "minnesota"
  },
  {
    name: "Crow Wing State Park",
    description: "Features the confluence of the Crow Wing and Mississippi Rivers.",
    location: "Brainerd, MN",
    latitude: 46.27,
    longitude: -94.33,
    state: "minnesota"
  },
  {
    name: "Father Hennepin State Park",
    description: "Features Mille Lacs Lake and historic sites.",
    location: "Isle, MN",
    latitude: 46.14,
    longitude: -93.47,
    state: "minnesota"
  },
  {
    name: "Flandrau State Park",
    description: "Features the Cottonwood River and historic CCC structures.",
    location: "New Ulm, MN",
    latitude: 44.28,
    longitude: -94.49,
    state: "minnesota"
  },
  {
    name: "Forestville Mystery Cave State Park",
    description: "Features a historic town site and extensive cave system.",
    location: "Preston, MN",
    latitude: 43.64,
    longitude: -92.21,
    state: "minnesota"
  },
  {
    name: "Fort Ridgely State Park",
    description: "Features historic fort ruins and the Minnesota River Valley.",
    location: "Fairfax, MN",
    latitude: 44.45,
    longitude: -94.73,
    state: "minnesota"
  },
  {
    name: "Fort Snelling State Park",
    description: "Features historic fort and the confluence of the Mississippi and Minnesota Rivers.",
    location: "St. Paul, MN",
    latitude: 44.89,
    longitude: -93.18,
    state: "minnesota"
  },
  {
    name: "Franz Jevne State Park",
    description: "Features the Rainy River and international border with Canada.",
    location: "International Falls, MN",
    latitude: 48.66,
    longitude: -93.83,
    state: "minnesota"
  },
  {
    name: "Frontenac State Park",
    description: "Features bluffs overlooking the Mississippi River and Lake Pepin.",
    location: "Frontenac, MN",
    latitude: 44.50,
    longitude: -92.33,
    state: "minnesota"
  },
  {
    name: "George H. Crosby Manitou State Park",
    description: "Features rugged terrain and the Manitou River.",
    location: "Finland, MN",
    latitude: 47.51,
    longitude: -90.94,
    state: "minnesota"
  },
  {
    name: "Glacial Lakes State Park",
    description: "Features rolling prairie and glacial lakes.",
    location: "Starbuck, MN",
    latitude: 45.73,
    longitude: -95.38,
    state: "minnesota"
  },
  {
    name: "Gooseberry Falls State Park",
    description: "Features waterfalls and Lake Superior shoreline.",
    location: "Two Harbors, MN",
    latitude: 47.15,
    longitude: -91.67,
    state: "minnesota"
  },
  {
    name: "Grand Portage State Park",
    description: "Features High Falls and the historic Grand Portage.",
    location: "Grand Portage, MN",
    latitude: 48.00,
    longitude: -89.68,
    state: "minnesota"
  },
  {
    name: "Great River Bluffs State Park",
    description: "Features bluffs overlooking the Mississippi River.",
    location: "Winona, MN",
    latitude: 43.95,
    longitude: -91.40,
    state: "minnesota"
  },
  {
    name: "Hayes Lake State Park",
    description: "Features a lake surrounded by forest and wetlands.",
    location: "Roseau, MN",
    latitude: 48.62,
    longitude: -95.39,
    state: "minnesota"
  },
  {
    name: "Hill Annex Mine State Park",
    description: "Features a historic iron mine and museum.",
    location: "Calumet, MN",
    latitude: 47.32,
    longitude: -93.27,
    state: "minnesota"
  },
  {
    name: "Interstate State Park",
    description: "Features the St. Croix River and glacial potholes.",
    location: "Taylors Falls, MN",
    latitude: 45.40,
    longitude: -92.65,
    state: "minnesota"
  },
  {
    name: "Itasca State Park",
    description: "Features the headwaters of the Mississippi River and old-growth forest.",
    location: "Park Rapids, MN",
    latitude: 47.23,
    longitude: -95.20,
    state: "minnesota"
  },
  {
    name: "Jay Cooke State Park",
    description: "Features the St. Louis River and historic suspension bridge.",
    location: "Carlton, MN",
    latitude: 46.65,
    longitude: -92.33,
    state: "minnesota"
  },
  {
    name: "Judge C.R. Magney State Park",
    description: "Features the Brule River and Devil's Kettle waterfall.",
    location: "Grand Marais, MN",
    latitude: 47.83,
    longitude: -90.06,
    state: "minnesota"
  },
  {
    name: "Kilen Woods State Park",
    description: "Features the Des Moines River and hardwood forest.",
    location: "Lakefield, MN",
    latitude: 43.68,
    longitude: -95.18,
    state: "minnesota"
  },
  {
    name: "Lac qui Parle State Park",
    description: "Features a large lake and wildlife viewing opportunities.",
    location: "Montevideo, MN",
    latitude: 45.03,
    longitude: -95.88,
    state: "minnesota"
  },
  {
    name: "Lake Bemidji State Park",
    description: "Features Lake Bemidji and the Mississippi River headwaters.",
    location: "Bemidji, MN",
    latitude: 47.58,
    longitude: -94.85,
    state: "minnesota"
  },
  {
    name: "Lake Bronson State Park",
    description: "Features a lake and historic water tower.",
    location: "Lake Bronson, MN",
    latitude: 48.73,
    longitude: -96.66,
    state: "minnesota"
  },
  {
    name: "Lake Carlos State Park",
    description: "Features a large lake and hardwood forest.",
    location: "Carlos, MN",
    latitude: 45.97,
    longitude: -95.32,
    state: "minnesota"
  },
  {
    name: "Lake Louise State Park",
    description: "Features a lake and prairie landscape.",
    location: "Le Roy, MN",
    latitude: 43.52,
    longitude: -92.50,
    state: "minnesota"
  },
  {
    name: "Lake Maria State Park",
    description: "Features lakes and hardwood forest.",
    location: "Monticello, MN",
    latitude: 45.32,
    longitude: -93.72,
    state: "minnesota"
  },
  {
    name: "Lake Shetek State Park",
    description: "Features Minnesota's largest lake in the southwest region.",
    location: "Currie, MN",
    latitude: 44.12,
    longitude: -95.69,
    state: "minnesota"
  },
  {
    name: "Lake Vermilion-Soudan Underground Mine State Park",
    description: "Features a historic iron mine and Lake Vermilion.",
    location: "Soudan, MN",
    latitude: 47.82,
    longitude: -92.24,
    state: "minnesota"
  },
  {
    name: "Maplewood State Park",
    description: "Features maple forests and glacial lakes.",
    location: "Pelican Rapids, MN",
    latitude: 46.53,
    longitude: -95.92,
    state: "minnesota"
  },
  {
    name: "McCarthy Beach State Park",
    description: "Features lakes and the Sturgeon River.",
    location: "Side Lake, MN",
    latitude: 47.67,
    longitude: -93.05,
    state: "minnesota"
  },
  {
    name: "Mille Lacs Kathio State Park",
    description: "Features historic sites and Lake Mille Lacs.",
    location: "Onamia, MN",
    latitude: 46.14,
    longitude: -93.75,
    state: "minnesota"
  },
  {
    name: "Minneopa State Park",
    description: "Features waterfalls and bison herd.",
    location: "Mankato, MN",
    latitude: 44.16,
    longitude: -94.10,
    state: "minnesota"
  },
  {
    name: "Monson Lake State Park",
    description: "Features a lake and historic mission site.",
    location: "Sunburg, MN",
    latitude: 45.35,
    longitude: -95.24,
    state: "minnesota"
  },
  {
    name: "Moose Lake State Park",
    description: "Features a lake and forest landscape.",
    location: "Moose Lake, MN",
    latitude: 46.45,
    longitude: -92.76,
    state: "minnesota"
  },
  {
    name: "Myre-Big Island State Park",
    description: "Features a large island in Albert Lea Lake.",
    location: "Albert Lea, MN",
    latitude: 43.65,
    longitude: -93.37,
    state: "minnesota"
  },
  {
    name: "Nerstrand Big Woods State Park",
    description: "Features hardwood forest and Hidden Falls.",
    location: "Nerstrand, MN",
    latitude: 44.34,
    longitude: -93.07,
    state: "minnesota"
  },
  {
    name: "Old Mill State Park",
    description: "Features a historic mill and the Middle River.",
    location: "Argyle, MN",
    latitude: 48.35,
    longitude: -96.56,
    state: "minnesota"
  },
  {
    name: "Red River State Recreation Area",
    description: "Features the Red River and flood protection system.",
    location: "East Grand Forks, MN",
    latitude: 47.93,
    longitude: -97.02,
    state: "minnesota"
  },
  {
    name: "Rice Lake State Park",
    description: "Features a lake and prairie landscape.",
    location: "Owatonna, MN",
    latitude: 44.09,
    longitude: -93.12,
    state: "minnesota"
  },
  {
    name: "St. Croix State Park",
    description: "Features the St. Croix River and historic structures.",
    location: "Hinckley, MN",
    latitude: 46.12,
    longitude: -92.87,
    state: "minnesota"
  },
  {
    name: "Sakatah Lake State Park",
    description: "Features a lake and the Sakatah Singing Hills Trail.",
    location: "Waterville, MN",
    latitude: 44.22,
    longitude: -93.57,
    state: "minnesota"
  },
  {
    name: "Savanna Portage State Park",
    description: "Features historic portage and diverse ecosystems.",
    location: "McGregor, MN",
    latitude: 46.83,
    longitude: -93.17,
    state: "minnesota"
  },
  {
    name: "Scenic State Park",
    description: "Features lakes and old-growth pine forest.",
    location: "Bigfork, MN",
    latitude: 47.73,
    longitude: -93.79,
    state: "minnesota"
  },
  {
    name: "Schoolcraft State Park",
    description: "Features the Mississippi River and historic sites.",
    location: "Deer River, MN",
    latitude: 47.32,
    longitude: -93.79,
    state: "minnesota"
  },
  {
    name: "Sibley State Park",
    description: "Features Mount Tom and Lake Andrew.",
    location: "New London, MN",
    latitude: 45.31,
    longitude: -95.04,
    state: "minnesota"
  },
  {
    name: "Split Rock Lighthouse State Park",
    description: "Features historic lighthouse and Lake Superior shoreline.",
    location: "Two Harbors, MN",
    latitude: 47.20,
    longitude: -91.37,
    state: "minnesota"
  },
  {
    name: "Temperance River State Park",
    description: "Features waterfalls and Lake Superior shoreline.",
    location: "Schroeder, MN",
    latitude: 47.55,
    longitude: -90.87,
    state: "minnesota"
  },
  {
    name: "Tettegouche State Park",
    description: "Features high cliffs and Lake Superior shoreline.",
    location: "Silver Bay, MN",
    latitude: 47.37,
    longitude: -91.23,
    state: "minnesota"
  },
  {
    name: "Upper Sioux Agency State Park",
    description: "Features historic agency site and the Minnesota River.",
    location: "Granite Falls, MN",
    latitude: 44.73,
    longitude: -95.46,
    state: "minnesota"
  },
  {
    name: "Whitewater State Park",
    description: "Features limestone bluffs and the Whitewater River.",
    location: "Altura, MN",
    latitude: 44.07,
    longitude: -92.03,
    state: "minnesota"
  },
  {
    name: "Wild River State Park",
    description: "Features the St. Croix River and historic sites.",
    location: "Center City, MN",
    latitude: 45.52,
    longitude: -92.93,
    state: "minnesota"
  },
  {
    name: "William O'Brien State Park",
    description: "Features the St. Croix River and historic structures.",
    location: "Marine on St. Croix, MN",
    latitude: 45.22,
    longitude: -92.77,
    state: "minnesota"
  },
  {
    name: "Zippel Bay State Park",
    description: "Features Lake of the Woods shoreline and historic sites.",
    location: "Williams, MN",
    latitude: 48.83,
    longitude: -94.95,
    state: "minnesota"
  }
];

async function populateMinnesotaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of minnesotaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Minnesota parks have been added to the database');
  } catch (error) {
    console.error('Error adding Minnesota parks:', error);
  }
}

populateMinnesotaParks(); 