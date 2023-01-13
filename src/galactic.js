export default class Calculator {
  constructor(age, lifeSpan, planet) {
    this.age = age;
    this.planet = planet;
    this.lifeSpan = lifeSpan;
    this.lifeLeft;
  }

  mercury() {
    this.age = Math.round(this.age / .24);
    this.lifeSpan = Math.round(this.lifeSpan / .24);
}

  venus() {
    this.age = Math.round(this.age / .62);
    this.lifeSpan = Math.round(this.lifeSpan / .62);
  }

  mars() {
    this.age = Math.round(this.age / 1.88);
    this.lifeSpan = Math.round(this.lifeSpan / 1.88);
  }

  jupiter() {
    this.age = Math.round(this.age / 11.86);
    this.lifeSpan = Math.round(this.lifeSpan / 11.86);
  }

  yearsPassed(pastBirthdayAge) {
    let earthYearsPassed = this.earthAge - pastBirthdayAge;
    let mercuryYearsPassed = earthYearsPassed / 0.24;
    let venusYearsPassed = earthYearsPassed / 0.62;
    let marsYearsPassed = earthYearsPassed / 1.88;
    let jupiterYearsPassed = earthYearsPassed / 11.86;
    return {
      "Earth": earthYearsPassed,
      "Mercury": mercuryYearsPassed,
      "Venus": venusYearsPassed,
      "Mars": marsYearsPassed,
      "Jupiter": jupiterYearsPassed
    }
  }

}


