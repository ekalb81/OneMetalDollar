"use strict";
const axios = require("axios");

const hangOn = () =>
  new Promise(function (resolve) {
    setTimeout(() => resolve("done"), 5000);
  });

(async () => {
  console.time();
  for (let i = 0; i < 3; i++) {
    console.log(i);
    const res = await axios.get("https://postman-echo.com/delay/5");
    console.log(res.status, res.data);
    console.timeLog();
  }
  console.timeLog();
  console.timeEnd();
  console.log("done done");
})();