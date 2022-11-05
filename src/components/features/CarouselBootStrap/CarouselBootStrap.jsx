import "./Carousel.css";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <div className="CarouselPic">
      <MDBCarousel showControls fade>
        <MDBCarouselItem
          className="CarouselPic"
          itemId={1}
          src="images/Home/pic22.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="CarouselPic"
          itemId={2}
          src="images/Home/pic11.avif"
          alt="..."
        />
        <MDBCarouselItem
          className="CarouselPic"
          itemId={3}
          src="images/Home/pic15.avif"
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
