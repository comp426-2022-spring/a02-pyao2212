import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const num = args.number || 1;

let flips = defaultExport.coinFlips(num);
let sum = defaultExport.countFlips(flips);
if (flips.length == 1) {
    if (sum.heads == 0) {
        delete sum.heads;
    }
    if (sum.tails == 0) {
        delete sum.tails;
    }
}
console.log(flips);
console.log(sum);


