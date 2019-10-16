const { User } = require("../models");

class UserController {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    if (!req.file) {
      req.flash("error", "Necessário adicionar uma foto de avatar.");
      res.redirect("/signup");
    }
    const { filename: avatar } = req.file;

    if (!name) {
      req.flash("error", "Por favor, adicione seu nome.");
      res.redirect("/signup");
    }
    if (!email) {
      req.flash("error", "E-mail necessário para cadastro.");
      res.redirect("/signup");
    }
    if (!password) {
      req.flash("error", "Adicione uma senha.");
      res.redirect("/signup");
    }

    await User.create({ ...req.body, avatar });

    return res.redirect("/");
  }
}

module.exports = new UserController();
