import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAchval_9doHF9dfgTGbAjwIKZpBrdB2KE",
  authDomain: "food-ab806.firebaseapp.com",
  databaseURL: "https://food-ab806-default-rtdb.firebaseio.com",
  projectId: "food-ab806",
  storageBucket: "food-ab806.appspot.com",
  messagingSenderId: "497188447797",
  appId: "1:497188447797:web:b0ef49fd42148ad79c737c",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
