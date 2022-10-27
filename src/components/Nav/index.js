import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  return (
    //return header and navigation
    <header className="flex-row ">
      <Container>
        <Row className="full-width">
          <Col md={4}>
            <h1 className="href-links logo">
              <a href="/" className="href-links">
                Innerlight Vibrations
              </a>
            </h1>
          </Col>
          <Col md={{ span: 7, offset: 1 }}>
            <nav>
              <ul className="flex-row">
                <li className="nav-links">
                  <a className="href-links" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-links">
                  <a className="href-links" href="#sound-healing">
                    Sound Healing
                  </a>
                </li>
                <li className="nav-links">
                  <a className="href-links" href="#counseling">Counseling</a>
                </li>
                <li className="nav-links">
                  <a className="href-links" href="#insurance">Insurance</a>
                </li>
                <li className="nav-links">
                  <a className="href-links" href="#gift-card">Gift Cards</a>
                </li>
                <li className="nav-links">
                  <a className="contact-btn" href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
