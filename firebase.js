import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrqeVdilta9oYIsxHReivyV89ceQz8WW8",
  authDomain: "docs-yt-3beee.firebaseapp.com",
  projectId: "docs-yt-3beee",
  storageBucket: "docs-yt-3beee.appspot.com",
  messagingSenderId: "63616036915",
  appId: "1:63616036915:web:b9eaead7bb1557b2503346",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
