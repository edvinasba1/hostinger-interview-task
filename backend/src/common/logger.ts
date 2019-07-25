import * as winston from 'winston';
import * as dayjs from 'dayjs';

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red'
  }
};

const isProductionEnv = process.env.NODE_ENV === 'production';

const parser = (param: any): string => {
  if (!param) {
    return '';
  }
  if (typeof param === 'string') {
    return param;
  }
  return Object.keys(param).length ? JSON.stringify(param, undefined, 2) : '';
};

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, meta } = info;
    const ts = dayjs(timestamp).format('YYYY-MM-DD | hh:mm:ss');
    const metaMsg = meta ? `: ${parser(meta)}` : '';
    return `[${ts}] [${level}] ${parser(message)} ${metaMsg}`;
  }),
);

class Logger {
  private logger: winston.Logger;

  constructor() {
    const transport = new winston.transports.Console({
      format: formatter
    });
    this.logger = winston.createLogger({
      level: isProductionEnv ? 'error' : 'trace',
      levels: customLevels.levels,
      transports: [transport]
    });
    winston.addColors(customLevels.colors);
  }

  trace(msg: any, meta?: any) {
    this.logger.log('trace', msg, meta);
  }

  debug(msg: any, meta?: any) {
    this.logger.debug(msg, meta);
  }

  info(msg: any, meta?: any) {
    this.logger.info(msg, meta);
  }

  warn(msg: any, meta?: any) {
    this.logger.warn(msg, meta);
  }

  error(msg: any, meta?: any) {
    this.logger.error(msg, meta);
  }

  fatal(msg: any, meta?: any) {
    this.logger.log('fatal', msg, meta);
  }

}

export const logger = new Logger();