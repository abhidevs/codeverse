import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8wanMVmWIWH3vkOxta1zYkIoewcKH_Xo",
  authDomain: "codeverse-v1.firebaseapp.com",
  projectId: "codeverse-v1",
  storageBucket: "codeverse-v1.appspot.com",
  messagingSenderId: "36910838108",
  appId: "1:36910838108:web:258e66fe29a8b558f31199",
  measurementId: "G-K79LRMDYHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
