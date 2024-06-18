npm install koffi

for i in {1..10}
do
    # running full version (no stubbing)
    node ./main.js

    # running the different stubbed versions
    node ./fibStubbed.js
    node ./mergeSortStubbed.js
    node ./nbodyStubbed.js
    node ./quickSortStubbed.js
    node ./spectralNormStubbed.js
    node ./sieveStubbed.js
    node ./nQueensStubbed.js
    node ./hailstoneStubbed.js
done