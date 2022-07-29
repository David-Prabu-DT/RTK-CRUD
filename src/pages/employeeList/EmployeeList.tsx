import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { employeeActions, RootState } from "../../store";
import EmployeeService from "../../services/EmployeeService";
import { useErrorHandler } from "react-error-boundary";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const EmployeeList = () => {
  const dispatch = useDispatch();
  const handleError = useErrorHandler();
  const employees: any = useSelector((state: RootState) => state.employees);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    EmployeeService.FetchEmployees(dispatch, handleError);
    setLoading(false);
  }, []);

  const RemoveEmployee = (id: number) => {
    dispatch(employeeActions.deleteEmployee(id));
    EmployeeService.FetchEmployees(dispatch, handleError);
  };

  const columns:object = [
    { dataField: 'id', text: 'S.No' },
    { dataField: 'name', text: 'Name' },
    { dataField: 'phone', text: 'Phone' },
    { dataField: 'designation', text: 'Designation' },
    { dataField: 'location', text: 'Location' },
    { dataField: 'animal', text: 'Action' },
  ];

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
                  {employees.map((employee: any, i: number) => (
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
