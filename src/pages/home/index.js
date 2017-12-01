class HomeController {
  constructor($location, userService) {
    this.$location = $location

    this.username = "";
    this.password = "";

    this.missingUsername = false;
    this.missingPassword = false;

    this.userService = userService;

    $(".modal").on("shown.bs.modal", function() {
      $(this).find('[autofocus]').focus()
    })
  }

  login() {
    if (this.username && this.password) {
      $("body").removeClass("modal-open")
      $(".modal-backdrop").remove()
      this.userService.setUser(this.username);
      this.$location.path("/upload")
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
