
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC2yPYysvlcS49r6f35HkaLbo5ISLWWcM",
  authDomain: "reactauth-31fec.firebaseapp.com",
  projectId: "reactauth-31fec",
  storageBucket: "reactauth-31fec.appspot.com",
  messagingSenderId: "203301245556",
  appId: "1:203301245556:web:081c9ef4c585c712f93721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);