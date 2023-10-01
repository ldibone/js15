import { sumFunc} from "./index.js";

const num1 = 1000;
const num2 = 1200;

const sum = sumFunc(num1, num2);
console.log("Suma este:", sum);


import {concatenateNames} from "./index.js";

const firstName = 'Ion';
const lastName = 'Munteanu';
const fullName = concatenateNames(firstName, lastName);
console.log(fullName);


import {getAllArguments} from "./index.js";

const result = getAllArguments(1, 'salut', true, { nume: 'Ion' });
console.log(result);
