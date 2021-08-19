var SUNNY_DAY_MESSAGE = "It is sunny out today";
var CLOUDY_DAY_MESSAGE = "It is not sunny out today :(";
var isSunny = true;
var numberSunnyDays = 1;
console.log(SUNNY_DAY_MESSAGE);
function hello(name, isSunny) {
    if (!isSunny)
        return "Hi, " + name;
    return "Hi, " + name + "! " + SUNNY_DAY_MESSAGE;
}
console.log(hello("Michael", isSunny));
/**
 *
 * @param isSunny If *today* it is sunny or not.
 * @param numberOfSunnyDays How many days in a row it has been sunny.
 * @returns Return a string saying whether it's sunny or not. If it's sunny, string declares how many days it has been sunny for.
 */
function sunny_day_message(isSunny, numberOfSunnyDays) {
    if (isSunny)
        return SUNNY_DAY_MESSAGE + "! There ha" + ((numberOfSunnyDays === 1) ? 's' : 've') + " been " + numberOfSunnyDays + " sunny day" + ((numberOfSunnyDays === 1) ? '' : 's') + "!";
    return CLOUDY_DAY_MESSAGE;
}
console.log('\n' + sunny_day_message(isSunny, numberSunnyDays));
console.log('\n' + sunny_day_message(true, 4));
console.log('\n' + sunny_day_message(false, 3));
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 1010;
obj = "hello";
var n = obj;
