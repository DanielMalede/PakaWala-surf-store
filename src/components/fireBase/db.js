import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'


const firebaseapi =  process.env.REACT_APP_HOT_API_KEY
const firebaseConfig = {
  apiKey: firebaseapi,
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