const {argv} = require('yargs');

module.exports = (api) => {
	const env = argv.env || [];
	const mode = !!env.find((value) => value === 'mode=dev')
		? 'development'
		: 'production';

	// This caches the Babel config by environment.
	api.cache.using(() => mode);

	return {
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						browsers: [
							'last 3 versions',
							'firefox >= 20',
							'chrome >= 34',
							'safari >= 6',
							'opera >= 12.1',
							'ios >= 7',
							'android >= 4.4',
							'ie >= 8',
						],
					},
					useBuiltIns: 'usage',
					debug: false,
					corejs: 3,
				},
			],
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		plugins: [
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-throw-expressions',
			'@babel/proposal-object-rest-spread',
			'@emotion',
			// Applies the react-refresh Babel plugin on non-production modes only
			mode !== 'production' && 'react-refresh/babel',

			[
				'import',
				{
					libraryName: '@hupu/mint-react',
					libraryDirectory: 'es/icons',
					camel2DashComponentName: false,
				},
			],
			[
				'import',
				{
					libraryName: '@hupu/movie-component-list',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: true,
				},
				'@hupu/movie-component-list',
			],
			[
				'import',
				{
					libraryName: '@hupu/movie-component-lazyimage',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: true,
				},
				'@hupu/movie-component-lazyimage',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-toast',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-toast',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-pullrefresh',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-pullrefresh',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-leftslip',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-leftslip',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-address',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-address',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-switch',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-switch',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-timeline',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-timeline',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-dialog',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-dialog',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-radio',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-radio',
			],
			[
				'import',
				{
					libraryName: '@hupu/movie-component-exposure',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/movie-component-exposure',
			],
			[
				'import',
				{
					libraryName: '@hupu/bigboy-component-navbar',
					libraryDirectory: 'es',
					camel2DashComponentName: false,
					style: 'css',
				},
				'@hupu/bigboy-component-navbar',
			],
		].filter(Boolean),
	};
};
