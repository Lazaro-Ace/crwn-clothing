import { initializeApp } from 'firebase/app'
import { getAuth, 
         signInWithRedirect, 
         signInWithPopup, 
         GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBd4zV0tlrxZ-qdRKSb9pDjaKMpoTxT6ac",
    authDomain: "crwn-clothing-db-bf07b.firebaseapp.com",
    projectId: "crwn-clothing-db-bf07b",
    storageBucket: "crwn-clothing-db-bf07b.appspot.com",
    messagingSenderId: "977913300643",
    appId: "1:977913300643:web:67714fc66387c1a184a116"
  };


  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)