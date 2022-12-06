import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import portrait from "../../assets/img/portrait.jpg";
import logo from "../../assets/img/logo.png";
import logoCropped from "../../assets/img/logo-cropped.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container fluid>
        <Row>
          <Col md={5} className="portrait-CTA-container">
            <Row className="justify-content-center">
            
                <img className="logo" src={logoCropped} alt="logo" />
                {/* <img
              className="portrait"
              src={portrait}
              style={{ width: "20" }}
              alt="portrait"
            /> */}
         
            </Row>
            <Row className="CTA-container">
              <a className="CTA" href="#contact">
                Request a free 15-minute consult!
              </a>
            </Row>
          </Col>
          <Col md={7} className="about-container">
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
