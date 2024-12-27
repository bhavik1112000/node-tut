const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("file");

app.post("/upload", upload, (req, res) => {
  res.send("Upload");
});

app.listen("5000");
