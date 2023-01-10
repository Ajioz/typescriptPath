let userInput: unknown;
let userName:string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}

// userName = userInput; --> not allowed
// userName = userInput; --> allowed  IF userInput was set to be any --> let userInput: any;
function generateError(message:string, code:number):never {
    throw { message, errorCode: code };
}
generateError('An error Occured!', 500);
