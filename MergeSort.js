// test method from Rosetta Code
function mergeSortInPlaceFast(v) {
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