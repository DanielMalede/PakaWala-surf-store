// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fireBaseKey = process.env.REACT_APP_HOT_APR_KEY
const firebaseConfig = {
  apiKey: fireBaseKey,
  authDomain: "my-store-fd987.firebaseapp.com",
  projectId: "my-store-fd987",
  storageBucket: "my-store-fd987.appspot.com",
  messagingSenderId: "1083504488537",
  appId: "1:1083504488537:web:8044ebde8fb5713cb74148",
  measurementId: "G-R3J93HWPMQ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
// Initialize Firebase