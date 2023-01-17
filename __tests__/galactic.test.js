import Calculator from './../src/galactic.js'

describe('Calculator', () => {

  test('it should return the age from earth and the life expectancy', () => {
  const calc = new Calculator(24, "earth", 15, 100);
  expect(calc.age).toEqual(24);
  expect(calc.planet).toEqual("earth");
  expect(calc.pastBirthday).toEqual(15);
  expect(calc.futureBirthday).toEqual(100);
  });

  test('it should return mercurys age and life expectancy from earth', () => {
    let mercury = new Calculator(24, "mercury", 12, 100);
    mercury.mercury();
    expect(mercury.age).toEqual(100);
  });

  test('it should return venus age and life expectancy from earth', () => {
  let venus = new Calculator(24, "venus", 12, 100);
  venus.venus();
  expect(venus.age).toEqual(39);
  })

  test('it should return mars age and life expectancy from earth', () => {
    let mars = new Calculator(24,"mars", 15, 100 );
    mars.mars();
    expect(mars.age).toEqual(13);
  })

  test('it should return jupiters age and life expectancy from earth', () => {
    let jupiter = new Calculator(24 ,"jupiter", 12, 100);
    jupiter.jupiter();
    expect(jupiter.age).toEqual(2);
  });

  test('it should return how many days past since a users birthday for each planet', () => {
  let user = new Calculator(56, "Earth", 40, 100);
  const yearsPassed = user.yearsPassed(user.pastBirthday);
  expect(yearsPassed).toEqual({
    "Earth": 16,
    "Mercury": 67,
    "Venus": 26,
    "Mars": 9,
    "Jupiter": 1
  });
});

  test('it should return how many days until a users birthday for each planet', () => {
    let user = new Calculator(56, "earth", 40, 100);
    const yearsLeft = user.yearsLeft(user.futureBirthday);
    expect(yearsLeft).toEqual({
      "Earth": 44,
      "Mercury": 183,
      "Venus": 71,
      "Mars": 23,
      "Jupiter": 4
    });
  });
});
