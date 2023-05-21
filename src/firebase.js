import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rainy-chat.firebaseapp.com",
  projectId: "rainy-chat",
  storageBucket: "rainy-chat.appspot.com",
  messagingSenderId: "536527678732",
  appId: "1:536527678732:web:74d11bd5dfb60ae1f66d29",
  measurementId: "G-WSZ1BWLHBC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
