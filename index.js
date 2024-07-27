const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});
app.get('/home', (req, res) => {
    res.render('home', { title: 'Home' });
});



app.use(express.static("public"));

app.set("view engine", "ejs");

// Listening port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  