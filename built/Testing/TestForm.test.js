"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var TestForm_1 = require("./TestForm");
describe("Form Testing", function () {
    it("renders the form correctly", function () {
        (0, react_2.render)(<TestForm_1.default />);
        var nameLabel = react_2.screen.getByText(/Name:/i);
        var ageLabel = react_2.screen.getByText(/Age:/i);
        expect(nameLabel).toBeInTheDocument();
        expect(ageLabel).toBeInTheDocument();
    });
    it("submit button should be disabled when Name is empty", function () {
        (0, react_2.render)(<TestForm_1.default />);
        var nameLabel = react_2.screen.getByLabelText(/Name:/i);
        var submitBtn = react_2.screen.getByRole("button", { name: "Submit" });
        react_2.fireEvent.change(nameLabel, { target: { value: "" } });
        expect(submitBtn).toHaveAttribute("disabled");
        react_2.fireEvent.change(nameLabel, { target: { value: "John Doe" } });
        expect(submitBtn).not.toHaveAttribute("disabled");
    });
});
