function drawAnyPizza(length, width) {
    var pizza = ' ';
    var bottom = '|';
    for (var i = 0; i < width; i++) {
        pizza += '_';
        bottom += '_';
    }
    pizza += '\n'; // Finish off top
    for (var j = 0; j < length - 1; j++) { // Rando generate middle portions
        var middle = '|';
        for (var i = 0; i < width; i++) {
            var toppingNum = Math.round((Math.random() * 15)); //**( Math.floor(Math.random()*23) ) ) *111);
            var topping = '';
            switch (toppingNum) {
                case 0:
                    topping = ' ';
                    break;
                case 1:
                    topping = '.';
                    break;
                case 2:
                    topping = 'o';
                    break;
                case 3:
                    topping = 'O';
                    break;
                case 4:
                    topping = '(';
                    break;
                case 5:
                    topping = ')';
                    break;
                case 6:
                    topping = '*';
                    break;
                default:
                    topping = ' ';
                    break;
            }
            middle += topping; //Math.floor(Math.random()*2)?'.':' ';
        }
        middle += '|\n';
        pizza += middle;
    }
    bottom += '|';
    pizza += bottom;
    return pizza;
}
/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  _
 |_|
 ​
 */
function drawSmallPizzaSlice() {
    return " _ \n" +
        "|_|";
    //    return drawAnyPizza(1,1);
}
/**
 * Draw a length 1 width 2 pizza slice
 * Medium - Length 1 width 2:
  
   __
  |__|
 *
 */
function drawMediumPizzaSlice() {
    return " __ \n" +
        "|__|";
    //    return drawAnyPizza(1,2);
}
/**
 *
 * Draws a length 2 width 2 pizza slice
 * @returns {string}
 * Length 2 width 2:
  
   __
  | .|
  |__|
 ​
 */
function drawLargePizzaSlice() {
    return " __ \n" +
        "| .|\n" +
        "|__|";
    //    return drawAnyPizza(2,2);
}
/**
 * @param {string} sliceSize
 *                 size of slice - "small", "medium", "large"
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 *
 * Small - Length 1 width 1:
   -
  |_|
 ​
 *
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 ​
 *
 * Large - Length 2 width 2:
 *
  
   --
  | .|
  |__|
 ​
 */
function drawAnyPizzaSlice(sliceSize) {
    switch (sliceSize.toLowerCase()) {
        case "small":
            return drawSmallPizzaSlice();
            break;
        case "medium":
            return drawMediumPizzaSlice();
            break;
        case "large":
            return drawLargePizzaSlice();
            break;
        default:
            return '';
    }
}
console.log(drawSmallPizzaSlice());
console.log(drawMediumPizzaSlice());
console.log(drawLargePizzaSlice());
console.log('\n' + drawAnyPizzaSlice("laRGe"));
console.log(drawAnyPizzaSlice("medium"));
console.log(drawAnyPizzaSlice("small"));
console.log(drawAnyPizza(5, 10));
