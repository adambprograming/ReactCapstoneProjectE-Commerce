'use client'

import './sign-in.styles.scss'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignInMethod = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignInMethod