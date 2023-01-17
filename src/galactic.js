export default class Calculator {
  constructor(age, planet, pastBirthday, futureBirthday) {
    this.age = age;
    this.planet = planet;
    this.pastBirthday = pastBirthday;
    this.futureBirthday = futureBirthday;
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

  yearsPassed(pastBirthday) {
    let earthYearsPassed = this.age - this.pastBirthday;
    let mercuryYearsPassed = Math.round(earthYearsPassed / 0.24);
    let venusYearsPassed = Math.round(earthYearsPassed / 0.62);
    let marsYearsPassed = Math.round(earthYearsPassed / 1.88);
    let jupiterYearsPassed = Math.round(earthYearsPassed / 11.86);
    return {
      "Earth": earthYearsPassed, 
      "Mercury": mercuryYearsPassed,
      "Venus": venusYearsPassed,
      "Mars": marsYearsPassed,
      "Jupiter": jupiterYearsPassed
    }
  }

  yearsLeft(futureBirthday) {
    let earthYearsLeft = this.futureBirthday - this.age;
    let mercuryYearsLeft = Math.round(earthYearsLeft / 0.24);
    let venusYearsLeft = Math.round(earthYearsLeft / 0.62);
    let marsYearsLeft = Math.round(earthYearsLeft / 1.88);
    let jupiterYearsLeft = Math.round(earthYearsLeft / 11.86);
    return {
      "Earth": earthYearsLeft,
      "Mercury": mercuryYearsLeft,
      "Venus": venusYearsLeft,
      "Mars": marsYearsLeft,
      "Jupiter": jupiterYearsLeft
    }
  }

}


