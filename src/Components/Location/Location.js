import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Location.css";
const Location = () => {
  return (
    <>
      <Container className="Location-Container">
        <Row>
          <Col className="Location-main-col" xs={12}>
            <h2 className="Location-main-heading">Location</h2>
          </Col>
          <Col xs={12}>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="445"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://online-timer.me/"></a>
                <br />
                <a href="https://timenowin.net/"></a>
                <br />
                <a href="https://www.embedmaps.co">embed google maps</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Location;
