import "./About.css";
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";

function About() {
  return (
    <div className="about">
          <img className="aboutPic" src="images/About/pic7.jpg" alt="" />
      <MDBContainer className="mt-5">
        <MDBRow className="mt-md-5">
          <MDBCol size={12} md="6">
            <h2 className=" fs-1 mt-md-5 p-md-4 pt-md-5">
              <b>OUR MISSION</b>
            </h2>
            <br />
            <p className=" fs-5 fw-light">
              <i>
                PakaWala main mission is to make sport accessible to as many
                people as we can. We would like to help, inspire and guide you
                through your sports experiences. We believe that being active
                and discovering new sports every day is an important part of a
                healthy lifestyle. Let’s do some sports together, as together is
                always more fun!
              </i>
            </p>
          </MDBCol>
          <MDBCol size={12} md="6">
            <img className=" p-md-5" src="images/About/pic5.jpg" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow className=" mt-md-5 mt-5">
          <MDBCol size={12} md="6">
            <img className=" p-md-5 " src="images/About/pic6.jpg" alt="" />
          </MDBCol>
          <MDBCol size={12} md="6">
            <h2 className=" fs-1 mt-md-5 p-md-4 pt-md-5 mt-3">
              <b>OUR VALUES</b>
            </h2>
            <br />
            <p className=" fs-5 fw-light">
              <i>
                Vitality Is Life, intense activity, energy, drive, and health.
                Our employees are full of vitality thanks to their positive
                mindset and energetic spirit. They are enthusiastic, they love
                creating and innovating, and relentlessly strive to improve and
                generate change.
              </i>
            </p>
          </MDBCol>
          <MDBCol size={12} md="6">
            <p className=" aboutText fs-5 fw-light mx-lg-5 p-md-5">
              <i>
                For 40 years, our design and manufacturing teams have not
                compromised on quality! With professional focus groups, we test
                the products in the labs before they go out to the stores. Our
                main goal is to make sports easier, accessible and create an
                innovative and interesting experience through our products.
              </i>
            </p>
          </MDBCol>
          <MDBCol size={12} md="6">
            <img className=" p-md-5" src="images/About/pic3.jpg" alt="" />
          </MDBCol>
        </MDBRow>
        <div className=" mx-md-5 ">
          <h2 className=" fw-bold fs-1 mt-5">How can we help you ?</h2>
          <p className="mx-md-5 fs-5 fw-light mt-md-4 mt-3">
            <i>
              As surfing enthusiasts, we have answers to all your questions.
              <br />
              Weare dedicated to advising you on the products and services
              offered by PaKaWaLa.
              <br />
              Contact us, we want to know your favorite surfboard
            </i>
          </p>
          <div className=" p-md-5">
            <MDBTextArea
              label="How Can We Help ?"
              id="textAreaExample"
              rows={9}
            />
          </div>
        </div>
        <div className="aboutBTN d-flex justify-content-center mb-10 mt-3">
          <MDBBtn>Send</MDBBtn>
        </div>
      </MDBContainer>
    </div>
  );
}

export default About;
