import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Insurance() {
  return (
    <section id="insurance">
      <Container>
        <Row className="section-title">
          <Col>
            <h1>Insurance We Accept:</h1>
          </Col>
        </Row>
        <Row>
          <Col className="md">
            <ul className="list-text">
              <li>BlueCross and BlueShield</li>
              <li>Cigna and Evernorth</li>
              <li>PacificSource</li>
              <li>Providence</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
