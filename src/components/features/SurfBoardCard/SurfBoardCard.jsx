import "./SurfBoardCard.css";
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
import { useShoppingContext } from "../../../context/SurfBoardContext";
import formatCurrency from "../../../utilities/formatCurrency";
import { PopUpCart } from "../../pages/index";

export default function SurfBoardCard({
  id,
  name,
  price,
  Length,
  Width,
  Tail,
  color,
  img,
  info,
  counter,
  img1
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
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCard>
          <MDBCardImage
            onMouseOver={() => setOpen(true)}
            onMouseOut={unhover}
            className=""
            position="top"
            alt="..."
            src={
              open
                ? img1
                : img
            }
            style={{ objectFit: "cover" }}
          />
          <MDBRow className="mt-4">
            <MDBCol size={12}>
              <div>
                {quantity === 0 ? (
                  <MDBBtn onClick={() => increaseCartQuantity(id)} rounded>
                    + Cart
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
                        className="bg-success"
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
