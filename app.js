const date = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let new_date = new Date();
  new_date = date(new_date, 100);
  response.send(
    `${new_date.getDate()}/${new_date.getMonth() + 1}/${new_date.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
