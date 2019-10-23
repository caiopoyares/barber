class ErrorController {
  index(req, res) {
    return res.render("404");
  }
}

module.exports = new ErrorController();
