const users = require("../db/users");

class LoginController {
    getCreateLoginUser(req, res) {
        res.render("login");
    }

    loginUser({body}, res) {
        const user = users.find(user => user.email === body.email);

        if (user) {
            res.redirect("/notFound");
        } else {
            users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
            res.redirect('/users');
        }
    }
}

module.exports = new LoginController();


