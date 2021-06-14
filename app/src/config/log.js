const fs = require("fs")
const appRoot = require("app-root-path");  // 루트 경로 획득

const accessLogStream = fs.createWriteStream(
  `${appRoot}/logs/access.log`,
  { flag: "a" }
);

module.exports = accessLogStream;