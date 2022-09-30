import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {

  return (
    <footer>
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs="auto">
            <div>&copy;2022 by Robin Ostrowski</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
