import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';

const config = {
	compilationSuccessInfo: {
		messages: ['You application is running here http://localhost:8080'],
	},
	onErrors: function (severity, errors) {
		// You can listen to errors transformed and prioritized by the plugin
		// severity can be 'error' or 'warning'
	},
	// should the console be cleared between each compilation?
	// default is true
	clearConsole: true,
	// add formatters and transformers (see below)
	additionalFormatters: [],
	additionalTransformers: [],
};

export const friendlyErrorsPlugin = new FriendlyErrorsPlugin(config);
