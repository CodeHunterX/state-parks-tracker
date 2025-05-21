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

const ohioParks = [
  {
    name: "Adams Lake State Park",
    description: "Features a 47-acre lake with fishing, boating, and swimming opportunities.",
    location: "West Union, OH",
    latitude: 38.79,
    longitude: -83.55,
    state: "ohio"
  },
  {
    name: "Alum Creek State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Delaware, OH",
    latitude: 40.18,
    longitude: -82.97,
    state: "ohio"
  },
  {
    name: "A.W. Marion State Park",
    description: "Features Hargus Lake with fishing, boating, and camping facilities.",
    location: "Circleville, OH",
    latitude: 39.62,
    longitude: -82.95,
    state: "ohio"
  },
  {
    name: "Barkcamp State Park",
    description: "Features Belmont Lake with fishing, boating, and extensive hiking trails.",
    location: "Belmont, OH",
    latitude: 40.02,
    longitude: -80.98,
    state: "ohio"
  },
  {
    name: "Beaver Creek State Park",
    description: "Features scenic gorges, waterfalls, and historic Gaston's Mill.",
    location: "East Liverpool, OH",
    latitude: 40.73,
    longitude: -80.65,
    state: "ohio"
  },
  {
    name: "Blue Rock State Park",
    description: "Features a forested landscape with hiking trails and camping facilities.",
    location: "Zanesville, OH",
    latitude: 39.81,
    longitude: -81.89,
    state: "ohio"
  },
  {
    name: "Buck Creek State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Springfield, OH",
    latitude: 39.93,
    longitude: -83.82,
    state: "ohio"
  },
  {
    name: "Burr Oak State Park",
    description: "Features a scenic lake surrounded by forested hills and hiking trails.",
    location: "Glouster, OH",
    latitude: 39.53,
    longitude: -82.18,
    state: "ohio"
  },
  {
    name: "Caesar Creek State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Waynesville, OH",
    latitude: 39.48,
    longitude: -84.06,
    state: "ohio"
  },
  {
    name: "Catawba Island State Park",
    description: "Features Lake Erie access with fishing and boating opportunities.",
    location: "Port Clinton, OH",
    latitude: 41.61,
    longitude: -82.84,
    state: "ohio"
  },
  {
    name: "Cleveland Lakefront State Park",
    description: "Features Lake Erie beaches, fishing, and boating facilities.",
    location: "Cleveland, OH",
    latitude: 41.54,
    longitude: -81.64,
    state: "ohio"
  },
  {
    name: "Cowan Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Wilmington, OH",
    latitude: 39.38,
    longitude: -83.92,
    state: "ohio"
  },
  {
    name: "Deer Creek State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Mount Sterling, OH",
    latitude: 39.62,
    longitude: -83.38,
    state: "ohio"
  },
  {
    name: "Delaware State Park",
    description: "Features Delaware Lake with boating, fishing, and swimming beaches.",
    location: "Delaware, OH",
    latitude: 40.29,
    longitude: -83.07,
    state: "ohio"
  },
  {
    name: "Dillon State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Zanesville, OH",
    latitude: 39.98,
    longitude: -82.07,
    state: "ohio"
  },
  {
    name: "East Fork State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Bethel, OH",
    latitude: 39.02,
    longitude: -84.21,
    state: "ohio"
  },
  {
    name: "East Harbor State Park",
    description: "Features Lake Erie beaches, fishing, and boating facilities.",
    location: "Lakeside Marblehead, OH",
    latitude: 41.54,
    longitude: -82.81,
    state: "ohio"
  },
  {
    name: "Findley State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Wellington, OH",
    latitude: 41.17,
    longitude: -82.21,
    state: "ohio"
  },
  {
    name: "Forked Run State Park",
    description: "Features the Ohio River with fishing and boating opportunities.",
    location: "Reedsville, OH",
    latitude: 39.15,
    longitude: -81.75,
    state: "ohio"
  },
  {
    name: "Geneva State Park",
    description: "Features Lake Erie beaches, fishing, and boating facilities.",
    location: "Geneva, OH",
    latitude: 41.86,
    longitude: -80.95,
    state: "ohio"
  },
  {
    name: "Grand Lake St. Marys State Park",
    description: "Features Ohio's largest inland lake with boating, fishing, and swimming.",
    location: "St. Marys, OH",
    latitude: 40.54,
    longitude: -84.51,
    state: "ohio"
  },
  {
    name: "Great Seal State Park",
    description: "Features scenic overlooks and extensive hiking trails.",
    location: "Chillicothe, OH",
    latitude: 39.33,
    longitude: -83.00,
    state: "ohio"
  },
  {
    name: "Guilford Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Lisbon, OH",
    latitude: 40.77,
    longitude: -80.89,
    state: "ohio"
  },
  {
    name: "Harrison Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Fayette, OH",
    latitude: 41.67,
    longitude: -84.33,
    state: "ohio"
  },
  {
    name: "Headlands Beach State Park",
    description: "Features the longest natural beach in Ohio with swimming and fishing.",
    location: "Mentor, OH",
    latitude: 41.76,
    longitude: -81.28,
    state: "ohio"
  },
  {
    name: "Hocking Hills State Park",
    description: "Features scenic gorges, waterfalls, and extensive hiking trails.",
    location: "Logan, OH",
    latitude: 39.43,
    longitude: -82.54,
    state: "ohio"
  },
  {
    name: "Hueston Woods State Park",
    description: "Features a large lake with boating, fishing, and swimming beaches.",
    location: "College Corner, OH",
    latitude: 39.57,
    longitude: -84.75,
    state: "ohio"
  },
  {
    name: "Independence Dam State Park",
    description: "Features the Maumee River with fishing and boating opportunities.",
    location: "Defiance, OH",
    latitude: 41.33,
    longitude: -84.28,
    state: "ohio"
  },
  {
    name: "Indian Lake State Park",
    description: "Features a large lake with boating, fishing, and swimming beaches.",
    location: "Lakeview, OH",
    latitude: 40.47,
    longitude: -83.88,
    state: "ohio"
  },
  {
    name: "Jackson Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Jackson, OH",
    latitude: 39.05,
    longitude: -82.64,
    state: "ohio"
  },
  {
    name: "Jefferson Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Richmond, OH",
    latitude: 40.38,
    longitude: -80.77,
    state: "ohio"
  },
  {
    name: "John Bryan State Park",
    description: "Features scenic gorges and the Little Miami River.",
    location: "Yellow Springs, OH",
    latitude: 39.79,
    longitude: -83.89,
    state: "ohio"
  },
  {
    name: "Kelleys Island State Park",
    description: "Features Lake Erie beaches, fishing, and boating facilities.",
    location: "Kelleys Island, OH",
    latitude: 41.60,
    longitude: -82.70,
    state: "ohio"
  },
  {
    name: "Kiser Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Conover, OH",
    latitude: 40.21,
    longitude: -83.97,
    state: "ohio"
  },
  {
    name: "Lake Alma State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Wellston, OH",
    latitude: 39.12,
    longitude: -82.53,
    state: "ohio"
  },
  {
    name: "Lake Hope State Park",
    description: "Features a scenic lake surrounded by forested hills.",
    location: "McArthur, OH",
    latitude: 39.32,
    longitude: -82.33,
    state: "ohio"
  },
  {
    name: "Lake Logan State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Logan, OH",
    latitude: 39.54,
    longitude: -82.49,
    state: "ohio"
  },
  {
    name: "Lake Loramie State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Minster, OH",
    latitude: 40.35,
    longitude: -84.33,
    state: "ohio"
  },
  {
    name: "Lake White State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Waverly, OH",
    latitude: 39.03,
    longitude: -82.98,
    state: "ohio"
  },
  {
    name: "Little Miami State Park",
    description: "Features the Little Miami River with fishing and boating opportunities.",
    location: "Morrow, OH",
    latitude: 39.35,
    longitude: -84.13,
    state: "ohio"
  },
  {
    name: "Madison Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "London, OH",
    latitude: 39.89,
    longitude: -83.40,
    state: "ohio"
  },
  {
    name: "Malabar Farm State Park",
    description: "Features historic farm buildings and hiking trails.",
    location: "Lucas, OH",
    latitude: 40.63,
    longitude: -82.54,
    state: "ohio"
  },
  {
    name: "Marblehead Lighthouse State Park",
    description: "Features historic lighthouse and Lake Erie access.",
    location: "Marblehead, OH",
    latitude: 41.54,
    longitude: -82.71,
    state: "ohio"
  },
  {
    name: "Mary Jane Thurston State Park",
    description: "Features the Maumee River with fishing and boating opportunities.",
    location: "Grand Rapids, OH",
    latitude: 41.41,
    longitude: -83.86,
    state: "ohio"
  },
  {
    name: "Maumee Bay State Park",
    description: "Features Lake Erie beaches, fishing, and boating facilities.",
    location: "Oregon, OH",
    latitude: 41.69,
    longitude: -83.36,
    state: "ohio"
  },
  {
    name: "Mohican State Park",
    description: "Features scenic gorges, waterfalls, and the Clear Fork River.",
    location: "Loudonville, OH",
    latitude: 40.64,
    longitude: -82.27,
    state: "ohio"
  },
  {
    name: "Mosquito Lake State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Cortland, OH",
    latitude: 41.37,
    longitude: -80.75,
    state: "ohio"
  },
  {
    name: "Mount Gilead State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Mount Gilead, OH",
    latitude: 40.55,
    longitude: -82.83,
    state: "ohio"
  },
  {
    name: "Muskingum River State Park",
    description: "Features the Muskingum River with fishing and boating opportunities.",
    location: "Stockport, OH",
    latitude: 39.55,
    longitude: -81.79,
    state: "ohio"
  },
  {
    name: "Nelson Kennedy Ledges State Park",
    description: "Features unique rock formations and hiking trails.",
    location: "Garrettsville, OH",
    latitude: 41.28,
    longitude: -81.05,
    state: "ohio"
  },
  {
    name: "Paint Creek State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Bainbridge, OH",
    latitude: 39.22,
    longitude: -83.37,
    state: "ohio"
  },
  {
    name: "Pike Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Bainbridge, OH",
    latitude: 39.12,
    longitude: -83.37,
    state: "ohio"
  },
  {
    name: "Portage Lakes State Park",
    description: "Features multiple lakes with boating, fishing, and swimming beaches.",
    location: "Akron, OH",
    latitude: 41.01,
    longitude: -81.53,
    state: "ohio"
  },
  {
    name: "Punderson State Park",
    description: "Features a natural lake with fishing, boating, and swimming beaches.",
    location: "Newbury, OH",
    latitude: 41.45,
    longitude: -81.22,
    state: "ohio"
  },
  {
    name: "Pymatuning State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Andover, OH",
    latitude: 41.63,
    longitude: -80.47,
    state: "ohio"
  },
  {
    name: "Quail Hollow State Park",
    description: "Features historic buildings and hiking trails.",
    location: "Hartville, OH",
    latitude: 40.97,
    longitude: -81.33,
    state: "ohio"
  },
  {
    name: "Rocky Fork State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Hillsboro, OH",
    latitude: 39.18,
    longitude: -83.47,
    state: "ohio"
  },
  {
    name: "Salt Fork State Park",
    description: "Features Ohio's largest state park with a large lake and extensive trails.",
    location: "Cambridge, OH",
    latitude: 40.12,
    longitude: -81.53,
    state: "ohio"
  },
  {
    name: "Scioto Trail State Park",
    description: "Features scenic overlooks and extensive hiking trails.",
    location: "Chillicothe, OH",
    latitude: 39.33,
    longitude: -83.00,
    state: "ohio"
  },
  {
    name: "Shawnee State Park",
    description: "Features a large lake and extensive hiking trails in the Appalachian foothills.",
    location: "Portsmouth, OH",
    latitude: 38.73,
    longitude: -83.20,
    state: "ohio"
  },
  {
    name: "South Bass Island State Park",
    description: "Features Lake Erie beaches, fishing, and boating facilities.",
    location: "Put-in-Bay, OH",
    latitude: 41.65,
    longitude: -82.82,
    state: "ohio"
  },
  {
    name: "Stonelick State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Goshen, OH",
    latitude: 39.22,
    longitude: -84.11,
    state: "ohio"
  },
  {
    name: "Strouds Run State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Athens, OH",
    latitude: 39.33,
    longitude: -82.10,
    state: "ohio"
  },
  {
    name: "Sycamore State Park",
    description: "Features extensive hiking trails and wildlife viewing opportunities.",
    location: "Trotwood, OH",
    latitude: 39.80,
    longitude: -84.31,
    state: "ohio"
  },
  {
    name: "Tar Hollow State Park",
    description: "Features scenic overlooks and extensive hiking trails.",
    location: "Laurelville, OH",
    latitude: 39.35,
    longitude: -82.75,
    state: "ohio"
  },
  {
    name: "Tinkers Creek State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Aurora, OH",
    latitude: 41.32,
    longitude: -81.35,
    state: "ohio"
  },
  {
    name: "Van Buren State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Van Buren, OH",
    latitude: 41.14,
    longitude: -83.65,
    state: "ohio"
  },
  {
    name: "West Branch State Park",
    description: "Features a large reservoir with boating, fishing, and swimming beaches.",
    location: "Ravenna, OH",
    latitude: 41.10,
    longitude: -81.17,
    state: "ohio"
  },
  {
    name: "Wingfoot Lake State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Mogadore, OH",
    latitude: 41.05,
    longitude: -81.38,
    state: "ohio"
  },
  {
    name: "Wolf Run State Park",
    description: "Features a scenic lake with fishing, boating, and swimming beaches.",
    location: "Caldwell, OH",
    latitude: 39.75,
    longitude: -81.52,
    state: "ohio"
  }
];

async function populateOhioParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of ohioParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Ohio parks have been added to the database');
  } catch (error) {
    console.error('Error adding Ohio parks:', error);
  }
}

populateOhioParks(); 