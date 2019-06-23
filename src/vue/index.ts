export default function reactLoader(source: string) {
  return `
${source}
var convert = require('@nyancss/css-modules/convert').default
var generate = require('@nyancss/vue/generate').default
var intoLocals = Array.isArray(module.exports)
var classNames = (intoLocals ? exports.locals : module.exports) || {}
var obj = generate(convert(classNames))
obj.classNames = classNames
if (intoLocals) {
  exports.locals = obj
} else {
  module.exports = obj
}
`
}
