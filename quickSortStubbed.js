const rapl = require('./rapl.js');

function stubbed(input) {
    return input;
}

rapl.start("quickSortStubbed");
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
//const sort = require('./QuickSort.js').sort;

// Running benchmarks
const fibOutput = fib(fibInput);
const nbodyOutput = nbody(nbodyInput);
const quickSortOutput = stubbed(quickSortInput); // stubbed here
// MergeSort is in place
mergeSortInPlaceFast(mergeSortInput);

// printing output
console.log("fib : ", fibOutput);
console.log("nbody : ", nbodyOutput);
console.log("mergeSort : ", mergeSortInput);
console.log("quickSort : ", quickSortOutput);

rapl.stop("quickSortStubbed");
