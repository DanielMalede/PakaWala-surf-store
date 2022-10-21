import "./Surfboards.css";
import React, { useEffect, useState } from "react";
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
  const [search, setSearch] = useState("");
  const [data, setData] = useState(surfBoards);
  const [colors, setColors] = useState("");
  const filterResult = (BtnResult) => {
    const result = surfBoards.filter((curData) => {
      return curData.category.toLowerCase() === BtnResult.toLowerCase();
    });
    const color = surfBoards.filter((curData) => {
      return curData.color.toLowerCase() === BtnResult;
    });
    // const info = surfBoards.filter((item) => {
    //   return search.toLowerCase() === ""
    //     ? item
    //     : item.name.toLowerCase().includes(search);
    // });

    setData(result);
    setColors(color);
    // setSearch(info);
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
        <form className="mt-5 ">
          <MDBInput
            onChange={(e) => setSearch(e.target.value)}
            label="Text input"
            id="typeText"
            type="text"
          />
        </form>
        <h1 className="  fw-lighter fw fs-1 mt-5 mb-5">Our Store</h1>
        <MDBContainer>
          <div className=" d-flex justify-content-center  mt-4 mb-3">
            <MDBRow>
              <MDBCol className="mt-2  px-md-4 col-12 col-md-3">
                <MDBDropdown>
                  <MDBDropdownToggle className="text-dark" color="light">
                    Suit Men & Woman
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      onClick={() => filterResult("suitWoman")}
                    >
                      Woman
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => filterResult("suitMan")}
                    >
                      {" "}
                      Men
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBCol>
              <MDBCol className="mt-2 px-md-5 col-12 col-md-3">
                <MDBDropdown>
                  <MDBDropdownToggle className="text-dark" color="light">
                    SuftBoards
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link onClick={() => filterResult("blue")}>
                      Blue
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => filterResult("purple")}
                    >
                      Purple
                    </MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => filterResult("white")}>
                      White
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => filterResult("yellow")}
                    >
                      Yellow
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => filterResult("orange")}
                    >
                      Orang
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => filterResult("spacial")}
                    >
                      Spacial
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBCol>
              <MDBCol className="mt-2  px-md-4 col-12 col-md-3">
                <MDBBtn
                  className="text-dark "
                  color="light"
                  onClick={() => filterResult("surf")}
                >
                  Surfboards
                </MDBBtn>
              </MDBCol >
              <MDBCol className="mt-2  px-md-4 col-12 col-md-3">
                <MDBBtn
                  className="text-dark "
                  color="light"
                  onClick={() => filterResult("cam")}
                >
                  Camera's
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
        <MDBRow className=" justify-content-center">
          {data.map((item) => {
            const { id } = item;
            return (
              <MDBCol key={id} size="12" xl="3" lg="4" md="6" sm="12">
                <Card {...item} />
              </MDBCol>
            );
          })}
          {colors
            ? colors.map((item) => {
                const { id } = item;
                return (
                  <MDBCol key={id} size="12" xl="3" lg="4" md="6" sm="12">
                    <Card {...item} />
                  </MDBCol>
                );
              })
            : ""}
          {/* {search !== ""
            ? 
            surfBoards
                .filter((item) => {
                  const { id } = item;
                  console.log(search);
                  return search.toLowerCase() === ""
                    ? item
                    :  item.name.toLowerCase().includes(search);
                })
                .map((item) => {
                  return(

                    <MDBCol size="12" xl="3" lg="4" md="6" sm="12">
                    <Card {...item} />
                  </MDBCol>
                    )
                })
            : ""} */}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Surfboards;
