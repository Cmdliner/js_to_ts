let user: string = "Kolzsticks";

// try typing this; you get intellisense cos editor knows that its a string
user.includes("a");


let age: number = 19;

age.toPrecision(1);


let otherPerson: any = "Daniel";

// Any type; just like regular js. you dont get any intellisense
// Doesn't know the type of this variable
// Doesn't throw error cos it assumes that it is any and can have the method getResponse on it
otherPerson.getResponse();



let otherThing: string = "David";
otherThing.getResponse() // typescript knows theres an error here cos it knows that there is no getResponse method on type string




function acceptInputFlawed(name: string, age: string) {
    return `My name is ${name} and I was born ${ new Date().getFullYear() - age}` //error here knows that age is a string
}

function acceptInput(name: string, age: number) {
    return `My name is ${name} and I was born ${ new Date().getFullYear() - age}` //error here knows that age is a string

}
function acceptAnyInput(name: any, number: any) {
    return `My name is ${name} and I was born ${ new Date().getFullYear() - age}` //doesnt throw any error heres

}




// assume i am calling this in another file and i dont really know what datatype it allows i just pass anything and it fails silently jsut like js
let anyInput = acceptAnyInput(12, 34);

let errorInput = acceptInputFlawed("myname", 23); //gives you error warnings


let goodUsage = acceptInput("my name", 12);

let bad = acceptInput(34, "name"); //gives errors


// Just try fixing these errors when you are done and try making
// your own fns and hovering over them to see types definition


// here declare union types

let gender: "M" | "F";


gender = "M";
gender = "F";

gender = "other"; // gives errors gender can only be of type "M" or "F";

let prodQuality: "Ok"| "Normal" | "Bad" = "i dont know" // throws error fix;



let x = "something";

x(); // Throws errors; x is a var containing a string value; it is not callable