const users = require("../db/users");
class SignInController {
    renderSignInPage(req, res) {
        res.render("signIn");
    }

    renderSingleUserPage(req, res) {
        const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

        if (user) {
            res.redirect(`/users/${user.id}`);
        } else {
            res.render('wrongEmail');
        }
    }
}

module.exports = new SignInController();