import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBListGroupItem,
  MDBListGroup,
} from "mdb-react-ui-kit";
import { CarouselPopUp } from "../../features/index";

export default function App({
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
}) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn className="mt-3" rounded onClick={toggleShow}>Click for more</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              ..
              <MDBContainer>
                <MDBRow>
                  <MDBCol size={12}>
                    <CarouselPopUp id={id} counter={counter} />
                  </MDBCol>
                  <MDBListGroup style={{ minWidth: "22rem" }} light className=" text-start">
                    <MDBListGroupItem disabled aria-disabled="true" className=" fs-6"><b><i>Surf: {name}</i></b> </MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i>{info}</i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i>Length- <b>{Length}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i>Width- <b>{Width}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i>Tail- <b>{Tail}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i>price- <b>{price}</b></i></MDBListGroupItem>
                  </MDBListGroup>
                </MDBRow>
              </MDBContainer>{" "}
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
