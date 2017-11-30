require("bootstrap")
require("bootstrap/dist/css/bootstrap.min.css")
const angular = require("angular")

const app = angular.module("myStudyPlan", [require("angular-route")]);

const pages = [
  require("./home")
]

for (let i = 0; i < pages.length; i++) {
  let page = pages[i];
  app.controller(page.name, page.controller)
}

app.controller("mainController", ($scope) => {
  $scope.hi = "asdf"
})

app.config(($routeProvider, $locationProvider) => {
  for (let i = 0; i < pages.length; i++) {
    let page = pages[i]
    $routeProvider.when(page.route, {
      template: page.template,
      controller: page.name
    })
  }
  console.log($routeProvider)
})
