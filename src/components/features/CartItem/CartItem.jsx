import "./CartItem.css";
import React from "react";
import { useShoppingContext } from "../../../context/SurfBoardContext";
import surfboards from '../../../services/surfBoards.json'
import { Stack } from "react-bootstrap";
import formatCurrency from "../../../utilities/formatCurrency";
import { MDBBtn } from "mdb-react-ui-kit";

function CartItem({id,quantity}) {
  const {removeFromCart} = useShoppingContext()
  const item = surfboards.find(item=> item.id === id)
  if (item == null ) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex ">
      <img src={item.img}style={{width:"125px",height:"17vh",objectFit:"cover"}} />
      <div className="">
        <div>
          {item.surf}{""}{quantity > 1 && <span className=" text-muted" style={{fontSize:"1.5rem"}}> {quantity}X</span>}
        </div>
        <div className=" text-muted fst-italic" style={{fontSize:"1.7rem"}}><b>{formatCurrency(item.price)}</b></div>
        <div className="fst-italic">{formatCurrency(item.price * quantity)}</div>
        <MDBBtn size="sm" onClick={()=>removeFromCart(item.id)}>X</MDBBtn>
      </div>
    </Stack>
  );
};

export default CartItem;
