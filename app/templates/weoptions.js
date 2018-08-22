const weoptions = require('weoptions')('<%= camelModuleName %>', false);

let opts = {
	name: '<%= moduleName %>'
}

let w = weoptions(opts);

module.exports = w
