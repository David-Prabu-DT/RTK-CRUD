import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EmployeeList = () => {
  const { employees, removeEmployee, getEmployees } = useContext(GlobalContext);

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
                    <>
                      <tr className="align-middle text-center text-capitalize">
                        <td key={employee.id}>{i + 1}</td>
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
                            onClick={() => removeEmployee(employee.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <h3 className="fw-light text-center">No Employee Found</h3>
          ))}
      </div>
    </>
  );
};

export default EmployeeList;
