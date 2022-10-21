import "./Account.css";
import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useUserAuth } from "../../../context/UserAuthContext";
import { Link } from "react-router-dom";

export default function Account() {
  let { user } = useUserAuth();
  const [userFname, setUserFname] = useState(user.displayName);

  return (
    <>
      <div className="mx-auto gradient-custom  ">
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginLeft: "10px" }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">
                Welcome
              </MDBTypography>
              <h4 className="white-text display-6">
                All your account information is secure and well kept
                <br />
                share it only with yourself !
              </h4>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard
              className="card-custom pb-4"
              style={{ marginTop: "9vh", marginLeft: "10px" }}
            >
              <MDBCardBody className="mt-0 ">
                <div className="text-center d-flex justify-content-center justify-content-md-start mb-3 pb-2 mt-3">
                  <MDBTypography tag="span" style={{ color: "#495057" }}>
                    <img src={user.photoURL && user.photoURL} alt="" />
                  </MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        <b>User Name:</b> 
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        {user.displayName}
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        <b>{" "}</b>
                        <b>Email Address:</b> 
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        {user.email == null ? "Not Available" : user.email}
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        <b>phone Number:</b> 
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        {user.phoneNumber == null
                          ? "No Phone Number"
                          : user.phoneNumber}
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        <b>Last Sign In Time:</b> 
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                  <div className="float-end">
                    <Link to={"/Home"}>
                      <MDBBtn rounded style={{ backgroundColor: "#0062CC" }}>
                        Back Home
                      </MDBBtn>
                    </Link>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

