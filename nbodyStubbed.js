const rapl = require('rapl');

function stubbed(input) {
    return 0;
}

rapl.start("nbodyStubbed");

const fs = require('fs');

// Inputs
let toBeSorted = fs.readFileSync("ToBeSorted.json").toString();
toBeSorted = toBeSorted.replace("[", "").replace("]", "").split(",").map(Number);

const fibInput = 47;
const nbodyInput = 50000000;

// Benchmarks
const fib = require('./Fib.js').fib;
const nbody = require('./Nbody.js').N_Body;
const mergeSortInPlaceFast = require('./MergeSort.js').mergeSortInPlaceFast;
const sort = require('./QuickSort.js').sort;

// Running benchmarks
const fibOutput = fib(fibInput);
const nbodyOutput = stubbed(nbodyInput);
const quickSortOutput = sort(toBeSorted, (a, b) => a < b);
// MergeSort is in place
mergeSortInPlaceFast(toBeSorted);

// printing output
console.log("fib : ", fibOutput);
console.log("nbody : ", nbodyOutput);
console.log("mergeSort : ", toBeSorted);
console.log("quickSort : ", quickSortOutput);

rapl.stop("nbodyStubbed");