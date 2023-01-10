//union type
/*
function combine(num1: number | string, num2:number | string){
   return typeof num1 === 'number' && typeof num2 === 'number' ? num1 + num2 : num1.toString() + num2.toString()
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Sarah', 'Ann');
console.log(combinedNames);
*/

type Combination = number | string; 
type conversionDesc = 'as-number' | 'as-text';  //literal type --> specificity

function combine(
    num1:Combination, 
    num2:Combination, 
    conversion:conversionDesc
) {
    return conversion === 'as-number' ? +num1 + +num2 : num1.toString() + num2.toString();
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combined_Ages = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Sarah', 'Ann', 'as-text');
console.log(combinedNames);
