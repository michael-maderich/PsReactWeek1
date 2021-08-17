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
let genders = ["self", "male", "female", "nonbinary"];
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
    if (genderPrefix === undefined) genderPrefix = 'their';
    let salutation = greetingWords[Math.floor(Math.random()*3)];
    salutation = salutation.charAt(0).toUpperCase() + salutation.slice(1);
  return  `${salutation}, ${genderPrefix} name is ${name}`;
}

console.log(greeting('Michael', 'male', true));
console.log(greeting("Suzie", "female", false));
console.log(greeting('Pat', 'NoNbInaRy', false));
console.log(greeting('Slim Shady', `male`, 1));
console.log(greeting('Alien', 'kezxidaw', false));