import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKqZVunNvq_gTzBod1k8oGG7-k0AQJZng",
  authDomain: "senfinances-a6ce5.firebaseapp.com",
  projectId: "senfinances-a6ce5",
  storageBucket: "senfinances-a6ce5.appspot.com",
  messagingSenderId: "1010785267653",
  appId: "1:1010785267653:web:f9b0201c56199ae602e5ac",
  measurementId: "G-X15FYWRK04"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();