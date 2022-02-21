import defaultExport from "./modules/coin.mjs";
const process = import("process");
let num;
if (process.argv.length <= 2) {
    num = 1;
}
else {
    num = process.argv[2];
}
let func = defaultExport.coinFlips;
console.log(func(num));