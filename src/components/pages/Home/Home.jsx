import "./Home.css";
import React, { useState } from "react";
import surfBoardsJson from "../../../services/surfBoards.json";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { SurfBoardCard } from "../../features";
function Home() {
  const [data] = useState(surfBoardsJson);
  let counter = 0;

  return (
    <div className="home p-0">
      <div>
        <img
          className="headimg img-fluid w-100"
          src="images/Home/head1.jpg"
          alt=""
        />
      </div>
      <>
        <h1 className="mt-5 text-center">SurfBoards</h1>
        <div id="borderSurfs" className=" p-0">
          <MDBRow
            style={{ border: "1px 1px solid black" }}
            className="surfBoardBorder pb-5"
          >
            {data.map((item) => {
              const { id } = item;
              if (counter++ < 6) {
                return (
                  <MDBCol key={id} className=" col-lg-2 col-6 ">
                    <SurfBoardCard {...item} />
                  </MDBCol>
                );
              }
            })}
          </MDBRow>
        </div>
      </>
      <MDBContainer></MDBContainer>
      <MDBRow className="mt-5">
        <MDBCol className="imagesHome p-0">
          <img src="images/Home/pic18.jpg" alt="" />
        </MDBCol>
        <MDBCol className="imagesHome p-0">
          <img src="images/Home/pic20.jpg" alt="" />
        </MDBCol>
        <MDBCol className="imagesHome p-0">
          <img src="images/Home/pic19.jpg" alt="" />
        </MDBCol>
        <MDBCol className="imagesHome p-0">
          <img src="images/Home/pic17.jpg" alt="" />
        </MDBCol>
      </MDBRow>
      {/* <MDBRow>
          <div>
          <img className="imagesHome p-0" src="images/Home/pic11.avif" alt="" />
          </div>
          <MDBCol>
          <img className="imagesHome p-0" src="images/Home/pic13.avif" alt="" />
          </MDBCol>
        </MDBRow> */}
    </div>
  );
}

export default Home;
