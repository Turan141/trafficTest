const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env = {}) => {
	const { mode = 'development' } = env
	const isProd = mode === 'production'
	const isDev = mode === 'development'

	const getStyleLoaders = preProcessor => {
		const loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }]
		if (preProcessor) {
			loaders.push({ loader: 'resolve-url-loader' }, { loader: preProcessor })
		}
		return loaders
	}

	return {
		mode: isProd ? 'production' : isDev && 'development',

		entry: './src/index.tsx',
		output: {
			clean: true,
			publicPath: '/',
			path: path.resolve(__dirname, 'build'),
			filename: `bundle-${Number(new Date())}.js`,
			chunkFilename: `bundle-${Number(new Date())}.js`,
		},

		devtool: isDev && 'cheap-module-source-map',

		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: ['ts-loader'],
				},
				{
					test: /\.(css)$/,
					use: getStyleLoaders(),
				},
				{
					test: /\.(scss)$/,
					use: getStyleLoaders('sass-loader'),
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								name: '[name].[ext]',
							},
						},
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'fonts',
								name: '[name].[ext]',
							},
						},
					],
				},
			],
		},

		resolve: {
			extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
			alias: {
				'@api': path.resolve(__dirname, './src/api'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@bus': path.resolve(__dirname, './src/bus'),
				'@components': path.resolve(__dirname, './src/components'),
				'@enums': path.resolve(__dirname, './src/enums'),
				'@interfaces': path.resolve(__dirname, './src/interfaces'),
				'@layouts': path.resolve(__dirname, './src/layouts'),
				'@pages': path.resolve(__dirname, './src/pages'),
				'@redux': path.resolve(__dirname, './src/redux'),
				'@routes': path.resolve(__dirname, './src/routes'),
				'@theme': path.resolve(__dirname, './src/theme'),
				'@utils': path.resolve(__dirname, './src/utils'),
			},
		},

		devServer: {
			hot: true,
			open: true,
			historyApiFallback: true,
			client: {
				overlay: true,
			},
			// proxy: [
			// 	{
			// 		context: ['/api'],
			// 		target: 'https://site.ru',
			// 		secure: true,
			// 		changeOrigin: true,
			// 	},
			// ],
		},

		plugins: [
			new HtmlWebpackPlugin({
				inject: true,
				scriptLoading: 'blocking',
				template: 'public/index.html',
				favicon: 'public/favicon.png',
			}),
			new Dotenv(),
		],
	}
}
