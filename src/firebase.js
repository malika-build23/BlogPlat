import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0iqJ7vqxnrNXfRijRhhHLlJrDhGIhW3w",
    authDomain: "blogplat-d8a55.firebaseapp.com",
    projectId: "blogplat-d8a55",
    storageBucket: "blogplat-d8a55.firebasestorage.app",
    messagingSenderId: "733205563962",
    appId: "1:733205563962:web:ebc7e221a92fcdbe7f4303",
    measurementId: "G-659DMK61Q2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);