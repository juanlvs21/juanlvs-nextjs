const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS({
    webpack(config, options) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    },
})