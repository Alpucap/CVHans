const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menguraikan JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set directory untuk views
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, "public"))); 

// Endpoint
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});
app.get('/home', (req, res) => {
    res.render('index', { title: 'Home' });
});
app.get('/webdev', (req, res) => {
    res.render('webdev', { title: 'My Website Dev Projects' });
});
app.get('/data', (req, res) => {
    res.render('data', { title: 'My Data Projects' });
});
app.get('/appdev', (req, res) => {
    res.render('appdev', { title: 'My App Development Projects' });
});
app.get('/uiux', (req, res) => {
    res.render('uiux', { title: 'My UI/UX Projects' });
});

// Middleware untuk penanganan kesalahan
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Mendengarkan pada port yang ditentukan
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
