import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import logoFooter from "../../assets/img/logo-footer.png";

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={5}>
            <a href="#about">
              <img
                className="logo-footer d-block mx-auto"
                src={logoFooter}
                alt="logo"
              />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={5} className="footer-address">
            <div>Address:</div>
            <div>144 E 14th Ave, Suite G</div>
            <div>Eugene, OR 97401</div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={4} className="created-by">
            By Robin Ostrowski, 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
