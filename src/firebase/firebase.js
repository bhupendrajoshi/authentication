import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCW5Ie2k_1HZgitOQICSNumKFday65Qq7Y",
  authDomain: "react-authentication-dc6b3.firebaseapp.com",
  databaseURL: "https://react-authentication-dc6b3.firebaseio.com",
  projectId: "react-authentication-dc6b3",
  storageBucket: "react-authentication-dc6b3.appspot.com",
  messagingSenderId: "684888042168"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};