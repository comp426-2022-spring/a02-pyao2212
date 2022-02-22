import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const call = args.call || "backup";
console.log(call);
if (!(call == "tails" ) && !(call == "heads")) {
    throw "Error \n Usage: node guess-flip --call=[heads|tails]";
}

const check = defaultExport.coinFlip();
let won = "lose";
if (check == call) {
    won = "win";
}
let result = {
    call: call,
    flip: check,
    result: won
};
console.log(result);