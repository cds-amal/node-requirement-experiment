const fs = require("node:fs");
const assert = require("node:assert/strict");

//initialize load counter
global.loadCounter = 0;

function getDataWithFS() {
  //run code to simulate require
  const data = fs.readFileSync("data/sample.js").toString();
  eval(data); //side-effect: incr loadCounter
}

function getDataWithRequire() {
  require("./data/sample.js"); //side-effect: incr loadCounter
}

function main(loop) {
  for (let i = 0; i < loop; i++) {
    getDataWithRequire();
    getDataWithFS();
  }
}


if (require.main === module) {
  const loop = 10;
  main(loop);
  assert.equal(
    global.loadCounter,
    loop + 1,
    `Expected ${loop + 1} reads`
  );
  console.log("loop:", loop);
  console.log("total file reads:", global.loadCounter);
  console.log(`require loads    : 1x`);
  console.log(`non-require loads: ${global.loadCounter - 1}x`);
}
