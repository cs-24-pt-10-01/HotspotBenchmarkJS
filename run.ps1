
# clone instrumentation tool
cd ..
git clone https://github.com/cs-24-pt-10-01/Using-acorn-to-decorate-JS.git

# instrumenting
node Using-acorn-to-decorate-JS/decorateFolder.js ./HotSpotBenchmarkJS

cd HotSpotBenchmarkJS

# run
node main.js