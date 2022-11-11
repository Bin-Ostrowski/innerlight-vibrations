import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import holdingBowl from "../../assets/img/holding-bowl.jpg";

export default function Insurance() {
  return (
    <section id="insurance" className="insurance-page">
      <Container fluid>
        <Row>
          <Col md={{span: 5, order:'first'}}>
            <img
              src={holdingBowl}
              className="singing-bowls-img d-block mx-auto"
              alt="holding-bowl"
            />
            <a
              className="href-links photo-credit"
              target="_blank"
              rel="noreferrer"
              href="https://www.pexels.com/photo/close-up-shot-of-a-person-using-a-singing-bowl-7113296/"
            >
              Photo by EKATERINA BOLOVTSOVA:
            </a>{" "}
          </Col>
          <Col sm={{ order: 'first' }} className="insurance-text">
            <h1 className="section-title">Insurance We Accept:</h1>
            <ul className="list-text insurances">
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
