const weoptions = require('weoptions')('<%= camelModuleName %>', false);

const opts = {
	name: '<%= moduleName %>'
};

const w = weoptions(opts);

module.exports = w;
