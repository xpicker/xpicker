const cssImport = require('postcss-import')
const cssImportResolver = require('postcss-import-resolver')
const cssNext = require('postcss-cssnext')
const path = require('path')

module.exports = {
    plugins: [
        cssImport({
            resolve: cssImportResolver({
                alias: {
                    '~styles': path.resolve(__dirname, 'app/styles')
                },
                modules: ['node_modules']
            })
        }),
        cssNext
    ]
}