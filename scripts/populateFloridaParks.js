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

const floridaParks = [
  {
    name: 'Alafia River State Park',
    location: 'Lithia, FL',
    description: 'Former phosphate mine transformed into a mountain biking paradise with challenging trails.',
    latitude: 27.7500,
    longitude: -82.1333,
    state: 'florida'
  },
  {
    name: 'Alfred B. Maclay Gardens State Park',
    location: 'Tallahassee, FL',
    description: 'Historic ornamental gardens with walking trails and a reflecting pool.',
    latitude: 30.5500,
    longitude: -84.2167,
    state: 'florida'
  },
  {
    name: 'Allen David Broussard Catfish Creek Preserve State Park',
    location: 'Haines City, FL',
    description: 'Features rare scrub habitat and endangered species.',
    latitude: 28.1167,
    longitude: -81.6167,
    state: 'florida'
  },
  {
    name: 'Amelia Island State Park',
    location: 'Fernandina Beach, FL',
    description: 'Beach park with horseback riding and fishing.',
    latitude: 30.5167,
    longitude: -81.4333,
    state: 'florida'
  },
  {
    name: 'Anastasia State Park',
    location: 'St. Augustine, FL',
    description: 'Beach park with camping, hiking, and wildlife viewing.',
    latitude: 29.8833,
    longitude: -81.2833,
    state: 'florida'
  },
  {
    name: 'Anclote Key Preserve State Park',
    location: 'Tarpon Springs, FL',
    description: 'Island park accessible only by boat, featuring beaches and historic lighthouse.',
    latitude: 28.1833,
    longitude: -82.8333,
    state: 'florida'
  },
  {
    name: 'Avalon State Park',
    location: 'Fort Pierce, FL',
    description: 'Beach park with swimming, fishing, and wildlife viewing.',
    latitude: 27.5167,
    longitude: -80.3167,
    state: 'florida'
  },
  {
    name: 'Bahia Honda State Park',
    location: 'Big Pine Key, FL',
    description: 'Famous for its beaches, snorkeling, and historic bridge.',
    latitude: 24.6667,
    longitude: -81.2500,
    state: 'florida'
  },
  {
    name: 'Bald Point State Park',
    location: 'Alligator Point, FL',
    description: 'Coastal park with beaches, fishing, and wildlife viewing.',
    latitude: 29.9333,
    longitude: -84.3500,
    state: 'florida'
  },
  {
    name: 'Big Lagoon State Park',
    location: 'Pensacola, FL',
    description: 'Features kayaking, fishing, and camping on the lagoon.',
    latitude: 30.3167,
    longitude: -87.4000,
    state: 'florida'
  },
  {
    name: 'Big Shoals State Park',
    location: 'White Springs, FL',
    description: 'Features the largest whitewater rapids in Florida.',
    latitude: 30.3167,
    longitude: -82.6333,
    state: 'florida'
  },
  {
    name: 'Big Talbot Island State Park',
    location: 'Jacksonville, FL',
    description: 'Known for its unique "boneyard beach" with driftwood.',
    latitude: 30.4667,
    longitude: -81.4333,
    state: 'florida'
  },
  {
    name: 'Bill Baggs Cape Florida State Park',
    location: 'Key Biscayne, FL',
    description: 'Features historic lighthouse, beaches, and fishing.',
    latitude: 25.6667,
    longitude: -80.1667,
    state: 'florida'
  },
  {
    name: 'Blackwater River State Park',
    location: 'Holt, FL',
    description: 'Features one of the purest sand-bottom rivers in the world.',
    latitude: 30.7167,
    longitude: -86.9167,
    state: 'florida'
  },
  {
    name: 'Blue Spring State Park',
    location: 'Orange City, FL',
    description: 'Famous for its manatee population and crystal clear spring.',
    latitude: 28.9500,
    longitude: -81.3333,
    state: 'florida'
  },
  {
    name: 'Bulow Creek State Park',
    location: 'Ormond Beach, FL',
    description: 'Features one of the largest remaining stands of southern live oak.',
    latitude: 29.4333,
    longitude: -81.1333,
    state: 'florida'
  },
  {
    name: 'Bulow Plantation Ruins Historic State Park',
    location: 'Flagler Beach, FL',
    description: 'Features the ruins of a 19th-century sugar plantation.',
    latitude: 29.4333,
    longitude: -81.1333,
    state: 'florida'
  },
  {
    name: 'Caladesi Island State Park',
    location: 'Dunedin, FL',
    description: 'Accessible by boat, features pristine beaches and nature trails.',
    latitude: 28.0333,
    longitude: -82.8167,
    state: 'florida'
  },
  {
    name: 'Camp Helen State Park',
    location: 'Panama City Beach, FL',
    description: 'Historic resort area with beach access and hiking trails.',
    latitude: 30.2833,
    longitude: -85.9167,
    state: 'florida'
  },
  {
    name: 'Cayo Costa State Park',
    location: 'Boca Grande, FL',
    description: 'Island park accessible by boat, featuring beaches and camping.',
    latitude: 26.6333,
    longitude: -82.2167,
    state: 'florida'
  },
  {
    name: 'Cedar Key Museum State Park',
    location: 'Cedar Key, FL',
    description: 'Historic museum featuring local history and nature exhibits.',
    latitude: 29.1333,
    longitude: -83.0333,
    state: 'florida'
  },
  {
    name: 'Cedar Key Scrub State Reserve',
    location: 'Cedar Key, FL',
    description: 'Features rare scrub habitat and endangered species.',
    latitude: 29.1333,
    longitude: -83.0333,
    state: 'florida'
  },
  {
    name: 'Charlotte Harbor Preserve State Park',
    location: 'Port Charlotte, FL',
    description: 'Large preserve with hiking trails and wildlife viewing.',
    latitude: 26.9167,
    longitude: -82.0667,
    state: 'florida'
  },
  {
    name: 'Collier-Seminole State Park',
    location: 'Naples, FL',
    description: 'Features the historic Bay City Walking Dredge and camping.',
    latitude: 25.9833,
    longitude: -81.3167,
    state: 'florida'
  },
  {
    name: 'Colt Creek State Park',
    location: 'Lakeland, FL',
    description: 'Features hiking, fishing, and camping in central Florida.',
    latitude: 28.2333,
    longitude: -82.0167,
    state: 'florida'
  },
  {
    name: 'Constitution Convention Museum State Park',
    location: 'Port St. Joe, FL',
    description: 'Historic site where Florida\'s first constitution was drafted.',
    latitude: 29.8167,
    longitude: -85.3000,
    state: 'florida'
  },
  {
    name: 'Crystal River Archaeological State Park',
    location: 'Crystal River, FL',
    description: 'Features Native American burial mounds and temple complex.',
    latitude: 28.9167,
    longitude: -82.6000,
    state: 'florida'
  },
  {
    name: 'Crystal River Preserve State Park',
    location: 'Crystal River, FL',
    description: 'Features manatee viewing and kayaking opportunities.',
    latitude: 28.9167,
    longitude: -82.6000,
    state: 'florida'
  },
  {
    name: 'Curry Hammock State Park',
    location: 'Marathon, FL',
    description: 'Features camping and kayaking in the Florida Keys.',
    latitude: 24.7500,
    longitude: -80.9833,
    state: 'florida'
  },
  {
    name: 'Dade Battlefield Historic State Park',
    location: 'Bushnell, FL',
    description: 'Site of the 1835 battle that started the Second Seminole War.',
    latitude: 28.6500,
    longitude: -82.1167,
    state: 'florida'
  },
  {
    name: 'Dagny Johnson Key Largo Hammock Botanical State Park',
    location: 'Key Largo, FL',
    description: 'Features rare tropical hardwood hammock and endangered species.',
    latitude: 25.1167,
    longitude: -80.4167,
    state: 'florida'
  },
  {
    name: 'De Leon Springs State Park',
    location: 'De Leon Springs, FL',
    description: 'Features historic spring and the Old Spanish Sugar Mill.',
    latitude: 29.1167,
    longitude: -81.3500,
    state: 'florida'
  },
  {
    name: 'Deer Lake State Park',
    location: 'Santa Rosa Beach, FL',
    description: 'Features coastal dune lakes and beach access.',
    latitude: 30.3167,
    longitude: -86.0500,
    state: 'florida'
  },
  {
    name: 'Delnor-Wiggins Pass State Park',
    location: 'Naples, FL',
    description: 'Famous for its pristine beaches and shelling.',
    latitude: 26.2667,
    longitude: -81.8167,
    state: 'florida'
  },
  {
    name: 'Devil\'s Millhopper Geological State Park',
    location: 'Gainesville, FL',
    description: 'Features a 120-foot-deep sinkhole with unique ecosystem.',
    latitude: 29.7000,
    longitude: -82.3833,
    state: 'florida'
  },
  {
    name: 'Don Pedro Island State Park',
    location: 'Boca Grande, FL',
    description: 'Island park accessible by boat, featuring beaches and wildlife.',
    latitude: 26.8333,
    longitude: -82.3333,
    state: 'florida'
  },
  {
    name: 'Dudley Farm Historic State Park',
    location: 'Newberry, FL',
    description: 'Working 1880s farm with living history demonstrations.',
    latitude: 29.6500,
    longitude: -82.6000,
    state: 'florida'
  },
  {
    name: 'Dunns Creek State Park',
    location: 'Pomona Park, FL',
    description: 'Features fishing and boating on Dunns Creek.',
    latitude: 29.5000,
    longitude: -81.6000,
    state: 'florida'
  },
  {
    name: 'Econfina River State Park',
    location: 'Perry, FL',
    description: 'Features crystal clear springs and river recreation.',
    latitude: 30.1167,
    longitude: -83.8167,
    state: 'florida'
  },
  {
    name: 'Eden Gardens State Park',
    location: 'Santa Rosa Beach, FL',
    description: 'Features historic mansion and formal gardens.',
    latitude: 30.3667,
    longitude: -86.1167,
    state: 'florida'
  },
  {
    name: 'Edward Ball Wakulla Springs State Park',
    location: 'Wakulla Springs, FL',
    description: 'Features the world\'s largest and deepest freshwater spring.',
    latitude: 30.2333,
    longitude: -84.3000,
    state: 'florida'
  },
  {
    name: 'Egmont Key State Park',
    location: 'St. Petersburg, FL',
    description: 'Island park accessible by boat, featuring historic lighthouse and fort ruins.',
    latitude: 27.6000,
    longitude: -82.7667,
    state: 'florida'
  },
  {
    name: 'Estero Bay Preserve State Park',
    location: 'Estero, FL',
    description: 'Features kayaking, fishing, and wildlife viewing in the estuary.',
    latitude: 26.4333,
    longitude: -81.8667,
    state: 'florida'
  },
  {
    name: 'Fakahatchee Strand Preserve State Park',
    location: 'Copeland, FL',
    description: 'Florida\'s largest state park, known for rare orchids and wildlife.',
    latitude: 25.9722,
    longitude: -81.3611,
    state: 'florida'
  },
  {
    name: 'Falling Waters State Park',
    location: 'Chipley, FL',
    description: 'Home to Florida\'s highest waterfall and sinkholes.',
    latitude: 30.7300,
    longitude: -85.5383,
    state: 'florida'
  },
  {
    name: 'Fanning Springs State Park',
    location: 'Fanning Springs, FL',
    description: 'Features crystal clear springs and river recreation.',
    latitude: 29.5833,
    longitude: -82.9333,
    state: 'florida'
  },
  {
    name: 'Faver-Dykes State Park',
    location: 'St. Augustine, FL',
    description: 'Features camping and fishing on Pellicer Creek.',
    latitude: 29.6500,
    longitude: -81.2500,
    state: 'florida'
  },
  {
    name: 'Florida Caverns State Park',
    location: 'Marianna, FL',
    description: 'Features guided tours of limestone caves and camping.',
    latitude: 30.8167,
    longitude: -85.2333,
    state: 'florida'
  },
  {
    name: 'Fort Clinch State Park',
    location: 'Fernandina Beach, FL',
    description: 'Features a historic Civil War fort, beaches, and hiking trails.',
    latitude: 30.7781,
    longitude: -81.4492,
    state: 'florida'
  },
  {
    name: 'Fort Cooper State Park',
    location: 'Inverness, FL',
    description: 'Historic site from the Second Seminole War with hiking trails.',
    latitude: 28.8333,
    longitude: -82.3000,
    state: 'florida'
  },
  {
    name: 'Fort Foster State Historic Site',
    location: 'Thonotosassa, FL',
    description: 'Reconstructed fort from the Second Seminole War.',
    latitude: 28.1333,
    longitude: -82.2333,
    state: 'florida'
  },
  {
    name: 'Fort George Island Cultural State Park',
    location: 'Jacksonville, FL',
    description: 'Features historic sites and nature trails on an island.',
    latitude: 30.4333,
    longitude: -81.4333,
    state: 'florida'
  },
  {
    name: 'Fort Mose Historic State Park',
    location: 'St. Augustine, FL',
    description: 'Site of the first legally sanctioned free African settlement.',
    latitude: 29.9333,
    longitude: -81.3167,
    state: 'florida'
  },
  {
    name: 'Fort Pierce Inlet State Park',
    location: 'Fort Pierce, FL',
    description: 'Features beaches, surfing, and fishing.',
    latitude: 27.4833,
    longitude: -80.3000,
    state: 'florida'
  },
  {
    name: 'Fred Gannon Rocky Bayou State Park',
    location: 'Niceville, FL',
    description: 'Features fishing, boating, and camping on Rocky Bayou.',
    latitude: 30.5667,
    longitude: -86.4333,
    state: 'florida'
  },
  {
    name: 'Gamble Rogers Memorial State Recreation Area',
    location: 'Flagler Beach, FL',
    description: 'Features beach access and camping on the Atlantic coast.',
    latitude: 29.4667,
    longitude: -81.1167,
    state: 'florida'
  },
  {
    name: 'Gasparilla Island State Park',
    location: 'Boca Grande, FL',
    description: 'Features historic lighthouse and pristine beaches.',
    latitude: 26.7500,
    longitude: -82.2667,
    state: 'florida'
  },
  {
    name: 'George Crady Bridge Fishing Pier State Park',
    location: 'Amelia Island, FL',
    description: 'Features fishing and wildlife viewing on the bridge.',
    latitude: 30.5500,
    longitude: -81.4500,
    state: 'florida'
  },
  {
    name: 'Grayton Beach State Park',
    location: 'Santa Rosa Beach, FL',
    description: 'Known for its sugar-white sand beaches and coastal dune lakes.',
    latitude: 30.3250,
    longitude: -86.1611,
    state: 'florida'
  },
  {
    name: 'Henderson Beach State Park',
    location: 'Destin, FL',
    description: 'Features a mile of natural scenic shoreline and sand dunes.',
    latitude: 30.3931,
    longitude: -86.4747,
    state: 'florida'
  },
  {
    name: 'Highlands Hammock State Park',
    location: 'Sebring, FL',
    description: 'One of Florida\'s oldest parks, featuring ancient hammock forest.',
    latitude: 27.4667,
    longitude: -81.5500,
    state: 'florida'
  },
  {
    name: 'Hillsborough River State Park',
    location: 'Thonotosassa, FL',
    description: 'Features Class II rapids, hiking trails, and camping.',
    latitude: 28.1500,
    longitude: -82.2333,
    state: 'florida'
  },
  {
    name: 'Honeymoon Island State Park',
    location: 'Dunedin, FL',
    description: 'Popular for swimming, shelling, and the Osprey Trail.',
    latitude: 28.0647,
    longitude: -82.8300,
    state: 'florida'
  },
  {
    name: 'Hontoon Island State Park',
    location: 'DeLand, FL',
    description: 'Island park accessible by boat, featuring camping and hiking.',
    latitude: 28.9667,
    longitude: -81.3500,
    state: 'florida'
  },
  {
    name: 'Hugh Taylor Birch State Park',
    location: 'Fort Lauderdale, FL',
    description: 'Urban park with beach access and historic home.',
    latitude: 26.1333,
    longitude: -80.1000,
    state: 'florida'
  },
  {
    name: 'Ichetucknee Springs State Park',
    location: 'Fort White, FL',
    description: 'Famous for tubing, snorkeling, and crystal-clear springs.',
    latitude: 29.9872,
    longitude: -82.7572,
    state: 'florida'
  },
  {
    name: 'Indian Key Historic State Park',
    location: 'Islamorada, FL',
    description: 'Island park accessible by boat, featuring historic ruins.',
    latitude: 24.8833,
    longitude: -80.6667,
    state: 'florida'
  },
  {
    name: 'John D. MacArthur Beach State Park',
    location: 'North Palm Beach, FL',
    description: 'Features pristine beaches and nature trails.',
    latitude: 26.8167,
    longitude: -80.0333,
    state: 'florida'
  },
  {
    name: 'John Gorrie Museum State Park',
    location: 'Apalachicola, FL',
    description: 'Historic museum featuring the inventor of air conditioning.',
    latitude: 29.7333,
    longitude: -84.9833,
    state: 'florida'
  },
  {
    name: 'John Pennekamp Coral Reef State Park',
    location: 'Key Largo, FL',
    description: 'America\'s first undersea park, known for snorkeling and diving.',
    latitude: 25.1231,
    longitude: -80.4061,
    state: 'florida'
  },
  {
    name: 'Jonathan Dickinson State Park',
    location: 'Hobe Sound, FL',
    description: 'Offers boating, hiking, and the Loxahatchee River.',
    latitude: 27.0031,
    longitude: -80.1122,
    state: 'florida'
  },
  {
    name: 'Kissimmee Prairie Preserve State Park',
    location: 'Okeechobee, FL',
    description: 'Features the largest remaining tract of Florida dry prairie.',
    latitude: 27.6000,
    longitude: -81.0000,
    state: 'florida'
  },
  {
    name: 'Lake Griffin State Park',
    location: 'Fruitland Park, FL',
    description: 'Features fishing, boating, and camping on Lake Griffin.',
    latitude: 28.8500,
    longitude: -81.9167,
    state: 'florida'
  },
  {
    name: 'Lake Jackson Mounds Archaeological State Park',
    location: 'Tallahassee, FL',
    description: 'Features Native American ceremonial mounds and hiking trails.',
    latitude: 30.5000,
    longitude: -84.3167,
    state: 'florida'
  },
  {
    name: 'Lake June in Winter Scrub State Park',
    location: 'Lake Placid, FL',
    description: 'Features rare scrub habitat and endangered species.',
    latitude: 27.2833,
    longitude: -81.3667,
    state: 'florida'
  },
  {
    name: 'Lake Kissimmee State Park',
    location: 'Lake Wales, FL',
    description: 'Features camping, fishing, and a living history cow camp.',
    latitude: 27.9500,
    longitude: -81.3667,
    state: 'florida'
  },
  {
    name: 'Lake Louisa State Park',
    location: 'Clermont, FL',
    description: 'Features six lakes, hiking trails, and camping.',
    latitude: 28.4667,
    longitude: -81.7333,
    state: 'florida'
  },
  {
    name: 'Lake Manatee State Park',
    location: 'Bradenton, FL',
    description: 'Features camping, fishing, and swimming on Lake Manatee.',
    latitude: 27.5167,
    longitude: -82.3167,
    state: 'florida'
  },
  {
    name: 'Lake Talquin State Park',
    location: 'Tallahassee, FL',
    description: 'Features fishing, boating, and camping on Lake Talquin.',
    latitude: 30.4667,
    longitude: -84.6000,
    state: 'florida'
  },
  {
    name: 'Letchworth-Love Mounds Archaeological State Park',
    location: 'Tallahassee, FL',
    description: 'Features the tallest Native American ceremonial mound in Florida.',
    latitude: 30.4667,
    longitude: -84.3167,
    state: 'florida'
  },
  {
    name: 'Lignumvitae Key Botanical State Park',
    location: 'Islamorada, FL',
    description: 'Island park accessible by boat, featuring virgin tropical hardwood hammock.',
    latitude: 24.9000,
    longitude: -80.7000,
    state: 'florida'
  },
  {
    name: 'Little Manatee River State Park',
    location: 'Wimauma, FL',
    description: 'Features hiking, horseback riding, and camping along the river.',
    latitude: 27.7167,
    longitude: -82.2667,
    state: 'florida'
  },
  {
    name: 'Little Talbot Island State Park',
    location: 'Jacksonville, FL',
    description: 'Features beaches, fishing, and camping on a barrier island.',
    latitude: 30.4667,
    longitude: -81.4333,
    state: 'florida'
  },
  {
    name: 'Long Key State Park',
    location: 'Long Key, FL',
    description: 'Features camping and kayaking in the Florida Keys.',
    latitude: 24.8167,
    longitude: -80.8167,
    state: 'florida'
  },
  {
    name: 'Lovers Key State Park',
    location: 'Fort Myers Beach, FL',
    description: 'Features beaches, kayaking, and wildlife viewing.',
    latitude: 26.3833,
    longitude: -81.8667,
    state: 'florida'
  },
  {
    name: 'Lower Wekiva River Preserve State Park',
    location: 'Sanford, FL',
    description: 'Features paddling, hiking, and wildlife viewing on the Wekiva River.',
    latitude: 28.7833,
    longitude: -81.3667,
    state: 'florida'
  },
  {
    name: 'Madira Bickel Mound State Archaeological Site',
    location: 'Palmetto, FL',
    description: 'Features Native American ceremonial mounds.',
    latitude: 27.5167,
    longitude: -82.5667,
    state: 'florida'
  },
  {
    name: 'Madison Blue Spring State Park',
    location: 'Lee, FL',
    description: 'Features crystal clear spring and cave diving.',
    latitude: 30.4500,
    longitude: -83.3167,
    state: 'florida'
  },
  {
    name: 'Manatee Springs State Park',
    location: 'Chiefland, FL',
    description: 'Features crystal clear spring and the Suwannee River.',
    latitude: 29.4833,
    longitude: -82.9833,
    state: 'florida'
  },
  {
    name: 'Marianna Caverns State Park',
    location: 'Marianna, FL',
    description: 'Features guided tours of limestone caves.',
    latitude: 30.7833,
    longitude: -85.2333,
    state: 'florida'
  },
  {
    name: 'Marjorie Kinnan Rawlings Historic State Park',
    location: 'Cross Creek, FL',
    description: 'Historic home of the Pulitzer Prize-winning author.',
    latitude: 29.4833,
    longitude: -82.1667,
    state: 'florida'
  },
  {
    name: 'Mike Roess Gold Head Branch State Park',
    location: 'Keystone Heights, FL',
    description: 'Features hiking trails and camping in the sandhills.',
    latitude: 29.8333,
    longitude: -81.9667,
    state: 'florida'
  },
  {
    name: 'Mound Key Archaeological State Park',
    location: 'Estero, FL',
    description: 'Island park accessible by boat, featuring Calusa Indian mounds.',
    latitude: 26.4167,
    longitude: -81.8667,
    state: 'florida'
  },
  {
    name: 'Myakka River State Park',
    location: 'Sarasota, FL',
    description: 'One of Florida\'s oldest and largest parks, known for wildlife viewing and airboat tours.',
    latitude: 27.2550,
    longitude: -82.3161,
    state: 'florida'
  },
  {
    name: 'Natural Bridge Battlefield Historic State Park',
    location: 'Woodville, FL',
    description: 'Site of the second largest Civil War battle in Florida.',
    latitude: 30.2833,
    longitude: -84.1667,
    state: 'florida'
  },
  {
    name: 'North Peninsula State Park',
    location: 'Ormond Beach, FL',
    description: 'Features beach access and wildlife viewing.',
    latitude: 29.3667,
    longitude: -81.0667,
    state: 'florida'
  },
  {
    name: 'O\'Leno State Park',
    location: 'High Springs, FL',
    description: 'Features the Santa Fe River and historic suspension bridge.',
    latitude: 29.9167,
    longitude: -82.5833,
    state: 'florida'
  },
  {
    name: 'Ochlockonee River State Park',
    location: 'Sopchoppy, FL',
    description: 'Features fishing, boating, and camping on the river.',
    latitude: 30.0667,
    longitude: -84.4000,
    state: 'florida'
  },
  {
    name: 'Oleta River State Park',
    location: 'North Miami Beach, FL',
    description: 'Florida\'s largest urban park, featuring kayaking and mountain biking.',
    latitude: 25.9167,
    longitude: -80.1333,
    state: 'florida'
  },
  {
    name: 'Olustee Battlefield Historic State Park',
    location: 'Olustee, FL',
    description: 'Site of Florida\'s largest Civil War battle.',
    latitude: 30.2167,
    longitude: -82.3833,
    state: 'florida'
  },
  {
    name: 'Orman House Historic State Park',
    location: 'Apalachicola, FL',
    description: 'Historic home from the 1830s with guided tours.',
    latitude: 29.7333,
    longitude: -84.9833,
    state: 'florida'
  },
  {
    name: 'Oscar Scherer State Park',
    location: 'Osprey, FL',
    description: 'Features hiking trails and camping near Sarasota.',
    latitude: 27.2000,
    longitude: -82.4833,
    state: 'florida'
  },
  {
    name: 'Paynes Creek Historic State Park',
    location: 'Bowling Green, FL',
    description: 'Site of a trading post massacre during the Second Seminole War.',
    latitude: 27.6167,
    longitude: -81.8167,
    state: 'florida'
  },
  {
    name: 'Paynes Prairie Preserve State Park',
    location: 'Micanopy, FL',
    description: 'Features bison, wild horses, and extensive hiking trails.',
    latitude: 29.5833,
    longitude: -82.3167,
    state: 'florida'
  },
  {
    name: 'Peacock Springs State Park',
    location: 'Luraville, FL',
    description: 'Features crystal clear springs and cave diving.',
    latitude: 30.1167,
    longitude: -83.1833,
    state: 'florida'
  },
  {
    name: 'Perdido Key State Park',
    location: 'Pensacola, FL',
    description: 'Features pristine beaches and wildlife viewing.',
    latitude: 30.3000,
    longitude: -87.4333,
    state: 'florida'
  },
  {
    name: 'Ponce de Leon Springs State Park',
    location: 'Ponce de Leon, FL',
    description: 'Features crystal clear spring and swimming.',
    latitude: 30.7167,
    longitude: -85.9333,
    state: 'florida'
  },
  {
    name: 'Pumpkin Hill Creek Preserve State Park',
    location: 'Jacksonville, FL',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 30.4333,
    longitude: -81.5167,
    state: 'florida'
  },
  {
    name: 'Rainbow Springs State Park',
    location: 'Dunnellon, FL',
    description: 'Features crystal clear springs and tubing.',
    latitude: 29.0833,
    longitude: -82.4333,
    state: 'florida'
  },
  {
    name: 'Ravine Gardens State Park',
    location: 'Palatka, FL',
    description: 'Features historic gardens and hiking trails.',
    latitude: 29.6500,
    longitude: -81.6333,
    state: 'florida'
  },
  {
    name: 'River Rise Preserve State Park',
    location: 'High Springs, FL',
    description: 'Features the Santa Fe River and hiking trails.',
    latitude: 29.8333,
    longitude: -82.5833,
    state: 'florida'
  },
  {
    name: 'Rock Springs Run State Reserve',
    location: 'Sorrento, FL',
    description: 'Features hiking, horseback riding, and wildlife viewing.',
    latitude: 28.7500,
    longitude: -81.4667,
    state: 'florida'
  },
  {
    name: 'San Felasco Hammock Preserve State Park',
    location: 'Alachua, FL',
    description: 'Features extensive hiking and mountain biking trails.',
    latitude: 29.7167,
    longitude: -82.4333,
    state: 'florida'
  },
  {
    name: 'San Marcos de Apalache Historic State Park',
    location: 'St. Marks, FL',
    description: 'Historic Spanish fort site with museum.',
    latitude: 30.1500,
    longitude: -84.2000,
    state: 'florida'
  },
  {
    name: 'San Pedro Underwater Archaeological Preserve State Park',
    location: 'Indian Key, FL',
    description: 'Underwater park featuring a Spanish shipwreck.',
    latitude: 24.8500,
    longitude: -80.6667,
    state: 'florida'
  },
  {
    name: 'Savannas Preserve State Park',
    location: 'Jensen Beach, FL',
    description: 'Features the largest remaining freshwater marsh in Florida.',
    latitude: 27.2000,
    longitude: -80.3000,
    state: 'florida'
  },
  {
    name: 'Seabranch Preserve State Park',
    location: 'Hobe Sound, FL',
    description: 'Features rare scrub habitat and hiking trails.',
    latitude: 27.0667,
    longitude: -80.1333,
    state: 'florida'
  },
  {
    name: 'Sebastian Inlet State Park',
    location: 'Melbourne Beach, FL',
    description: 'Famous for surfing, fishing, and camping.',
    latitude: 27.8667,
    longitude: -80.4667,
    state: 'florida'
  },
  {
    name: 'Silver River State Park',
    location: 'Ocala, FL',
    description: 'Features crystal clear spring and wildlife viewing.',
    latitude: 29.2167,
    longitude: -82.0500,
    state: 'florida'
  },
  {
    name: 'Skyway Fishing Pier State Park',
    location: 'St. Petersburg, FL',
    description: 'Features the world\'s longest fishing pier.',
    latitude: 27.6167,
    longitude: -82.6500,
    state: 'florida'
  },
  {
    name: 'St. Andrews State Park',
    location: 'Panama City Beach, FL',
    description: 'Features beaches, camping, and wildlife viewing.',
    latitude: 30.1333,
    longitude: -85.7333,
    state: 'florida'
  },
  {
    name: 'St. George Island State Park',
    location: 'St. George Island, FL',
    description: 'Features pristine beaches and camping.',
    latitude: 29.6833,
    longitude: -84.7333,
    state: 'florida'
  },
  {
    name: 'St. Joseph Peninsula State Park',
    location: 'Port St. Joe, FL',
    description: 'Features beaches, camping, and wildlife viewing.',
    latitude: 29.7500,
    longitude: -85.3667,
    state: 'florida'
  },
  {
    name: 'St. Lucie Inlet Preserve State Park',
    location: 'Stuart, FL',
    description: 'Island park accessible by boat, featuring beaches and wildlife.',
    latitude: 27.1667,
    longitude: -80.1667,
    state: 'florida'
  },
  {
    name: 'St. Sebastian River Preserve State Park',
    location: 'Fellsmere, FL',
    description: 'Features hiking, horseback riding, and wildlife viewing.',
    latitude: 27.7667,
    longitude: -80.5000,
    state: 'florida'
  },
  {
    name: 'Stephen Foster Folk Culture Center State Park',
    location: 'White Springs, FL',
    description: 'Features museum dedicated to Stephen Foster and carillon tower.',
    latitude: 30.3333,
    longitude: -82.7500,
    state: 'florida'
  },
  {
    name: 'Suwannee River State Park',
    location: 'Live Oak, FL',
    description: 'Features hiking trails and camping along the Suwannee River.',
    latitude: 30.3833,
    longitude: -83.1667,
    state: 'florida'
  },
  {
    name: 'Tarkiln Bayou Preserve State Park',
    location: 'Pensacola, FL',
    description: 'Features rare pitcher plants and hiking trails.',
    latitude: 30.3667,
    longitude: -87.4000,
    state: 'florida'
  },
  {
    name: 'Terra Ceia Preserve State Park',
    location: 'Palmetto, FL',
    description: 'Features hiking trails and wildlife viewing.',
    latitude: 27.5833,
    longitude: -82.5833,
    state: 'florida'
  },
  {
    name: 'The Barnacle Historic State Park',
    location: 'Coconut Grove, FL',
    description: 'Historic home with guided tours and bay views.',
    latitude: 25.7167,
    longitude: -80.2333,
    state: 'florida'
  },
  {
    name: 'Three Rivers State Park',
    location: 'Sneads, FL',
    description: 'Features camping and fishing on Lake Seminole.',
    latitude: 30.7167,
    longitude: -84.9333,
    state: 'florida'
  },
  {
    name: 'Tomoka State Park',
    location: 'Ormond Beach, FL',
    description: 'Features camping and fishing on the Tomoka River.',
    latitude: 29.3333,
    longitude: -81.1167,
    state: 'florida'
  },
  {
    name: 'Topsail Hill Preserve State Park',
    location: 'Santa Rosa Beach, FL',
    description: 'Features coastal dune lakes and pristine beaches.',
    latitude: 30.3333,
    longitude: -86.2833,
    state: 'florida'
  },
  {
    name: 'Torreya State Park',
    location: 'Bristol, FL',
    description: 'Features rare Torreya trees and historic Gregory House.',
    latitude: 30.5667,
    longitude: -84.9500,
    state: 'florida'
  },
  {
    name: 'Troy Spring State Park',
    location: 'Branford, FL',
    description: 'Features crystal clear spring and swimming.',
    latitude: 29.8833,
    longitude: -82.9833,
    state: 'florida'
  },
  {
    name: 'Waccasassa Bay Preserve State Park',
    location: 'Cedar Key, FL',
    description: 'Features kayaking and wildlife viewing in the estuary.',
    latitude: 29.1333,
    longitude: -83.0333,
    state: 'florida'
  },
  {
    name: 'Wakulla Springs State Park',
    location: 'Wakulla Springs, FL',
    description: 'Features the world\'s largest and deepest freshwater spring.',
    latitude: 30.2333,
    longitude: -84.3000,
    state: 'florida'
  },
  {
    name: 'Washington Oaks Gardens State Park',
    location: 'Palm Coast, FL',
    description: 'Features historic gardens and beach access.',
    latitude: 29.6333,
    longitude: -81.2000,
    state: 'florida'
  },
  {
    name: 'Wekiwa Springs State Park',
    location: 'Apopka, FL',
    description: 'Features crystal clear spring and extensive hiking trails.',
    latitude: 28.7167,
    longitude: -81.4667,
    state: 'florida'
  },
  {
    name: 'Werner-Boyce Salt Springs State Park',
    location: 'Port Richey, FL',
    description: 'Features kayaking and wildlife viewing in the estuary.',
    latitude: 28.2833,
    longitude: -82.7167,
    state: 'florida'
  },
  {
    name: 'Windley Key Fossil Reef Geological State Park',
    location: 'Islamorada, FL',
    description: 'Features fossilized coral reef and historic quarry.',
    latitude: 24.9500,
    longitude: -80.6000,
    state: 'florida'
  },
  {
    name: 'Ybor City Museum State Park',
    location: 'Tampa, FL',
    description: 'Historic museum featuring Tampa\'s cigar industry.',
    latitude: 27.9667,
    longitude: -82.4333,
    state: 'florida'
  },
  {
    name: 'Yellow Bluff Fort Historic State Park',
    location: 'Jacksonville, FL',
    description: 'Historic Civil War fort site.',
    latitude: 30.4000,
    longitude: -81.5500,
    state: 'florida'
  },
  {
    name: 'Yellow River Marsh Preserve State Park',
    location: 'Holt, FL',
    description: 'Features rare pitcher plants and hiking trails.',
    latitude: 30.7167,
    longitude: -86.9167,
    state: 'florida'
  },
  {
    name: 'Yulee Sugar Mill Ruins Historic State Park',
    location: 'Homosassa, FL',
    description: 'Features ruins of a 19th-century sugar mill.',
    latitude: 28.7833,
    longitude: -82.5333,
    state: 'florida'
  }
];

async function populateParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of floridaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Florida parks have been added to the database');
  } catch (error) {
    console.error('Error adding parks:', error);
  }
}

populateParks(); 