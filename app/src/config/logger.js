// const winston = require("winston");
const { createLogger, transports, format } = require("winston");  // 필요한 부분을 직접 뽑음
const { combine, timestamp, label, printf, json, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const printLogFormat ={
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    // colorize(),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd"
    }),
    // 콜백함수에서 사용하고 싶은 변수들을 오브젝트로 넘겨 줄 수 있음
    printFormat
    // simple()
  ),
  console: combine(
    colorize(),
    simple()
  )
};

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",                    // level: 출력할 단계 한계 지정
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",                    // level: 출력할 단계 한계 지정
    format: printLogFormat.console,
  })
}

const logger = createLogger({
  transports: [opts.file],
})

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

logger.stream = {
  write: (message) => logger.info(message),
};

module.exports = logger;