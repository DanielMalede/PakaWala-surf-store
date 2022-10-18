import "./Surfboards.css";
import React from "react";
import { Card } from "../../features";
import {MDBContainer,MDBRow,MDBCol,} from "mdb-react-ui-kit";
import surfBoards from "../../../services/surfBoards.json";
function Surfboards() {
  return (
    <div className="cart">
      <div>
      <img style={{width:"100vw",height:"40vh"}} src='images/Home/headPic.jpg' className=' shadow-6' alt='...' />
      </div>
      <MDBContainer>
        <MDBRow>
      {surfBoards.map(item=> (
          <MDBCol key={item.id} size="12" xl='3' lg='4' md='6' sm='12' >
            <Card {...item}/>
            </MDBCol>
            ))}
            </MDBRow>
          </MDBContainer>
    </div>
  );
}

export default Surfboards;
