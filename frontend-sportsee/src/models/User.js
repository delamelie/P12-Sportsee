export default class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.score = data.score;
    this.todayScore = data.todayScore;
    this.calories = data.keyData.calorieCount;
    this.proteins = data.keyData.proteinCount;
    this.carbohydrates = data.keyData.carbohydrateCount;
    this.lipids = data.keyData.lipidCount;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }

  //convert user's score into % to display inside Score component

  getScore() {
    const scorePercentage = (this.score || this.todayScore) * 100;
    return scorePercentage;
  }

  getScoreArray() {
    const scorePercentage = (this.score || this.todayScore) * 100;
    const percentageArray = [{ scorePercentage }];
    return percentageArray;
  }

  //format numbers to get thousands separator
  getCalories() {
    const caloriesFigure = this.calories.toLocaleString("en-US");
    return caloriesFigure;
  }

  getProteins() {
    const proteinsFigure = this.proteins.toLocaleString("en-US");
    return proteinsFigure;
  }
  getCarbohydrates() {
    const carbohydratesFigure = this.carbohydrates.toLocaleString("en-US");
    return carbohydratesFigure;
  }

  getLipids() {
    const lipidsFigure = this.lipids.toLocaleString("en-US");
    return lipidsFigure;
  }
}
