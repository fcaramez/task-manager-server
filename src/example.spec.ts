function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

describe('Example Test', () => {
  it('equals true', () => {
    expect(true).toEqual(true);
  });
});

describe('Add Numbers', () => {
  it('adds two numbers', () => {
    expect(addNumbers(2, 2)).toEqual(4);
  });
});
