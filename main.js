import Calculator from './src/service/calculator/calculator.js';

const _Calculator = new Calculator();

_Calculator.set(10);

const calculatorCurrentValue = _Calculator.value;
console.log(`calculatorCurrentValue: ${calculatorCurrentValue}`);

_Calculator.add(20);
const sumValue = _Calculator.value;
console.log(`add(20): ${sumValue}`);

try {
  _Calculator.add(80);
  const outofSumValue = _Calculator.value;
  console.log('not logging because outofValue:', outofSumValue);
} catch (e) {
  console.error(e);
}
