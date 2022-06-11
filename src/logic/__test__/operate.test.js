import operate from '../operate';

describe('Testing operate function', () => {
  it('Adding two numbers', () => {
    const numberOne = 7;
    const numberTwo = 3;
    const operation = '+';
    const result = operate(numberOne, numberTwo, operation);
    const expected = '10';
    expect(result).toEqual(expected);
  });
  it('Subtracting two numbers', () => {
    const result = operate(7, 1, '-');
    const expected = '6';
    expect(result).toEqual(expected);
  });
  it('Multiplying two numbers', () => {
    const result = operate(90, 2, 'x');
    const expected = '180';
    expect(result).toEqual(expected);
  });
  it('Divide two numbers', () => {
    const result = operate(36, 6, '÷');
    const expected = '6';
    expect(result).toEqual(expected);
  });
  it('Modulus of two numbers', () => {
    const result = operate(9, 2, '%');
    const expected = '1';
    expect(result).toEqual(expected);
  });
});
