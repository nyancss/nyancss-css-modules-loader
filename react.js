module.exports = function (source) {
  return `
${source}
var decss = require('decss/react')
exports.locals = decss(exports.locals || {})
`
}
