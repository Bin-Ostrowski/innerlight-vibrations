import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  //declare formData state to be empty object
  const [formData, setFormData] = useState({});

  // declare validation state
  const [validated, setValidated] = useState(false);

  //form input handler
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //submit form handler
  function handleSubmit(event) {
    // validate required inputs
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <section id="contact" className="section">
      <Container>
        <Row className="section-title">
          <Col>
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Form
          action="https://formsubmit.co/porternich@gmail.com" //porternich@gmail.com
          method="POST"
          target="_blank"
          className="form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-4 ">
            <Form.Label htmlFor="interests">
              What are you interested in?
            </Form.Label>
            <div>
              <Form.Check
                inline
                label="Sound Healing"
                name="interestSoundHealing"
                type="switch"
                value="yes"
                onChange={handleChange}
                id="selectSoundHealing"
              />
              <Form.Check
                inline
                label="Counseling"
                name="interestCounseling"
                value="yes"
                onChange={handleChange}
                type="switch"
                id="selectCounseling"
              />
            </div>
          </Form.Group>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="phone">Phone:</Form.Label>
                <Form.Control
                  required
                  type="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="Enter Phone Number"
                />
                <Form.Text className="text-muted">
                  We'll never share your number with anyone.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="email">Email address:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter Email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="insurance">
                  What insurance do you have?
                </Form.Label>
                <Form.Select
                  required
                  aria-label="insurance"
                  onChange={handleChange}
                  value={formData.insurance}
                  name="insurance"
                >
                  <option value="no insurance">No Insurance</option>
                  <option value="BCBS">BlueCross and BlueShield/Regence</option>
                  <option value="cigna">Cigna</option>
                  <option value="pacificSource">PacificSource</option>
                  <option value="providence">Providence</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  We only accept the insurances listed above.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="contactMethod">
                  Preferred Method of Contact
                </Form.Label>
                <Form.Select
                  required
                  aria-label="contact-method"
                  onChange={handleChange}
                  value={formData.contactMethod}
                  name="contactMethod"
                >
                  <option value="call">Call</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="meetingMethod">
                  Preferred Method of Meeting
                </Form.Label>
                <Form.Select
                  required
                  aria-label="meeting-method"
                  onChange={handleChange}
                  value={formData.meetingMethod}
                  name="meetingMethod"
                >
                  <option value="inPerson">In Person</option>
                  <option value="telehealth">Telehealth</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              type="message"
              placeholder="Enter Message"
              required
            />
            <Form.Text className="text-muted">
              Please add a comment or discribe what you are going through.
            </Form.Text>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="light">
              Send
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}



//<Feedback type="invalid">Yo this is required</Feedback>