import { ref } from 'vue'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    if (!res) {
      throw new Error('Could not complete the signup')
    }

    await updateProfile(res.user, { displayName: displayName })
    error.value = null
    isPending.value = false
  } catch (err) {
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { signup, error, isPending }
}

export default useSignup
