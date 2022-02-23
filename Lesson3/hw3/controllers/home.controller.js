class HomeController {
    renderHomePage(req,res){
        res.render("home");
    }
}

module.exports = new HomeController();