/**
 * Created by hoyeo on 2017-04-09.
 */

var fnum = document.getElementById("fnum");
var bnum = document.getElementById("bnum");
var what = document.getElementById("select");
var rst = document.getElementById("result");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {


    switch (what.value) {
        case '+':
            rst.value = parseInt(fnum.value) + parseInt(bnum.value);
            break;
        case '-':
            rst.value = fnum.value - bnum.value;
            break;
        case '*':
            rst.value = fnum.value * bnum.value;
            break;
        case '/':
            rst.value = fnum.value / bnum.value;
            break

    }
    console.log(rst.value);
    rst.innerText = rst.value;

});