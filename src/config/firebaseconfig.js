import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBduCN36g3WpkIAOA94bwde8a49wztKLp8",
  authDomain: "tasks-ede3e.firebaseapp.com",
  projectId: "tasks-ede3e",
  storageBucket: "tasks-ede3e.appspot.com",
  messagingSenderId: "708076778740",
  appId: "1:708076778740:web:e06c4c61fac47b8a521aa1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
