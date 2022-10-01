import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import singingBowls from "../../assets/img/singing-bowls.jpg";

export default function SoundHealing({ currentProject }) {
  return (
    <section id="sound-healing">
      <Container>
        <Row>
          <Col md={6}>
            <Stack>
              <h1 className="section-title">Sound Healing</h1>
              <h3>What Vibration Sound Theraphy is Used For:</h3>
              <ul>
                <li>Quickly introducing deep meditative states</li>
                <li>Reducing depression and sleep issues</li>
                <li>Easing blockages and tension</li>
                <li>Entraning the brain</li>
                <li>Reducing stress</li>
                <li>Raising focus and gaining a clear mind</li>
                <li>Calming the mind, body, and spirit in conjustion</li>
                <li>Boosting Creativity</li>
              </ul>
            </Stack>
          </Col>
          <Col md={6}>
            <Stack>
              <img
                src={singingBowls}
                className="singing-bowls-img"
                alt="singing-bowls"
              />
              <a
                className="href-links"
                href="https://www.freepik.com/free-photo/singing-bowl-placed-nature-with-river-background_31023241.htm#query=singing%20bowls&position=0&from_view=search"
              >
                Image by wirestock on Freepik
              </a>{" "}
            </Stack>
          </Col>
        </Row>
        <Row>
          <Stack>
            <h1 className="section-title">What Happens During A Session?</h1>
            <p>
              Vibrational Sound Therapy (VST) has profound effects on the body
              and the mind. The VST method is above all a method of relaxation,
              and most people will reach this state of relaxation quickly, even
              during their first session. During a VST session the body will go
              through noticeable changes as it responds to deeper and deeper
              states of rest. Relaxation is not only a physical state but also a
              state of consciousness, and VST has very strong effects on
              alertness and perception. Relaxation during a VST session brings
              on the same kind of brain states as yoga, tai chi, and meditation.{" "}
              <br />
              <br />
              Most clients will start to relax as soon as the session begins.
              Their muscles will lose tension, and they may even start to slip
              into the alpha brain wave pattern within the first minutes. The
              alpha wave pattern is associated with daydreaming and pre-sleep.
              At this point the client's breathing and heart rate will start to
              slow down, and the body will begin to absorb the waves of
              vibration into its tissues. The slowing of breathing and lack of
              muscle tension are both signs that the metabolism is slowing.
              Insulin levels will rise, and cortisol levels will fall. As the
              heart rate slows, blood pressure falls and arteries expand giving
              rise to a feeling of warmth. This relaxed state allows the body to
              repair itself instead of responding to outside concerns. The
              immune system is at its best when we are relaxed.
              <br />
              <br />
              VST is so gentle and relaxing that almost all people will fall
              asleep at some point during the session. The theta brain wave
              state is associated with meditation, sleep, and deep relaxation.
              The delta brain state is a deeper form of sleep and is also
              associated with hypnosis and ritual. During normal sleep, people
              will oscillate between both of these states. The brain wave state
              of clients undergoing a sound massage will change naturally and in
              reaction to the modality as positions are changed and different
              bowls are introduced. Small tremors and shakes are common as
              people enter and exit the theta and delta brain rhythms.
              <br />
              <br />
              Those who undergo a state of deep relaxation often report a
              feeling of mental freshness that they carry with them after the
              session is over. Relaxation and meditative states of mind have
              also been shown to increase the threshold for emotional response,
              meaning they can help us control our emotional responses to
              outside influences. Like other kinds of meditation, sound therapy
              can help us be more internally aware while being more present in
              the moment and more connected with our surroundings.
            </p>
            <a
              className="href-links"
              href="https://www.vibrationalsoundassociation.com/what-happens-during-a-vst-session/"
            >
              cited by VSA - click here for more information
            </a>{" "}
          </Stack>
        </Row>
        <Row>
          <Stack>
            <h3 className="section-title">
              VST Cannot Be Performed If the Client Has Any Of the Following:
            </h3>
              <a
                className="href-links"
                href="https://docs.google.com/document/d/1J6Y9LB0SjlpushDSvDoXwa2E_T9a6pSZzFQq6x3lTDc/edit"
                download
                target="_blank"
                rel="noreferrer noopener"
              >
                Click Here to Download List
              </a>
          </Stack>
        </Row>
      </Container>
    </section>
  );
}
