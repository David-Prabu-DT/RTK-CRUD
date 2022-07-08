import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container>
        <Row
          className="justify-content-md-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Col md={5}>
            <Card border="secondary" className="shadow">
              <Card.Header className="text-center" as="h5">
                Login
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                    <span className="text-danger"></span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <span className="text-danger"></span>
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="button">
                      Login
                    </Button>
                  </div>
                  <div className="mt-2 text-center">
                    <Link to="/">Create New Account ?</Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
