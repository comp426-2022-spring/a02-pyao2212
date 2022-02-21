import coinFlips from "./modules/coin.mjs";
const process = require("process");
let num;
if (process.argv.length <= 2) {
    num = 1;
}
else {
    num = process.argv[2];
}
console.log(coinFlips(num));