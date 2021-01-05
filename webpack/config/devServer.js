/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
import ip from 'ip';

import {devServerProxyConfig} from './devServierProxy';

const defaultPort = 8080;

const devServerHost = ip.address() ?? '127.0.0.1';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
	publicPath: '/',
	port: defaultPort,
	historyApiFallback: true,
	headers: {'Access-Control-Allow-Origin': '*'},
	proxy: devServerProxyConfig,
	hot: true,
	overlay: false,
	host: devServerHost,
	stats: 'errors-only',
	quiet: true,
};
