import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBGzOtn9eb5O3VamP69AEQZzTHN0DszGgY",
    authDomain: "mornq-f1a03.firebaseapp.com",
    databaseURL: "https://mornq-f1a03.firebaseio.com",
    projectId: "mornq-f1a03",
    storageBucket: "mornq-f1a03.appspot.com",
    messagingSenderId: "440992245828",
    appId: "1:440992245828:web:fe3c72bbb8a60329de7411"
};

firebase.initializeApp(config);

export const db = firebase.firestore();