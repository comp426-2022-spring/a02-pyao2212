/*import defaultExport from "./modules/coin.mjs";
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
let flips = defaultExport.coinFlips(num);
console.log(flips);
console.log(defaultExport.countFlips(flips));*/
import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const number = args.number || 1;

let flips = coinFlips(number)

console.log(flips);
console.log(countFlips(flips));

