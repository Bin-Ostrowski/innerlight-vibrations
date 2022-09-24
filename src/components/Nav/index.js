import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  return (
    //return header and navigation
    <header className="flex-row ">
      <Container>
        <Row>
          <Col md={4}>
            <h1 classname="href-links">
              <a href="/" classname="href-links">Innerlight Vibrations</a>
            </h1>
          </Col>
          <Col md={{ span: 5, offset: 3 }}>
            <nav>
              <ul className="flex-row">
                <li className="flex-row">
                  <a classname="href-links" href="#about">About Me</a>
                </li>
                <li>
                  <a href="#sound-healing">Sound Healing</a>
                </li>
                <li>
                  <a href="#counseling">Counseling</a>
                </li>
                <li>
                  <a href="#insurance">Insurance</a>
                </li>
                <li>
                  <a href="#gift-card">Gift Cards</a>
                </li>
                <li>
                  <span>Contact</span>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
