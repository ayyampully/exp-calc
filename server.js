const express = require("express");
const app = express();
const port = 3030;
app.use("/", express.static(__dirname + "/src"));

app.listen(port);
console.log(`Server running at localhost:${port}`);
