export default function preactLoader(source: string) {
  return `
${source}
var convert = require('@nyancss/css-modules/convert').default
var wrapper = require('@nyancss/react/wrapper/preact').default
var intoLocals = Array.isArray(module.exports)
var classNames = (intoLocals ? exports.locals : module.exports) || {}
var obj = wrapper(convert(classNames))
obj.classNames = classNames
if (intoLocals) {
  exports.locals = obj
} else {
  module.exports = obj
}
`
}
