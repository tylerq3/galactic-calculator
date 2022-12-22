import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly determine whether three lengths make a scalene triangle', () => {
    const scalTriangle = new Triangle(4,5,7)
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });
});