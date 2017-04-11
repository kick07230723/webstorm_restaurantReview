/**
 * Created by hoyeon on 2017-04-11.
 */

var calculator=(function () {

    var total=0;

    function  add(num1){
        console.log("add")
        total +=num1;
        return total;
    }

    function  sub(num1){
        console.log("minus")
        total -=num1;
        return total;

    }

    return {plus:add, minus:sub }
})();

console.log(calculator.plus(11));
console.log(calculator.minus(11));