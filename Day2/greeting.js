/*

Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true

*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
//Possible values of "gender" argument are "male", "female", "nonbinary"
const genders = ["self", "male", "female", "nonbinary"];

function firstCharsUpper(word) {
    let words = word.split(" ");
    words.forEach( (w, i, arr) => {
        arr[i] = w.charAt(0).toUpperCase() + w.toLowerCase().slice(1);
    });
    return words.join(" ");
}
/*
/**
 @param {string} name
        name of person
 @param {string} gender
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
    if (isSelf) gender = 'self';
    let genderPrefix = prefixes[genders.indexOf(gender.toLowerCase())];
    let salutation = greetingWords[Math.floor(Math.random()*greeting.length)];
    salutation = firstCharsUpper(salutation);
    if (!/[a-zA-Z ']+/.test(name) | (genderPrefix === undefined))
        return "Please check your name or enter the proper gender. e.g) male, female or nonbinary ";
    else return `${salutation}, ${genderPrefix} name is ${firstCharsUpper(name)}`;
}

console.log(greeting('Michael', 'male', true));
console.log(greeting("Suzie", "female", false));
console.log(greeting('Pat', 'NoNbInaRy', false));
console.log(greeting('slim shady', `male`, 1));
console.log(greeting('aLIEn', 'kezxidaw', false));