import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const num = args.number || 1;

let flips = defaultExport.coinFlips(num);
console.log(flips);
console.log(defaultExport.countFlips(flips));


