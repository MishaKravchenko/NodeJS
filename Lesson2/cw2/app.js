const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = [];

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/users", ({query}, res) => {
    let filteredByAgeCity = [...users];

    if (query) {
        if (query.age) {
            filteredByAgeCity = filteredByAgeCity.filter(user => user.age === query.age);
            console.log(filteredByAgeCity);
        }
        if (query.city) {
            filteredByAgeCity = filteredByAgeCity.filter(user => user.city === query.city);
            console.log(filteredByAgeCity);
        }
        res.render('users', {users: filteredByAgeCity});
    } else {
        res.render('users', {users});
    }
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params

    if (users[id - 1]) {
        res.render('user', {user: users[id - 1]});
    } else {
        res.render('notFound');
    }
})

app.get("/signIn", (req, res) => {
    res.render("signIn");
})

app.get('/deleteUser/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter(user => user.id.toString() !== id);
    res.redirect('/users');

});

app.post("/signIn", (req, res) => {
    const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

    if (user) {
        res.redirect(`/users/${user.id}`);
        console.log(user.id);
        console.log(users);

    } else {
        res.render('wrongEmail');
    }
})

let id = 0;

app.post("/login", ({body}, res) => {
    const user = users.find(user => user.email === body.email);

    if (user) {
        res.redirect("/notFound");
    } else {
        users.push({...body, id: ++id});
        res.redirect('/users');
    }
})

app.use((req, res) => {
    res.render('notFound');
})

app.listen(5200, () => {
    console.log("Server is working");
})