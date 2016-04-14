const expect = require('expect');
let {threeSteps} = require('../threeStep');

describe('ThreeStep', function () {

  it('should return 1 for 1 step', function () {
    expect(threeSteps(1)).toEqual(1);
  });

  it('should return 2 for 2 steps', function () {
    expect(threeSteps(2)).toEqual(2);
  });

  it('should return 4 for 3 steps', function () {
    expect(threeSteps(3)).toEqual(4);
  });

  it('should return 7 for 4 steps', function () {
    expect(threeSteps(4)).toEqual(7);
  });

  it('should return 13 for 5 steps', function () {
    expect(threeSteps(5)).toEqual(13);
  });
});

