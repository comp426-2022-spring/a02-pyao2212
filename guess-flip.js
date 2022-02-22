import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const call = args.call || "backup";
if (call == "backup") {
    console.error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
} else if (call != "heads" && call != "tails") {
    console.error("Usage: node guess-flip --call=[heads|tails]")
} else {
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
}