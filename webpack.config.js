module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: "./app/temp/scripts",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, /*telling webpack that we only want babel to be applied to js files*/
				exclude: /node_modules/ /*tell it we don't need all js files to be converted*/
			}
		]
	}
}