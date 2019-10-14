const { User } = require("../models");

class UserController {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    req.body.avatar = "teste.jpg";
    const user = await User.create(req.body);
    console.log(user);

    return res.redirect("/");
  }
}

module.exports = new UserController();
