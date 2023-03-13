"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var customer = new customer_1.Customer("John", "Smith", 20);
customer.greeter();
console.log("Customer's Age : ".concat(customer.GetAge()));
