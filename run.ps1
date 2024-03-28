
# clone instrumentation tool
cd ..
git clone https://github.com/cs-24-pt-10-01/Using-acorn-to-decorate-JS.git

# install dependencies
cd Using-acorn-to-decorate-JS
npm install package.json
cd ..

# instrumenting
node Using-acorn-to-decorate-JS/decorateFolder.js ./HotSpotBenchmarkJS


# removing instrumentation tool
remove-item Using-acorn-to-decorate-JS/ -recurse

cd HotSpotBenchmarkJS

# run
node main.js