import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import singingBowl from "../../assets/img/singing-bowl-crop.jpg";

export default function Insurance() {
  return (
    <section id="insurance" className="insurance-page">
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={singingBowl}
              className="singing-bowls-img"
              alt="singing-bowls"
            />
            <a
              className="href-links"
              target="_blank"
              href="https://www.freepik.com/free-photo/singing-bowl-placed-nature-with-river-background_31023241.htm#query=singing%20bowls&position=0&from_view=search"
            >
              Image by wirestock on Freepik
            </a>{" "}
          </Col>
          <Col>
            <h1 className="section-title">Insurance We Accept:</h1>
            <ul className="list-text">
              <li>BlueCross and BlueShield</li>
              <li>Cigna and Evernorth</li>
              <li>PacificSource</li>
              <li>Providence</li>
              <li>Out of Pocket or Private Pay</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
