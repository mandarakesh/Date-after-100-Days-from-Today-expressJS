const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let endDays = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${endDays.getDate()}/${endDays.getMonth() + 1}/${endDays.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
