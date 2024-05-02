const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

app.use(express.static(path.join(__dirname, 'main')));
app.use("/assets", express.static('assets'));
app.use("/layouts", express.static('layouts'));
app.use(favicon(__dirname + '/assets/images/icons/favicon/favicon.ico')); 

// app.get('/', async(req, res) => {
//     res.sendFile(path.join(__dirname, 'main', 'index.html'));
// });

app.listen(8080, () => {
  console.log("Server successfully running on port 8080");
});