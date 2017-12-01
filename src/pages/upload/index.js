class UploadController {
  constructor($location, $timeout, userService) {
    if (!userService.getUser()) {
      $location.path("/")
    }
    this.$location = $location;
    this.$timeout = $timeout;

    this.userService = userService;
    this.tab = "upload"
    this.loading = false;
  }

  logout() {
    this.userService.logout();
    this.$location.path("/")
  }

  upload() {
    this.loading = true;

    let self = this;
    this.$timeout(function() {
      self.$location.path("/results")
    }, 3000)
  }
}

module.exports = {
  name: "uploadController",
  controller: UploadController,
  template: require("./template.pug"),
  route: "/upload"
}
