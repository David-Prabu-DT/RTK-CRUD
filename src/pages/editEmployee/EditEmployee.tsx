import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useErrorHandler } from "react-error-boundary";
import EmployeeService from "../../services/EmployeeService";
import { employeeActions, RootState } from "../../store";

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleError = useErrorHandler();
  const employees = useSelector((state: RootState) => state.employees);
  
  const [filter, setFilter] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    ename: "",
    phone: "",
    designation: "",
    location: "",
  });

  useEffect(() => {
    EmployeeService.FetchEmployees(dispatch, handleError);

    const currentEmployee =
      Array.isArray(employees) &&
      employees.find((employee) => employee.id === id);
    setCurrentUser(currentEmployee);
    setFilter(true);
  }, []);

  const handleChange = (key: string, value: string | number) => {
    setCurrentUser({ ...currentUser, [key]: value });
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(employeeActions.editEmployee(currentUser));
    EmployeeService.FetchEmployees(dispatch, handleError);
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
