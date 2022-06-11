import calculate from '../calculate';

describe('Testing calculate functioning', () => {
  it('AC button functioning', () => {
    const obj = {
      total: '50',
      next: '',
      operation: '',
    };
    const btnName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, btnName)).toStrictEqual(expected);
  });
  it('Insert a number value when clicked', () => {
    const obj = {};
    const btnName = '0';
    const expected = {
      total: null,
      next: btnName,
    };
    expect(calculate(obj, btnName)).toStrictEqual(expected);
  });
  it('The working of "." button', () => {
    const obj = {
      total: null,
      next: '4',
    };
    const btnName = '.';
    const expected = {
      total: null,
      next: '4.',
    };
    expect(calculate(obj, btnName)).toStrictEqual(expected);
  });
  it('Test the = sign operator function', () => {
    const obj = {
      total: '100',
      next: '20',
      operation: '-',
    };
    const btnName = '=';
    const expected = {
      total: '80',
      next: null,
      operation: null,
    };
    expect(calculate(obj, btnName)).toStrictEqual(expected);
  });
  it('Testing "-/+" operation function', () => {
    const obj = {
      total: null,
      next: '20',
    };
    const btnName = '+/-';
    const expected = {
      total: null,
      next: '-20',
    };
    expect(calculate(obj, btnName)).toStrictEqual(expected);
  });
});
