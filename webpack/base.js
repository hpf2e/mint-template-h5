import path from 'path';

import {aliasItems, devServerUrl, externalItems} from './config';
import entry from './entry';
import optimization from './optimization';
import * as plugins from './plugins';
import * as rules from './rules';
import {isDevServer, isProd} from './utils/env';
import {arrayFilterEmpty} from './utils/helpers';

export default {
	context: __dirname,
	mode: isProd ? 'production' : 'development',
	entry,
	output: {
		path: path.join(__dirname, '../dist'),
		publicPath: isDevServer
			? devServerUrl
			: '//w1.hoopchina.com.cn/games/static/bigboy-mapp-fed/',
		filename: isDevServer ? '[name].[fullhash].js' : '[name].[contenthash].js',
	},
	module: {
		rules: arrayFilterEmpty([
			rules.javascriptRule,
			rules.htmlRule,
			rules.imagesRule,
			rules.fontsRule,
			rules.cssRule,
			...rules.lessRules,
			...rules.sassRules,
			...rules.svgRules,
		]),
	},
	plugins: arrayFilterEmpty([
		plugins.htmlWebpackPlugin,
		plugins.providePlugin,
		plugins.definePlugin,
		plugins.esLintPlugin,
		plugins.friendlyErrorsPlugin,
		plugins.copyPlugin,
		plugins.WebpackBarPlugin,
	]),
	resolve: {
		alias: aliasItems,
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	optimization,
	// externals: externalItems,
};
