import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider ,
} from "firebase/auth";
import { auth } from "../components/fireBase/db";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    console.log("email", email);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const googleSignIn = ()=>{
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth,googleAuthProvider)
  }
  const facebookSignIn = ()=>{
    const facebookAuthProvider = new FacebookAuthProvider()
    return signInWithPopup(auth,facebookAuthProvider)
  }

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (curruntUser) => {
      console.log(curruntUser);
      setUser(curruntUser);
    });
    return () => {
      Unsubscribe();
    };
  },[]);

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut ,googleSignIn,facebookSignIn}}>
      {children}
    </userAuthContext.Provider>
  );
};


export const useUserAuth = () => {
  return useContext(userAuthContext);
};