const { User } = require("../models");

class UserController {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    const { filename: avatar } = req.file;
    const user = await User.create({ ...req.body, avatar });
    console.log(user);

    return res.redirect("/");
  }
}

module.exports = new UserController();
