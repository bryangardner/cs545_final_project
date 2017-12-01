class ResultsController {
  constructor($location, $timeout, userService) {
    if (!userService.getUser()) {
      $location.path("/")
    }
    console.log("here")
    this.$location = $location;
    this.$timeout = $timeout;

    this.userService = userService;

    this.section = "CS Core"

    let rand = _.random(0,1)
    if (rand == 0) {
      this.status = {
        icon: "warning",
        message: "You are not ready to graduate!",
        requirements: [
          {section: "Humanities", reqs: [
            {name: "CAL 103", completed: true, selected: "CAL 103", message: "You are required to take CAL 103"},
            {name: "CAL 105", completed: true, selected: "CAL 105", message: "You are required to take CAL 105"},
            {name: "100/200 Level Humanities", completed: true, selected: "BT 244", message: "You are required to take a 100/200 level humanities course."},
            {name: "300 Level Humanities", completed: true, selected: "HSS 350", message: "You are required to take a 300 level humanities course."},
            {name: "Humanities Elective I", completed: false, selected: "", message: "You are required to take a general humanities course.", recommendations: ["HPL 324", "HAR 280", "HSS 321", "HAR 380"]},
            {name: "Humanities Elective II", completed: true, selected: "HLI 118", message: "You are required to take a general humanities course."},
            {name: "Humanities Elective III", completed: true, selected: "HPL 480", message: "You are required to take a general humanities course."}
          ]},
          {section: "Math", reqs: [
            {name: "MA 121", completed: true, selected: "MA 121", message: "You are required to take MA 121."},
            {name: "MA 122", completed: true, selected: "MA 122", message: "You are required to take MA 122."},
            {name: "MA 123", completed: false, selected: "MA 123", message: "You are required to take MA 123."},
            {name: "MA 124", completed: false, selected: "MA 124", message: "You are required to take MA 124."},
            {name: "MA 222", completed: false, selected: "MA 222", message: "You are required to take MA 222"},
            {name: "MA 331", completed: false, selected: "MA 331", message: "You are requierd to take MA 331"}
          ]},
          {section: "Proj Mgt", reqs: [
            {name: "BT 353", completed: true, selected: "BT 353", message: "You are required to take BT 353"}
          ]},
          {section: "PE", reqs: [
            {name: "PE 200 I", completed: true, selected: "PE 200", message: "You are required to complete 4 PEs."},
            {name: "PE 200 II", completed: true, selected: "PE 200", message: "You are required to complete 4 PEs"},
            {name: "PE 200 III", completed: false, selected: "", message: "You are required to complete 4 PEs", recommendations: ["PE 200 - Softball", "PE 200 - Swimming"]},
            {name: "PE 200 IV", completed: false, selected: "", message: "You are required to complete 4 PEs", recommendations: ["PE 200 - Soccer", "PE 200 - Archery"]},
          ]},
          {section: "CS Core", reqs: [
            {name: "CS 115 or CS 181", completed: true, selected: "CS 115", message: "You are required to complete CS 115 or CS 181"},
            {name: "CS 146", completed: true, selected: "CS 146", message: "You are required to complete CS 146."},
            {name: "CS 135", completed: true, selected: "CS 135", message: "You are required to complete CS 135."},
            {name: "CS 284 or CS 182", completed: true, selected: "CS 284", message: "You are required to complete CS 284 or CS 182."},
            {name: "CS 334", completed: true, selected: "CS 334", message: "You are required to complete CS 334."},
            {name: "CS 383", completed: true, selected: "CS 383", message: "You are required to complete CS 383."},
            {name: "CS 385", completed: true, selected: "CS 385", message: "You are required to complete CS 385."},
            {name: "CS 347", completed: true, selected: "CS 347", message: "You are required to complete CS 347."},
            {name: "CS 392", completed: false, selected: "CS 392", message: "You are required to complete CS 392."},
            {name: "CS 496", completed: false, selected: "CS 496", message: "You are required to complete CS 496."},
            {name: "CS 442", completed: false, selected: "CS 442", message: "You are required to complete CS 442."},
            {name: "CS 443", completed: false, selected: "CS 443", message: "You are required to complete CS 443."},
            {name: "CS 511", completed: false, selected: "CS 511", message: "You are required to complete CS 511"},
            {name: "CS 492", completed: false, selected: "CS 492", message: "You are required to complete CS 492."},
            {name: "CS 522 or CS 546 or CS 548", selected: "CS 548", completed: true, message: "You are required to complete CS 522 or CS 546 or CS 548."},
            {name: "CS 306", completed: false, selected: "CS 306", message: "You are required to complete CS 306."},
            {name: "CS 423", completed: false, selected: "CS 423", message: "You are required to complete CS 423."},
            {name: "CS 485", completed: false, selected: "CS 485", message: "You are required to complete CS 485."},
            {name: "CS 424", completed: false, selected: "CS 424", message: "You are required to complete CS 424."},
          ]},
          {section: "Tech Elec", reqs: [
            {name: "Tech Elec 1", selected: "CS 555",  completed: true, message: "You are required to complete 2 technical electives."},
            {name: "Tech Elec 2", selected: "", completed: false, message: "You are required to complete 2 technical electives.", recommendations: ["CS 545", "CS 549", "CS 546"]}
          ]},
          {section: "Soft Dev Elec", reqs: [
            {name: "Software Development Elective", selected: "", completed: false, message: "You are required to complete a software development elective.", recommendations: ["CS 516", "CS 521", "CS 522", "CS 526", "CS 537", "CS 541", "CS 546", "CS 548", "CS 549", "CS 588"]}
          ]},
          {section: "Science/Math", reqs: [
            {name: "Science / Math Elec 1", selected: "", completed: false, message: "You are required to complete 2 science/math electives.", recommendations: ["MA 221"]},
            {name: "Science / Math Elect 2", selected: "", completed: false, message: "You are required to complete 2 scient/math electives.", recommendations: ["PEP 151"]}
          ]}
        ]
      }
    }
    else {
      this.status = {
        icon: "school",
        message: "Congrats! You are on track to graduate!",
        requirements: [
          {section: "Humanities", reqs: [
            {name: "CAL 103", completed: true, selected: "CAL 103", message: "You are required to take CAL 103"},
            {name: "CAL 105", completed: true, selected: "CAL 105", message: "You are required to take CAL 105"},
            {name: "100/200 Level Humanities", completed: true, selected: "BT 244", message: "You are required to take a 100/200 level humanities course."},
            {name: "300 Level Humanities", completed: true, selected: "HSS 350", message: "You are required to take a 300 level humanities course."},
            {name: "Humanities Elective I", completed: false, selected: "", message: "You are required to take a general humanities course.", recommendations: ["HPL 324", "HAR 280", "HSS 321", "HAR 380"]},
            {name: "Humanities Elective II", completed: true, selected: "HLI 118", message: "You are required to take a general humanities course."},
            {name: "Humanities Elective III", completed: true, selected: "HPL 480", message: "You are required to take a general humanities course."}
          ]},
          {section: "Math", reqs: [
            {name: "MA 121", completed: true, selected: "MA 121", message: "You are required to take MA 121."},
            {name: "MA 122", completed: true, selected: "MA 122", message: "You are required to take MA 122."},
            {name: "MA 123", completed: true, selected: "MA 123", message: "You are required to take MA 123."},
            {name: "MA 124", completed: true, selected: "MA 124", message: "You are required to take MA 124."},
            {name: "MA 222", completed: true, selected: "MA 222", message: "You are required to take MA 222"},
            {name: "MA 331", completed: false, selected: "MA 331", message: "You are requierd to take MA 331"}
          ]},
          {section: "Proj Mgt", reqs: [
            {name: "BT 353", completed: true, selected: "BT 353", message: "You are required to take BT 353"}
          ]},
          {section: "PE", reqs: [
            {name: "PE 200 I", completed: true, selected: "PE 200", message: "You are required to complete 4 PEs."},
            {name: "PE 200 II", completed: true, selected: "PE 200", message: "You are required to complete 4 PEs"},
            {name: "PE 200 III", completed: true, selected: "PE 200", message: "You are required to complete 4 PEs"},
            {name: "PE 200 IV", completed: false, selected: "", message: "You are required to complete 4 PEs", recommendations: ["PE 200 - Soccer", "PE 200 - Archery"]},
          ]},
          {section: "CS Core", reqs: [
            {name: "CS 115 or CS 181", completed: true, selected: "CS 115", message: "You are required to complete CS 115 or CS 181"},
            {name: "CS 146", completed: true, selected: "CS 146", message: "You are required to complete CS 146."},
            {name: "CS 135", completed: true, selected: "CS 135", message: "You are required to complete CS 135."},
            {name: "CS 284 or CS 182", completed: true, selected: "CS 284", message: "You are required to complete CS 284 or CS 182."},
            {name: "CS 334", completed: true, selected: "CS 334", message: "You are required to complete CS 334."},
            {name: "CS 383", completed: true, selected: "CS 383", message: "You are required to complete CS 383."},
            {name: "CS 385", completed: true, selected: "CS 385", message: "You are required to complete CS 385."},
            {name: "CS 347", completed: true, selected: "CS 347", message: "You are required to complete CS 347."},
            {name: "CS 392", completed: true, selected: "CS 392", message: "You are required to complete CS 392."},
            {name: "CS 496", completed: true, selected: "CS 496", message: "You are required to complete CS 496."},
            {name: "CS 442", completed: true, selected: "CS 442", message: "You are required to complete CS 442."},
            {name: "CS 443", completed: true, selected: "CS 443", message: "You are required to complete CS 443."},
            {name: "CS 511", completed: true, selected: "CS 511", message: "You are required to complete CS 511"},
            {name: "CS 492", completed: false, selected: "CS 492", message: "You are required to complete CS 492."},
            {name: "CS 522 or CS 546 or CS 548", selected: "CS 548", completed: true, message: "You are required to complete CS 522 or CS 546 or CS 548."},
            {name: "CS 306", completed: true, selected: "CS 306", message: "You are required to complete CS 306."},
            {name: "CS 423", completed: true, selected: "CS 423", message: "You are required to complete CS 423."},
            {name: "CS 485", completed: true, selected: "CS 485", message: "You are required to complete CS 485."},
            {name: "CS 424", completed: false, selected: "CS 424", message: "You are required to complete CS 424."},
          ]},
          {section: "Tech Elec", reqs: [
            {name: "Tech Elec 1", selected: "CS 555",  completed: true, message: "You are required to complete 2 technical electives."},
            {name: "Tech Elec 2", selected: "", completed: false, message: "You are required to complete 2 technical electives.", recommendations: ["CS 545", "CS 549", "CS 546"]}
          ]},
          {section: "Soft Dev Elec", reqs: [
            {name: "Software Development Elective", selected: "", completed: false, message: "You are required to complete a software development elective.", recommendations: ["CS 516", "CS 521", "CS 522", "CS 526", "CS 537", "CS 541", "CS 546", "CS 548", "CS 549", "CS 588"]}
          ]},
          {section: "Science/Math", reqs: [
            {name: "Science / Math Elec 1", selected: "MA 221", completed: true, message: "You are required to complete 2 science/math electives."},
            {name: "Science / Math Elect 2", selected: "", completed: false, message: "You are required to complete 2 scient/math electives.", recommendations: ["PEP 151"]}
          ]}
        ]
      }
    }
  }

  getCompletionStatus(requirement) {
    return _.reduce(requirement.reqs, (prev, curr) => {
      if (prev == "incomplete") {
        return prev;
      }

      if (curr.completed == false && !curr.selected) {
        return "incomplete"
      }

      if (prev == "pending") {
        return prev;
      }

      if (curr.completed == false && curr.selected) {
        return "pending";
      }

      return prev;
    }, "complete")
  }

  checkAllScheduled() {
    let all = _.reduce(this.status.requirements, (prev, section) => {
      return prev && _.reduce(section.reqs, (p, req) => {
        if (!req.selected) {
          return false;
        }
        else {
          return p && true
        }
      }, true)
    }, true)
    console.log(all)
    return all;
  }

  logout() {
    this.userService.logout();
    this.$location.path("/")
  }

  generate() {
    alert("Prototype completed..")
  }
}

module.exports = {
  name: "resultsController",
  controller: ResultsController,
  template: require("./template.pug"),
  route: "/results"
}
