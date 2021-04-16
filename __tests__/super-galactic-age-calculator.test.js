import galacticAgeCalculator from './../src/js/super-galactic-age-calculator';

describe ('galacticAgeCalculator', () => {
  let myAges;

  beforeEach(() => {
    myAges = new galacticAgeCalculator(24,{"planetName":"calculatedAge"})
  });

  Test('should create a galacticAgeCalculator object', () => {
    expect(myAges.inputtedAge).toEqual(24)
    expect(myAges.planets).toEqual({"planetName":"calculatedAge"})
  })

  //   test ('it should take inputed age and should return age', () => {
  //     expect (myAge.inputtedAge).toEqual(24);
  //   });
  })