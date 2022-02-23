const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");
const apiRoutes = require("./routes/api.router");

//Default setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

//Engine setup
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

//Routes setup
app.use(apiRoutes);

app.use((req, res) => {
    res.render('notFound');
})

app.listen(5200, () => {
    console.log("Server is working");
})