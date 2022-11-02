import "./CheckOut.css";
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useShoppingContext } from "../../../context/SurfBoardContext";
import formatCurrency from "../../../utilities/formatCurrency";
import surfBoards from "../../../services/surfBoards.json";
import PayPal from "../../../payPal/PayPal/PayPal";
import { Button } from "react-bootstrap";
import { ChackOutCartBox } from "../../features";

function CheckOut() {
  const { surfItem } = useShoppingContext();
  return (
    <div>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {surfItem.map((items) => (
                  <ChackOutCartBox key={items.id} {...items} />
                ))}
              </MDBCardBody>
                </MDBCard>
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <Button>
                  <MDBRow>
                    <MDBCol size={6}>
                      <MDBCardImage
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                      />
                    </MDBCol>
                    <MDBCol size={6}>
                      <MDBCardImage
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className=" mt-3">
                    <MDBCol size={6}>
                      <MDBCardImage
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                    </MDBCol>
                    <MDBCol size={6}>
                      <MDBCardImage
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                        alt="PayPal acceptance mark"
                      />
                    </MDBCol>
                  </MDBRow>
                </Button>{" "}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup >
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>
                      {" "}
                      {formatCurrency(
                        surfItem.reduce((total, surfItem) => {
                          const item = surfBoards.find(
                            (item) => item.id === surfItem.id
                          );
                          return total + (item?.price || 0) * surfItem.quantity;
                        }, 0)
                      )}
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      {formatCurrency(
                        surfItem.reduce((total, surfItem) => {
                          const item = surfBoards.find(
                            (item) => item.id === surfItem.id
                          );
                          return total + (item?.price || 0) * surfItem.quantity;
                        }, 0)
                      )}
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
                {surfItem.length !== 0 ? (
                  <PayPal />
                ) : (
                  <MDBBtn block size="lg" disabled>
                    Checkout
                  </MDBBtn>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default CheckOut;
