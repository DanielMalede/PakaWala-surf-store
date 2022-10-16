import "./NotFound.css";
import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div className=" mt-5  text-start px-sm-5 mx-sm-5">
        <div className=" mt-5 pt-5 ">
          <h1>Soory your in the worng page</h1>
          <h2>Click to come back Home</h2>
        </div>
        <Link to={"Home"}>
        <MDBBtn className="mt-5 pt-3 pb-3 px-5">Return To Home</MDBBtn>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
