/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
	'@src': join(rootDir, '/src'),
	'@pages': join(rootDir, '/src/pages'),
	'@images': join(rootDir, '/src/images'),
	'@styles': join(rootDir, '/src/styles'),
	'@components': join(rootDir, '/src/components'),
	'@service': join(rootDir, '/src/service'),
	'@utils': join(rootDir, '/src/utils'),
	'@reducer': join(rootDir, '/src/reducer'),
};
