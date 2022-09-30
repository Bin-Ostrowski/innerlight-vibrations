import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/img/portrait.jpg";

export default function About() {
  return (
    <section>
      <Container>
        <Row>
          <Col className="md">
            <img className="portrait" src={portrait} style={{ width: "20" }} alt="portrait" />
          </Col>
          <Col className="md">
            <h1 className="section-title" id="about">Meet Nichole</h1>
            <p>
              Full-stack web developer leveraging knowledge in creating
              intuitive and concise web applications focused on the user’s
              engagement. Known for resourceful problem solving with dedication
              to creating dry, scalable applications. Thrives in the
              ever-changing industry while supporting a quality-driven team in
              pursuit of building maintainable web applications everyone enjoys
              using.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
