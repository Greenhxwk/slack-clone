
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyBh9qe1QmGMR_7ubmV6CzFIZB-4O9J4rj0",
    authDomain: "react-slack-clone-17b68.firebaseapp.com",
    projectId: "react-slack-clone-17b68",
    storageBucket: "react-slack-clone-17b68.appspot.com",
    messagingSenderId: "666837700059",
    appId: "1:666837700059:web:9c9184ecc6a03df2fbebfe"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;