
# clone instrumentation tool
cd ..
#git clone https://github.com/cs-24-pt-10-01/Using-acorn-to-decorate-JS.git

# instrumenting
node Using-acorn-to-decorate-JS/decorateFolder.js ./HotSpotBenchmarkJS

cd HotSpotBenchmark
npm install koffi # koffi required by rapl.js

# run
node main.js

