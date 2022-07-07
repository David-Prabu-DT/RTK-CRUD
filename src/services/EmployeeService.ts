import { Form } from "react-bootstrap";
import axios from "axios";
import { employeeActions } from "../store";
const API_URL = process.env.REACT_APP_API_URL;

const FetchEmployees = <T>(dispatch: T, handleError: T): void => {
  axios
    .get(`${API_URL}/employees`)
    .then((_res: any, data: any): void => {
      dispatch(employeeActions.getEmployees(_res));
    })
    
    .catch((err) => {
      handleError(err);
    });
};


const AddEmployee = <T>(content: T): void => {
  axios
    .post(`${API_URL}/employees`, content)
    .then((data) => console.log(data))
    .then((res) => {
      console.log(res);
      alert("User Added Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const EditEmployee = <T>(updatedEmployee: T): void => {
  axios
    .patch(`${API_URL}/employees/${updatedEmployee.id}`, updatedEmployee)
    .then((_res) => {
      alert("User Updated Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const DeleteEmployee = (id: number): void => {
  axios.delete(`${API_URL}/employees/${id}`).then((_res) => {
    alert("User Deleted Successfully !!");
  });
};

const EmployeeService = {
  FetchEmployees,
  AddEmployee,
  EditEmployee,
  DeleteEmployee,
};
export default EmployeeService;
