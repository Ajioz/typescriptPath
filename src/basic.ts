function addNumber(num1:number, num2:number, showResult:boolean) {
    if (showResult)
        console.log(num1 + num2);
    else
        return num1 + num2;
}
const number1 = 5;
const number2 = 2.2;
const priResult = true;
const result = addNumber(number1, number2, priResult);
// console.log(result);
