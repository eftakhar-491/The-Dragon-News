// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYgouaV4glrkIYFQZH1HaE8htVjdAQzp0",
  authDomain: "the-dragon-news-fdf77.firebaseapp.com",
  projectId: "the-dragon-news-fdf77",
  storageBucket: "the-dragon-news-fdf77.firebasestorage.app",
  messagingSenderId: "1095480227459",
  appId: "1:1095480227459:web:eb8989c536a5a5bc710db6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
