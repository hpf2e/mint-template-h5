/**
 * proxy setting
 * @see https://webpack.js.org/configuration/dev-server/#devserverproxy
 */

export const devServerProxyConfig = {
	'/appapi': {
		target: 'http://bigboy.hupu.com',
		changeOrigin: true,
	},
};
