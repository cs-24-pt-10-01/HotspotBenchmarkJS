const fs = require('fs');
const { Worker } = require('worker_threads');

const fibInput = 47;

// Running benchmarks using workers
const fibWorker = new Worker('./Fib.js', { workerData: fibInput });
//const nbodyWorker = new Worker('./Nbody.js', { workerData: nbodyInput });
//const mergeSortWorker = new Worker('./MergeSort.js', { workerData: mergeSortInput });
//const quickSortWorker = new Worker('./QuickSort.js', { workerData: quickSortInput });

// Listening for messages from workers
fibWorker.once('message', fibOutput => {
    console.log("fib : ", fibOutput);
});

/*
nbodyWorker.once('message', nbodyOutput => {
    console.log("nbody : ", nbodyOutput);
});

mergeSortWorker.once('message', mergeSortOutput => {
    console.log("mergeSort : ", mergeSortOutput);
});

quickSortWorker.once('message', quickSortOutput => {
    console.log("quickSort : ", quickSortOutput);
});
*/

// Waiting for workers to finish
fibWorker.on('exit', () => {
    console.log("fib worker has finished");
});

// Infinite loop to keep the main thread alive
//setInterval(() => { }, 1000);