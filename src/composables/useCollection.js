import { ref } from "vue"
import { db } from "../firebase/config"
import { addDoc, collection } from 'firebase/firestore'

const useCollection = (col) => {
  const error = ref(null)

  const addDocument = async (doc) => {
    error.value = null

    try {
      const collectionRef = collection(db, col)
      const res = await addDoc(collectionRef, doc)
      return res
    } catch (err) {
      console.log(err.message)
      error.value = "could not send the message"
    }
  }

  return { error, addDocument }
}

export default useCollection