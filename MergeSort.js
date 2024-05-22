// test method from Rosetta Code
function mergeSortInPlaceFast(v) {

    let i = 0;
    let length = 25000; //How many times to create a deep clone (30000 was tested to be slower than fib(47))
    let copy = [];

    while (i < length) {
        copy = structuredClone(v); //Create deep clone and override previous value
        i = (i + 1);
    }

    sort(v, 0, v.length, v.slice());

    function sort(v, lo, hi, t) {
        let n = hi - lo;
        if (n <= 1) {
            return;
        }
        let mid = lo + Math.floor(n / 2);
        sort(v, lo, mid, t);
        sort(v, mid, hi, t);
        for (let i = lo; i < hi; i++) {
            t[i] = v[i];
        }
        let i = lo, j = mid;
        for (let k = lo; k < hi; k++) {
            if (i < mid && (j >= hi || t[i] < t[j])) {
                v[k] = t[i++];
            } else {
                v[k] = t[j++];
            }
        }
    }
}

module.exports.mergeSortInPlaceFast = mergeSortInPlaceFast;