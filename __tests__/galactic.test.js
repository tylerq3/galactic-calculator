import Calculator from './../src/galactic.js'

describe('Calculator', () => {

  test('it should return the age from earth and the life expectancy', () => {
  const calc = new Calculator(24, 100, "earth");
  expect(calc.age).toEqual(24);
  expect(calc.lifeSpan).toEqual(100);
  expect(calc.planet).toEqual("earth");
  });

  test('it should return mercurys age and life expectancy from earth', () => {
    let mercury = new Calculator(24, 100, "mercury");
    expect(mercury.age).toEqual(100);
    expect(mercury.lifeSpan).toEqual(416.67);
    expect(mercury.planet).toEqual("mercury");
  });

  test('it should return venus age and life expectancy from earth', () => {
    let venus = new Calculator(24, 100, "venus");
    expect(venus.age).toEqual(38.70);
    expect(venus.lifeSpan).toEqual(161.29);
    expect(venus.planet).toEqual("venus")
  })
});