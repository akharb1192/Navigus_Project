import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCgRXcf8CJR4Z_zGwDN6eO3dMcchFLsSl8",
    authDomain: "navigus-c1896.firebaseapp.com",
    databaseURL: "https://navigus-c1896.firebaseio.com",
    projectId: "navigus-c1896",
    storageBucket: "navigus-c1896.appspot.com",
    messagingSenderId: "283347066580",
    appId: "1:283347066580:web:5f097e2537cd515f11e541",
    measurementId: "G-066RNDSN60"
  };

  var fire=firebase.initializeApp(firebaseConfig);
  export default fire;