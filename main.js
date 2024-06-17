const fs = require('fs');
const { LongestSequenceHailstone } = require('./Hailstone-Sequence.js');

// Inputs
let mergeSortInput = fs.readFileSync("ToBeSorted.json").toString();
mergeSortInput = mergeSortInput.replace("[", "").replace("]", "").split(",").map(Number);

let quickSortInput = fs.readFileSync("ToBeSorted.json").toString();
quickSortInput = quickSortInput.replace("[", "").replace("]", "").split(",").map(Number);

const fibInput = 47;
const nbodyInput = 50000000;
const sieveInput = 100000;
const hailstoneInput = 100000;

// Benchmarks
const fib = require('./Fib.js').fib;
const nbody = require('./Nbody.js').N_Body;
const mergeSortInPlaceFast = require('./MergeSort.js').mergeSortInPlaceFast;
const sort = require('./QuickSort.js').sort;
const eratosthenes = require('./sieve-of-eratosthenes-2.js').eratosthenes;
const hailstone = require('./Hailstone-Sequence.js').LongestSequenceHailstone;

// Running benchmarks
const fibOutput = fib(fibInput);
const nbodyOutput = nbody(nbodyInput);
// quickSort and mergeSort are in place
sort(quickSortInput, (a, b) => a < b);
mergeSortInPlaceFast(mergeSortInput);
const sieveOutput = eratosthenes(sieveInput);
const hailstoneOutput = LongestSequenceHailstone(hailstoneInput);

// printing output
console.log("fib : ", fibOutput);
console.log("nbody : ", nbodyOutput);
console.log("mergeSort : ", mergeSortInput);
console.log("quickSort : ", quickSortInput);
console.log("sieve : ", sieveOutput);
console.log("hailstone : ", hailstoneOutput);
