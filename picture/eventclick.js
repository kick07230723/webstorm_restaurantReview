/**
 * Created by hoyeo on 2017-04-09.
 */
var arr = document.getElementsByTagName("img")

var clickImg = document.getElementsByClassName("picture")

for (var i=0;arr.length >=i;i++){

    arr[i].addEventListener("click" , function () {

        clickImg[0].innerHTML = "<img src = " + this.src + '>'

    })

}