    let users = require("../db/users");

class UserController {
    renderUsers({query},res){
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
    }

    getUserById(req,res) {
        const {id} = req.params

        if (users[id - 1]) {
            res.render('user', {user: users[id - 1]});
        } else {
            res.render('notFound');
        }
    }

    deleteUserById(req,res){
        const {id} = req.params

        users = users.filter(user => user.id !== +id);
        res.redirect('/users');
    }
}


module.exports = new UserController();
