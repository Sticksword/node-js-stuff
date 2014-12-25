#!/usr/bin/env node

var concat = require('concat-stream')

process.stdin.pipe(concat(function (buffer) {
	var line = buffer.toString().split('').reverse().join('') + '\n'
	process.stdout.write(line)
}))