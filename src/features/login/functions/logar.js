import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ConfigFireBase from "../../../api/configFireBase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const CreateLoginEmailPassword = async (email, password) => {
  let user = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return [{ errorCode: errorCode, errorMessage: errorMessage }];
    });
  return user;
};

const LoginEmailPassword = async (email, password) => {
  let result = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {

      return [{'errorCode': error.code, 'errorMessage': error.message}]
    });
    return result;
};

export { LoginGoogle, CreateLoginEmailPassword, LoginEmailPassword };
