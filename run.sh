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
done