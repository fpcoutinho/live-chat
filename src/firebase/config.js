import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChootRKCDyw0nb8SHVRZf3VJE50mFeY1A",
  authDomain: "dojo-blog-f34e2.firebaseapp.com",
  projectId: "dojo-blog-f34e2",
  storageBucket: "dojo-blog-f34e2.appspot.com",
  messagingSenderId: "784769430146",
  appId: "1:784769430146:web:1db78b74c6377821307a9b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }