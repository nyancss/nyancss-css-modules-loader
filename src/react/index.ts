export default function reactLoader(source: string) {
  return `
${source}
var convert = require('@nyancss/css-modules/convert').default
var wrapper = require('@nyancss/react/wrapper/react').default
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
