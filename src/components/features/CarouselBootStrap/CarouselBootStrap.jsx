import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <div>
      <MDBCarousel showControls fade dealy={12000}>
        <MDBCarouselItem
          className="carouselcss d-block"
          itemId={1}
          src="images/Home/pic2.webp"
          alt="..."
          
        />
        <MDBCarouselItem
          className="carouselcss d-block"
          itemId={2}
          src="images/Home/pic6.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="carouselcss d-block"
          itemId={3}
          src="images/Home/pic9.jpg"
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
