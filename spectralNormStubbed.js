const fs = require('fs');

function stubbed(input){
    return 0;
}

// Inputs
let mergeSortInput = fs.readFileSync("ToBeSorted.json").toString();
mergeSortInput = mergeSortInput.replace("[", "").replace("]", "").split(",").map(Number);

let quickSortInput = fs.readFileSync("ToBeSorted.json").toString();
quickSortInput = quickSortInput.replace("[", "").replace("]", "").split(",").map(Number);

const fibInput = 47;
const nbodyInput = 50000000;
const sieveInput = 100000;
const hailstoneInput = 100000;
const nqueenInput = 10;
const spectralInput = 7500;

// Benchmarks
const fib = require('./Fib.js').fib;
const nbody = require('./Nbody.js').N_Body;
const mergeSortInPlaceFast = require('./MergeSort.js').mergeSortInPlaceFast;
const sort = require('./QuickSort.js').sort;
const eratosthenes = require('./sieve-of-eratosthenes-2.js').eratosthenes;
const hailstone = require('./Hailstone-Sequence.js').LongestSequenceHailstone;
const nqueen = require('./N-Queens.js').queenPuzzle;
const spectral = require('./Spectral-norm.js').mainThread;

// Running benchmarks
const fibOutput = fib(fibInput);
const nbodyOutput = nbody(nbodyInput);
// quickSort and mergeSort are in place
sort(quickSortInput, (a, b) => a < b);
mergeSortInPlaceFast(mergeSortInput);
const sieveOutput = eratosthenes(sieveInput);
const hailstoneOutput = hailstone(hailstoneInput);
const nqueenOutput = nqueen(nqueenInput, nqueenInput); //N-Queen requires a grid size as input. 'N x N' is used here but 'N x M' can also be used.
const spectralOutput = stubbed(spectralInput);

// printing output
console.log("fib : ", fibOutput);
console.log("nbody : ", nbodyOutput);
console.log("mergeSort : ", mergeSortInput);
console.log("quickSort : ", quickSortInput);
console.log("sieve : ", sieveOutput);
console.log("hailstone : ", hailstoneOutput);
console.log("nqueen : ", nqueenOutput);
console.log("spectral : ", spectralOutput);
