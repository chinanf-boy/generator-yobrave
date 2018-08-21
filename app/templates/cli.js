#!/usr/bin/env node

'use strict';
const meow = require('meow');
const twoLog = require('two-log-min')
const program = require('commander')
const weOpts = require('./weoptions.js')
const {	g,	c,	y,	b, r } = require('./util')

const <%= camelModuleName %> = require('.');

program
  .version(require('../package.json').version, '-v, --version'))
  .usage('<input> [options]')
// program
//   .command('dev [targetDir]')
	.description('say rainbows')
	.arguments('<input> [optoins]')
  // .option('-p, --port <port>', 'use specified port (default: 8080)')
  .option('-D, --debug [debug]', 'debug: boolean/string ', false)
  .action((input = 'rainbows', { debug }) => {

		const log = twoLog(debug)

		log.start(`Start <%= camelModuleName %> ..`)

		log.text(input || weOpts.get('name'));

		log.stop(`<%= camelModuleName %> Done`)

    // wrapCommand(dev)(path.resolve(dir), { host, port })
	})

// program
//   .arguments('<command>')
//   .action((cmd) => {
//     program.outputHelp()
//     console.log(`  ` + r(`Unknown command ${y(cmd)}.`))
//     console.log()
//   })

program.on('--help', () => {
  console.log()
  console.log(`  Run ${c(`<%= camelModuleName %> <command> --help`)} for detailed usage of given command.`)
  console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))

const enhanceErrorMessages = (methodName, log) => {
  program.Command.prototype[methodName] = function (...args) {
    if (methodName === 'unknownOption' && this._allowUnknownOption) {
      return
    }
    this.outputHelp()
    console.log(`  ` + r(log(...args)))
    console.log()
    process.exit(1)
  }
}

enhanceErrorMessages('missingArgument', argName => {
  return `Missing required argument ${y(`<${argName}>`)}.`
})

enhanceErrorMessages('unknownOption', optionName => {
  return `Unknown option ${y(optionName)}.`
})

enhanceErrorMessages('optionMissingArgument', (option, flag) => {
  return `Missing required argument for option ${y(option.flags)}` + (
    flag ? `, got ${y(flag)}` : ``
  )
})

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp((t) =>r(t))
}

function wrapCommand (fn) {
  return (...args) => {
    return fn(...args).catch(err => {
      console.error(r(err.stack))
      process.exitCode = 1
    })
  }
}
