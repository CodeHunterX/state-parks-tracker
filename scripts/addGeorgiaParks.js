const { initializeApp } = require('firebase/app');
const { getFirestore, collection, setDoc, doc } = require('firebase/firestore');

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

const georgiaParks = [
  { name: 'A.H. Stephens State Park', description: 'Named after the Confederate Vice President, this park features a museum with one of Georgia\'s largest collections of Civil War artifacts.', state: 'georgia', location: 'Crawfordville, Georgia', latitude: 33.5547, longitude: -82.8935 },
  { name: 'Amicalola Falls State Park & Lodge', description: 'Home to the tallest cascading waterfall in the Southeast, offering hiking trails and a lodge with mountain views.', state: 'georgia', location: 'Dawsonville, Georgia', latitude: 34.5623, longitude: -84.2470 },
  { name: 'Black Rock Mountain State Park', description: 'Georgia\'s highest state park, offering scenic overlooks and trails through the Blue Ridge Mountains.', state: 'georgia', location: 'Mountain City, Georgia', latitude: 34.9184, longitude: -83.4088 },
  { name: 'Chattahoochee Bend State Park', description: 'One of Georgia\'s newest state parks, protecting five miles of river frontage and offering trails and camping.', state: 'georgia', location: 'Newnan, Georgia', latitude: 33.4290, longitude: -85.0450 },
  { name: 'Cloudland Canyon State Park', description: 'Features rugged geology, deep canyons, and waterfalls, making it one of Georgia\'s most scenic parks.', state: 'georgia', location: 'Rising Fawn, Georgia', latitude: 34.8403, longitude: -85.4829 },
  { name: 'Crooked River State Park', description: 'Located on the southern tip of Georgia\'s coast, offering access to the Intracoastal Waterway and abundant wildlife.', state: 'georgia', location: 'St. Marys, Georgia', latitude: 30.8420, longitude: -81.5520 },
  { name: 'Don Carter State Park', description: 'The only state park on Lake Lanier, offering water recreation and multi-use trails.', state: 'georgia', location: 'Gainesville, Georgia', latitude: 34.3872, longitude: -83.7518 },
  { name: 'Elijah Clark State Park', description: 'Named after a Revolutionary War hero, this park offers lakeside camping and boating on Clarks Hill Lake.', state: 'georgia', location: 'Lincolnton, Georgia', latitude: 33.8486, longitude: -82.3796 },
  { name: 'F.D. Roosevelt State Park', description: 'Georgia\'s largest state park, featuring more than 40 miles of trails and the historic Dowdell\'s Knob overlook.', state: 'georgia', location: 'Pine Mountain, Georgia', latitude: 32.8370, longitude: -84.8150 },
  { name: 'Florence Marina State Park', description: 'Located on the northern shore of Lake Walter F. George, popular for boating and birding.', state: 'georgia', location: 'Omaha, Georgia', latitude: 32.0890, longitude: -85.0370 },
  { name: 'Fort McAllister State Park', description: 'Features well-preserved earthwork fortifications of the Confederacy and scenic views of the Ogeechee River.', state: 'georgia', location: 'Richmond Hill, Georgia', latitude: 31.8900, longitude: -81.1800 },
  { name: 'Fort Mountain State Park', description: 'Offers hiking, mountain biking, and a mysterious ancient rock wall atop the mountain.', state: 'georgia', location: 'Chatsworth, Georgia', latitude: 34.7665, longitude: -84.7132 },
  { name: 'Fort Yargo State Park', description: 'Features a 1792 log fort, a large lake for swimming and boating, and numerous trails.', state: 'georgia', location: 'Winder, Georgia', latitude: 33.9896, longitude: -83.7287 },
  { name: 'General Coffee State Park', description: 'Known for its agricultural history, with a heritage farm and boardwalks through cypress swamps.', state: 'georgia', location: 'Nicholls, Georgia', latitude: 31.5470, longitude: -82.6890 },
  { name: 'George L. Smith State Park', description: 'Features a mill pond with cypress trees, ideal for paddling and fishing.', state: 'georgia', location: 'Twin City, Georgia', latitude: 32.5020, longitude: -82.0970 },
  { name: 'George T. Bagby State Park', description: 'Offers a lodge, golf course, and access to Lake Walter F. George for fishing and boating.', state: 'georgia', location: 'Fort Gaines, Georgia', latitude: 31.7180, longitude: -85.0720 },
  { name: 'Georgia Veterans State Park', description: 'Honors military veterans with a museum and offers golf, camping, and boating on Lake Blackshear.', state: 'georgia', location: 'Cordele, Georgia', latitude: 31.9670, longitude: -83.9200 },
  { name: 'Hamburg State Park', description: 'Features a 1920s water-powered grist mill and a museum, with fishing and camping opportunities.', state: 'georgia', location: 'Mitchell, Georgia', latitude: 33.2300, longitude: -82.8000 },
  { name: 'Hard Labor Creek State Park', description: 'Offers golf, hiking, and a lake for swimming and fishing, set in a quiet, forested area.', state: 'georgia', location: 'Rutledge, Georgia', latitude: 33.6640, longitude: -83.6060 },
  { name: 'High Falls State Park', description: 'Named for the tumbling cascades on the Towaliga River, popular for hiking and fishing.', state: 'georgia', location: 'Jackson, Georgia', latitude: 33.1780, longitude: -83.9200 },
  { name: 'Indian Springs State Park', description: 'One of the oldest state parks in the U.S., known for its mineral spring and historic significance.', state: 'georgia', location: 'Flovilla, Georgia', latitude: 33.2450, longitude: -83.9330 },
  { name: 'Jack Hill State Park', description: 'Features a golf course, lake, and camping facilities in a serene setting.', state: 'georgia', location: 'Reidsville, Georgia', latitude: 32.0870, longitude: -82.1180 },
  { name: 'James H. Floyd State Park', description: 'Offers quiet fishing lakes, hiking trails, and is near the Pinhoti Trail.', state: 'georgia', location: 'Summerville, Georgia', latitude: 34.4700, longitude: -85.3450 },
  { name: 'Kolomoki Mounds State Park', description: 'Home to ancient Native American mounds, with a museum and recreational opportunities.', state: 'georgia', location: 'Blakely, Georgia', latitude: 31.5110, longitude: -84.9050 },
  { name: 'Laura S. Walker State Park', description: 'Located near the Okefenokee Swamp, offering a lake, golf course, and diverse wildlife.', state: 'georgia', location: 'Waycross, Georgia', latitude: 31.0735, longitude: -82.2781 },
  { name: 'Little Ocmulgee State Park & Lodge', description: 'Features a lodge, golf course, and a lake for fishing and boating.', state: 'georgia', location: 'Helena, Georgia', latitude: 32.0750, longitude: -82.9200 },
  { name: 'Magnolia Springs State Park', description: 'Known for its crystal-clear springs and a boardwalk through a lush forest.', state: 'georgia', location: 'Millen, Georgia', latitude: 32.8720, longitude: -81.9490 },
  { name: 'Mistletoe State Park', description: 'Offers excellent fishing on Clarks Hill Lake and scenic hiking trails.', state: 'georgia', location: 'Appling, Georgia', latitude: 33.6330, longitude: -82.3830 },
  { name: 'Moccasin Creek State Park', description: 'A small park on Lake Burton, popular for fishing and boating.', state: 'georgia', location: 'Clarkesville, Georgia', latitude: 34.8480, longitude: -83.5750 },
  { name: 'Panola Mountain State Park', description: 'A National Natural Landmark, offering guided hikes to protect its unique ecology.', state: 'georgia', location: 'Stockbridge, Georgia', latitude: 33.6330, longitude: -84.1720 },
  { name: 'Providence Canyon State Park', description: 'Known as Georgia\'s "Little Grand Canyon," featuring colorful gullies and hiking trails.', state: 'georgia', location: 'Lumpkin, Georgia', latitude: 32.0644, longitude: -84.9219 },
  { name: 'Red Top Mountain State Park', description: 'Located on Lake Allatoona, this park is popular for boating, hiking, and camping. It is named for its red soil, rich in iron, and features over 15 miles of trails and a reconstructed 1860s homestead.', state: 'georgia', location: 'Acworth, Georgia', latitude: 34.1429, longitude: -84.7067 },
  { name: 'Reed Bingham State Park', description: 'A diverse park featuring a 375-acre lake, ideal for boating, fishing, and wildlife viewing.', state: 'georgia', location: 'Adel, Georgia', latitude: 31.1615, longitude: -83.5419 },
  { name: 'Richard B. Russell State Park', description: 'Offers a championship golf course, camping, and access to Lake Richard B. Russell.', state: 'georgia', location: 'Elberton, Georgia', latitude: 34.1250, longitude: -82.7500 },
  { name: 'Seminole State Park', description: 'Located on Lake Seminole, popular for fishing, boating, and birding.', state: 'georgia', location: 'Donalsonville, Georgia', latitude: 30.7710, longitude: -84.8790 },
  { name: 'Skidaway Island State Park', description: 'Features trails through maritime forest and salt marsh, near historic Savannah.', state: 'georgia', location: 'Savannah, Georgia', latitude: 31.9490, longitude: -81.0530 },
  { name: 'Smithgall Woods State Park', description: 'A premier trout fishing destination with luxurious cottages and hiking trails.', state: 'georgia', location: 'Helen, Georgia', latitude: 34.6780, longitude: -83.7250 },
  { name: 'Stephen C. Foster State Park', description: 'Gateway to the Okefenokee Swamp, offering boating and wildlife viewing.', state: 'georgia', location: 'Fargo, Georgia', latitude: 30.8300, longitude: -82.3630 },
  { name: 'Sweetwater Creek State Park', description: 'Known for its Civil War-era mill ruins and trails along the creek.', state: 'georgia', location: 'Lithia Springs, Georgia', latitude: 33.7530, longitude: -84.6390 },
  { name: 'Tallulah Gorge State Park', description: 'Features a stunning 1,000-foot-deep gorge with hiking trails and waterfalls.', state: 'georgia', location: 'Tallulah Falls, Georgia', latitude: 34.7390, longitude: -83.3960 },
  { name: 'Tugaloo State Park', description: 'Located on Lake Hartwell, offering water sports, camping, and cottages.', state: 'georgia', location: 'Lavonia, Georgia', latitude: 34.4860, longitude: -83.0840 },
  { name: 'Unicoi State Park & Lodge', description: 'Offers a lodge, cabins, and outdoor activities near the Alpine village of Helen.', state: 'georgia', location: 'Helen, Georgia', latitude: 34.7240, longitude: -83.7100 },
  { name: 'Victoria Bryant State Park', description: 'Features a golf course, hiking trails, and a peaceful stream.', state: 'georgia', location: 'Royston, Georgia', latitude: 34.2960, longitude: -83.1050 },
  { name: 'Vogel State Park', description: 'One of Georgia\'s oldest parks, located at the base of Blood Mountain.', state: 'georgia', location: 'Blairsville, Georgia', latitude: 34.7650, longitude: -83.9250 },
  { name: 'Watson Mill Bridge State Park', description: 'Home to the longest covered bridge in Georgia, with camping and trails.', state: 'georgia', location: 'Comer, Georgia', latitude: 34.0450, longitude: -83.0960 }
];

async function addGeorgiaParks() {
  try {
    const parksCollection = collection(db, 'parks');
    for (const park of georgiaParks) {
      const docId = park.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      await setDoc(doc(parksCollection, docId), park, { merge: true });
      console.log(`Added: ${park.name}`);
    }
    console.log('All Georgia state parks added successfully!');
  } catch (error) {
    console.error('Error adding Georgia parks:', error);
  }
  process.exit(0);
}

addGeorgiaParks(); 