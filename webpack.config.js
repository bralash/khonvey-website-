const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader?url=false"],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader?url=false",
					"sass-loader",
				],
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: "url-loader",
						options: {
							mimetype: "image/png",
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css", // Relative to output.path
			chunkFilename: "[id].css",
		}),
	],
	devServer: {
		port: 8088,
		contentBase: path.resolve(__dirname, "./public"),
		hot: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		clientLogLevel: "silent",
	},
};

module.exports = config;
