let user = "Kolzsticks";

// try typing this; you  get intellisense cos editor knows that its a string
user.includes("a");


let age = 19;

age.toPrecision(1);


let otherPerson = "Daniel";
otherPerson.getResponse();


// hover over the function signature you see that the fn params are of type any
function acceptInput(name, age) {
    return `My name is ${name} and I was born ${ new Date().getFullYear() - age}` //error here knows that age is a string

}
function acceptAnyInput(name, age) {
    return `My name is ${name} and I was born ${ new Date().getFullYear() - age + now } ` 
    //doesnt throw any error heres; now is not declared anywhere so it implicitly resolves to undefined

}


let anyInput = acceptAnyInput(12, 34);

// doesnt throw any error; fn is undefined; doesnt even know that it is callable yet it still allows  it
let errorInput = acceptInputFlawed("myname", 23);


let goodUsage = acceptInput("my name", 12);

let bad = acceptInput(34, "name"); //no errors


let x = "something";

x(); // Doesn't throw any errors; x is a var containing a string value; it is not callable