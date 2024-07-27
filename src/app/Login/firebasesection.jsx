import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCnLZQIJoKBpZTdtgNuttEldFraxtsjcpA",
    authDomain: "clone-d2f20.firebaseapp.com",
    projectId: "clone-d2f20",
    storageBucket: "clone-d2f20.appspot.com",
    messagingSenderId: "949097533514",
    appId: "1:949097533514:web:4d69c5ad6efec53b2256b3",
    measurementId: "G-0408DDNZ2F"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {firebaseApp,db,auth};