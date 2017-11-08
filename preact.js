module.exports = function(source) {
  return `
${source}
var decss = require('decss/preact')
var intoLocals = Array.isArray(module.exports)
var classNames = (intoLocals ? exports.locals : module.exports) || {}
var obj = decss(classNames)
obj.classNames = classNames
if (intoLocals) {
  exports.locals = obj
} else {
  module.exports = obj
}
`
}
