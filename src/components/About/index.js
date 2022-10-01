import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/img/portrait.jpg";

export default function About() {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col className="md">
            <img
              className="portrait"
              src={portrait}
              style={{ width: "20" }}
              alt="portrait"
            />
          </Col>
          <Col className="md">
            <h1 className="section-title">
              YOU DESERVE TO FEEL EMPOWERED IN YOUR OWN LIFE
            </h1>
            <p>
              To be the one who confidently shows up for yourself in times of
              difficulty. I believe empowerment happens through a better
              understanding of how stress and trauma manifests in our bodies and
              minds. I seek to support and work with those who experience
              barriers to empowerment, due to anxiety, depression, trauma.
              Though understanding the ways in which your body responds to and
              holds onto stress and trauma, we will question and challenge old
              stories, thoughts and behaviors that hold you back from embodying
              your empowered self, and learn tools to help you feel more in
              control.
              <br />
              <br />
              As a mind-body therapist, I create a safe, supportive space to
              help you explore and question the physical and emotional patterns
              that no longer serve you. I use an integrative tool kit of
              mindfulness, meditation, sound, guided imagery, grounding
              techniques, somatic tools, and more.
              <br />
              <br />
              If you are ready to feel more empowered, create a more mindful
              relationship with your body and the way it responds to stress,
              trauma, anxiety and depression, and receive compassionate support
              towards becoming a more empowered version of yourself, I look
              forward to working together.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
