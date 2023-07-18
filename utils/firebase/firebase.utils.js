import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzHDX6wNIjZyUSc1tz7r0pf3N-hc8hORo",
    authDomain: "crwn-clothing-db-ab447.firebaseapp.com",
    projectId: "crwn-clothing-db-ab447",
    storageBucket: "crwn-clothing-db-ab447.appspot.com",
    messagingSenderId: "1032138746872",
    appId: "1:1032138746872:web:a5b8ff70d823003c4e840d"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

}