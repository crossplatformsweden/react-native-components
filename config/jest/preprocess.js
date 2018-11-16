// jest-preprocessor.js
// workaround for babel issues
// https://github.com/facebook/react-native/issues/20614#issuecomment-421405255
const fs = require("fs")

const config = fs.readFileSync("./.babelrc")

module.exports = require("babel-jest").createTransformer(JSON.parse(config))