"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var calc = new calculator_1.Calculator();
var result_add = calc.add(2, 3);
var resutlt_subtract = calc.subtract(7,5);
console.log("result_add = ".concat(result_add));
console.log("result_sub = ".concat(resutlt_subtract));
