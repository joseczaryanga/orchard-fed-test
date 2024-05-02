const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const directory = `${__dirname}`;

app.use(express.static(path.join(__dirname, 'pages')));
app.use("/assets", express.static('assets'));
app.use("/styles", express.static('styles'));
app.use("/components", express.static('components'));
app.use("/services", express.static('services'));
app.use(favicon(directory + '/assets/images/icons/favicon/favicon.ico')); 

// This will take a sample route to the project.
// app.get('/', (req, res) => {
//     res.sendFile(directory, 'index.html');
// });

app.listen(8080, () => {
  console.log("Server successfully running on port 8080");
});
