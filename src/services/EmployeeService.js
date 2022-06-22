import axios from "axios";
import { useDispatch } from "react-redux";
import { employeeActions } from "../store";
const API_URL = process.env.REACT_APP_API_URL;

const FetchEmployees = (dispatch, handleError) => {
  axios
    .get(`${API_URL}/employees`)
    .then((response, data) => {
      dispatch(employeeActions.getEmployees(response));
    })
    .catch((err) => {
      handleError(err);
    });
};

const AddEmployee = (content) => {
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

const EditEmployee = (updatedEmployee) => {
  axios
    .patch(
      `${API_URL}/employees/${parseInt(updatedEmployee.id)}`,
      updatedEmployee
    )
    .then((res) => {
      alert("User Updated Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const DeleteEmployee = (id) => {
  axios.delete(`${API_URL}/employees/${parseInt(id)}`).then((res) => {
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
