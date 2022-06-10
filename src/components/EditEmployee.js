import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditEmployee = () => {
  const { employees, editEmployee } = useContext(GlobalContext);
  const [ename, setEname] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: null,
    ename: "",
    phone: "",
    designation: "",
    location: "",
  });
  const [filter, setFilter] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const currentEmployee = employees.find(
      (employee) => employee.id === parseInt(id)
    );
    setCurrentUser(currentEmployee);
    setFilter(true);
  }, [id, employees]);

  const handleChange = (key, value) => {
    setCurrentUser({ ...currentUser, [key]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    editEmployee(currentUser);
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Col md={4}>
            <h3 className="text-center fw-light">Edit Employee</h3>
            {filter && (
              <Form
                onSubmit={formSubmit}
                className="p-5 border border-secondary rounded"
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.ename}
                    maxLength={20}
                    onChange={(e) => handleChange("ename", e.target.value)}
                    placeholder="Enter Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.phone}
                    maxLength={10}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Enter Designation"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.designation}
                    onChange={(e) =>
                      handleChange("designation", e.target.value)
                    }
                    placeholder="Enter Designation"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    value={currentUser.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="Enter Location"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Edit Employee
                  </Button>

                  <Link to="/">
                    <Button variant="warning" type="button">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditEmployee;
