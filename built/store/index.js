"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var EmployeeSlice_1 = require("./slices/EmployeeSlice");
var store = (0, toolkit_1.configureStore)({
    reducer: { employees: EmployeeSlice_1.default.reducer },
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
            thunk: {},
        });
    },
});
exports.employeeActions = EmployeeSlice_1.default.actions;
exports.default = store;
