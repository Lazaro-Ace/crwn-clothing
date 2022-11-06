import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoggleUser = async () => {
        const respone = await signInWithGooglePopup()
        console.log(respone)
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