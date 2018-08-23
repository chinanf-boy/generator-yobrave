'use strict';
exports = module.exports = function <%= camelModuleName %>(input, opts) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {};

	return input + ' & ' + (opts.postfix || 'rainbows');
};

exports.<%= camelModuleName %> = <%= camelModuleName %>
