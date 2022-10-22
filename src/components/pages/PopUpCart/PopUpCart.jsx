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
  img1,
  counter,
}) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div>
      <MDBBtn className="mt-3 bg-body text-black mb-3" rounded onClick={toggleShow}>Click for more</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Product View</MDBModalTitle>
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
                    <CarouselPopUp img={img} img1={img1} />
                  </MDBCol>
                  <MDBListGroup style={{ minWidth: "22rem" }} light className=" text-start mx-2">
                    <MDBListGroupItem disabled aria-disabled="true" className=" fs-6"><b><i>Surf: {name}</i></b> </MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i>{info}</i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i> <b>{price !== null ?"Price " +price : " "}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i> <b>{color !== null ?"Color "+color : " "}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i> <b>{Width !== null ?"Width "+Width : " "}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i> <b>{Tail !== null ?"Tail "+Tail : ""}</b></i></MDBListGroupItem>
                    <MDBListGroupItem disabled aria-disabled="true"><i> <b>{Length !== null ?"price " +Length : ""}</b></i></MDBListGroupItem>
                  </MDBListGroup>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
