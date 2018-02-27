const AtImport = require('postcss-import')
const CssNext  = require('postcss-cssnext')

module.exports = {
    plugins: [
        AtImport,
        CssNext
    ]
}