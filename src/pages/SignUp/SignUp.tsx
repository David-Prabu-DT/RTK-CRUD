import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthService } from "../../services/auth.service";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent) => {
    const { name, value }: any = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    let formData = new FormData();

    formData.append("email", userData.email);
    formData.append("password", userData.password);

    AuthService.SignUp(formData);
  };

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
                Sign Up
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Name"
                    />
                    <span className="text-danger"></span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phonenumber"
                      value={userData.phonenumber}
                      onChange={(e) => handleChange(e)}
                      maxLength={10}
                      placeholder="Enter Phone"
                    />
                    <span className="text-danger"></span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter email"
                    />
                    <span className="text-danger"></span>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={userData.password}
                      onChange={(e) => handleChange(e)}
                      placeholder="Password"
                    />
                    <span className="text-danger">{}</span>
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </Button>
                  </div>

                  <div className="mt-2 text-center">
                    <Link to="/login">All Ready Have An Account ? </Link>
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

export default SignUp;
