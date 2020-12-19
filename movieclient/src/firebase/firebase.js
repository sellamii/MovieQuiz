import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyC7mxyn1c_4cbiPBPFDfxjv6FdOS0Ljy1g",
    authDomain: "moviequiz-e4b8d.firebaseapp.com",
    projectId: "moviequiz-e4b8d",
    storageBucket: "moviequiz-e4b8d.appspot.com",
    messagingSenderId: "917941887834",
    appId: "1:917941887834:web:674dd913ce74420e3f4963",
    measurementId: "G-53D0SC7Q8Z"
  }) ;

  export const auth = firebase.auth();