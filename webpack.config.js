const path = require('path');// path — встроенный в Node.js модуль

// Webpack предоставляет несколько плагинов в основном пакете:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stats: { children: true },//развернута информация об ошибках
  entry: { main: './src/pages/index.ts' },// Указываем путь до входной точки:
  output: {// Описываем, куда следует поместить результат работы:
    path: path.resolve(__dirname, 'dist'),// Путь до директории (важно использовать path.resolve):
    filename: 'main.js',// Имя файла со сборкой:
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './src'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {// В этом массиве будут перечислены все применяемые лоадеры:
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      // use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext]',
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name].[hash][ext]',
      }
    },
    {
      // Это правило будет применяться ко всем файлам,
      // имя которых подойдет под регулярное выражение:
      test: /\.css$/,// Список лоадеров, которые применятся к файлу:
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }// Лоадеру можно передать параметры:
        },
        'postcss-loader'
      ]
    }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  // При сборке этот плагин будет отображать прогресс в консоли:
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};