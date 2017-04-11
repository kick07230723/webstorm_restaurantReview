/**
 * Created by hoyeon on 2017-04-11.
 */

function Calculator() {

    this.total =0;
    this.add = function (num) {

        console.log("add");
        this.total +=num;
        return this.total;

    }
}
