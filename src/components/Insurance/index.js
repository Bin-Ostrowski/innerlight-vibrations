import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Insurance() {
  return (
    <section>
      <Container>
        <Row className="section-title">
          <Col>
            <h1 id="insurance">Insurance</h1>
          </Col>
        </Row>
        <Row>
          <Col className="md" style={{padding: "20px"}}>
         
          </Col>
          <Col className="md">
           <p>BlueCross and BlueShield, Cigna and Evernorth, PacificSource, Providence</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
