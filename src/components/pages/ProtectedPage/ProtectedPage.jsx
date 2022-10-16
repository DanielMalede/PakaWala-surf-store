import "./ProtectedPage.css";
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
function ProtectedPage({children}) {
  let {user} = useUserAuth()
  return user==null?<Navigate to="/SignIn"/>: children
};

export default ProtectedPage;
