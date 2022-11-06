import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoggleUser = async () => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoggleUser}>
                sign in with google popup
            </button>
        </div>
    )
}

export default SignIn