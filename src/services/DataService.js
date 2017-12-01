class DataService {
  constructor() {
    this.users = []
  }

  getUser(username) {
    return _.find(
      this.users,
      (user) => user.username.toLowerCase() === username.toLowerCase()
    )
  }

  saveTranscript(username, transcript) {
    let index = _.findIndex(
      this.users,
      (user) => user.username.toLowerCase() === username.toLowerCase()
    )

    if (index > -1) {
      this.users[index].transcripts.push(transcript)
    }
  }

  getTranscripts(username) {
    let user = this.getUser(username)
    if (user) {
      return user.transcripts
    }
    return undefined;
  }

  generateMockTranscript() {
    let mockTranscripts = [
      ["PEP 111", "PEP 112", "PEP 221", "MA 121", "MA 122", "MA 123",
        "MA 124", "MA 222", undefined, "BT 353", "CS 115", "CS 146",
        "CS 135", "CS 284", "CS 334", "CS 383", "CS 385", "CS 347", "CS 392",
        "CS 496", "CS 442", "CS 443", undefined, undefined, "CS 522", "CS 306",
        "CS 423", "CS 485", undefined, "CS 546", "CS 554", "CS 524", "MA 221",
        undefined, "QF 101", undefined, "CAL 103", "CAL 105", "BT 244", "HLI 384",
        "HSS 371", "HPL 214", "HSS 125", "HPL 333", "PE 200", "PE 200", "PE 200",
        "PE 200"]
    ]
  }

}

module.exports = DataService;
