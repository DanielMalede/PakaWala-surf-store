import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider ,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../components/fireBase/db";

const userAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(userAuthContext);
};

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth,email)
  }

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (curruntUser) => {
      setUser(curruntUser);
    });
    return () => {
      Unsubscribe();
    };
  },[]);

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut ,googleSignIn,facebookSignIn,resetPassword}}>
      {children}
    </userAuthContext.Provider>
  );
};

