import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { employeeActions } from "../store";
import EmployeeService from "../services/EmployeeService";
import { useErrorHandler } from "react-error-boundary";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const handleError = useErrorHandler();
  const [loading, setLoading] = useState(true);
  const employees = useSelector((state) => state.employees);

  console.log(employees);
  useEffect(() => {
    EmployeeService.FetchEmployees(dispatch, handleError);
    setLoading(false);
  }, []);

  const RemoveEmployee = (id) => {
    dispatch(employeeActions.deleteEmployee(id));
    EmployeeService.FetchEmployees(dispatch);
  };

  return (
    <>
      <div className="mt-3">
        {employees &&
          (employees.length > 0 ? (
            <>
              <Table striped bordered hover className="mt-3 bg-light rounded">
                <thead>
                  <tr className="text-center">
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Designation</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, i) => (
                    <tr
                      key={i}
                      className="align-middle text-center text-capitalize"
                    >
                      <td>{i + 1}</td>
                      <td>{employee.ename}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.location}</td>
                      <td className="d-flex justify-content-around">
                        <Link
                          className="btn btn-primary"
                          to={`/edit/${employee.id}`}
                          title="Edit Employee"
                        >
                          Edit
                        </Link>
                        <Button
                          onClick={() => RemoveEmployee(employee.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <h3 className="fw-light text-center">
              {loading ? "Loading..." : "No Employee Found"}
            </h3>
          ))}
      </div>
    </>
  );
};

export default EmployeeList;
