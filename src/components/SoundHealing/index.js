import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SoundHealing({ currentProject }) {
  return (
    <section>
      <Container>
        <Row className="section-title">
          <Col>
            <h1 id="sound-healing">Sound Healing</h1>
          </Col>
        </Row>
        <Row>
          <Col className="md">
          <a href="https://www.freepik.com/free-photo/singing-bowl-placed-nature-with-river-background_31023241.htm#query=singing%20bowls&position=0&from_view=search">Image by wirestock</a> on Freepik
          </Col>
        </Row>
      </Container>
    </section>
  );
}
