import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "../store";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [ename, setEname] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    EmployeeService.FetchEmployees(dispatch);
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      ename,
      phone,
      designation,
      location,
    };

    dispatch(employeeActions.addEmployee(newEmployee));
    EmployeeService.FetchEmployees(dispatch);
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
            <h3 className="text-center fw-light">Add Employee</h3>
            <Form
              onSubmit={formSubmit}
              className="p-5 border border-secondary rounded"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ename}
                  maxLength={20}
                  onChange={(e) => setEname(e.target.value)}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="Enter Designation"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter Location"
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Add Employee
                </Button>

                <Link to="/">
                  <Button variant="warning" type="button">
                    Cancel
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddEmployee;
