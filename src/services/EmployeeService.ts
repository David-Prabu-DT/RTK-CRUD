import { useErrorHandler } from 'react-error-boundary';
import { AppDispatch } from "./../store/index";
import axios from "axios";
import { employeeActions } from "../store";
const API_URL = process.env.REACT_APP_API_URL;

const handleError = useErrorHandler();

const FetchEmployees = <T>(dispatch: AppDispatch) => {
  axios
    .get(`${API_URL}/employees`)
    .then((_res: object) => {
      dispatch(employeeActions.getEmployees(_res));
    })
    .catch((_err) => {
      handleError(_err);
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

const EditEmployee = (updatedEmployee: any) => {
  axios
    .patch(`${API_URL}/employees/${updatedEmployee.id}`, updatedEmployee)
    .then((_res) => {
      alert("User Updated Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const DeleteEmployee = <T>(id: T) => {
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
