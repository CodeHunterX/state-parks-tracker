import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app; 