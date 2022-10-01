import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import singingBowls from "../../assets/img/singing-bowls.jpg";

export default function SoundHealing({ currentProject }) {
  return (
    <section  id="sound-healing">
      <Container>
        <Row className="section-title">
          <Col>
          </Col>
        </Row>
        <Row>
        <Col>
            <img src={singingBowls} style={{ width: "20" }} className="singing-bowls-img" alt="singing-bowls" />
          <a href="https://www.freepik.com/free-photo/singing-bowl-placed-nature-with-river-background_31023241.htm#query=singing%20bowls&position=0&from_view=search">Image by wirestock</a> on Freepik
          </Col>
          <Col className="md">
            <h1>Sound Healing</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
