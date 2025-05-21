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

const washingtonParks = [
  {
    name: "Alta Lake State Park",
    description: "Features lake recreation and mountain views.",
    location: "Pateros, WA",
    latitude: 48.05,
    longitude: -119.89,
    state: "washington"
  },
  {
    name: "Anderson Lake State Park",
    description: "Features lake recreation and wildlife viewing.",
    location: "Chimacum, WA",
    latitude: 48.01,
    longitude: -122.77,
    state: "washington"
  },
  {
    name: "Battle Ground Lake State Park",
    description: "Features volcanic lake and forest recreation.",
    location: "Battle Ground, WA",
    latitude: 45.80,
    longitude: -122.48,
    state: "washington"
  },
  {
    name: "Bay View State Park",
    description: "Features beach access and scenic views of Padilla Bay.",
    location: "Mount Vernon, WA",
    latitude: 48.48,
    longitude: -122.48,
    state: "washington"
  },
  {
    name: "Beacon Rock State Park",
    description: "Features dramatic rock formation and Columbia River Gorge views.",
    location: "Skamania, WA",
    latitude: 45.64,
    longitude: -122.02,
    state: "washington"
  },
  {
    name: "Belfair State Park",
    description: "Features Hood Canal beach access and forest recreation.",
    location: "Belfair, WA",
    latitude: 47.42,
    longitude: -122.83,
    state: "washington"
  },
  {
    name: "Birch Bay State Park",
    description: "Features beach recreation and scenic bay views.",
    location: "Blaine, WA",
    latitude: 48.92,
    longitude: -122.75,
    state: "washington"
  },
  {
    name: "Blake Island State Park",
    description: "Features marine recreation and Native American cultural history.",
    location: "Seattle, WA",
    latitude: 47.54,
    longitude: -122.49,
    state: "washington"
  },
  {
    name: "Bogachiel State Park",
    description: "Features rainforest trails and river recreation.",
    location: "Forks, WA",
    latitude: 47.91,
    longitude: -124.35,
    state: "washington"
  },
  {
    name: "Bridgeport State Park",
    description: "Features lake recreation and desert landscape.",
    location: "Bridgeport, WA",
    latitude: 48.01,
    longitude: -119.67,
    state: "washington"
  },
  {
    name: "Brooks Memorial State Park",
    description: "Features forest recreation and scenic views.",
    location: "Goldendale, WA",
    latitude: 45.95,
    longitude: -120.67,
    state: "washington"
  },
  {
    name: "Cama Beach State Park",
    description: "Features historic beach resort and marine recreation.",
    location: "Camano Island, WA",
    latitude: 48.15,
    longitude: -122.50,
    state: "washington"
  },
  {
    name: "Camano Island State Park",
    description: "Features beach access and forest recreation.",
    location: "Camano Island, WA",
    latitude: 48.15,
    longitude: -122.50,
    state: "washington"
  },
  {
    name: "Camp Wooten Retreat Center",
    description: "Features group camping and forest recreation.",
    location: "Dayton, WA",
    latitude: 46.20,
    longitude: -117.63,
    state: "washington"
  },
  {
    name: "Cape Disappointment State Park",
    description: "Features historic lighthouses and dramatic coastal views.",
    location: "Ilwaco, WA",
    latitude: 46.29,
    longitude: -124.05,
    state: "washington"
  },
  {
    name: "Centennial Trail State Park",
    description: "Features historic rail trail for hiking and biking.",
    location: "Snohomish, WA",
    latitude: 47.91,
    longitude: -122.09,
    state: "washington"
  },
  {
    name: "Clark Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Anacortes, WA",
    latitude: 48.68,
    longitude: -122.80,
    state: "washington"
  },
  {
    name: "Columbia Hills State Park",
    description: "Features Native American rock art and river recreation.",
    location: "Dallesport, WA",
    latitude: 45.65,
    longitude: -121.15,
    state: "washington"
  },
  {
    name: "Columbia Plateau Trail State Park",
    description: "Features historic rail trail and desert landscape.",
    location: "Spokane, WA",
    latitude: 47.66,
    longitude: -117.42,
    state: "washington"
  },
  {
    name: "Conconully State Park",
    description: "Features lake recreation and mountain views.",
    location: "Conconully, WA",
    latitude: 48.56,
    longitude: -119.75,
    state: "washington"
  },
  {
    name: "Crawford State Park",
    description: "Features forest recreation and scenic views.",
    location: "Metaline Falls, WA",
    latitude: 48.85,
    longitude: -117.37,
    state: "washington"
  },
  {
    name: "Curlew Lake State Park",
    description: "Features lake recreation and mountain views.",
    location: "Republic, WA",
    latitude: 48.73,
    longitude: -118.67,
    state: "washington"
  },
  {
    name: "Cutts Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Gig Harbor, WA",
    latitude: 47.38,
    longitude: -122.69,
    state: "washington"
  },
  {
    name: "Daroga State Park",
    description: "Features river recreation and desert landscape.",
    location: "Orondo, WA",
    latitude: 47.83,
    longitude: -119.95,
    state: "washington"
  },
  {
    name: "Dash Point State Park",
    description: "Features beach access and forest recreation.",
    location: "Federal Way, WA",
    latitude: 47.31,
    longitude: -122.41,
    state: "washington"
  },
  {
    name: "Deception Pass State Park",
    description: "Features dramatic coastal views and forest recreation.",
    location: "Oak Harbor, WA",
    latitude: 48.41,
    longitude: -122.64,
    state: "washington"
  },
  {
    name: "Doe Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Eastsound, WA",
    latitude: 48.68,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Dosewallips State Park",
    description: "Features river recreation and forest trails.",
    location: "Brinnon, WA",
    latitude: 47.68,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Doug's Beach State Park",
    description: "Features river recreation and scenic views.",
    location: "Lyle, WA",
    latitude: 45.70,
    longitude: -121.28,
    state: "washington"
  },
  {
    name: "Eagle Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Steilacoom, WA",
    latitude: 47.17,
    longitude: -122.67,
    state: "washington"
  },
  {
    name: "Fay Bainbridge State Park",
    description: "Features beach access and scenic views of Puget Sound.",
    location: "Bainbridge Island, WA",
    latitude: 47.71,
    longitude: -122.51,
    state: "washington"
  },
  {
    name: "Federation Forest State Park",
    description: "Features old-growth forest and interpretive center.",
    location: "Enumclaw, WA",
    latitude: 47.17,
    longitude: -121.97,
    state: "washington"
  },
  {
    name: "Fields Spring State Park",
    description: "Features mountain recreation and scenic views.",
    location: "Anatone, WA",
    latitude: 46.08,
    longitude: -117.22,
    state: "washington"
  },
  {
    name: "Flaming Geyser State Park",
    description: "Features river recreation and natural gas vents.",
    location: "Auburn, WA",
    latitude: 47.28,
    longitude: -122.01,
    state: "washington"
  },
  {
    name: "Fort Casey State Park",
    description: "Features historic military fort and scenic views.",
    location: "Coupeville, WA",
    latitude: 48.16,
    longitude: -122.68,
    state: "washington"
  },
  {
    name: "Fort Columbia State Park",
    description: "Features historic military fort and scenic views.",
    location: "Chinook, WA",
    latitude: 46.25,
    longitude: -123.92,
    state: "washington"
  },
  {
    name: "Fort Ebey State Park",
    description: "Features historic military fort and scenic views.",
    location: "Coupeville, WA",
    latitude: 48.21,
    longitude: -122.75,
    state: "washington"
  },
  {
    name: "Fort Flagler State Park",
    description: "Features historic military fort and scenic views.",
    location: "Nordland, WA",
    latitude: 48.09,
    longitude: -122.69,
    state: "washington"
  },
  {
    name: "Fort Simcoe State Park",
    description: "Features historic military fort and cultural history.",
    location: "White Swan, WA",
    latitude: 46.34,
    longitude: -120.83,
    state: "washington"
  },
  {
    name: "Fort Townsend State Park",
    description: "Features historic military fort and forest recreation.",
    location: "Port Townsend, WA",
    latitude: 48.08,
    longitude: -122.78,
    state: "washington"
  },
  {
    name: "Fort Worden State Park",
    description: "Features historic military fort and scenic views.",
    location: "Port Townsend, WA",
    latitude: 48.13,
    longitude: -122.76,
    state: "washington"
  },
  {
    name: "Ginkgo Petrified Forest State Park",
    description: "Features petrified wood and interpretive center.",
    location: "Vantage, WA",
    latitude: 46.95,
    longitude: -119.98,
    state: "washington"
  },
  {
    name: "Goldendale Observatory State Park",
    description: "Features public observatory and scenic views.",
    location: "Goldendale, WA",
    latitude: 45.82,
    longitude: -120.82,
    state: "washington"
  },
  {
    name: "Grayland Beach State Park",
    description: "Features beach recreation and coastal views.",
    location: "Grayland, WA",
    latitude: 46.81,
    longitude: -124.09,
    state: "washington"
  },
  {
    name: "Griffiths-Priday State Park",
    description: "Features beach access and river recreation.",
    location: "Copalis Beach, WA",
    latitude: 47.12,
    longitude: -124.17,
    state: "washington"
  },
  {
    name: "Harstine Island State Park",
    description: "Features beach access and forest recreation.",
    location: "Shelton, WA",
    latitude: 47.25,
    longitude: -122.85,
    state: "washington"
  },
  {
    name: "Hope Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Anacortes, WA",
    latitude: 48.38,
    longitude: -122.55,
    state: "washington"
  },
  {
    name: "Ike Kinswa State Park",
    description: "Features lake recreation and forest trails.",
    location: "Silver Creek, WA",
    latitude: 46.50,
    longitude: -122.28,
    state: "washington"
  },
  {
    name: "Illahee State Park",
    description: "Features beach access and forest recreation.",
    location: "Bremerton, WA",
    latitude: 47.61,
    longitude: -122.60,
    state: "washington"
  },
  {
    name: "James Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Anacortes, WA",
    latitude: 48.51,
    longitude: -122.78,
    state: "washington"
  },
  {
    name: "Jarrell Cove State Park",
    description: "Features marine recreation and forest trails.",
    location: "Shelton, WA",
    latitude: 47.25,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Joemma Beach State Park",
    description: "Features beach access and forest recreation.",
    location: "Lakebay, WA",
    latitude: 47.25,
    longitude: -122.75,
    state: "washington"
  },
  {
    name: "Jones Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Eastsound, WA",
    latitude: 48.61,
    longitude: -123.05,
    state: "washington"
  },
  {
    name: "Joseph Whidbey State Park",
    description: "Features beach access and scenic views.",
    location: "Oak Harbor, WA",
    latitude: 48.31,
    longitude: -122.67,
    state: "washington"
  },
  {
    name: "Kanaskat-Palmer State Park",
    description: "Features river recreation and forest trails.",
    location: "Ravensdale, WA",
    latitude: 47.33,
    longitude: -121.97,
    state: "washington"
  },
  {
    name: "Kinney Point State Park",
    description: "Features beach access and scenic views.",
    location: "Lyle, WA",
    latitude: 45.70,
    longitude: -121.28,
    state: "washington"
  },
  {
    name: "Kitsap Memorial State Park",
    description: "Features beach access and forest recreation.",
    location: "Poulsbo, WA",
    latitude: 47.87,
    longitude: -122.70,
    state: "washington"
  },
  {
    name: "Kopachuck State Park",
    description: "Features beach access and forest recreation.",
    location: "Gig Harbor, WA",
    latitude: 47.31,
    longitude: -122.67,
    state: "washington"
  },
  {
    name: "Lake Chelan State Park",
    description: "Features lake recreation and mountain views.",
    location: "Chelan, WA",
    latitude: 47.85,
    longitude: -120.32,
    state: "washington"
  },
  {
    name: "Lake Easton State Park",
    description: "Features lake recreation and mountain views.",
    location: "Easton, WA",
    latitude: 47.24,
    longitude: -121.18,
    state: "washington"
  },
  {
    name: "Lake Sammamish State Park",
    description: "Features lake recreation and forest trails.",
    location: "Issaquah, WA",
    latitude: 47.57,
    longitude: -122.08,
    state: "washington"
  },
  {
    name: "Lake Sylvia State Park",
    description: "Features lake recreation and forest trails.",
    location: "Montesano, WA",
    latitude: 47.00,
    longitude: -123.60,
    state: "washington"
  },
  {
    name: "Lake Wenatchee State Park",
    description: "Features lake recreation and mountain views.",
    location: "Leavenworth, WA",
    latitude: 47.82,
    longitude: -120.73,
    state: "washington"
  },
  {
    name: "Larrabee State Park",
    description: "Features beach access and forest recreation.",
    location: "Bellingham, WA",
    latitude: 48.67,
    longitude: -122.48,
    state: "washington"
  },
  {
    name: "Leadbetter Point State Park",
    description: "Features beach access and wildlife viewing.",
    location: "Ocean Park, WA",
    latitude: 46.63,
    longitude: -124.05,
    state: "washington"
  },
  {
    name: "Lewis and Clark State Park",
    description: "Features forest recreation and interpretive center.",
    location: "Winlock, WA",
    latitude: 46.50,
    longitude: -122.87,
    state: "washington"
  },
  {
    name: "Lewis and Clark Trail State Park",
    description: "Features historic trail and river recreation.",
    location: "Dayton, WA",
    latitude: 46.33,
    longitude: -117.97,
    state: "washington"
  },
  {
    name: "Lime Kiln Point State Park",
    description: "Features whale watching and scenic views.",
    location: "Friday Harbor, WA",
    latitude: 48.51,
    longitude: -123.15,
    state: "washington"
  },
  {
    name: "Lincoln Rock State Park",
    description: "Features lake recreation and desert landscape.",
    location: "East Wenatchee, WA",
    latitude: 47.54,
    longitude: -120.28,
    state: "washington"
  },
  {
    name: "Lopez Island State Park",
    description: "Features beach access and forest recreation.",
    location: "Lopez Island, WA",
    latitude: 48.47,
    longitude: -122.87,
    state: "washington"
  },
  {
    name: "Lyons Ferry State Park",
    description: "Features river recreation and desert landscape.",
    location: "Washtucna, WA",
    latitude: 46.59,
    longitude: -118.22,
    state: "washington"
  },
  {
    name: "Maryhill State Park",
    description: "Features river recreation and desert landscape.",
    location: "Goldendale, WA",
    latitude: 45.68,
    longitude: -120.83,
    state: "washington"
  },
  {
    name: "Matia Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Eastsound, WA",
    latitude: 48.67,
    longitude: -122.83,
    state: "washington"
  },
  {
    name: "McMicken Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Union, WA",
    latitude: 47.38,
    longitude: -122.83,
    state: "washington"
  },
  {
    name: "Millersylvania State Park",
    description: "Features lake recreation and forest trails.",
    location: "Olympia, WA",
    latitude: 46.94,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Moran State Park",
    description: "Features mountain recreation and scenic views.",
    location: "Eastsound, WA",
    latitude: 48.65,
    longitude: -122.83,
    state: "washington"
  },
  {
    name: "Mount Pilchuck State Park",
    description: "Features mountain recreation and scenic views.",
    location: "Granite Falls, WA",
    latitude: 48.06,
    longitude: -121.80,
    state: "washington"
  },
  {
    name: "Mount Spokane State Park",
    description: "Features mountain recreation and scenic views.",
    location: "Mead, WA",
    latitude: 47.92,
    longitude: -117.11,
    state: "washington"
  },
  {
    name: "Mystery Bay State Park",
    description: "Features marine recreation and scenic views.",
    location: "Nordland, WA",
    latitude: 48.09,
    longitude: -122.69,
    state: "washington"
  },
  {
    name: "Nine Mile Recreation Area",
    description: "Features lake recreation and forest trails.",
    location: "Spokane, WA",
    latitude: 47.78,
    longitude: -117.47,
    state: "washington"
  },
  {
    name: "Nolte State Park",
    description: "Features lake recreation and forest trails.",
    location: "Enumclaw, WA",
    latitude: 47.22,
    longitude: -121.97,
    state: "washington"
  },
  {
    name: "Obstruction Pass State Park",
    description: "Features beach access and forest trails.",
    location: "Eastsound, WA",
    latitude: 48.67,
    longitude: -122.83,
    state: "washington"
  },
  {
    name: "Ocean City State Park",
    description: "Features beach recreation and coastal views.",
    location: "Ocean Shores, WA",
    latitude: 47.06,
    longitude: -124.17,
    state: "washington"
  },
  {
    name: "Olallie State Park",
    description: "Features waterfall and forest trails.",
    location: "North Bend, WA",
    latitude: 47.42,
    longitude: -121.63,
    state: "washington"
  },
  {
    name: "Olmstead Place State Park",
    description: "Features historic farm and interpretive center.",
    location: "Ellensburg, WA",
    latitude: 47.00,
    longitude: -120.53,
    state: "washington"
  },
  {
    name: "Pacific Beach State Park",
    description: "Features beach recreation and coastal views.",
    location: "Pacific Beach, WA",
    latitude: 47.21,
    longitude: -124.20,
    state: "washington"
  },
  {
    name: "Pacific Pines State Park",
    description: "Features beach access and forest recreation.",
    location: "Westport, WA",
    latitude: 46.89,
    longitude: -124.11,
    state: "washington"
  },
  {
    name: "Palouse Falls State Park",
    description: "Features dramatic waterfall and scenic views.",
    location: "LaCrosse, WA",
    latitude: 46.66,
    longitude: -118.22,
    state: "washington"
  },
  {
    name: "Paradise Point State Park",
    description: "Features river recreation and forest trails.",
    location: "Ridgefield, WA",
    latitude: 45.83,
    longitude: -122.67,
    state: "washington"
  },
  {
    name: "Patos Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Eastsound, WA",
    latitude: 48.78,
    longitude: -122.97,
    state: "washington"
  },
  {
    name: "Peace Arch State Park",
    description: "Features international border and formal gardens.",
    location: "Blaine, WA",
    latitude: 48.99,
    longitude: -122.75,
    state: "washington"
  },
  {
    name: "Pearrygin Lake State Park",
    description: "Features lake recreation and mountain views.",
    location: "Winthrop, WA",
    latitude: 48.50,
    longitude: -120.17,
    state: "washington"
  },
  {
    name: "Peshastin Pinnacles State Park",
    description: "Features rock climbing and scenic views.",
    location: "Cashmere, WA",
    latitude: 47.53,
    longitude: -120.47,
    state: "washington"
  },
  {
    name: "Pleasant Harbor State Park",
    description: "Features marine recreation and scenic views.",
    location: "Brinnon, WA",
    latitude: 47.68,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Point Defiance State Park",
    description: "Features beach access and forest recreation.",
    location: "Tacoma, WA",
    latitude: 47.30,
    longitude: -122.51,
    state: "washington"
  },
  {
    name: "Posey Island State Park",
    description: "Features marine recreation and scenic views.",
    location: "Roche Harbor, WA",
    latitude: 48.61,
    longitude: -123.15,
    state: "washington"
  },
  {
    name: "Potholes State Park",
    description: "Features lake recreation and desert landscape.",
    location: "Othello, WA",
    latitude: 46.99,
    longitude: -119.33,
    state: "washington"
  },
  {
    name: "Potlatch State Park",
    description: "Features beach access and forest recreation.",
    location: "Hoodsport, WA",
    latitude: 47.38,
    longitude: -123.15,
    state: "washington"
  },
  {
    name: "Rainbow Falls State Park",
    description: "Features waterfall and forest trails.",
    location: "Chehalis, WA",
    latitude: 46.66,
    longitude: -123.22,
    state: "washington"
  },
  {
    name: "Rasar State Park",
    description: "Features river recreation and forest trails.",
    location: "Concrete, WA",
    latitude: 48.50,
    longitude: -121.63,
    state: "washington"
  },
  {
    name: "Reed Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Washougal, WA",
    latitude: 45.58,
    longitude: -122.35,
    state: "washington"
  },
  {
    name: "Riverside State Park",
    description: "Features river recreation and forest trails.",
    location: "Spokane, WA",
    latitude: 47.73,
    longitude: -117.50,
    state: "washington"
  },
  {
    name: "Rockport State Park",
    description: "Features old-growth forest and scenic views.",
    location: "Rockport, WA",
    latitude: 48.50,
    longitude: -121.63,
    state: "washington"
  },
  {
    name: "Sacajawea State Park",
    description: "Features historic site and river recreation.",
    location: "Pasco, WA",
    latitude: 46.20,
    longitude: -118.91,
    state: "washington"
  },
  {
    name: "Saint Edward State Park",
    description: "Features forest recreation and historic seminary.",
    location: "Kenmore, WA",
    latitude: 47.71,
    longitude: -122.25,
    state: "washington"
  },
  {
    name: "Saltwater State Park",
    description: "Features beach access and forest recreation.",
    location: "Des Moines, WA",
    latitude: 47.37,
    longitude: -122.32,
    state: "washington"
  },
  {
    name: "Schafer State Park",
    description: "Features river recreation and forest trails.",
    location: "Elma, WA",
    latitude: 47.00,
    longitude: -123.40,
    state: "washington"
  },
  {
    name: "Seaquest State Park",
    description: "Features forest recreation and Mount St. Helens views.",
    location: "Castle Rock, WA",
    latitude: 46.31,
    longitude: -122.82,
    state: "washington"
  },
  {
    name: "Sequim Bay State Park",
    description: "Features marine recreation and forest trails.",
    location: "Sequim, WA",
    latitude: 48.08,
    longitude: -123.03,
    state: "washington"
  },
  {
    name: "Shine Tidelands State Park",
    description: "Features beach access and wildlife viewing.",
    location: "Port Ludlow, WA",
    latitude: 47.80,
    longitude: -122.68,
    state: "washington"
  },
  {
    name: "Skagit Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Anacortes, WA",
    latitude: 48.38,
    longitude: -122.55,
    state: "washington"
  },
  {
    name: "South Whidbey State Park",
    description: "Features beach access and forest recreation.",
    location: "Freeland, WA",
    latitude: 48.08,
    longitude: -122.58,
    state: "washington"
  },
  {
    name: "Spencer Spit State Park",
    description: "Features beach access and forest recreation.",
    location: "Lopez Island, WA",
    latitude: 48.51,
    longitude: -122.87,
    state: "washington"
  },
  {
    name: "Spring Creek Hatchery State Park",
    description: "Features fish hatchery and river recreation.",
    location: "Underwood, WA",
    latitude: 45.73,
    longitude: -121.53,
    state: "washington"
  },
  {
    name: "Squak Mountain State Park",
    description: "Features forest recreation and scenic views.",
    location: "Issaquah, WA",
    latitude: 47.50,
    longitude: -122.05,
    state: "washington"
  },
  {
    name: "Steamboat Rock State Park",
    description: "Features dramatic rock formation and lake recreation.",
    location: "Electric City, WA",
    latitude: 47.85,
    longitude: -119.13,
    state: "washington"
  },
  {
    name: "Steptoe Battlefield State Park",
    description: "Features historic battlefield and interpretive center.",
    location: "Rosalia, WA",
    latitude: 47.23,
    longitude: -117.37,
    state: "washington"
  },
  {
    name: "Steptoe Butte State Park",
    description: "Features scenic views and historic site.",
    location: "Colfax, WA",
    latitude: 47.03,
    longitude: -117.30,
    state: "washington"
  },
  {
    name: "Stuart Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Roche Harbor, WA",
    latitude: 48.67,
    longitude: -123.20,
    state: "washington"
  },
  {
    name: "Sucia Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Eastsound, WA",
    latitude: 48.75,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Sun Lakes-Dry Falls State Park",
    description: "Features dramatic geological features and lake recreation.",
    location: "Coulee City, WA",
    latitude: 47.61,
    longitude: -119.35,
    state: "washington"
  },
  {
    name: "Tolmie State Park",
    description: "Features beach access and forest recreation.",
    location: "Olympia, WA",
    latitude: 47.14,
    longitude: -122.70,
    state: "washington"
  },
  {
    name: "Triton Cove State Park",
    description: "Features marine recreation and scenic views.",
    location: "Brinnon, WA",
    latitude: 47.68,
    longitude: -122.90,
    state: "washington"
  },
  {
    name: "Turn Island State Park",
    description: "Features marine recreation and forest trails.",
    location: "Friday Harbor, WA",
    latitude: 48.51,
    longitude: -123.15,
    state: "washington"
  },
  {
    name: "Twanoh State Park",
    description: "Features beach access and forest recreation.",
    location: "Union, WA",
    latitude: 47.38,
    longitude: -122.83,
    state: "washington"
  },
  {
    name: "Twenty-Five Mile Creek State Park",
    description: "Features lake recreation and forest trails.",
    location: "Chelan, WA",
    latitude: 47.85,
    longitude: -120.32,
    state: "washington"
  },
  {
    name: "Twin Harbors State Park",
    description: "Features beach recreation and coastal views.",
    location: "Westport, WA",
    latitude: 46.89,
    longitude: -124.11,
    state: "washington"
  },
  {
    name: "Wallace Falls State Park",
    description: "Features waterfall and forest trails.",
    location: "Gold Bar, WA",
    latitude: 47.87,
    longitude: -121.67,
    state: "washington"
  },
  {
    name: "Wanapum State Park",
    description: "Features river recreation and desert landscape.",
    location: "Vantage, WA",
    latitude: 46.95,
    longitude: -119.98,
    state: "washington"
  },
  {
    name: "Wenatchee Confluence State Park",
    description: "Features river recreation and scenic views.",
    location: "Wenatchee, WA",
    latitude: 47.42,
    longitude: -120.32,
    state: "washington"
  },
  {
    name: "Westport Light State Park",
    description: "Features beach access and historic lighthouse.",
    location: "Westport, WA",
    latitude: 46.89,
    longitude: -124.11,
    state: "washington"
  },
  {
    name: "Yakima Sportsman State Park",
    description: "Features river recreation and wildlife viewing.",
    location: "Yakima, WA",
    latitude: 46.60,
    longitude: -120.50,
    state: "washington"
  }
];

async function populateWashingtonParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of washingtonParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All Washington parks have been added to the database');
  } catch (error) {
    console.error('Error adding Washington parks:', error);
  }
}

populateWashingtonParks(); 