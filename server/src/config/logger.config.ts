import { IS_PROD } from "../env";
import winston from "winston";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

/**
 * This method set the current severity based on the current NODE_ENV
 * If the server was run in development mode, show all the log levels
 * If it was run in production, show only warn and error messages.
 */
const level = () => {
  return IS_PROD ? "warn" : "debug";
};

// Define different colors for each level.
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [new winston.transports.Console()];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export { logger };
