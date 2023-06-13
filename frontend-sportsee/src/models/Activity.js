export default class Activity {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
    this.day = data.sessions.map((session) => session.day);
    this.kilogram = data.sessions.map((session) => session.kilogram);
    this.calories = data.sessions.map((session) => session.calories);
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

  getKilogram() {
    return this.kilogram;
  }

  getCalories() {
    return this.calories;
  }
}
