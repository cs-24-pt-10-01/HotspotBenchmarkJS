const rapl = require('./rapl.js');

rapl.start("full");

const fs = require('fs');

// Inputs
let quickSortInput = fs.readFileSync("ToBeSorted.json").toString();
quickSortInput = quickSortInput.replace("[", "").replace("]", "").split(",").map(Number);

let mergeSortInput = fs.readFileSync("ToBeSorted.json").toString();
mergeSortInput = mergeSortInput.replace("[", "").replace("]", "").split(",").map(Number);

const fibInput = 47;
const nbodyInput = 50000000;

// Benchmarks
const fib = require('./Fib.js').fib;
const nbody = require('./Nbody.js').N_Body;
const mergeSortInPlaceFast = require('./MergeSort.js').mergeSortInPlaceFast;
const sort = require('./QuickSort.js').sort;

// Running benchmarks
const fibOutput = fib(fibInput);
const nbodyOutput = nbody(nbodyInput);
// MergeSort and QuickSort are in place
sort(quickSortInput, (a, b) => a < b);
mergeSortInPlaceFast(mergeSortInput);

// printing output
console.log("fib : ", fibOutput);
console.log("nbody : ", nbodyOutput);
console.log("mergeSort : ", mergeSortInput);
console.log("quickSort : ", quickSortInput);

rapl.stop("full");