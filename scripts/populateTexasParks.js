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

const texasParks = [
  {
    name: 'Abilene State Park',
    location: 'Tuscola, TX',
    description: 'Features swimming pool, hiking trails, and camping in the Texas Hill Country.',
    latitude: 32.2333,
    longitude: -99.8000,
    state: 'texas'
  },
  {
    name: 'Atlanta State Park',
    location: 'Atlanta, TX',
    description: 'Located on Wright Patman Lake with fishing, boating, and camping.',
    latitude: 33.1167,
    longitude: -94.1667,
    state: 'texas'
  },
  {
    name: 'Balmorhea State Park',
    location: 'Balmorhea, TX',
    description: 'Home to the world\'s largest spring-fed swimming pool.',
    latitude: 30.9500,
    longitude: -103.7333,
    state: 'texas'
  },
  {
    name: 'Barton Warnock Visitor Center',
    location: 'Terlingua, TX',
    description: 'Gateway to Big Bend Ranch State Park with exhibits on natural history.',
    latitude: 29.3167,
    longitude: -103.6167,
    state: 'texas'
  },
  {
    name: 'Bastrop State Park',
    location: 'Bastrop, TX',
    description: 'Known for its "Lost Pines" forest and historic CCC architecture.',
    latitude: 30.1167,
    longitude: -97.2667,
    state: 'texas'
  },
  {
    name: 'Bentsen-Rio Grande Valley State Park',
    location: 'Mission, TX',
    description: 'World-renowned birding destination in the Rio Grande Valley.',
    latitude: 26.1833,
    longitude: -98.3667,
    state: 'texas'
  },
  {
    name: 'Big Bend Ranch State Park',
    location: 'Presidio, TX',
    description: 'Largest state park in Texas with rugged desert and mountain terrain.',
    latitude: 29.4667,
    longitude: -104.1667,
    state: 'texas'
  },
  {
    name: 'Big Spring State Park',
    location: 'Big Spring, TX',
    description: 'Historic park with scenic overlook and hiking trails.',
    latitude: 32.2500,
    longitude: -101.4667,
    state: 'texas'
  },
  {
    name: 'Blanco State Park',
    location: 'Blanco, TX',
    description: 'Features swimming, fishing, and camping on the Blanco River.',
    latitude: 30.1000,
    longitude: -98.4167,
    state: 'texas'
  },
  {
    name: 'Bonham State Park',
    location: 'Bonham, TX',
    description: 'Offers fishing, boating, and camping on Lake Bonham.',
    latitude: 33.5833,
    longitude: -96.1833,
    state: 'texas'
  },
  {
    name: 'Brazos Bend State Park',
    location: 'Needville, TX',
    description: 'Known for alligators, birding, and the George Observatory.',
    latitude: 29.3667,
    longitude: -95.5833,
    state: 'texas'
  },
  {
    name: 'Buescher State Park',
    location: 'Smithville, TX',
    description: 'Features hiking trails and camping in the Lost Pines region.',
    latitude: 30.1167,
    longitude: -97.1667,
    state: 'texas'
  },
  {
    name: 'Caddo Lake State Park',
    location: 'Karnack, TX',
    description: 'Features the only natural lake in Texas with cypress trees and bayous.',
    latitude: 32.6833,
    longitude: -94.1167,
    state: 'texas'
  },
  {
    name: 'Caprock Canyons State Park',
    location: 'Quitaque, TX',
    description: 'Home to the Texas State Bison Herd and scenic canyon trails.',
    latitude: 34.4667,
    longitude: -101.0333,
    state: 'texas'
  },
  {
    name: 'Choke Canyon State Park',
    location: 'Three Rivers, TX',
    description: 'Offers fishing, boating, and camping on Choke Canyon Reservoir.',
    latitude: 28.5167,
    longitude: -98.3667,
    state: 'texas'
  },
  {
    name: 'Cleburne State Park',
    location: 'Cleburne, TX',
    description: 'Features swimming, fishing, and camping on Lake Pat Cleburne.',
    latitude: 32.2333,
    longitude: -97.5667,
    state: 'texas'
  },
  {
    name: 'Colorado Bend State Park',
    location: 'Bend, TX',
    description: 'Known for Gorman Falls and extensive cave system.',
    latitude: 31.0333,
    longitude: -98.4167,
    state: 'texas'
  },
  {
    name: 'Cooper Lake State Park',
    location: 'Sulphur Springs, TX',
    description: 'Features two units with fishing, boating, and camping.',
    latitude: 33.3667,
    longitude: -95.6833,
    state: 'texas'
  },
  {
    name: 'Copper Breaks State Park',
    location: 'Quanah, TX',
    description: 'International Dark Sky Park with scenic badlands.',
    latitude: 34.1000,
    longitude: -99.7500,
    state: 'texas'
  },
  {
    name: 'Daingerfield State Park',
    location: 'Daingerfield, TX',
    description: 'Features swimming, fishing, and camping on a spring-fed lake.',
    latitude: 33.0167,
    longitude: -94.7167,
    state: 'texas'
  },
  {
    name: 'Davis Mountains State Park',
    location: 'Fort Davis, TX',
    description: 'Mountain park with lodge, hiking, and stargazing.',
    latitude: 30.5833,
    longitude: -103.9167,
    state: 'texas'
  },
  {
    name: 'Dinosaur Valley State Park',
    location: 'Glen Rose, TX',
    description: 'Features dinosaur tracks and the Paluxy River.',
    latitude: 32.2500,
    longitude: -97.8167,
    state: 'texas'
  },
  {
    name: 'Eisenhower State Park',
    location: 'Denison, TX',
    description: 'Located on Lake Texoma with fishing, boating, and camping.',
    latitude: 33.8167,
    longitude: -96.5833,
    state: 'texas'
  },
  {
    name: 'Enchanted Rock State Natural Area',
    location: 'Fredericksburg, TX',
    description: 'Features a massive pink granite dome and hiking trails.',
    latitude: 30.5000,
    longitude: -98.8167,
    state: 'texas'
  },
  {
    name: 'Estero Llano Grande State Park',
    location: 'Weslaco, TX',
    description: 'World-class birding destination in the Rio Grande Valley.',
    latitude: 26.0667,
    longitude: -97.9667,
    state: 'texas'
  },
  {
    name: 'Fairfield Lake State Park',
    location: 'Fairfield, TX',
    description: 'Offers fishing, boating, and camping on Fairfield Lake.',
    latitude: 31.7667,
    longitude: -96.1167,
    state: 'texas'
  },
  {
    name: 'Falcon State Park',
    location: 'Falcon Heights, TX',
    description: 'Located on Falcon Lake with fishing and camping.',
    latitude: 26.5667,
    longitude: -99.1167,
    state: 'texas'
  },
  {
    name: 'Fort Boggy State Park',
    location: 'Centerville, TX',
    description: 'Features swimming, fishing, and camping on a small lake.',
    latitude: 31.2667,
    longitude: -95.9833,
    state: 'texas'
  },
  {
    name: 'Fort Parker State Park',
    location: 'Mexia, TX',
    description: 'Historic site with lake recreation and camping.',
    latitude: 31.5667,
    longitude: -96.4500,
    state: 'texas'
  },
  {
    name: 'Fort Richardson State Park',
    location: 'Jacksboro, TX',
    description: 'Preserves a frontier military post with historic buildings.',
    latitude: 33.2167,
    longitude: -98.1667,
    state: 'texas'
  },
  {
    name: 'Galveston Island State Park',
    location: 'Galveston, TX',
    description: 'Beach park with swimming, fishing, and camping.',
    latitude: 29.2167,
    longitude: -94.9167,
    state: 'texas'
  },
  {
    name: 'Garner State Park',
    location: 'Concan, TX',
    description: 'Popular park on the Frio River with swimming and dancing.',
    latitude: 29.5833,
    longitude: -99.7333,
    state: 'texas'
  },
  {
    name: 'Goliad State Park',
    location: 'Goliad, TX',
    description: 'Historic site with Spanish mission and museum.',
    latitude: 28.6500,
    longitude: -97.3833,
    state: 'texas'
  },
  {
    name: 'Goose Island State Park',
    location: 'Rockport, TX',
    description: 'Features the "Big Tree" and coastal camping.',
    latitude: 28.1167,
    longitude: -97.0333,
    state: 'texas'
  },
  {
    name: 'Government Canyon State Natural Area',
    location: 'San Antonio, TX',
    description: 'Features dinosaur tracks and extensive hiking trails.',
    latitude: 29.5667,
    longitude: -98.7167,
    state: 'texas'
  },
  {
    name: 'Guadalupe River State Park',
    location: 'Spring Branch, TX',
    description: 'Popular river park with swimming, tubing, and camping.',
    latitude: 29.8667,
    longitude: -98.5000,
    state: 'texas'
  },
  {
    name: 'Hill Country State Natural Area',
    location: 'Bandera, TX',
    description: 'Rugged park with hiking, mountain biking, and equestrian trails.',
    latitude: 29.5833,
    longitude: -99.1333,
    state: 'texas'
  },
  {
    name: 'Honey Creek State Natural Area',
    location: 'Spring Branch, TX',
    description: 'Protected area with guided tours of pristine creek.',
    latitude: 29.8667,
    longitude: -98.5000,
    state: 'texas'
  },
  {
    name: 'Huntsville State Park',
    location: 'Huntsville, TX',
    description: 'Features Lake Raven with fishing, boating, and camping.',
    latitude: 30.7167,
    longitude: -95.5500,
    state: 'texas'
  },
  {
    name: 'Indian Lodge',
    location: 'Fort Davis, TX',
    description: 'Historic adobe hotel in the Davis Mountains.',
    latitude: 30.5833,
    longitude: -103.9167,
    state: 'texas'
  },
  {
    name: 'Inks Lake State Park',
    location: 'Burnet, TX',
    description: 'Popular lake park with swimming, fishing, and camping.',
    latitude: 30.7333,
    longitude: -98.3667,
    state: 'texas'
  },
  {
    name: 'Kickapoo Cavern State Park',
    location: 'Brackettville, TX',
    description: 'Features caves and extensive hiking trails.',
    latitude: 29.6167,
    longitude: -100.4167,
    state: 'texas'
  },
  {
    name: 'Lake Arrowhead State Park',
    location: 'Wichita Falls, TX',
    description: 'Offers fishing, boating, and camping on Lake Arrowhead.',
    latitude: 33.6667,
    longitude: -98.6667,
    state: 'texas'
  },
  {
    name: 'Lake Bob Sandlin State Park',
    location: 'Pittsburg, TX',
    description: 'Features fishing, boating, and camping on Lake Bob Sandlin.',
    latitude: 32.9667,
    longitude: -95.0667,
    state: 'texas'
  },
  {
    name: 'Lake Brownwood State Park',
    location: 'Brownwood, TX',
    description: 'Offers fishing, boating, and camping on Lake Brownwood.',
    latitude: 31.8167,
    longitude: -98.9833,
    state: 'texas'
  },
  {
    name: 'Lake Casa Blanca International State Park',
    location: 'Laredo, TX',
    description: 'Features fishing, boating, and camping on Lake Casa Blanca.',
    latitude: 27.5667,
    longitude: -99.4167,
    state: 'texas'
  },
  {
    name: 'Lake Colorado City State Park',
    location: 'Colorado City, TX',
    description: 'Offers fishing, boating, and camping on Lake Colorado City.',
    latitude: 32.3833,
    longitude: -100.9167,
    state: 'texas'
  },
  {
    name: 'Lake Corpus Christi State Park',
    location: 'Mathis, TX',
    description: 'Features fishing, boating, and camping on Lake Corpus Christi.',
    latitude: 28.0833,
    longitude: -97.8333,
    state: 'texas'
  },
  {
    name: 'Lake Livingston State Park',
    location: 'Livingston, TX',
    description: 'Offers fishing, boating, and camping on Lake Livingston.',
    latitude: 30.7167,
    longitude: -95.0000,
    state: 'texas'
  },
  {
    name: 'Lake Mineral Wells State Park',
    location: 'Mineral Wells, TX',
    description: 'Features rock climbing, fishing, and camping.',
    latitude: 32.8167,
    longitude: -98.0167,
    state: 'texas'
  },
  {
    name: 'Lake Somerville State Park',
    location: 'Somerville, TX',
    description: 'Features two units with fishing, boating, and camping.',
    latitude: 30.3333,
    longitude: -96.5333,
    state: 'texas'
  },
  {
    name: 'Lake Tawakoni State Park',
    location: 'Wills Point, TX',
    description: 'Offers fishing, boating, and camping on Lake Tawakoni.',
    latitude: 32.8500,
    longitude: -95.9500,
    state: 'texas'
  },
  {
    name: 'Lake Whitney State Park',
    location: 'Whitney, TX',
    description: 'Features fishing, boating, and camping on Lake Whitney.',
    latitude: 31.9500,
    longitude: -97.3167,
    state: 'texas'
  },
  {
    name: 'Lockhart State Park',
    location: 'Lockhart, TX',
    description: 'Features golf course, swimming pool, and camping.',
    latitude: 29.8833,
    longitude: -97.6667,
    state: 'texas'
  },
  {
    name: 'Longhorn Cavern State Park',
    location: 'Burnet, TX',
    description: 'Features guided cave tours and hiking trails.',
    latitude: 30.6833,
    longitude: -98.3500,
    state: 'texas'
  },
  {
    name: 'Lost Maples State Natural Area',
    location: 'Vanderpool, TX',
    description: 'Known for fall foliage and scenic hiking trails.',
    latitude: 29.8167,
    longitude: -99.5833,
    state: 'texas'
  },
  {
    name: 'Lyndon B. Johnson State Park',
    location: 'Stonewall, TX',
    description: 'Historic site with living history farm and exhibits.',
    latitude: 30.2333,
    longitude: -98.4167,
    state: 'texas'
  },
  {
    name: 'Martin Dies, Jr. State Park',
    location: 'Jasper, TX',
    description: 'Features fishing, boating, and camping on B.A. Steinhagen Lake.',
    latitude: 30.8333,
    longitude: -94.1667,
    state: 'texas'
  },
  {
    name: 'McKinney Falls State Park',
    location: 'Austin, TX',
    description: 'Features waterfalls, hiking trails, and camping.',
    latitude: 30.1833,
    longitude: -97.7167,
    state: 'texas'
  },
  {
    name: 'Meridian State Park',
    location: 'Meridian, TX',
    description: 'Offers fishing, boating, and camping on Lake Meridian.',
    latitude: 31.9167,
    longitude: -97.6500,
    state: 'texas'
  },
  {
    name: 'Mission Tejas State Park',
    location: 'Grapeland, TX',
    description: 'Historic site with replica mission and hiking trails.',
    latitude: 31.4667,
    longitude: -95.1167,
    state: 'texas'
  },
  {
    name: 'Monahans Sandhills State Park',
    location: 'Monahans, TX',
    description: 'Features sand dunes and unique desert ecosystem.',
    latitude: 31.6333,
    longitude: -102.8167,
    state: 'texas'
  },
  {
    name: 'Mother Neff State Park',
    location: 'Moody, TX',
    description: 'Texas\'s first state park with hiking trails and camping.',
    latitude: 31.3167,
    longitude: -97.5333,
    state: 'texas'
  },
  {
    name: 'Mustang Island State Park',
    location: 'Corpus Christi, TX',
    description: 'Beach park with swimming, fishing, and camping.',
    latitude: 27.6667,
    longitude: -97.1833,
    state: 'texas'
  },
  {
    name: 'Old Tunnel State Park',
    location: 'Fredericksburg, TX',
    description: 'Home to a large bat colony and viewing area.',
    latitude: 30.1167,
    longitude: -98.8333,
    state: 'texas'
  },
  {
    name: 'Palo Duro Canyon State Park',
    location: 'Canyon, TX',
    description: 'Features the second largest canyon in the United States.',
    latitude: 34.9500,
    longitude: -101.6667,
    state: 'texas'
  },
  {
    name: 'Pedernales Falls State Park',
    location: 'Johnson City, TX',
    description: 'Features scenic falls and extensive hiking trails.',
    latitude: 30.3167,
    longitude: -98.2500,
    state: 'texas'
  },
  {
    name: 'Possum Kingdom State Park',
    location: 'Caddo, TX',
    description: 'Features fishing, boating, and camping on Possum Kingdom Lake.',
    latitude: 32.8167,
    longitude: -98.5333,
    state: 'texas'
  },
  {
    name: 'Purtis Creek State Park',
    location: 'Eustace, TX',
    description: 'Offers fishing, boating, and camping on Purtis Creek Lake.',
    latitude: 32.3667,
    longitude: -96.0167,
    state: 'texas'
  },
  {
    name: 'Ray Roberts Lake State Park',
    location: 'Pilot Point, TX',
    description: 'Features multiple units with fishing, boating, and camping.',
    latitude: 33.3167,
    longitude: -96.9167,
    state: 'texas'
  },
  {
    name: 'Resaca de la Palma State Park',
    location: 'Brownsville, TX',
    description: 'World-class birding destination in the Rio Grande Valley.',
    latitude: 25.9667,
    longitude: -97.4667,
    state: 'texas'
  },
  {
    name: 'San Angelo State Park',
    location: 'San Angelo, TX',
    description: 'Features fishing, hiking, and camping on O.C. Fisher Lake.',
    latitude: 31.5167,
    longitude: -100.4500,
    state: 'texas'
  },
  {
    name: 'Sea Rim State Park',
    location: 'Sabine Pass, TX',
    description: 'Beach park with swimming, fishing, and camping.',
    latitude: 29.6667,
    longitude: -94.0167,
    state: 'texas'
  },
  {
    name: 'Seminole Canyon State Park',
    location: 'Comstock, TX',
    description: 'Features ancient rock art and guided tours.',
    latitude: 29.7000,
    longitude: -101.3000,
    state: 'texas'
  },
  {
    name: 'Sheldon Lake State Park',
    location: 'Houston, TX',
    description: 'Urban park with environmental learning center.',
    latitude: 29.8667,
    longitude: -95.1667,
    state: 'texas'
  },
  {
    name: 'South Llano River State Park',
    location: 'Junction, TX',
    description: 'Features river recreation and extensive hiking trails.',
    latitude: 30.4833,
    longitude: -99.7833,
    state: 'texas'
  },
  {
    name: 'Stephen F. Austin State Park',
    location: 'San Felipe, TX',
    description: 'Historic site with hiking trails and camping.',
    latitude: 29.8000,
    longitude: -96.1000,
    state: 'texas'
  },
  {
    name: 'Tyler State Park',
    location: 'Tyler, TX',
    description: 'Features fishing, boating, and camping on Lake Tyler.',
    latitude: 32.4667,
    longitude: -95.3000,
    state: 'texas'
  },
  {
    name: 'Village Creek State Park',
    location: 'Lumberton, TX',
    description: 'Features hiking trails and camping in the Big Thicket.',
    latitude: 30.2667,
    longitude: -94.2000,
    state: 'texas'
  },
  {
    name: 'Wyler Aerial Tramway',
    location: 'El Paso, TX',
    description: 'Scenic tramway to the top of Ranger Peak.',
    latitude: 31.7833,
    longitude: -106.4833,
    state: 'texas'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of texasParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Texas parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 