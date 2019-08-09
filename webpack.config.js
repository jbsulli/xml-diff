const path = require('path');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		"app": './src/index.ts',
		"editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
		// "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
		// "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
		// "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
		// "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
	},
	output: {
		globalObject: 'self',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".xml"]
  },
	module: {
		rules: [{
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		}, {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.pug$/,
      loader: ["html-loader", "pug-html-loader"]
    }, {
			test: /\.xml$/i,
			use: 'raw-loader',
		}]
	},
	plugins: [
		//new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: "XML Diffs",
      template: "pug/index.pug"
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    port: 9000
  }
};