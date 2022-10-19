import "./Surfboards.css";
import React, { useState } from "react";
import { Card } from "../../features";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import surfBoards from "../../../services/surfBoards.json";

function Surfboards() {
  const [, setSearch] = useState("");
  const [data, setData] = useState(surfBoards);
  const filterResult = (BtnResult) => {
    const result = surfBoards.filter((curData) => {
      return curData.category === BtnResult;
    });
    setData(result);
  };
  return (
    <div className="cart">
      <div>
        <img
        alt=""
          style={{ width: "100vw", height: "40vh" }}
          src="images/Home/headPic.jpg"
          className=" shadow-6"
        />
      </div>
      <MDBContainer>
        <form className="mt-5">
        <MDBInput onChange={(e) => setSearch(e.target.value)} label='Text input' id='typeText' type='text' />

        </form>

        <MDBBtn onClick={() => filterResult("men")}>Men</MDBBtn>
        <MDBBtn onClick={() => filterResult('Woman')}>woman</MDBBtn>
        <MDBBtn onClick={() => filterResult('surf')}>Surf</MDBBtn>
        <MDBBtn onClick={() => filterResult('surf')}>Surf</MDBBtn>
        <MDBRow>
          {data.map((item) => {
            const { id,} = item;
            return (
              <MDBCol
                key={id}
                size="12"
                xl="3"
                lg="4"
                md="6"
                sm="12"
              >
                <Card {...item} />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Surfboards;
