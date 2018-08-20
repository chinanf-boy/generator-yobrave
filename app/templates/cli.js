#!/usr/bin/env node
'use strict';
const meow = require('meow');
const twoLog = require('two-log-min')
const weOpts = require('./weoptions.js')
const tc = require("turbocolor")
let g = tc.green
let c = tc.cyan
let y = tc.yellow
let b = tc.blue

const <%= camelModuleName %> = require('.');

const cli = meow(`
  Usage
    $ <%= repoName %> [input]

  Examples
    $ <%= repoName %> ponies
    ponies & rainbows

  ${b('🌟 [Options]')}
    ${g('-D')}  debug

    ${g('--foo')}  Lorem ipsum [Default: false]
`);

if(!cli.input[0]){
	console.log(g("<%= moduleName %>" + "--> V" + cli.pkg.version), cli.help)
	process.exitCode = 1
	return
}

const log = twoLog(cli.flags['D'])
log.start(`Start <%= camelModuleName %> ..`)

log.text(cli.input[0] || weOpts.get('name'));

log.stop(`<%= camelModuleName %> Done`)
