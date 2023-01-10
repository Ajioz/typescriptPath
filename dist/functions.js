"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
let combineValue;
combineValue = add;
// combineValue = printResult;
console.log(combineValue(4, 5));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(12, 24, (result) => {
    console.log(result);
});
