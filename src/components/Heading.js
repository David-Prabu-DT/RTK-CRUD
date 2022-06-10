import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="fw-light">Employee listing</h4>
        </div>
        <div>
          <Link to={"/add"}>
            <Button className="btn btn-success">Add Employee</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
