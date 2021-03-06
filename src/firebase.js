import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyB_aauaxrPsKaEGIotvgsQT665zgzCSK3E",
  authDomain: "drive-clone-c9449.firebaseapp.com",
  projectId: "drive-clone-c9449",
  storageBucket: "drive-clone-c9449.appspot.com",
  messagingSenderId: "1042402834613",
  appId: "1:1042402834613:web:0b369ba6a5a53eb74ba6fc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export {auth,provider,db,storage}
