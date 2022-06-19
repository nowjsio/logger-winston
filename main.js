import Calculator from './src/service/calculator/calculator.js';
import logger from './src/logger/logger.js';

const _Calculator = new Calculator();

_Calculator.set(10);
logger.debug(`init _Caclucator value : ${_Calculator.value}`);

const calculatorCurrentValue = _Calculator.value;
logger.info(`calculatorCurrentValue: ${calculatorCurrentValue}`);

_Calculator.add(20);
const sumValue = _Calculator.value;
logger.info(`add(20): ${sumValue}`);
logger.info({ test: 'json' });

try {
  _Calculator.add(80);
  const outofSumValue = _Calculator.value;
  logger.info('not logging because outofValue:', outofSumValue);
} catch (e) {
  logger.error('errorString');
  logger.error(e);
}

throw new Error('Exception');
