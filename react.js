module.exports = function(source) {
  return `
${source}
var decss = require('decss/react')
var classNames = exports.locals || {}
exports.locals = decss(classNames)
exports.locals.classNames = classNames
`
}
