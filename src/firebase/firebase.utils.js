import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYh_pUHxcMQsl993Io8hQI5uosGcJx_FY",
  authDomain: "flash-cat-apparel-db.firebaseapp.com",
  projectId: "flash-cat-apparel-db",
  storageBucket: "flash-cat-apparel-db.appspot.com",
  messagingSenderId: "182013093836",
  appId: "1:182013093836:web:28bddb719a4c831f755f69",
  measurementId: "G-XSDT5X659L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
