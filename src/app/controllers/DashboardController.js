const { User } = require("../models");

class Dashboard {
  async index(req, res) {
    const providers = await User.findAll({
      attributes: ["name", "email", "provider"],
      where: { provider: true },
      raw: true
    });
    res.render("dashboard", { providers });
  }
}

module.exports = new Dashboard();
