//Type inference 
/*
const person = {
    name: 'Ajiroghene',
    age: 30,
    hobbies:[{age: 12}, 'Reading', 'Sport', 'Cooking', 6, true]
}
*/
//Explicit type assignment
/*
const person :{
    name: string;
    age:number;
    hobbies:string[];
    role:[number, string];  //tuple
} = {
    name: 'Ajiroghene',
    age: 30,
    hobbies:['Reading', 'Sport', 'Cooking'],
    role:[1, 'author']
}
*/
//This can be replaced be enum
/*
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/
enum Role { ADMIN, READ_ONLY, AUTHOR };      // --> this enum maps to : {0, 1, 2} assigns label to numbers

const person = {
    name: 'Ajiroghene',
    age: 30,
    hobbies: ['Reading', 'Sport', 'Cooking'],
    role: Role.ADMIN
};

//declaring an array of type string
let favourite:string[];

//assigning such array of string
favourite = ['banana', 'mango', "guava"];

// person.role.push(10);
console.log(person.role); //push is an exception on tuple which allows more data added: strange though!
for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === Role.ADMIN) {
    console.log('THis is ADMIN');
}
