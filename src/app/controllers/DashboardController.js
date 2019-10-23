const { User } = require("../models");

class Dashboard {
  async index(req, res) {
    const providers = await User.findAll({
      attributes: ["name", "email", "provider", "avatar", "id"],
      where: { provider: true },
      raw: true
    });
    console.log(providers);
    res.render("dashboard", { providers });
  }
}

module.exports = new Dashboard();
