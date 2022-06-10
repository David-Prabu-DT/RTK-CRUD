import React from "react";
import { Container } from "react-bootstrap";
import Heading from "./Heading";
import EmployeeList from "./EmployeeList";

const Home = () => {
  return (
    <div>
      <Container className="mt-5">
        <h3 className="text-center">
          Employee CRUD App
        </h3>
        <Heading />
        <EmployeeList />
      </Container>
    </div>
  );
};

export default Home;
