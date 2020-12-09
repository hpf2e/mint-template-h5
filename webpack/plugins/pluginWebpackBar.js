import chalk from 'chalk';
import WebpackBar from 'progress-bar-webpack-plugin';

const config = {
	format:
		'  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
	clear: false,
	width: 60,
};

export const WebpackBarPlugin = new WebpackBar(config);
