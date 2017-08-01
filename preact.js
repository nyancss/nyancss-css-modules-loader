module.exports = function (source) {
  return `
${source}
var decss = require('decss/preact')
exports.locals = decss(exports.locals || {})
`
}
