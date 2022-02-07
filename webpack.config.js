const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackShellPluginNext = require('webpack-shell-plugin-next');
const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/server.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.join((__dirname, './src'))],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
  watch: NODE_ENV === 'development',
  plugins: [
    new webpackShellPluginNext({
      onBuildEnd: {
        scripts: ['yarn run:dev'],
      },
    }),
  ],
};
