import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingContext } from "../../../context/SurfBoardContext";
import CartItem from "../../features/CartItem/CartItem";
import formatCurrency from "../../../utilities/formatCurrency";
import surfBoards from "../../../services/surfBoards.json";
import { Link } from "react-router-dom";

function SideCart({ isOpen }) {
  const { closeCart, surfItem } = useShoppingContext();
  return (
    <div>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {surfItem.map((items) => (
              <CartItem key={items.id} {...items} />
            ))}
            <div className="ms-auto fw-bold fs-4">
              Total{" "}
              {formatCurrency(
                surfItem.reduce((total, surfItem) => {
                  const item = surfBoards.find(
                    (item) => item.id === surfItem.id
                  );
                  return total + (item?.price || 0) * surfItem.quantity;
                }, 0)
              )}
            </div>
            {surfItem.length !== 0 ? (
              <Link to={"CheckOut"}>
                <Button>Click To pay</Button>
              </Link>
            ) : (
              <Link to={"CheckOut"}>
                <Button disabled>Click To pay</Button>
              </Link>
            )}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SideCart;
