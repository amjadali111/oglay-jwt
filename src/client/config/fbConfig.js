import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAAVhPRdpEVTLiPc1Bc7r9UMTOOL0nz8Ac",
    authDomain: "oglaydb.firebaseapp.com",
    databaseURL: "https://oglaydb.firebaseio.com",
    projectId: "oglaydb",
    storageBucket: "",
    messagingSenderId: "358271414279",
    appId: "1:358271414279:web:9092ab73080ab156863aa2"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;