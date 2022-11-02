import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-around p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/danielmalede"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="https://twitter.com/danielmalede"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-malede-61152272/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://github.com/DanielMalede" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Paka Walla
              </h6>
              <p>
                We are stoked watersports people, whether it’s kitesurfing,
                surfing, foiling or wing surfing, that happen to sell the gear
                we love. And we are excited to help other people gear up for
                their new passion too.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Brands</h6>
              <p>
                <a
                  href="https://www.billabong.com/mens/"
                  className="text-reset"
                >
                  Billabong
                </a>
              </p>
              <p>
                <a href="https://us.oneill.com/" className="text-reset">
                  O'neill
                </a>
              </p>
              <p>
                <a href="https://www.ripcurl.com/us/" className="text-reset">
                  Rip Curl
                </a>
              </p>
              <p>
                <a href="https://www.quiksilver.com/" className="text-reset">
                  Quik Silver
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Israel Jerusalem
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                DanielMalede.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +972 52 - 473 - 8547
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +972 02 - 234 - 567 -
                89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="Home">
          PakaWalla.com
        </a>
      </div>
    </MDBFooter>
  );
}
