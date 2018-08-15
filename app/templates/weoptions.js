const weoptions = require('weoptions')('<%= camelModuleName %>', false);

let opts = {
	name: '<%= camelModuleName %>'
}

let w = weoptions(options);

module.exports = w
