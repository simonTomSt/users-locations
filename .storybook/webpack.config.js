const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, '../src'))
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            config: path.resolve(__dirname, '../postcss.config.js')
          }
        }
      }
    ]
  })

  return config
}
