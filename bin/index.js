#!/usr/bin/env node

const program = require('commander')

program.version(require('../package').version, '-v, --version', 'output the current version')

program
    .command('start')
    .description('launch tv-remote-control')
    .option('-p --port <port>', 'specified port')
    .action((options) => {
        const { setPort } = require('../src/app.js')
        setPort(options.port)
})

program.parse(process.argv)
