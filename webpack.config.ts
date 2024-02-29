import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Teleport',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config;
