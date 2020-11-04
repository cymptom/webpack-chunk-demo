const path = require("path");

module.exports = {
	entry: {
		"guid-generator": "../lib/guid-generator/src/index.ts"
	},
	devtool: false,
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 		maxInitialRequests: Infinity,
	// 		minSize: 0,
	// 		cacheGroups: {
	// 			vendor: {
	// 				test: /[\\/]node_modules[\\/]/
	// 			},
	// 		},
	// 	},
	// },
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				}
			}
		]
    },
    mode: "development",
	resolve: {
		extensions: [".ts"]
	},
	output: {
		filename: "[name]/index.js",
		libraryTarget: "umd",
		path: path.resolve(__dirname, "dist")
	}
};
