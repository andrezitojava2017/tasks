import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ConfigFireBase from "./configFireBase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(ConfigFireBase);
const analytics = getAnalytics(app);
const auth = getAuth();

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
      
      return [{'errorCode': errorCode, 'errorMessage': errorMessage}];
    });
    return user;
};

export default CreateLoginEmailPassword;
