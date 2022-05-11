import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <h1 className="main">YourEvent</h1>
      <div className="head">
        <h2>Online Registration</h2>
      </div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
            <Form.Label>Company(if applicable)</Form.Label>
            <Form.Control type="text" placeholder="Company" />
            <Form.Label>Physical Address</Form.Label>
            <Form.Control type="text" placeholder="Physical Address" />
          </Form.Group>
          <Row>
              <Col>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control placeholder="Month" />
              </Col>
              <Col>
                <Form.Control placeholder="Day" />
              </Col>
              <Col>
                <Form.Control placeholder="Year" />
              </Col>             
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Navbar;
