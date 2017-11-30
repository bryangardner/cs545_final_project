class HomeController {
  constructor($location) {
    this.$location = $location

    this.username = "";
    this.password = "";

    this.missingUsername = false;
    this.missingPassword = false
  }

  login() {
    if (this.username && this.password) {
      $("body").removeClass("modal-open")
      $(".modal-backdrop").remove()
      this.$location.path("/login").search({username: this.username})
    }

    if (!this.username) {
      this.missingUsername = true
    }
    else {
      this.missingUsername = false
    }

    if (!this.password) {
      this.missingPassword = true
    }
    else {
      this.missingPassword = false
    }
  }
}

module.exports = {
  name: "homeController",
  controller: HomeController,
  template: require("./template.pug"),
  route: "/"
}
