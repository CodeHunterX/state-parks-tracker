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

const pennsylvaniaParks = [
  {
    name: 'Bald Eagle State Park',
    location: 'Howard, PA',
    description: 'Features camping and water recreation on Foster Joseph Sayers Lake.',
    latitude: 41.0167,
    longitude: -77.6667,
    state: 'pennsylvania'
  },
  {
    name: 'Beltzville State Park',
    location: 'Lehighton, PA',
    description: 'Features camping and water recreation on Beltzville Lake.',
    latitude: 40.8333,
    longitude: -75.6167,
    state: 'pennsylvania'
  },
  {
    name: 'Big Pocono State Park',
    location: 'Tannersville, PA',
    description: 'Features scenic views from Camelback Mountain.',
    latitude: 41.0333,
    longitude: -75.3167,
    state: 'pennsylvania'
  },
  {
    name: 'Black Moshannon State Park',
    location: 'Philipsburg, PA',
    description: 'Features camping and hiking trails in a unique bog environment.',
    latitude: 40.9167,
    longitude: -78.0333,
    state: 'pennsylvania'
  },
  {
    name: 'Blue Knob State Park',
    location: 'Claysburg, PA',
    description: 'Features skiing in winter and hiking trails in summer.',
    latitude: 40.2667,
    longitude: -78.5500,
    state: 'pennsylvania'
  },
  {
    name: 'Caledonia State Park',
    location: 'Fayetteville, PA',
    description: 'Features camping and historic site of Thaddeus Stevens\' iron works.',
    latitude: 39.9167,
    longitude: -77.4833,
    state: 'pennsylvania'
  },
  {
    name: 'Chapman State Park',
    location: 'Clarendon, PA',
    description: 'Features camping and water recreation on Chapman Lake.',
    latitude: 41.7833,
    longitude: -79.0667,
    state: 'pennsylvania'
  },
  {
    name: 'Cherry Springs State Park',
    location: 'Coudersport, PA',
    description: 'Features one of the best stargazing locations in the eastern US.',
    latitude: 41.6667,
    longitude: -77.8167,
    state: 'pennsylvania'
  },
  {
    name: 'Clear Creek State Park',
    location: 'Sigel, PA',
    description: 'Features camping and hiking trails in the Allegheny National Forest.',
    latitude: 41.2833,
    longitude: -79.2000,
    state: 'pennsylvania'
  },
  {
    name: 'Codorus State Park',
    location: 'Hanover, PA',
    description: 'Features camping and water recreation on Lake Marburg.',
    latitude: 39.8167,
    longitude: -76.8667,
    state: 'pennsylvania'
  },
  {
    name: 'Colonel Denning State Park',
    location: 'Newville, PA',
    description: 'Features camping and hiking trails in the Tuscarora State Forest.',
    latitude: 40.1833,
    longitude: -77.4000,
    state: 'pennsylvania'
  },
  {
    name: 'Colton Point State Park',
    location: 'Wellsboro, PA',
    description: 'Features scenic views of the Pine Creek Gorge.',
    latitude: 41.7000,
    longitude: -77.4667,
    state: 'pennsylvania'
  },
  {
    name: 'Cook Forest State Park',
    location: 'Cooksburg, PA',
    description: 'Features old-growth forest and the Clarion River.',
    latitude: 41.3333,
    longitude: -79.2000,
    state: 'pennsylvania'
  },
  {
    name: 'Cowans Gap State Park',
    location: 'Fort Loudon, PA',
    description: 'Features camping and water recreation on Cowans Gap Lake.',
    latitude: 40.0833,
    longitude: -77.9167,
    state: 'pennsylvania'
  },
  {
    name: 'Delaware Canal State Park',
    location: 'Easton, PA',
    description: 'Features historic canal and towpath for hiking and biking.',
    latitude: 40.6833,
    longitude: -75.2167,
    state: 'pennsylvania'
  },
  {
    name: 'Elk State Park',
    location: 'Wilcox, PA',
    description: 'Features camping and water recreation on East Branch Clarion River Lake.',
    latitude: 41.5667,
    longitude: -78.3833,
    state: 'pennsylvania'
  },
  {
    name: 'Erie Bluffs State Park',
    location: 'Girard, PA',
    description: 'Features beach access and scenic views of Lake Erie.',
    latitude: 42.0167,
    longitude: -80.3167,
    state: 'pennsylvania'
  },
  {
    name: 'Evansburg State Park',
    location: 'Collegeville, PA',
    description: 'Features historic site and hiking trails along the Skippack Creek.',
    latitude: 40.1833,
    longitude: -75.4333,
    state: 'pennsylvania'
  },
  {
    name: 'Fort Washington State Park',
    location: 'Fort Washington, PA',
    description: 'Features historic site and scenic views.',
    latitude: 40.1333,
    longitude: -75.2000,
    state: 'pennsylvania'
  },
  {
    name: 'French Creek State Park',
    location: 'Elverson, PA',
    description: 'Features camping and water recreation on Hopewell Lake.',
    latitude: 40.2000,
    longitude: -75.8000,
    state: 'pennsylvania'
  },
  {
    name: 'Gifford Pinchot State Park',
    location: 'Lewisberry, PA',
    description: 'Features camping and water recreation on Pinchot Lake.',
    latitude: 40.0833,
    longitude: -76.8833,
    state: 'pennsylvania'
  },
  {
    name: 'Gouldsboro State Park',
    location: 'Gouldsboro, PA',
    description: 'Features camping and water recreation on Gouldsboro Lake.',
    latitude: 41.2333,
    longitude: -75.4667,
    state: 'pennsylvania'
  },
  {
    name: 'Greenwood Furnace State Park',
    location: 'Huntingdon, PA',
    description: 'Features historic iron furnace and camping.',
    latitude: 40.6333,
    longitude: -77.7500,
    state: 'pennsylvania'
  },
  {
    name: 'Hickory Run State Park',
    location: 'White Haven, PA',
    description: 'Features Boulder Field, waterfalls, and camping.',
    latitude: 41.0500,
    longitude: -75.7167,
    state: 'pennsylvania'
  },
  {
    name: 'Hillman State Park',
    location: 'Burgettstown, PA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 40.3833,
    longitude: -80.4167,
    state: 'pennsylvania'
  },
  {
    name: 'Hyner Run State Park',
    location: 'Renovo, PA',
    description: 'Features camping and scenic views of the Susquehanna River.',
    latitude: 41.3333,
    longitude: -77.6333,
    state: 'pennsylvania'
  },
  {
    name: 'Hyner View State Park',
    location: 'Hyner, PA',
    description: 'Features scenic overlook of the Susquehanna River.',
    latitude: 41.3333,
    longitude: -77.6333,
    state: 'pennsylvania'
  },
  {
    name: 'Kettle Creek State Park',
    location: 'Renovo, PA',
    description: 'Features camping and water recreation on Kettle Creek Reservoir.',
    latitude: 41.3667,
    longitude: -77.7167,
    state: 'pennsylvania'
  },
  {
    name: 'Keystone State Park',
    location: 'Derry, PA',
    description: 'Features camping and water recreation on Keystone Lake.',
    latitude: 40.3667,
    longitude: -79.3833,
    state: 'pennsylvania'
  },
  {
    name: 'Kings Gap Environmental Education Center',
    location: 'Carlisle, PA',
    description: 'Features environmental education programs and hiking trails.',
    latitude: 40.0833,
    longitude: -77.2833,
    state: 'pennsylvania'
  },
  {
    name: 'Kooser State Park',
    location: 'Somerset, PA',
    description: 'Features camping and hiking trails.',
    latitude: 40.1167,
    longitude: -79.2333,
    state: 'pennsylvania'
  },
  {
    name: 'Lackawanna State Park',
    location: 'North Abington Township, PA',
    description: 'Features camping and water recreation on Lackawanna Lake.',
    latitude: 41.4833,
    longitude: -75.7000,
    state: 'pennsylvania'
  },
  {
    name: 'Laurel Hill State Park',
    location: 'Somerset, PA',
    description: 'Features camping and water recreation on Laurel Hill Lake.',
    latitude: 40.0167,
    longitude: -79.1333,
    state: 'pennsylvania'
  },
  {
    name: 'Laurel Mountain State Park',
    location: 'Jennerstown, PA',
    description: 'Features skiing in winter and hiking trails in summer.',
    latitude: 40.1167,
    longitude: -79.2000,
    state: 'pennsylvania'
  },
  {
    name: 'Laurel Ridge State Park',
    location: 'Various locations, PA',
    description: 'Features the Laurel Highlands Hiking Trail.',
    latitude: 40.1167,
    longitude: -79.2000,
    state: 'pennsylvania'
  },
  {
    name: 'Laurel Summit State Park',
    location: 'Donegal, PA',
    description: 'Features scenic views and hiking trails.',
    latitude: 40.1167,
    longitude: -79.2000,
    state: 'pennsylvania'
  },
  {
    name: 'Lehigh Gorge State Park',
    location: 'Jim Thorpe, PA',
    description: 'Features scenic gorge and rail trail for hiking and biking.',
    latitude: 40.8833,
    longitude: -75.7333,
    state: 'pennsylvania'
  },
  {
    name: 'Leonard Harrison State Park',
    location: 'Wellsboro, PA',
    description: 'Features scenic views of the Pine Creek Gorge.',
    latitude: 41.7000,
    longitude: -77.4667,
    state: 'pennsylvania'
  },
  {
    name: 'Linn Run State Park',
    location: 'Rector, PA',
    description: 'Features camping and hiking trails.',
    latitude: 40.1667,
    longitude: -79.2333,
    state: 'pennsylvania'
  },
  {
    name: 'Little Buffalo State Park',
    location: 'Newport, PA',
    description: 'Features historic grist mill and water recreation on Holman Lake.',
    latitude: 40.4833,
    longitude: -77.1667,
    state: 'pennsylvania'
  },
  {
    name: 'Little Pine State Park',
    location: 'Waterville, PA',
    description: 'Features camping and water recreation on Little Pine Lake.',
    latitude: 41.3667,
    longitude: -77.4167,
    state: 'pennsylvania'
  },
  {
    name: 'Locust Lake State Park',
    location: 'Barnesville, PA',
    description: 'Features camping and water recreation on Locust Lake.',
    latitude: 40.7833,
    longitude: -76.0667,
    state: 'pennsylvania'
  },
  {
    name: 'Lyman Run State Park',
    location: 'Galeton, PA',
    description: 'Features camping and water recreation on Lyman Run Lake.',
    latitude: 41.7000,
    longitude: -77.8833,
    state: 'pennsylvania'
  },
  {
    name: 'Marsh Creek State Park',
    location: 'Downingtown, PA',
    description: 'Features water recreation on Marsh Creek Lake.',
    latitude: 40.0333,
    longitude: -75.7333,
    state: 'pennsylvania'
  },
  {
    name: 'Maurice K. Goddard State Park',
    location: 'Sandy Lake, PA',
    description: 'Features camping and water recreation on Lake Wilhelm.',
    latitude: 41.3667,
    longitude: -80.1667,
    state: 'pennsylvania'
  },
  {
    name: 'McCalls Dam State Park',
    location: 'McElhattan, PA',
    description: 'Features historic dam and fishing on Bald Eagle Creek.',
    latitude: 41.1667,
    longitude: -77.3667,
    state: 'pennsylvania'
  },
  {
    name: 'McConnells Mill State Park',
    location: 'Portersville, PA',
    description: 'Features historic grist mill and scenic gorge.',
    latitude: 40.9333,
    longitude: -80.1667,
    state: 'pennsylvania'
  },
  {
    name: 'Memorial Lake State Park',
    location: 'Lebanon, PA',
    description: 'Features water recreation on Memorial Lake.',
    latitude: 40.4167,
    longitude: -76.5833,
    state: 'pennsylvania'
  },
  {
    name: 'Milton State Park',
    location: 'Milton, PA',
    description: 'Features island park on the Susquehanna River.',
    latitude: 41.0167,
    longitude: -76.8500,
    state: 'pennsylvania'
  },
  {
    name: 'Mont Alto State Park',
    location: 'Mont Alto, PA',
    description: 'Features historic site and hiking trails.',
    latitude: 39.8333,
    longitude: -77.5500,
    state: 'pennsylvania'
  },
  {
    name: 'Moraine State Park',
    location: 'Portersville, PA',
    description: 'Features camping and water recreation on Lake Arthur.',
    latitude: 40.9500,
    longitude: -80.1167,
    state: 'pennsylvania'
  },
  {
    name: 'Mount Pisgah State Park',
    location: 'Troy, PA',
    description: 'Features camping and water recreation on Stephen Foster Lake.',
    latitude: 41.7167,
    longitude: -76.5167,
    state: 'pennsylvania'
  },
  {
    name: 'Neshaminy State Park',
    location: 'Bensalem, PA',
    description: 'Features water recreation on the Delaware River.',
    latitude: 40.0667,
    longitude: -74.9500,
    state: 'pennsylvania'
  },
  {
    name: 'Nockamixon State Park',
    location: 'Quakertown, PA',
    description: 'Features camping and water recreation on Lake Nockamixon.',
    latitude: 40.4667,
    longitude: -75.2167,
    state: 'pennsylvania'
  },
  {
    name: 'Ohiopyle State Park',
    location: 'Ohiopyle, PA',
    description: 'Features whitewater rafting and hiking trails.',
    latitude: 39.8667,
    longitude: -79.5000,
    state: 'pennsylvania'
  },
  {
    name: 'Oil Creek State Park',
    location: 'Oil City, PA',
    description: 'Features historic oil region and hiking trails.',
    latitude: 41.5667,
    longitude: -79.7000,
    state: 'pennsylvania'
  },
  {
    name: 'Ole Bull State Park',
    location: 'Cross Fork, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.4833,
    longitude: -77.7167,
    state: 'pennsylvania'
  },
  {
    name: 'Parker Dam State Park',
    location: 'Penfield, PA',
    description: 'Features camping and water recreation on Parker Lake.',
    latitude: 41.2000,
    longitude: -78.5000,
    state: 'pennsylvania'
  },
  {
    name: 'Patterson State Park',
    location: 'Renovo, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.3333,
    longitude: -77.7500,
    state: 'pennsylvania'
  },
  {
    name: 'Pine Grove Furnace State Park',
    location: 'Gardners, PA',
    description: 'Features historic iron furnace and camping.',
    latitude: 40.0333,
    longitude: -77.3000,
    state: 'pennsylvania'
  },
  {
    name: 'Poe Paddy State Park',
    location: 'Milroy, PA',
    description: 'Features camping and fishing on Penns Creek.',
    latitude: 40.7833,
    longitude: -77.4667,
    state: 'pennsylvania'
  },
  {
    name: 'Poe Valley State Park',
    location: 'Milroy, PA',
    description: 'Features camping and water recreation on Poe Lake.',
    latitude: 40.7833,
    longitude: -77.4667,
    state: 'pennsylvania'
  },
  {
    name: 'Point State Park',
    location: 'Pittsburgh, PA',
    description: 'Features historic site at the confluence of three rivers.',
    latitude: 40.4333,
    longitude: -80.0167,
    state: 'pennsylvania'
  },
  {
    name: 'Presque Isle State Park',
    location: 'Erie, PA',
    description: 'Features beach access and water recreation on Lake Erie.',
    latitude: 42.1500,
    longitude: -80.1167,
    state: 'pennsylvania'
  },
  {
    name: 'Prince Gallitzin State Park',
    location: 'Patton, PA',
    description: 'Features camping and water recreation on Glendale Lake.',
    latitude: 40.6333,
    longitude: -78.8167,
    state: 'pennsylvania'
  },
  {
    name: 'Promised Land State Park',
    location: 'Greentown, PA',
    description: 'Features camping and water recreation on Promised Land Lake.',
    latitude: 41.3167,
    longitude: -75.3167,
    state: 'pennsylvania'
  },
  {
    name: 'Prompton State Park',
    location: 'Prompton, PA',
    description: 'Features water recreation on Prompton Lake.',
    latitude: 41.5833,
    longitude: -75.3167,
    state: 'pennsylvania'
  },
  {
    name: 'Pymatuning State Park',
    location: 'Jamestown, PA',
    description: 'Features camping and water recreation on Pymatuning Lake.',
    latitude: 41.5000,
    longitude: -80.5000,
    state: 'pennsylvania'
  },
  {
    name: 'Raccoon Creek State Park',
    location: 'Hookstown, PA',
    description: 'Features camping and water recreation on Raccoon Lake.',
    latitude: 40.5000,
    longitude: -80.4167,
    state: 'pennsylvania'
  },
  {
    name: 'Ralph Stover State Park',
    location: 'Pipersville, PA',
    description: 'Features scenic views of the Tohickon Creek.',
    latitude: 40.4167,
    longitude: -75.1000,
    state: 'pennsylvania'
  },
  {
    name: 'Ravensburg State Park',
    location: 'Jersey Shore, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.2333,
    longitude: -77.2333,
    state: 'pennsylvania'
  },
  {
    name: 'Reeds Gap State Park',
    location: 'Milroy, PA',
    description: 'Features camping and hiking trails.',
    latitude: 40.7167,
    longitude: -77.3667,
    state: 'pennsylvania'
  },
  {
    name: 'Ricketts Glen State Park',
    location: 'Benton, PA',
    description: 'Features 22 waterfalls and extensive hiking trails.',
    latitude: 41.3333,
    longitude: -76.2833,
    state: 'pennsylvania'
  },
  {
    name: 'Ridley Creek State Park',
    location: 'Media, PA',
    description: 'Features historic site and hiking trails.',
    latitude: 39.9167,
    longitude: -75.4167,
    state: 'pennsylvania'
  },
  {
    name: 'Ryerson Station State Park',
    location: 'Wind Ridge, PA',
    description: 'Features camping and water recreation on Ryerson Station Lake.',
    latitude: 39.9167,
    longitude: -80.4667,
    state: 'pennsylvania'
  },
  {
    name: 'S.B. Elliott State Park',
    location: 'Penfield, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.2000,
    longitude: -78.5000,
    state: 'pennsylvania'
  },
  {
    name: 'Salt Springs State Park',
    location: 'Montrose, PA',
    description: 'Features waterfalls and hiking trails.',
    latitude: 41.8333,
    longitude: -75.9167,
    state: 'pennsylvania'
  },
  {
    name: 'Samuel S. Lewis State Park',
    location: 'York, PA',
    description: 'Features scenic views of the Susquehanna River.',
    latitude: 40.0167,
    longitude: -76.7000,
    state: 'pennsylvania'
  },
  {
    name: 'Sand Bridge State Park',
    location: 'Lock Haven, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.1333,
    longitude: -77.4500,
    state: 'pennsylvania'
  },
  {
    name: 'Shawnee State Park',
    location: 'Schellsburg, PA',
    description: 'Features camping and water recreation on Shawnee Lake.',
    latitude: 40.0167,
    longitude: -78.6500,
    state: 'pennsylvania'
  },
  {
    name: 'Sinnemahoning State Park',
    location: 'Austin, PA',
    description: 'Features camping and water recreation on George B. Stevenson Reservoir.',
    latitude: 41.5333,
    longitude: -78.0833,
    state: 'pennsylvania'
  },
  {
    name: 'Sizerville State Park',
    location: 'Emporium, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.5167,
    longitude: -78.2167,
    state: 'pennsylvania'
  },
  {
    name: 'Susquehanna State Park',
    location: 'Havre de Grace, MD',
    description: 'Features historic site and scenic views of the Susquehanna River.',
    latitude: 39.5500,
    longitude: -76.0833,
    state: 'pennsylvania'
  },
  {
    name: 'Swatara State Park',
    location: 'Pine Grove, PA',
    description: 'Features hiking trails along Swatara Creek.',
    latitude: 40.5500,
    longitude: -76.5167,
    state: 'pennsylvania'
  },
  {
    name: 'Tobyhanna State Park',
    location: 'Tobyhanna, PA',
    description: 'Features camping and water recreation on Tobyhanna Lake.',
    latitude: 41.1833,
    longitude: -75.4167,
    state: 'pennsylvania'
  },
  {
    name: 'Trough Creek State Park',
    location: 'James Creek, PA',
    description: 'Features scenic gorge and hiking trails.',
    latitude: 40.2167,
    longitude: -78.1500,
    state: 'pennsylvania'
  },
  {
    name: 'Tyler State Park',
    location: 'Newtown, PA',
    description: 'Features water recreation on Neshaminy Creek.',
    latitude: 40.2333,
    longitude: -74.9167,
    state: 'pennsylvania'
  },
  {
    name: 'Upper Pine Bottom State Park',
    location: 'Waterville, PA',
    description: 'Features camping and hiking trails.',
    latitude: 41.3667,
    longitude: -77.4167,
    state: 'pennsylvania'
  },
  {
    name: 'Varden Conservation Area',
    location: 'Gouldsboro, PA',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 41.2333,
    longitude: -75.4667,
    state: 'pennsylvania'
  },
  {
    name: 'Warriors Path State Park',
    location: 'Huntingdon, PA',
    description: 'Features camping and water recreation on Raystown Lake.',
    latitude: 40.3833,
    longitude: -78.0167,
    state: 'pennsylvania'
  },
  {
    name: 'Whipple Dam State Park',
    location: 'Petersburg, PA',
    description: 'Features camping and water recreation on Whipple Lake.',
    latitude: 40.6667,
    longitude: -78.0000,
    state: 'pennsylvania'
  },
  {
    name: 'White Clay Creek Preserve',
    location: 'Landenberg, PA',
    description: 'Features hiking trails and scenic views.',
    latitude: 39.7333,
    longitude: -75.7833,
    state: 'pennsylvania'
  },
  {
    name: 'Worlds End State Park',
    location: 'Forksville, PA',
    description: 'Features camping and scenic views of the Loyalsock Creek.',
    latitude: 41.4833,
    longitude: -76.5667,
    state: 'pennsylvania'
  }
];

async function populatePennsylvaniaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of pennsylvaniaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Pennsylvania parks have been added to the database');
  } catch (error) {
    console.error('Error adding Pennsylvania parks:', error);
  }
}

populatePennsylvaniaParks(); 