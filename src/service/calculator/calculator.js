export default class Calculator {
  constructor() {
    this.value = 0;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    if (typeof val !== 'number') {
      throw new Error('TypeDisMatchError');
    }
    this._value = val;
  }

  set(num) {
    this.value = num;
  }

  clear() {
    this._value = 0;
  }

  add(num) {
    const sum = this._value + num;
    if (sum > 100) {
      throw new Error('Value can not be greater than 100');
    }
    this._value = sum;
  }

  subtract(num) {
    this._value = this._value - num;
  }

  multiply(num) {
    this._value = this._value * num;
  }

  divide(num) {
    this._value = this._value / num;
  }
}
