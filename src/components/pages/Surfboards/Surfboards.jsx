import "./Surfboards.css";
import React, { useState } from "react";
import { Card } from "../../features";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdown,
} from "mdb-react-ui-kit";
import surfBoards from "../../../services/surfBoards.json";

function Surfboards() {
  const [, setSearch] = useState("");
  const [data, setData] = useState(surfBoards);
  const [colors, setColors] = useState(surfBoards);
  const filterResult = (BtnResult) => {
    const result = surfBoards.filter((curData) => {
      return curData.category.toLowerCase() === BtnResult.toLowerCase();
    });
    const color = surfBoards.filter((curData) => {
      return curData.color.toLowerCase() === BtnResult;
    });
    setData(result);
    setColors(color)
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
          <MDBInput
            onChange={(e) => setSearch(e.target.value)}
            label="Text input"
            id="typeText"
            type="text"
          />
        </form>
        <h1 className="  fw-lighter fw fs-1">Our Store</h1>
        <div className=" d-flex justify-content-center  mt-4">
          <MDBBtn className=" w-25  " onClick={() => filterResult("surf")}>
            Surfboards
          </MDBBtn>
          <MDBBtn className=" w-25 " onClick={() => filterResult("cam")}>
            Camera's
          </MDBBtn>
          <MDBDropdown>
            <MDBDropdownToggle className="px-5 ">
              Suit Men & Woman
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link onClick={() => filterResult("suitWoman")}>
                Woman
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => filterResult("suitMan")}>
                {" "}
                Men
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle className="px-5 ">
              SuftBoards
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link onClick={() => filterResult("blue")}>
                Blue
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => filterResult("purple")}>
                Purple
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => filterResult("white")}>
                White
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => filterResult("yellow")}>
                Yellow
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => filterResult("orange")}>
                Orang
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => filterResult("spacial")}>
                Spacial
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <MDBRow className=" justify-content-center">
          {data.map((item) => {
            const { id } = item;
            return (
              <MDBCol key={id} size="12" xl="3" lg="4" md="6" sm="12" >
                <Card {...item} />
              </MDBCol>
            );
          })}
          {console.log(colors)}
         {colors.map((item) => {
            const { id } = item;
            return (
              <MDBCol key={id} size="12" xl="3" lg="4" md="6" sm="12">
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
