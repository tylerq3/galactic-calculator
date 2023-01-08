import Calculator from './../src/galactic.js'

describe('Calculator', () => {

  test('it should return the age from earth and the life expectancy', () => {
  const calc = new Calculator(24, 100, "earth");
  expect(calc.age).toEqual(24);
  expect(calc.lifeSpan).toEqual(100);
  expect(calc.planet).toEqual("earth");
  });

  test('it should return mercurys age and life expectancy from earth', () => {
    let mercury = new Calculator(24, "mercury");
    mercury.mercury();
    expect(mercury.age).toEqual(100);
  });

  test('it should return venus age and life expectancy from earth', () => {
  let venus = new Calculator(24, "venus");
  venus.venus();
  expect(venus.age).toEqual(39);
  })

  test('it should return mars age and life expectancy from earth', () => {
    let mars = new Calculator(24, 100, "mars");
    expect(mars.age).toEqual(12.7);
    expect(mars.lifeSpan).toEqual(53.1);
    expect(mars.planet).toEqual("mars");
  })

  test('it should return jupiters age and life expectancy from earth', () => {
    let jupiter = new Calculator(24, 100, "mars");
    expect(jupiter.age).toEqual(2);
    expect(jupiter.lifeSpan).toEqual(8.4);
    expect(jupiter.planet).toEqual("jupiter");
  });

});