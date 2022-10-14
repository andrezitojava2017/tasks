import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import ConfigFireBase from './configFireBase';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Initialize Firebase
const app = initializeApp(ConfigFireBase);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const LoginGoogle = async () => {
  const dat = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.

      return result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      const errorCode = error.code;
      return [{ message: errorMessage, errorCode: errorCode }];
    });
  return dat;
};
export default LoginGoogle;
