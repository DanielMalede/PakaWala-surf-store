import "./CarouselPopUp.css";
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselPopUp({id,counter}) {
  return (
    <MDBCarousel showControls dealy={100}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={`images/SurfBoards/${id}.webp`}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={`images/SurfBoards/${counter}.webp`}
        alt='...'
      />
    </MDBCarousel>
  );
}