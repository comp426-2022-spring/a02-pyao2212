import defaultExport from "./modules/coin.mjs";
import process from "process";

let args = process.argv;
let num;
if (args.length <= 2) {
    num = 1;
}
else {
    let val = args[2].slice(9);
    num = parseInt(val);
    if (isNaN(num)) {
        num = 1;
    }
}
console.log(defaultExport.coinFlips(num));