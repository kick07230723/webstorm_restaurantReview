/**
 * Created by hoyeo on 2017-04-10.
 */


function add(){

    var result = 0

    for(var i=0 , len=arguments.length; i<len; i++){

        result += arguments[i]


    }
    return result
}


console.log(add(1,2,3,4,5, function (x,y) {
    
}))
// doA(100)
// doA(100,200)
// doA(100,200,300)


// function doA(num1,num2){
//
//     console.log("aaaaaaaaaaaa")
//     console.log(num1)
//     console.log(num2)
//     console.log("bbbbbbbbbbbb")
//
// }
