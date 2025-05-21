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

const californiaParks = [
  {
    name: "Ahjumawi Lava Springs State Park",
    description: "Features ancient lava flows, freshwater springs, and excellent fishing opportunities.",
    location: "Fall River Mills, CA",
    latitude: 41.18,
    longitude: -121.43,
    state: "california"
  },
  {
    name: "Andrew Molera State Park",
    description: "Features coastal trails, beach access, and Big Sur River.",
    location: "Big Sur, CA",
    latitude: 36.28,
    longitude: -121.85,
    state: "california"
  },
  {
    name: "Angel Island State Park",
    description: "Features historic military sites, hiking trails, and panoramic views of San Francisco Bay.",
    location: "Tiburon, CA",
    latitude: 37.86,
    longitude: -122.43,
    state: "california"
  },
  {
    name: "Año Nuevo State Park",
    description: "Features elephant seal rookery and coastal trails.",
    location: "Pescadero, CA",
    latitude: 37.11,
    longitude: -122.33,
    state: "california"
  },
  {
    name: "Anza-Borrego Desert State Park",
    description: "Features desert landscapes, wildflowers, and hiking trails.",
    location: "Borrego Springs, CA",
    latitude: 33.25,
    longitude: -116.40,
    state: "california"
  },
  {
    name: "Arthur B. Ripley Desert Woodland State Park",
    description: "Features Joshua tree woodland and desert wildlife.",
    location: "Lancaster, CA",
    latitude: 34.70,
    longitude: -118.20,
    state: "california"
  },
  {
    name: "Bidwell-Sacramento River State Park",
    description: "Features river access, fishing, and wildlife viewing.",
    location: "Chico, CA",
    latitude: 39.73,
    longitude: -121.85,
    state: "california"
  },
  {
    name: "Big Basin Redwoods State Park",
    description: "Features ancient redwood forest and extensive hiking trails.",
    location: "Boulder Creek, CA",
    latitude: 37.17,
    longitude: -122.22,
    state: "california"
  },
  {
    name: "Border Field State Park",
    description: "Features coastal wetlands and international border views.",
    location: "San Diego, CA",
    latitude: 32.54,
    longitude: -117.12,
    state: "california"
  },
  {
    name: "Bothe-Napa Valley State Park",
    description: "Features redwood groves and Napa Valley wine country access.",
    location: "Calistoga, CA",
    latitude: 38.55,
    longitude: -122.53,
    state: "california"
  },
  {
    name: "Burton Creek State Park",
    description: "Features hiking trails and Lake Tahoe views.",
    location: "Tahoe City, CA",
    latitude: 39.17,
    longitude: -120.14,
    state: "california"
  },
  {
    name: "Butano State Park",
    description: "Features redwood forest and hiking trails.",
    location: "Pescadero, CA",
    latitude: 37.20,
    longitude: -122.33,
    state: "california"
  },
  {
    name: "Calaveras Big Trees State Park",
    description: "Features giant sequoia groves and hiking trails.",
    location: "Arnold, CA",
    latitude: 38.28,
    longitude: -120.30,
    state: "california"
  },
  {
    name: "California Indian Heritage Center State Park",
    description: "Features cultural exhibits and interpretive programs.",
    location: "Sacramento, CA",
    latitude: 38.58,
    longitude: -121.49,
    state: "california"
  },
  {
    name: "Castle Crags State Park",
    description: "Features dramatic granite spires and hiking trails.",
    location: "Castella, CA",
    latitude: 41.16,
    longitude: -122.35,
    state: "california"
  },
  {
    name: "Castle Rock State Park",
    description: "Features rock climbing and panoramic views.",
    location: "Los Gatos, CA",
    latitude: 37.23,
    longitude: -121.98,
    state: "california"
  },
  {
    name: "Caswell Memorial State Park",
    description: "Features riparian forest and Stanislaus River access.",
    location: "Ripon, CA",
    latitude: 37.69,
    longitude: -121.09,
    state: "california"
  },
  {
    name: "China Camp State Park",
    description: "Features historic Chinese fishing village and bay views.",
    location: "San Rafael, CA",
    latitude: 38.00,
    longitude: -122.49,
    state: "california"
  },
  {
    name: "Chino Hills State Park",
    description: "Features rolling hills and extensive trail system.",
    location: "Chino Hills, CA",
    latitude: 33.91,
    longitude: -117.68,
    state: "california"
  },
  {
    name: "Clear Lake State Park",
    description: "Features lake access, fishing, and camping.",
    location: "Kelseyville, CA",
    latitude: 39.02,
    longitude: -122.80,
    state: "california"
  },
  {
    name: "Crystal Cove State Park",
    description: "Features beach access, historic cottages, and hiking trails.",
    location: "Laguna Beach, CA",
    latitude: 33.57,
    longitude: -117.84,
    state: "california"
  },
  {
    name: "Cuyamaca Rancho State Park",
    description: "Features mountain trails and historic sites.",
    location: "Julian, CA",
    latitude: 32.99,
    longitude: -116.58,
    state: "california"
  },
  {
    name: "D. L. Bliss State Park",
    description: "Features Lake Tahoe access and scenic overlooks.",
    location: "South Lake Tahoe, CA",
    latitude: 39.00,
    longitude: -120.10,
    state: "california"
  },
  {
    name: "Del Norte Coast Redwoods State Park",
    description: "Features ancient redwood forest and coastal views.",
    location: "Crescent City, CA",
    latitude: 41.78,
    longitude: -124.11,
    state: "california"
  },
  {
    name: "Donner Memorial State Park",
    description: "Features historic emigrant trail site and lake access.",
    location: "Truckee, CA",
    latitude: 39.32,
    longitude: -120.24,
    state: "california"
  },
  {
    name: "Dos Rios State Park",
    description: "Features river access and wildlife viewing.",
    location: "Modesto, CA",
    latitude: 37.55,
    longitude: -120.98,
    state: "california"
  },
  {
    name: "Ed Z'berg Sugar Pine Point State Park",
    description: "Features Lake Tahoe access and historic estate.",
    location: "Tahoma, CA",
    latitude: 39.07,
    longitude: -120.13,
    state: "california"
  },
  {
    name: "Emerald Bay State Park",
    description: "Features scenic bay, historic Vikingsholm castle, and hiking trails.",
    location: "South Lake Tahoe, CA",
    latitude: 38.95,
    longitude: -120.10,
    state: "california"
  },
  {
    name: "Estero Bluffs State Park",
    description: "Features coastal bluffs and wildlife viewing.",
    location: "Cayucos, CA",
    latitude: 35.45,
    longitude: -120.90,
    state: "california"
  },
  {
    name: "The Forest of Nisene Marks State Park",
    description: "Features redwood forest and historic logging sites.",
    location: "Aptos, CA",
    latitude: 37.08,
    longitude: -121.90,
    state: "california"
  },
  {
    name: "Fort Ord Dunes State Park",
    description: "Features coastal dunes and beach access.",
    location: "Marina, CA",
    latitude: 36.69,
    longitude: -121.81,
    state: "california"
  },
  {
    name: "Fremont Peak State Park",
    description: "Features panoramic views and historic observatory.",
    location: "San Juan Bautista, CA",
    latitude: 36.76,
    longitude: -121.50,
    state: "california"
  },
  {
    name: "Garrapata State Park",
    description: "Features coastal trails and scenic views.",
    location: "Carmel, CA",
    latitude: 36.47,
    longitude: -121.93,
    state: "california"
  },
  {
    name: "Gaviota State Park",
    description: "Features beach access and coastal trails.",
    location: "Goleta, CA",
    latitude: 34.47,
    longitude: -120.23,
    state: "california"
  },
  {
    name: "Great Valley Grasslands State Park",
    description: "Features native grasslands and wildlife viewing.",
    location: "Merced, CA",
    latitude: 37.33,
    longitude: -120.50,
    state: "california"
  },
  {
    name: "Grizzly Creek Redwoods State Park",
    description: "Features ancient redwood forest and river access.",
    location: "Carlotta, CA",
    latitude: 40.58,
    longitude: -123.98,
    state: "california"
  },
  {
    name: "Grover Hot Springs State Park",
    description: "Features natural hot springs and mountain trails.",
    location: "Markleeville, CA",
    latitude: 38.70,
    longitude: -119.83,
    state: "california"
  },
  {
    name: "Harmony Headlands State Park",
    description: "Features coastal bluffs and wildlife viewing.",
    location: "Harmony, CA",
    latitude: 35.51,
    longitude: -120.98,
    state: "california"
  },
  {
    name: "Hearst San Simeon State Park",
    description: "Features beach access and coastal trails.",
    location: "San Simeon, CA",
    latitude: 35.64,
    longitude: -121.19,
    state: "california"
  },
  {
    name: "Hendy Woods State Park",
    description: "Features ancient redwood forest and river access.",
    location: "Philo, CA",
    latitude: 39.37,
    longitude: -123.53,
    state: "california"
  },
  {
    name: "Henry Cowell Redwoods State Park",
    description: "Features ancient redwood forest and river access.",
    location: "Felton, CA",
    latitude: 37.04,
    longitude: -122.03,
    state: "california"
  },
  {
    name: "Henry W. Coe State Park",
    description: "Features extensive hiking trails and wildlife viewing.",
    location: "Morgan Hill, CA",
    latitude: 37.18,
    longitude: -121.55,
    state: "california"
  },
  {
    name: "Humboldt Lagoons State Park",
    description: "Features coastal lagoons and wildlife viewing.",
    location: "Trinidad, CA",
    latitude: 41.22,
    longitude: -124.10,
    state: "california"
  },
  {
    name: "Humboldt Redwoods State Park",
    description: "Features world's largest remaining old-growth redwood forest.",
    location: "Weott, CA",
    latitude: 40.31,
    longitude: -123.97,
    state: "california"
  },
  {
    name: "Jedediah Smith Redwoods State Park",
    description: "Features ancient redwood forest and river access.",
    location: "Crescent City, CA",
    latitude: 41.78,
    longitude: -124.10,
    state: "california"
  },
  {
    name: "Julia Pfeiffer Burns State Park",
    description: "Features coastal waterfall and scenic views.",
    location: "Big Sur, CA",
    latitude: 36.17,
    longitude: -121.67,
    state: "california"
  },
  {
    name: "Leo Carrillo State Park",
    description: "Features beach access and coastal caves.",
    location: "Malibu, CA",
    latitude: 34.04,
    longitude: -118.93,
    state: "california"
  },
  {
    name: "Limekiln State Park",
    description: "Features historic lime kilns and beach access.",
    location: "Big Sur, CA",
    latitude: 36.01,
    longitude: -121.52,
    state: "california"
  },
  {
    name: "MacKerricher State Park",
    description: "Features beach access and wildlife viewing.",
    location: "Fort Bragg, CA",
    latitude: 39.49,
    longitude: -123.79,
    state: "california"
  },
  {
    name: "Malibu Creek State Park",
    description: "Features hiking trails and historic movie ranch.",
    location: "Calabasas, CA",
    latitude: 34.10,
    longitude: -118.73,
    state: "california"
  },
  {
    name: "Manchester State Park",
    description: "Features beach access and coastal trails.",
    location: "Manchester, CA",
    latitude: 38.97,
    longitude: -123.69,
    state: "california"
  },
  {
    name: "McArthur-Burney Falls Memorial State Park",
    description: "Features spectacular waterfall and lake access.",
    location: "Burney, CA",
    latitude: 41.01,
    longitude: -121.65,
    state: "california"
  },
  {
    name: "Mendocino Headlands State Park",
    description: "Features coastal bluffs and scenic views.",
    location: "Mendocino, CA",
    latitude: 39.31,
    longitude: -123.80,
    state: "california"
  },
  {
    name: "Mendocino Woodlands State Park",
    description: "Features redwood forest and historic camp.",
    location: "Mendocino, CA",
    latitude: 39.33,
    longitude: -123.75,
    state: "california"
  },
  {
    name: "Montaña de Oro State Park",
    description: "Features coastal bluffs and hiking trails.",
    location: "Los Osos, CA",
    latitude: 35.27,
    longitude: -120.88,
    state: "california"
  },
  {
    name: "Morro Bay State Park",
    description: "Features bay access and wildlife viewing.",
    location: "Morro Bay, CA",
    latitude: 35.35,
    longitude: -120.85,
    state: "california"
  },
  {
    name: "Mount Diablo State Park",
    description: "Features panoramic views and extensive trails.",
    location: "Danville, CA",
    latitude: 37.88,
    longitude: -121.91,
    state: "california"
  },
  {
    name: "Mount San Jacinto State Park",
    description: "Features mountain trails and scenic views.",
    location: "Idyllwild, CA",
    latitude: 33.81,
    longitude: -116.68,
    state: "california"
  },
  {
    name: "Mount Tamalpais State Park",
    description: "Features mountain trails and panoramic views.",
    location: "Mill Valley, CA",
    latitude: 37.89,
    longitude: -122.58,
    state: "california"
  },
  {
    name: "Navarro River Redwoods State Park",
    description: "Features redwood forest and river access.",
    location: "Albion, CA",
    latitude: 39.22,
    longitude: -123.77,
    state: "california"
  },
  {
    name: "Pacheco State Park",
    description: "Features rolling hills and wildlife viewing.",
    location: "Hollister, CA",
    latitude: 37.08,
    longitude: -121.21,
    state: "california"
  },
  {
    name: "Palomar Mountain State Park",
    description: "Features mountain trails and historic observatory.",
    location: "Palomar Mountain, CA",
    latitude: 33.33,
    longitude: -116.92,
    state: "california"
  },
  {
    name: "Pfeiffer Big Sur State Park",
    description: "Features redwood forest and river access.",
    location: "Big Sur, CA",
    latitude: 36.25,
    longitude: -121.78,
    state: "california"
  },
  {
    name: "Placerita Canyon State Park",
    description: "Features historic gold discovery site and hiking trails.",
    location: "Newhall, CA",
    latitude: 34.38,
    longitude: -118.47,
    state: "california"
  },
  {
    name: "Plumas-Eureka State Park",
    description: "Features historic mining site and mountain trails.",
    location: "Blairsten, CA",
    latitude: 39.79,
    longitude: -120.67,
    state: "california"
  },
  {
    name: "Point Mugu State Park",
    description: "Features beach access and coastal trails.",
    location: "Malibu, CA",
    latitude: 34.09,
    longitude: -119.06,
    state: "california"
  },
  {
    name: "Portola Redwoods State Park",
    description: "Features redwood forest and hiking trails.",
    location: "La Honda, CA",
    latitude: 37.26,
    longitude: -122.21,
    state: "california"
  },
  {
    name: "Prairie Creek Redwoods State Park",
    description: "Features ancient redwood forest and wildlife viewing.",
    location: "Orick, CA",
    latitude: 41.36,
    longitude: -124.03,
    state: "california"
  },
  {
    name: "Red Rock Canyon State Park",
    description: "Features dramatic rock formations and desert trails.",
    location: "Cantil, CA",
    latitude: 35.37,
    longitude: -117.99,
    state: "california"
  },
  {
    name: "Richardson Grove State Park",
    description: "Features ancient redwood forest and river access.",
    location: "Garberville, CA",
    latitude: 40.02,
    longitude: -123.82,
    state: "california"
  },
  {
    name: "Robert Louis Stevenson State Park",
    description: "Features mountain trails and historic site.",
    location: "Calistoga, CA",
    latitude: 38.65,
    longitude: -122.60,
    state: "california"
  },
  {
    name: "Russian Gulch State Park",
    description: "Features coastal trails and waterfall.",
    location: "Mendocino, CA",
    latitude: 39.33,
    longitude: -123.80,
    state: "california"
  },
  {
    name: "Saddleback Butte State Park",
    description: "Features desert trails and wildlife viewing.",
    location: "Lancaster, CA",
    latitude: 34.67,
    longitude: -117.81,
    state: "california"
  },
  {
    name: "Salt Point State Park",
    description: "Features coastal trails and historic sites.",
    location: "Jenner, CA",
    latitude: 38.57,
    longitude: -123.33,
    state: "california"
  },
  {
    name: "Samuel P. Taylor State Park",
    description: "Features redwood forest and historic mill site.",
    location: "Lagunitas, CA",
    latitude: 38.02,
    longitude: -122.71,
    state: "california"
  },
  {
    name: "San Bruno Mountain State Park",
    description: "Features mountain trails and wildlife viewing.",
    location: "Brisbane, CA",
    latitude: 37.69,
    longitude: -122.43,
    state: "california"
  },
  {
    name: "Sinkyone Wilderness State Park",
    description: "Features coastal wilderness and hiking trails.",
    location: "Whitethorn, CA",
    latitude: 39.92,
    longitude: -123.92,
    state: "california"
  },
  {
    name: "Sonoma Coast State Park",
    description: "Features beach access and coastal trails.",
    location: "Jenner, CA",
    latitude: 38.45,
    longitude: -123.12,
    state: "california"
  },
  {
    name: "South Yuba River State Park",
    description: "Features river access and historic bridge.",
    location: "Nevada City, CA",
    latitude: 39.32,
    longitude: -120.98,
    state: "california"
  },
  {
    name: "Sue-meg State Park",
    description: "Features coastal trails and historic sites.",
    location: "Trinidad, CA",
    latitude: 41.06,
    longitude: -124.15,
    state: "california"
  },
  {
    name: "Sugarloaf Ridge State Park",
    description: "Features mountain trails and wildlife viewing.",
    location: "Kenwood, CA",
    latitude: 38.44,
    longitude: -122.53,
    state: "california"
  },
  {
    name: "Sutter Buttes State Park",
    description: "Features unique volcanic formation and hiking trails.",
    location: "Yuba City, CA",
    latitude: 39.21,
    longitude: -121.82,
    state: "california"
  },
  {
    name: "Tolowa Dunes State Park",
    description: "Features coastal dunes and wildlife viewing.",
    location: "Crescent City, CA",
    latitude: 41.78,
    longitude: -124.20,
    state: "california"
  },
  {
    name: "Tomales Bay State Park",
    description: "Features beach access and wildlife viewing.",
    location: "Inverness, CA",
    latitude: 38.13,
    longitude: -122.89,
    state: "california"
  },
  {
    name: "Topanga State Park",
    description: "Features mountain trails and wildlife viewing.",
    location: "Topanga, CA",
    latitude: 34.09,
    longitude: -118.60,
    state: "california"
  },
  {
    name: "Trione-Annadel State Park",
    description: "Features lake access and extensive trails.",
    location: "Santa Rosa, CA",
    latitude: 38.43,
    longitude: -122.65,
    state: "california"
  },
  {
    name: "Van Damme State Park",
    description: "Features beach access and fern canyon.",
    location: "Mendocino, CA",
    latitude: 39.28,
    longitude: -123.79,
    state: "california"
  },
  {
    name: "Washoe Meadows State Park",
    description: "Features meadow trails and wildlife viewing.",
    location: "South Lake Tahoe, CA",
    latitude: 38.93,
    longitude: -120.00,
    state: "california"
  },
  {
    name: "Wilder Ranch State Park",
    description: "Features historic ranch and coastal trails.",
    location: "Santa Cruz, CA",
    latitude: 36.96,
    longitude: -122.08,
    state: "california"
  }
];

async function populateCaliforniaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of californiaParks) {
      await addDoc(parksCollection, park);
      console.log(`Added ${park.name} to the database`);
    }
    console.log('All California parks have been added to the database');
  } catch (error) {
    console.error('Error adding California parks:', error);
  }
}

populateCaliforniaParks(); 