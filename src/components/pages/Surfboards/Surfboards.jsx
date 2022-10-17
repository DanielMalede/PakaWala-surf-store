import "./Surfboards.css";
import React from "react";
import { Card } from "../../features";
import {MDBContainer,MDBRow,MDBCol,} from "mdb-react-ui-kit";
import surfBoards from "../../../services/surfBoards.json";
function Surfboards() {
  return (
    <div className="cart">
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
