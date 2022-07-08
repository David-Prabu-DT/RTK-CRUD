import React from "react";
import { Container } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import Heading from "../../components/Heading";
import EmployeeList from "../employeeList/EmployeeList";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  console.log("Fall back UI Called");
  return (
    <div role="alert"> 
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center">Employee CRUD App</h2>
        <Heading />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <EmployeeList />
        </ErrorBoundary>
      </Container>
    </div>
  );
};
export default Home;
