import "./Card.css";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBRow,
  MDBBtn ,
  MDBCol 
} from "mdb-react-ui-kit";
import formatCurrency from "../../../utilities/formatCurrency";
import { useShoppingContext } from "../../../context/SurfBoardContext";
import { Button } from "react-bootstrap";



function Card({id,surf,price,size,img,Availability,infoShort,}) {
  const {getItemQantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingContext()
  const quantity = getItemQantity(id)
  return (
    
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCard>
          <MDBCardImage
            position="top"
            alt="..."
            src={img}
            style={{objectFit: "cover"}}
          />
          <MDBCardBody>
            <MDBCardTitle>{surf}</MDBCardTitle>
            <MDBCardText>
             {infoShort}
            </MDBCardText>
          </MDBCardBody>
          <MDBListGroup className=" text-start" flush>
            <MDBListGroupItem>Availability: {Availability}</MDBListGroupItem>
            <MDBListGroupItem>Size: {size}</MDBListGroupItem>
            <MDBListGroupItem>Price: {formatCurrency(price)}</MDBListGroupItem>
          </MDBListGroup>
          <div >
          {quantity===0?(<MDBBtn onClick={()=> increaseCartQuantity(id)} rounded >+ Add To Cart</MDBBtn>)
          
          :
          (<div className="mt-3 mb-3">
          <div className=" d-flex justify-content-center " style={{gap:".5rem"}}>
          <Button onClick={()=> increaseCartQuantity(id)} rounded className="bg-success">+</Button>
          <div><span className="fs-4">{quantity}</span> in Cart</div>
          <Button onClick={()=> decreaseCartQuantity(id)} rounded className="bg-danger">-</Button>
          </div>
          
          <div onClick={()=> removeFromCart(id)} className=" d-flex align-content-center justify-content-center" style={{gap:".5rem"}}><MDBBtn size="md" rounded className="bg-danger">Remove</MDBBtn></div>
          </div>)}
          
          </div>
          {/* <MDBCardBody className="p-0 m-0">
            <MDBCardLink href="#">Card link</MDBCardLink>
          </MDBCardBody> */}
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Card;
