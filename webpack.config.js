
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  performance: {
    maxAssetSize: 400000,
    maxEntrypointSize: 400000,
  },
  module: {
    rules: [
      // js, jsx 規則
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
          // {
          //   loader: 'expose-loader',
          //   options: 'jQuery'
          // },
          // {
          //   loader: 'expose-loader',
          //   options: '$'
          // },
        ],
      },
    //   {
    //     test: /jquery.+\.js$/,
    //     use: [{
    //         loader: 'expose-loader',
    //         options: 'jQuery'
    //     },{
    //         loader: 'expose-loader',
    //         options: '$'
    //     }]
    // },
      // sass, scss , css 規則
      {
        test: /\.(scss)$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          // {
          //   loader: 'css-loader',
          //   // options: {
          //   //   modules:{
          //   //     localIdentName: '[path][local]___[hash:base64:5]',
          //   //   },
          //   // },
          //   options: {
          //       minimize: true,
          //       sourceMap: true
          //   },
          // },
          // {
          //   loader: 'sass-loader',
          // }
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  // webpack server 設定
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 9100,
  },
  // externals: {
  //   jquery: 'jQuery'
  // }
};
