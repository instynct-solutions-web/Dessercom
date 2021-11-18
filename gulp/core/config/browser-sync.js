// utils
const deepMerge = require('../utils/deepMerge');

/**
 * BrowserSync
 * configuration
 * object
 *
 */
module.exports = deepMerge({
	proxy: 'dessercom.local',
	host: 'dessercom.local',
	open: 'external',
});
