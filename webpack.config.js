var webpack = require('webpack');
var entry = { app: ['webpack/hot/dev-server', './index.js'] };
if(process.env.NODE_ENV === 'test'){
	entry = './index.js';
}

module.exports = {
	context: __dirname + '/app',
	entry: entry,
	output:{
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	plugins:[
		new webpack.DefinePlugin({
			TEST: process.env.NODE_ENV === 'test'
		})
	],
	module:{
		loaders:[
			{test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
			{test: /\.html$/, loader: 'raw', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
			{test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
		]
	}
}