import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0XXdWLADoWQ9WdYD-l6iuwFh8kc-jmGo",
    authDomain: "ecommerce-react-pachita.firebaseapp.com",
    projectId: "ecommerce-react-pachita",
    storageBucket: "ecommerce-react-pachita.appspot.com",
    messagingSenderId: "444919033320",
    appId: "1:444919033320:web:39a89b5dc8aff592f7085d",
    measurementId: "G-YQKV4LG9HX"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);