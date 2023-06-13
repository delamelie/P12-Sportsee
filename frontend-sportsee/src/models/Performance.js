export default class Performance {
  constructor(data) {
    this.id = data.userId;
    this.dataLabel = data.kind;
    this.data = data.data;
    this.dataValue = data.data.map((data) => data.value);
    this.dataKind = data.data.map((data) => data.kind);
  }

  getId() {
    return this.id;
  }

  getDataValue() {
    return this.dataValue;
  }

  getDataKind() {
    return this.dataKind;
  }

  getDataLabel() {
    //retrieve user's performances to display inside Performances component : create separate array for labels and translate names into French
    const perf = this.data;
    const labels = this.dataLabel;

    const labelsArray = [];
    Object.keys(labels).forEach((key) => {
      labelsArray.push({
        kind: key,
        name: labels[key],
      });
    });

    labelsArray.forEach((item) => {
      switch (item.name) {
        case "cardio":
          item.name = "Cardio";
          break;
        case "energy":
          item.name = "Energie";
          break;
        case "endurance":
          item.name = "Endurance";
          break;
        case "strength":
          item.name = "Force";
          break;
        case "intensity":
          item.name = "Intensité";
          break;
        case "speed":
          item.name = "Vitesse";
          break;
        default:
          break;
      }
    });

    // merge data from labelsArray and perf array
    const performances = perf.map((item, index) => {
      return Object.assign(item, labelsArray[index]);
    });

    return performances;
  }
}
