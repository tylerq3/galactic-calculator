import Calculator from './../src/galactic.js'

describe('Calculator', () => {

  test('it should return the age from earth and the life expectancy', () => {
  const calc = new Calculator(24, 100, "earth");
  expect(calc.age).toEqual(24);
  expect(calc.lifeSpan).toEqual(100);
  expect(calc.planet).toEqual("earth");
  });

  test('it should return mercurys age and life expectancy from earth', () => {
    let mercury1 = new Calculator(24, "mercury");
    mercury1.mercury();
    expect(mercury1.age).toEqual(100);
  });


});