import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: "blogplat-d8a55",
    storageBucket: "blogplat-d8a55.firebasestorage.app",
    messagingSenderId: "733205563962",
    appId: "1:733205563962:web:ebc7e221a92fcdbe7f4303",
    measurementId: "G-659DMK61Q2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);