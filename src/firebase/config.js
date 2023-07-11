import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_Ur7L_zpZRIIHeLYzazemxKUKmSbMjc0",
  authDomain: "miniblog-b04c2.firebaseapp.com",
  projectId: "miniblog-b04c2",
  storageBucket: "miniblog-b04c2.appspot.com",
  messagingSenderId: "718226972133",
  appId: "1:718226972133:web:2b9ec4d3052ff1fb1a230c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
