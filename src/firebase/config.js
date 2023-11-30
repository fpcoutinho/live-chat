import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyChootRKCDyw0nb8SHVRZf3VJE50mFeY1A",
  authDomain: "dojo-blog-f34e2.firebaseapp.com",
  projectId: "dojo-blog-f34e2",
  storageBucket: "dojo-blog-f34e2.appspot.com",
  messagingSenderId: "784769430146",
  appId: "1:784769430146:web:1db78b74c6377821307a9b"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
const timestamp = serverTimestamp

// init auth service
const auth = getAuth(app)

export { auth, db, timestamp }