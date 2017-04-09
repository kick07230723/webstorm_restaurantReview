/**
 * Created by hoyeon on 2017-04-09.
 */


var btnO = document.getElementById("btn");
var show = document.getElementById("pick");

var uln = Math.round(Math.random()*4 +1);

console.log(uln);

            var k =0;
console.log(k);
    btnO.addEventListener('click', function () {

            k++;
            if(k == uln){
                console.log("happy")
                show.innerHTML = "<img src = 'b.jpg' >"
            }else{
                show.innerHTML = "<img src = 'a.jpg' >"
            }
            console.log(k);
        }
        )