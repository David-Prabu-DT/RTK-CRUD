import React, { Component } from "react";

export default function UpdatedComponent(HocComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <HocComponent />
        </div>
      );
    }
  };
}
