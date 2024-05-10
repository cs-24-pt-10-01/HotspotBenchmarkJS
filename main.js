const fs = require('fs');
const { Worker } = require('worker_threads');

let mergeSortInput = fs.readFileSync("ToBeSorted.json").toString();
mergeSortInput = mergeSortInput.replace("[", "").replace("]", "").split(",").map(Number);

let quickSortInput = fs.readFileSync("ToBeSorted.json").toString();
quickSortInput = quickSortInput.replace("[", "").replace("]", "").split(",").map(Number);

const fibInput = 47;
const nbodyInput = 50000000;

// Running benchmarks using workers
const fibWorker = new Worker('./Fib.js', { workerData: fibInput });
//const nbodyWorker = new Worker('./Nbody.js', { workerData: nbodyInput });
//const mergeSortWorker = new Worker('./MergeSort.js', { workerData: mergeSortInput });
//const quickSortWorker = new Worker('./QuickSort.js', { workerData: quickSortInput });

// Infinite loop to keep the main thread alive
//setInterval(() => { }, 1000);