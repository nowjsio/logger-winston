import path, { format } from 'path';
import { fileURLToPath } from 'url';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.resolve(__dirname, '../../logs'); // 로그 파일 저장 경로 설정

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Define log format
const logFormat = printf((info) => {
  if (info.stack)
    return `${info.timestamp} ${info.level}: ${info.message} ${info.stack}`;
  if (typeof info.message === 'object')
    return `${info.timestamp} ${info.level}: ${JSON.stringify(info.message)}`;
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    errors({ stack: true }),
    // winston.format.json(),
    // winston.format.prettyPrint(),
    logFormat,
  ),
  transports: [
    // info 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: path.resolve(logDir, 'info'),
      filename: `%DATE%.log`,
      maxFiles: '60d', // 60일치 로그 파일 저장
      zippedArchive: true,
    }),
    // error 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: path.resolve(logDir, 'error'), // error.log 파일은 error 폴더를 만들어 저장
      filename: `%DATE%.error.log`,
      maxFiles: '60d',
      zippedArchive: true,
    }),
  ],
  exceptionHandlers: [
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: path.resolve(logDir, 'exception'),
      filename: `%DATE%.exception.log`,
      maxFiles: '60d',
      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== 'prod') {
  logger.add(
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }), // console 에 출력할 로그 컬러 설정 적용함
        logFormat, // log format 적용
      ),
    }),
  );
}

export default logger;
