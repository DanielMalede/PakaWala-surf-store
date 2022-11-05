import "./CarouselPopUp.css";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function CarouselPopUp({id,counter,img,img1}) {
  return (
    <MDBCarousel showControls dealy={100}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={id}
        src={img}
        alt='...'
      />
      {img1}
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={counter}
        src={img1}
        alt='...'
      />
    </MDBCarousel>
  );
}
