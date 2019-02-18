import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyATIdQMvISNheI-FCA9SKiV-8EZgFJUycs",
    authDomain: "iblog-by-nour.firebaseapp.com",
    databaseURL: "https://iblog-by-nour.firebaseio.com",
    projectId: "iblog-by-nour",
    storageBucket: "iblog-by-nour.appspot.com",
    messagingSenderId: "831096827156"
  };
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;