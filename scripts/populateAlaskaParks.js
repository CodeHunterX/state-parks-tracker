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

const alaskaParks = [
  {
    name: "Chugach State Park",
    description: "Features dramatic mountain scenery, hiking trails, and wildlife viewing opportunities.",
    location: "Anchorage, AK",
    latitude: 61.12,
    longitude: -149.70,
    state: "alaska"
  },
  {
    name: "Dry Creek State Recreation Site",
    description: "Features fishing and camping opportunities in the Copper River Basin.",
    location: "Glennallen, AK",
    latitude: 62.11,
    longitude: -145.54,
    state: "alaska"
  },
  {
    name: "Lake Louise State Recreation Area",
    description: "Features a large lake with fishing, boating, and camping opportunities.",
    location: "Glennallen, AK",
    latitude: 62.28,
    longitude: -146.57,
    state: "alaska"
  },
  {
    name: "Liberty Falls State Recreation Site",
    description: "Features a scenic waterfall and camping facilities.",
    location: "Chitina, AK",
    latitude: 61.57,
    longitude: -144.44,
    state: "alaska"
  },
  {
    name: "Porcupine Creek State Recreation Site",
    description: "Features fishing and camping along Porcupine Creek.",
    location: "Glennallen, AK",
    latitude: 62.11,
    longitude: -145.54,
    state: "alaska"
  },
  {
    name: "Squirrel Creek State Recreation Site",
    description: "Features fishing and camping along Squirrel Creek.",
    location: "Glennallen, AK",
    latitude: 62.11,
    longitude: -145.54,
    state: "alaska"
  },
  {
    name: "Birch Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping opportunities.",
    location: "Fairbanks, AK",
    latitude: 64.85,
    longitude: -147.72,
    state: "alaska"
  },
  {
    name: "Chena River State Recreation Area",
    description: "Features the Chena River with extensive hiking trails and wildlife viewing.",
    location: "Fairbanks, AK",
    latitude: 65.05,
    longitude: -146.05,
    state: "alaska"
  },
  {
    name: "Chena River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Fairbanks, AK",
    latitude: 64.85,
    longitude: -147.72,
    state: "alaska"
  },
  {
    name: "Harding Lake State Recreation Area",
    description: "Features a large lake with swimming, fishing, and camping.",
    location: "Fairbanks, AK",
    latitude: 64.35,
    longitude: -146.83,
    state: "alaska"
  },
  {
    name: "Lower Chatanika River State Recreation Area",
    description: "Features river access and camping facilities.",
    location: "Fairbanks, AK",
    latitude: 64.85,
    longitude: -147.72,
    state: "alaska"
  },
  {
    name: "Salcha River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Fairbanks, AK",
    latitude: 64.85,
    longitude: -147.72,
    state: "alaska"
  },
  {
    name: "Upper Chatanika River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Fairbanks, AK",
    latitude: 64.85,
    longitude: -147.72,
    state: "alaska"
  },
  {
    name: "Big Delta State Historical Park",
    description: "Features historic buildings and interpretive exhibits.",
    location: "Delta Junction, AK",
    latitude: 64.04,
    longitude: -145.72,
    state: "alaska"
  },
  {
    name: "Clearwater State Recreation Site",
    description: "Features fishing and camping opportunities.",
    location: "Delta Junction, AK",
    latitude: 64.04,
    longitude: -145.72,
    state: "alaska"
  },
  {
    name: "Delta State Recreation Site",
    description: "Features camping and recreational facilities.",
    location: "Delta Junction, AK",
    latitude: 64.04,
    longitude: -145.72,
    state: "alaska"
  },
  {
    name: "Donnelly Creek State Recreation Site",
    description: "Features fishing and camping along Donnelly Creek.",
    location: "Delta Junction, AK",
    latitude: 64.04,
    longitude: -145.72,
    state: "alaska"
  },
  {
    name: "Fielding Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Delta Junction, AK",
    latitude: 64.04,
    longitude: -145.72,
    state: "alaska"
  },
  {
    name: "Quartz Lake State Recreation Area",
    description: "Features a large lake with fishing, boating, and camping.",
    location: "Delta Junction, AK",
    latitude: 64.04,
    longitude: -145.72,
    state: "alaska"
  },
  {
    name: "Eagle Trail State Recreation Site",
    description: "Features hiking trails and camping facilities.",
    location: "Tok, AK",
    latitude: 63.34,
    longitude: -142.99,
    state: "alaska"
  },
  {
    name: "Moon Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Tok, AK",
    latitude: 63.34,
    longitude: -142.99,
    state: "alaska"
  },
  {
    name: "Tok River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Tok, AK",
    latitude: 63.34,
    longitude: -142.99,
    state: "alaska"
  },
  {
    name: "Anchor River State Recreation Area",
    description: "Features river access and camping facilities.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Deep Creek State Recreation Area",
    description: "Features river access and camping facilities.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Diamond Creek State Recreation Area",
    description: "Features creek access and camping facilities.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Stariski State Recreation Site",
    description: "Features camping and recreational facilities.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Kachemak Bay State Park",
    description: "Features dramatic coastal scenery and extensive hiking trails.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Kachemak Bay State Wilderness Park",
    description: "Features pristine wilderness and extensive hiking trails.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Ninilchik State Recreation Area",
    description: "Features beach access and camping facilities.",
    location: "Homer, AK",
    latitude: 59.64,
    longitude: -151.54,
    state: "alaska"
  },
  {
    name: "Captain Cook State Recreation Area",
    description: "Features beach access and camping facilities.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Clam Gulch State Recreation Area",
    description: "Features beach access and camping facilities.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Crooked Creek State Recreation Site",
    description: "Features creek access and camping facilities.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Johnson Lake State Recreation Area",
    description: "Features a scenic lake with fishing and camping.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Kasilof River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Kenai River Special Management Area",
    description: "Features world-class fishing and wildlife viewing.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Morgan's Landing State Recreation Area",
    description: "Features river access and camping facilities.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Scout Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Kenai, AK",
    latitude: 60.55,
    longitude: -151.26,
    state: "alaska"
  },
  {
    name: "Caines Head State Recreation Area",
    description: "Features dramatic coastal scenery and hiking trails.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Driftwood Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Lowell Point State Recreation Site",
    description: "Features beach access and camping facilities.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Safety Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Sandspit Point State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Sunny Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Thumb Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Seward, AK",
    latitude: 60.10,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Afognak Island State Park",
    description: "Features pristine wilderness and wildlife viewing opportunities.",
    location: "Kodiak, AK",
    latitude: 57.79,
    longitude: -152.41,
    state: "alaska"
  },
  {
    name: "Buskin River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Kodiak, AK",
    latitude: 57.79,
    longitude: -152.41,
    state: "alaska"
  },
  {
    name: "Fort Abercrombie State Historical Park",
    description: "Features historic military fort and interpretive exhibits.",
    location: "Kodiak, AK",
    latitude: 57.79,
    longitude: -152.41,
    state: "alaska"
  },
  {
    name: "Pasagshak River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Kodiak, AK",
    latitude: 57.79,
    longitude: -152.41,
    state: "alaska"
  },
  {
    name: "Shuyak Island State Park",
    description: "Features pristine wilderness and wildlife viewing opportunities.",
    location: "Kodiak, AK",
    latitude: 57.79,
    longitude: -152.41,
    state: "alaska"
  },
  {
    name: "Woody Island State Recreation Site",
    description: "Features camping and recreational facilities.",
    location: "Kodiak, AK",
    latitude: 57.79,
    longitude: -152.41,
    state: "alaska"
  },
  {
    name: "Big Lake North State Recreation Area",
    description: "Features a large lake with water recreation and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Big Lake South State Recreation Site",
    description: "Features lake access and camping facilities.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Blair Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Denali State Park",
    description: "Features dramatic mountain scenery and extensive hiking trails.",
    location: "Talkeetna, AK",
    latitude: 62.32,
    longitude: -150.09,
    state: "alaska"
  },
  {
    name: "Finger Lake State Recreation Area",
    description: "Features a scenic lake with fishing and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Hatcher Pass East Special Management Area",
    description: "Features dramatic mountain scenery and hiking trails.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Independence Mine State Historical Park",
    description: "Features historic gold mine and interpretive exhibits.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Kepler-Bradley Lakes State Recreation Area",
    description: "Features multiple lakes with fishing and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "King Mountain State Recreation Site",
    description: "Features hiking trails and scenic overlooks.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Matanuska Glacier State Recreation Site",
    description: "Features glacier viewing and hiking trails.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Montana Creek State Recreation Site",
    description: "Features creek access and camping facilities.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Nancy Lake State Recreation Area",
    description: "Features multiple lakes with fishing and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Nancy Lake State Recreation Site",
    description: "Features lake access and camping facilities.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Rocky Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Summit Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Tokositna River State Recreation Site",
    description: "Features river access and camping facilities.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Willow Creek State Recreation Area",
    description: "Features creek access and camping facilities.",
    location: "Wasilla, AK",
    latitude: 61.58,
    longitude: -149.44,
    state: "alaska"
  },
  {
    name: "Bettles Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Blueberry Lake State Recreation Site",
    description: "Features a scenic lake with fishing and camping.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Boswell Bay Beaches State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Canoe Passage State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Decision Point State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Entry Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Granite Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Horseshoe Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Jack Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Kayak Island State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Sawmill Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Shoup Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "South Esther Island State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Surprise Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Surprise Ridge State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Worthington Glacier State Recreation Site",
    description: "Features glacier viewing and hiking trails.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Ziegler Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Cordova, AK",
    latitude: 60.54,
    longitude: -145.76,
    state: "alaska"
  },
  {
    name: "Alaska Chilkat Bald Eagle Preserve",
    description: "Features world-class bald eagle viewing opportunities.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Chilkat Islands State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Chilkat State Park",
    description: "Features dramatic coastal scenery and hiking trails.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Chilkoot Lake State Recreation Site",
    description: "Features lake access and camping facilities.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Mosquito Lake State Recreation Site",
    description: "Features lake access and camping facilities.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Portage Cove State Recreation Site",
    description: "Features beach access and camping facilities.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Sullivan Island State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Haines, AK",
    latitude: 59.24,
    longitude: -135.44,
    state: "alaska"
  },
  {
    name: "Eagle Beach State Recreation Area",
    description: "Features beach access and camping facilities.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Ernest Gruening State Historical Park",
    description: "Features historic buildings and interpretive exhibits.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Funter Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Juneau Trail System",
    description: "Features extensive hiking trails and scenic overlooks.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Oliver Inlet State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Point Bridget State Park",
    description: "Features dramatic coastal scenery and hiking trails.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Shelter Island State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "St. James Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Taku Harbor State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Wickersham State Historic Site",
    description: "Features historic buildings and interpretive exhibits.",
    location: "Juneau, AK",
    latitude: 58.30,
    longitude: -134.42,
    state: "alaska"
  },
  {
    name: "Black Sands Beach State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Ketchikan, AK",
    latitude: 55.34,
    longitude: -131.65,
    state: "alaska"
  },
  {
    name: "Dall Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Ketchikan, AK",
    latitude: 55.34,
    longitude: -131.65,
    state: "alaska"
  },
  {
    name: "Grindall Island State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Ketchikan, AK",
    latitude: 55.34,
    longitude: -131.65,
    state: "alaska"
  },
  {
    name: "Refuge Cove State Recreation Site",
    description: "Features beach access and camping facilities.",
    location: "Ketchikan, AK",
    latitude: 55.34,
    longitude: -131.65,
    state: "alaska"
  },
  {
    name: "Settlers Cove State Recreation Site",
    description: "Features beach access and camping facilities.",
    location: "Ketchikan, AK",
    latitude: 55.34,
    longitude: -131.65,
    state: "alaska"
  },
  {
    name: "Totem Bight State Historical Park",
    description: "Features historic totem poles and interpretive exhibits.",
    location: "Ketchikan, AK",
    latitude: 55.34,
    longitude: -131.65,
    state: "alaska"
  },
  {
    name: "Baranof Castle Hill State Historic Site",
    description: "Features historic buildings and interpretive exhibits.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Big Bear/Baby Bear State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Halibut Point State Recreation Site",
    description: "Features beach access and camping facilities.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Magoun Islands State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Old Sitka State Historical Park",
    description: "Features historic buildings and interpretive exhibits.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Sealion Cove State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Security Bay State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Sitka, AK",
    latitude: 57.05,
    longitude: -135.33,
    state: "alaska"
  },
  {
    name: "Beecher Pass State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Wrangell, AK",
    latitude: 56.47,
    longitude: -132.38,
    state: "alaska"
  },
  {
    name: "Joe Mace Island State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Wrangell, AK",
    latitude: 56.47,
    longitude: -132.38,
    state: "alaska"
  },
  {
    name: "Petroglyph Beach State Historic Site",
    description: "Features ancient rock carvings and interpretive exhibits.",
    location: "Wrangell, AK",
    latitude: 56.47,
    longitude: -132.38,
    state: "alaska"
  },
  {
    name: "Thoms Place State Marine Park",
    description: "Features beach access and marine wildlife viewing.",
    location: "Wrangell, AK",
    latitude: 56.47,
    longitude: -132.38,
    state: "alaska"
  },
  {
    name: "Lake Aleknagik State Recreation Site",
    description: "Features lake access and camping facilities.",
    location: "Dillingham, AK",
    latitude: 59.04,
    longitude: -158.46,
    state: "alaska"
  },
  {
    name: "Wood-Tikchik State Park",
    description: "Features pristine wilderness and wildlife viewing opportunities.",
    location: "Dillingham, AK",
    latitude: 59.04,
    longitude: -158.46,
    state: "alaska"
  }
];

async function populateAlaskaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of alaskaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Alaska parks have been added to the database');
  } catch (error) {
    console.error('Error adding Alaska parks:', error);
  }
}

populateAlaskaParks(); 