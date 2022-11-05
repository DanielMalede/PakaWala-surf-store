import "./Card.css";
import React, { useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit";
import formatCurrency from "../../../utilities/formatCurrency";
import { useShoppingContext } from "../../../context/SurfBoardContext";
import { PopUpCart } from "../../pages/index";

function Card({
  id,
  name,
  price,
  Length,
  Width,
  Tail,
  color,
  img,
  info,
  img1,
  counter,
}) {
  const {
    getItemQantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingContext();
  const quantity = getItemQantity(id);
  const [open, setOpen] = useState("");
  const unhover = () => {
    setOpen(false);
  };
  return (
    <MDBContainer data-testid="testForContainer" className=" mt-5 mb-5">
      <MDBRow>
        <MDBCard className=" h-100">
          
          <MDBCardImage
            onMouseOver={() => setOpen(true)}
            onMouseOut={unhover}
            className="bg-image "
            position="top"
            alt="..."
            src={
              open
                ? img1
                : img
            }
            
            style={{ objectFit: "cover" }}
          />
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>{color}</MDBCardText>
          </MDBCardBody>
          <MDBListGroup className=" text-start">
            <MDBListGroupItem>Price: {formatCurrency(price)}</MDBListGroupItem>
          </MDBListGroup>
          <MDBRow className="mt-3">
            <MDBCol className="text-center" size={12}>
              <div>
                {quantity === 0 ? (
                  <MDBBtn className="mb-3" onClick={() => increaseCartQuantity(id)} rounded>
                    + Add To Cart
                  </MDBBtn>
                ) : (
                  <div className="mt-3 mb-3">
                    <div
                      className=" d-flex justify-content-center "
                      style={{ gap: ".5rem" }}
                    >
                      <MDBBtn
                        onClick={() => increaseCartQuantity(id)}
                        rounded
                        className="bg-success mb-3"
                      >
                        +
                      </MDBBtn>
                      <div>
                        <span className="fs-4">{quantity}</span> in Cart
                      </div>
                      <MDBBtn
                        onClick={() => decreaseCartQuantity(id)}
                        rounded
                        className="bg-danger"
                      >
                        -
                      </MDBBtn>
                    </div>

                    <div
                      onClick={() => removeFromCart(id)}
                      className=" d-flex align-content-center justify-content-center"
                      style={{ gap: ".5rem" }}
                    >
                      <MDBBtn size="md" rounded className="bg-danger">
                        Remove
                      </MDBBtn>
                    </div>
                  </div>
                )}
                <PopUpCart
                  id={id}
                  name={name}
                  price={price}
                  Length={Length}
                  Width={Width}
                  Tail={Tail}
                  color={color}
                  img={img}
                  img1={img1}
                  info={info}
                  counter={counter}
                />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Card;
