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
});
