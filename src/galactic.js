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

}

