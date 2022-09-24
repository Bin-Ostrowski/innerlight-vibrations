import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  return (
    //return header and navigation
    <header className="flex-row ">
      <Container>
        <Row className="full-width">
          <Col md={4}>
            <h1 className="href-links">
              <a href="/" className="href-links">
                Innerlight Vibrations
              </a>
            </h1>
          </Col>
          <Col md={{ span: 7, offset: 1 }}>
            <nav>
              <ul className="flex-row">
                <li className="flex-row">
                  <a className="href-links" href="#about">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="href-links" href="#sound-healing">
                    Sound Healing
                  </a>
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
