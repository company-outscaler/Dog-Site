import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAqUTZWRK0YKksuLQD5ijgPjTkSMfiI8Y8",
    authDomain: "testing-project-251b1.firebaseapp.com",
    projectId: "testing-project-251b1",
    storageBucket: "testing-project-251b1.appspot.com",
    messagingSenderId: "59117783296",
    appId: "1:59117783296:web:5e11563a61209c9c028be5",
    measurementId: "G-5JK8GRHCJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
