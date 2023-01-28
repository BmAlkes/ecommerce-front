import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIyuYsxobTVn7alU131VCpOIdVw5zCeJ0",
  authDomain: "bshop-aff64.firebaseapp.com",
  projectId: "bshop-aff64",
  storageBucket: "bshop-aff64.appspot.com",
  messagingSenderId: "903324981884",
  appId: "1:903324981884:web:919c262d7d9dc2f812c7f9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
