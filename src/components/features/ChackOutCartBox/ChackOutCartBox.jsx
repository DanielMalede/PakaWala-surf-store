import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBIcon,
  MDBTooltip,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import surfboards from "../../../services/surfBoards.json";
import { useShoppingContext } from "../../../context/SurfBoardContext";
import formatCurrency from "../../../utilities/formatCurrency";

export default function ChackOutCartBox({ id, quantity }) {
  const {
    getItemQantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingContext();
  const [item, setItem] = useState(surfboards.find((item) => item.id === id));
  if (item == null) return null;
  return (
    <MDBRow>
      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
        <MDBRipple
          rippleTag="div"
          rippleColor="light"
          className="bg-image rounded hover-zoom hover-overlay"
        >
          <img src={`images/SurfBoards/${id}.webp`} className="w-100" />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
        </MDBRipple>
      </MDBCol>

      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
        <p>
          <strong></strong>
        </p>
        <div></div>
        <h5>{item.name}</h5>
        <p className=" p-0">Color: {item.color}</p>
        <p className=" pb-4">Tail: {item.Tail}</p>

        <MDBBtn
          onClick={() => removeFromCart(item.id)}
          wrapperClass="me-1 mb-2"
          title="Remove item"
        >
          <MDBIcon fas icon="trash" />
        </MDBBtn>
      </MDBCol>
      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          <MDBBtn
            onClick={() => decreaseCartQuantity(id)}
            className="px-3 me-2"
          >
            <MDBIcon fas icon="minus" />
          </MDBBtn>

<<<<<<< HEAD
          <MDBInput value={quantity} min={0} type="number" label="Quantity" />
=======
          <MDBInput
            value={quantity}
            min={0}
            type="number"
            label="Quantity"
          />
>>>>>>> 0504318857224ddf4ffd8eff6dcce0bc1b50208d

          <MDBBtn
            onClick={() => increaseCartQuantity(id)}
            className="px-3 ms-2"
          >
            <MDBIcon fas icon="plus" />
          </MDBBtn>
          {/* <div onClick={()=> removeFromCart(id)} className=" d-flex align-content-center justify-content-center" style={{gap:".5rem"}}><MDBBtn size="md" rounded className="bg-danger">Remove</MDBBtn></div> */}
        </div>

        <p className="text-start text-md-center">
          <strong>{formatCurrency(item.price * quantity)}</strong>
        </p>
      </MDBCol>
      <hr className="my-4" />
    </MDBRow>
  );
}
