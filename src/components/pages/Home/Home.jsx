import "./Home.css";
import React, { useState } from "react";
import surfBoardsJson from "../../../services/surfBoards.json";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Card, SurfBoardCard } from "../../features";
function Home() {
  const [data, seData] = useState(surfBoardsJson);
  let counter = 0;
  return (
    <div className="home p-0">
        <MDBRow >
          <MDBCol className="d-flex px-0" size={6}><img className=" img-fluid w-100" src="images/Home/pic15.avif" alt="" /></MDBCol>
          <MDBCol className="d-flex px-0" size={6}><img className=" img-fluid w-100"  src="images/Home/pic14.avif" alt="" /></MDBCol>
        </MDBRow>
        <h1 className="mt-5">SurfBoards</h1>
          <div id="borderSurfs" >
        <MDBRow style={{border: "1px 1px solid black"}} className="px-5 surfBoardBorder pb-5">

          {data.map((item) => {
            const { id } = item;
            if (counter++ < 6) {
              return (
                <MDBCol key={id}  className=" col-lg-2 col-6 ">
                  <SurfBoardCard {...item} />
                </MDBCol>
              );
            }
          })}
        </MDBRow>
          </div>
      <MDBContainer>
      </MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol className="imagesHome"><img src="images/Home/pic18.jpg" alt="" /></MDBCol>
          <MDBCol className="imagesHome"><img src="images/Home/pic20.jpg" alt="" /></MDBCol>
          <MDBCol className="imagesHome"><img src="images/Home/pic19.jpg" alt="" /></MDBCol>
          <MDBCol className="imagesHome"><img src="images/Home/pic17.jpg" alt="" /></MDBCol>
        </MDBRow>
        <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol className="imagesHome"><img src="images/Home/pic4.webp" alt="" /></MDBCol>
          <MDBCol className="imagesHome"></MDBCol>
          <MDBCol className="imagesHome"></MDBCol>
          <MDBCol className="imagesHome"></MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
}

export default Home;
