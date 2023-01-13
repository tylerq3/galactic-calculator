import Calculator from './../src/galactic.js'

describe('Calculator', () => {

  test('it should return the age from earth and the life expectancy', () => {
  const calc = new Calculator(24, "earth");
  expect(calc.age).toEqual(24);
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
    mars.mars();
    expect(mars.age).toEqual(13);
  })

  test('it should return jupiters age and life expectancy from earth', () => {
    let jupiter = new Calculator(24, 100, "jupiter");
    jupiter.jupiter();
    expect(jupiter.age).toEqual(2);
  });

  test('it should return a how many days past since a users birthday for each planet')
  let user = new Calculator(56);
  let yearsPassed = user.yearsPassed(43);
  expect(yearsPassed).toEqual({
    "Earth": 13,
    "Mercury": 54.16,
    "Venus": 8.06,
    "Mars": 6.91,
    "Jupiter": 1.09
  });

  


});