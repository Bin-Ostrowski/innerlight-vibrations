import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  return (
    //return header and navigation
    <header className="flex-row">
      <Container>
        <Row className="full-width">
          <Col xs={12} md={4}>
            <h1 className="href-links nav-logo">
              <a href="#about" className="href-links">
                Inner Light Vibrations
              </a>
            </h1>
          </Col>
          <Col xs={12} md={{ span: 7, offset: 1 }}>
            <nav>
              <ul className="nav-container flex-row">
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
                  <a className="href-links" href="#counseling">
                    Counseling
                  </a>
                </li>
                <li className="nav-links">
                  <a className="href-links" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-links">
                  <a className="href-links" href="#insurance">
                    Insurance
                  </a>
                </li>
                <li className="nav-links">
                  <a className="contact-btn" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
