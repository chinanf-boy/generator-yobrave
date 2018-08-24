#!/usr/bin/env node

'use strict';
const twoLog = require('two-log-min')
const program = require('commander')
const weOpts = require('./weoptions.js')
const {	g,	c,	y,	b, r } = require('yobrave-util')

const <%= camelModuleName %> = require('.');

program
  .version(require('./package.json').version, '-v, --version')
  .usage('<input> [options]')
//   .command('dev [targetDir]')
	.description('say rainbows')
  .option('-D, --debug [debug]', 'debug: boolean/string ', false)


    // wrapCommand(dev)(path.resolve(dir), { host, port })

// program
//   .arguments('<command>')
//   .action((cmd) => {
//     program.outputHelp()
//     console.log(`  ` + r(`Unknown command ${y(cmd)}.`))
//     console.log()
//   })

program.on('--help', () => {
  console.log()
  console.log(`  Run ${g(`<%= moduleName %> --help`)} for detailed usage of given command.`)
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
  program.outputHelp((t) =>{
		let all = t.split(require('os').EOL)
		return c(t)
	})
	process.exitCode = 1
	return
}

const log = twoLog(program.debug)

log.start(`Start <%= moduleName %> ..`)

log.text(program.args);

log.text(weOpts.get('name'));

log.stop(`<%= moduleName %> Done`,{ora:'succeed'})

function wrapCommand (fn) {
  return (...args) => {
    return fn(...args).catch(err => {
      console.error(r(err.stack))
      process.exitCode = 1
    })
  }
}
