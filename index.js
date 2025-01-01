const express = require("express");
const EventEmmiter = require("events");

const event = new EventEmmiter();

let count = 0;

event.on("countApi", () => {
  count++;
  console.log(count);
});

const app = express();

app.get("/", (req, res) => {
  res.send("api called");
  event.emit("countApi");
});

app.get("/search", (req, res) => {
  res.send("search api called");
  event.emit("countApi");
});

app.get("/update", (req, res) => {
  res.send("update api called");
});

app.listen("5000");
