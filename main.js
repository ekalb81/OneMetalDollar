"use strict";

const hangOn = () =>
  new Promise(function (resolve) {
    setTimeout(() => resolve("done"), 5000);
  });

(async () => {
  console.time();
  for (let i = 0; i < 3; i++) {
    console.log(await hangOn());
    console.timeLog();
  }
  console.timeLog();
  console.timeEnd();
  console.log("done done");
})();
