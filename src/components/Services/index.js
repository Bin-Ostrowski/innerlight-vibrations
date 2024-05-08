import React from "react";
import crystalBowls from "../../assets/img/crystal-bowls.jpg";
import { Container, Row, Col } from "react-bootstrap";
const services = [
  {
    product: "30 Minute Vibrational Sound Session",
    price: "$45   Unavailable at this time",
  },
  {
    product: "50 Minute Vibrational Sound Session",
    price: "$75   Unavailable at this time",
  },
  {
    product: "60 Minute Integrative Counseling and Vibrational Sound Session",
    price: "*Varies   Unavailable at this time",
  },
  {
    product: "60 Minute Mind-Body Counseling",
    price: "*Varies",
  },
];
export default function Services() {
  return (
    <section id="services" className="services-page">
      <Container fluid>
        <Row>
          <Col className="section-title">
            <h1>Services</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} lg={8}>
            <Row>
              <Col xs={6} className="product-title">
                <h3>Product</h3>
              </Col>
              <Col xs={6} className="pricing-title">
                <h3>Price</h3>
              </Col>
            </Row>
            <Row className="services-container">
              {services.map((service, i) => (
                <Row key={i}>
                  <Col xs={6} className="product-list">
                    <p>{service.product}</p>
                  </Col>
                  <Col xs={6} className="pricing-list">
                    <p>{service.price}</p>
                  </Col>
                </Row>
              ))}
              <p>* Price will vary if insurance is accepted.</p>
            </Row>
          </Col>
          <Col xs={12} md={5} lg={3} className="crystal-bowl-img-container">
            <img
              src={crystalBowls}
              className="singing-bowls-img d-block mx-auto"
              alt="crystal-bowls"
            />
            <a
              className="href-links photo-credit"
              target="_blank"
              rel="noreferrer"
              href="https://www.pexels.com/photo/woman-with-roll-in-hand-and-glass-bowls-on-carpet-13543280/"
            >
              Photo by Mathilde Langevin
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
