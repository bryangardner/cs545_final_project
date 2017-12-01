require("bootstrap")
require("bootstrap/dist/css/bootstrap.min.css")
require("./style.css")
window._ = require("lodash")

const angular = require("angular")

window.$ = require("jquery")

const app = angular.module("myStudyPlan", [require("angular-route"), require("angular-animate")]);

const pages = [
  require("./pages/home"),
  require("./pages/upload"),
  require("./pages/results")
]

for (let i = 0; i < pages.length; i++) {
  let page = pages[i];
  app.controller(page.name, page.controller)
}

app.controller("mainController", function($scope) {
})

app.config(($routeProvider, $locationProvider) => {
  for (let i = 0; i < pages.length; i++) {
    let page = pages[i]
    $routeProvider.when(page.route, {
      template: page.template,
      controller: page.name
    })
  }

  $routeProvider.otherwise({
    redirectTo: "/"
  })

  $locationProvider.html5Mode(true)
})

app.service("userService", require("./services/UserService"))
app.service("dataService", require("./services/DataService"))
app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                    // or all selected files:
                    // scope.fileread = changeEvent.target.files;
                });
            });
        }
    }
}]);
