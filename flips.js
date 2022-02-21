import defaultExport from "./modules/coin.mjs";
const process = import("process");
let args = process.argv;
let num;
if (args.length <= 2) {
    num = 1;
}
else {
    num = args[2];
}
let func = defaultExport.coinFlips;
console.log(func(num));