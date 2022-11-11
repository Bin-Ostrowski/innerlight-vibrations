import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
    
        <Row className="justify-content-sm-center footer-address">
          <Col xs="auto">144 E 14th Ave, Suite G</Col>
          <Col xs="auto">Eugene, OR 97401</Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col xs="auto">By Robin Ostrowski, 2022</Col>
        </Row>
      </Container>
    </footer>
  );
}
