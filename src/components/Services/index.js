import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const services = [
  {
    product: "30 Minute Vibrational Sound Session",
    price: "$45",
  },
  {
    product: "50 Minute Vibrational Sound Session",
    price: "$75",
  },
  {
    product: "60 Minute Integrative Counseling and Vibrational Sound Session",
    price: "*Varies",
  },
  {
    product: "60 Minute Mind-Body Counseling",
    price: "*Varies",
  },
  {
    product: "",
    price: "* Price will vary if insurance is accepted",
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
              <Col xs={6}>
                <p>{service.product}</p>
              </Col>
              <Col xs={6} className="pricing-list">
                <p>{service.price}</p>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </section>
  );
}
