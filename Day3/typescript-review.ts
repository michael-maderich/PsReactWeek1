const SUNNY_DAY_MESSAGE:string = "It is sunny out today";
let isSunny:boolean = true;
let numberSunnyDays:number = 1;

console.log(SUNNY_DAY_MESSAGE);

function hello(name:string, isSunny:boolean) {
    if (!isSunny) return "Hi, "+name;
    return `Hi, ${name}! ${SUNNY_DAY_MESSAGE}`;
}

console.log(hello("Michael", isSunny));

/**
 * 
 * @param isSunny If *today* it is sunny or not.
 * @param numberOfSunnyDays How many days in a row it has been sunny.
 * @returns Return a string saying whether it's sunny or not. If it's sunny, string declares how many days it has been sunny for.
 */
function sunny_day_message(isSunny:boolean, numberOfSunnyDays:number):string {
    if (isSunny) return `${SUNNY_DAY_MESSAGE}! There ha${(numberOfSunnyDays===1)?'s':'ve'} been ${numberOfSunnyDays} sunny day${(numberOfSunnyDays===1)?'':'s'}!`;
    return 'It is not sunny out today :(';
}

console.log('\n'+sunny_day_message(isSunny, numberSunnyDays));
console.log('\n'+sunny_day_message(true, 5));
