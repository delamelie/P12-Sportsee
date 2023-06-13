export default class AverageSessions {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
    this.day = data.sessions.map((session) => session.day);
    this.sessionLength = data.sessions.map((session) => session.sessionLength);
  }

  getId() {
    return this.id;
  }

  getSessions() {
    return this.session;
  }

  getDay() {
    return this.day;
  }

  getSessionLength() {
    return this.sessionLength;
  }
}
