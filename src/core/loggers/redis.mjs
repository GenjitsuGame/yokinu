import config from 'config';
import winston from 'winston';
import defaultFormats from './formats.mjs';

const { createLogger, format, transports } = winston;
const { combine, label } = format;

export default createLogger({
  level: 'ALL',
  format: combine(
    label({ label: 'Redis' }),
    ...defaultFormats,
  ),  transports: [
    new transports.Console({
      colorize: true,
      prettyPrint: true,
      timestamp: true,
    }),
    new transports.File({
      colorize: true,
      prettyPrint: true,
      timestamp: true,
      filename: `${config.yokinu.logging.directory}/redis.log`
    })
  ]
});
