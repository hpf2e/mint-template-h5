/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
import ip from 'ip';

import {devServerProxyConfig} from './devServierProxy';

const defaultPort = 8080;

const devServerHost = ip.address() ?? '127.0.0.1';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
	port: defaultPort,
	historyApiFallback: true,
	headers: {'Access-Control-Allow-Origin': '*'},
	proxy: devServerProxyConfig,
	hot: true,
	client: {
		progress: true,
		logging: 'none',
		overlay: {
			errors: true,
			warnings: false,
		},
	},
	host: devServerHost,
	open: true,
	compress: true,
	static: {
		publicPath: '/',
	},
};
