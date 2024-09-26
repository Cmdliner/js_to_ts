/* Problem => Implement an algorithm that reads each word in a file 
and returns the number of times a word appears
 */


// PS :- Arrays of a particular datatype can be represented as:
// string[] or Array<string> = string array
// number[]or Array<number>= array of numbers
// boolean[] or Array<boolean>= array of boolean
// 
import { readFileSync } from "fs";
import path from "path";
import Counter from "./lib";

// The :string[] syntax after the parentheses () tells the return type of the fn to be void
// this implies that the fn does 

const getTokensFromFile = (filePath: string): string[]  => {
    let tokens: string[] = [];
    try {
        let file =  readFileSync(filePath);
        let fileAsString = file.toString();

        // Split the file contents into tokens on any whitespace char && filter out empty strings
        tokens = fileAsString.split(/\W/).filter( (token: string) => token !== "");

    } catch (error) {
        console.error(`Error reading file at ${filePath}`);
    }
    return tokens;
}


const tokens = getTokensFromFile(path.join(__dirname, "../sample.txt"));
let tokenCounter = new Counter(tokens);

console.log(tokenCounter.tokenStats());

