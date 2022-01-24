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
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  return config
}
