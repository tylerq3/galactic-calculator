export default class Calculator {
  constructor(age, lifeSpan, planet) {
    this.age = age;
    this.planet = planet;
    this.lifeSpan = lifeSpan;
    this.lifeLeft;
  }

  mercuryCalculation() {
    this.age = Math.round(this.age / .24);
    this.lifeSpan = Math.round(this.lifeSpan / .24);
}

}

