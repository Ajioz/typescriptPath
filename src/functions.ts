
function add(n1:number, n2:number) {
    return n1 + n2;
}
function printResult(num:number) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
let combineValue;
combineValue = add;

// combineValue = printResult;
console.log(combineValue(4, 5));

function addAndHandle(n1:number, n2:number, cb:(out:number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(12, 24, (result) => {
    console.log(result);
});
