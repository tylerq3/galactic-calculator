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
    expect(mercury.lifeSpan).toEqual(416.6);
    expect(mercury.planet).toEqual("mercury");
  });

  test('it should return venus age and life expectancy from earth', () => {
  let venus = new Calculator(24, 100, "venus");
  expect(venus.age).toEqual(38.7);
  expect(venus.lifeSpan).toEqual(161.2);
  expect(venus.planet).toEqual("venus");
  })

  test('it should return mars age and life expectancy from earth', () => {
    let mars = new Calculator(24, 100, "mars");
    expect(mars.age).toEqual(12.7);
    expect(mars.lifeSpan).toEqual(53.1);
    expect(mars.planet).toEqual("mars");
  })
});