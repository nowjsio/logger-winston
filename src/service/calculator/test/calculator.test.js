import Calculator from '../calculator.js';

describe('Calculator', () => {
  let _Calculator;
  beforeEach(() => {
    // 모든 테스트를 독립적으로 수행시키기 위해, 각 테스트 수행 전 객체를 initialize 한다.
    _Calculator = new Calculator();
  });

  test('initialize 0', () => {
    expect(_Calculator.value).toBe(0);
  });

  describe('set', () => {
    test('set (number)', () => {
      _Calculator.set(10);
      expect(typeof _Calculator.value).toBe('number');
    });

    test('sets (string): ThowError', () => {
      expect(() => {
        _Calculator.set('string');
      }).toThrow();
      // .toThrow(`TypeDisMatchError`); 생략 가능
    });
  });

  test('clear', () => {
    _Calculator.set(10);
    _Calculator.clear();
    expect(_Calculator.value).toBe(0);
  });

  describe('add', () => {
    test('add', () => {
      _Calculator.set(5);
      _Calculator.add(6);
      expect(_Calculator.value).toBe(11);
    });
    test('add (greater than 100): ThrowError', () => {
      _Calculator.set(5);

      expect(() => {
        _Calculator.add(100);
      }).toThrow(); // == toThrowError()
    });
  });

  test('subtract', () => {
    _Calculator.subtract(1);
    expect(_Calculator.value).toBe(-1);
  });

  test('multiply', () => {
    _Calculator.set(5);
    _Calculator.multiply(4);
    expect(_Calculator.value).toBe(20);
  });

  describe('divides', () => {
    test('0/0', () => {
      _Calculator.divide(0);
      expect(_Calculator.value).toBe(NaN);
    });

    test('1/0', () => {
      _Calculator.set(1);
      _Calculator.divide(0);
      expect(_Calculator.value).toBe(Infinity);
    });

    test('-1/0', () => {
      _Calculator.set(1);
      _Calculator.divide(0);
      expect(_Calculator.value).toBe(Infinity);
    });
  });
});
