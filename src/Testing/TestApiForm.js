import React, { useState } from "react";
import * as apiService from "./api";

function TestApiForm() {
  const [state, setState] = useState({
    message: "",
    post: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first");
    const response = await apiService.postProducts(state.post);
    if (response.ok) {
      setState({
        message: "Successfully Created Post!!",
        post: "",
      });
    }
  };
  const updateEmail = (e) => {
    e.preventDefault();
    setState({ ...state, post: e.target.value });
  };
  return (
    <div className="App">
      {state.message ? <h1>{state.message}</h1> : null}
      <form onSubmit={handleSubmit}>
        <label>
          Body:
          <input type="text" value={state.post} onChange={updateEmail} />
        </label>
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
export default TestApiForm;
