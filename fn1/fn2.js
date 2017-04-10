/**
 * Created by hoyeo on 2017-04-10.
 */

function fac(n) {
    if(n>1)
    {
        return n*fac(n-1)
    }
    else{

        return 1;
    }

}

console.log(fac(3))


