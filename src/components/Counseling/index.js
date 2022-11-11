import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Counseling() {
  return (
    <section id="counseling">
      <Container fluid>
        <h1 className="section-title">Counseling</h1>
        <Row>
          <Col md={4}>
            <a className="CTA counseling-CTA" href="#contact">
              Request a free 15-minute consult!
            </a>
          </Col>
        </Row>
        <Row className="cards-container">
          <Col md={4} className="cards">
            <h3>About Me</h3>
            <ul>
              <li>Licensed Profectional Counselor, LPC, MA, VSTCP</li>
              <li>Offers Online Therapy</li>
              <li>Years in Practice: 6 Years</li>
              <li>License: Oregon / C5248</li>
            </ul>
          </Col>
          <Col md={4} className="cards">
            <h3>Types of Theraphy</h3>
            <ul>
              <li>Compassion Focused</li>
              <li>Mindfulness-Based (MBCT)</li>
              <li>Solution Focused Brief (SFBT)</li>
              <li>Somatic</li>
              <li>Strength-Based</li>
            </ul>
          </Col>
        </Row>
        <Row className="cards-container">
          <Col md={3} className="cards">
            <h3>Issues</h3>
            <ul>
              <li>Coping Skills</li>
              <li>Life Coaching</li>
              <li>Life Transitions</li>
              <li>Peer Relationships</li>
              <li>Relationship Issues</li>
              <li>Self Esteem</li>
              <li>Spirituality</li>
              <li>Stress</li>
            </ul>
          </Col>
          <Col md={3} className="cards">
            <h3>Specialties</h3>
            <ul>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Trauma and PTSD</li>
            </ul>
          </Col>
          <Col md={3} className="cards">
            <h3>Communities</h3>
            <ul>
              <li>Bisexual Allied</li>
              <li>Gay Allied</li>
              <li>Lesbian Allied</li>
              <li>Non-Binary Allied</li>
              <li>Transgender Allied</li>
            </ul>
          </Col>
        </Row>
        <Row className="cards-container">
          <Col md={3} className="cards">
            <h3>Mental Health</h3>
            <ul>
              <li>Mood Dissorders</li>
            </ul>
          </Col>
          <Col md={2} className="cards">
            <h3>Sexuality</h3>
            <ul>
              <li>Bisexual</li>
              <li>LGTBQ+</li>
              <li>Lesbian</li>
            </ul>
          </Col>
          <Col md={2} className="cards">
            <h3>Age</h3>
            <ul>
              <li>Adults</li>
            </ul>
          </Col>
          <Col md={3} className="cards">
            <h3>Modality</h3>
            <ul>
              <li>Individuals</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
