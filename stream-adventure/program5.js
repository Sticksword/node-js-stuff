#!/usr/bin/env node

var through = require('through'),
	split = require('split'),
	count = 1

function write (buffer) {
	this.queue(buffer.toString()[
		count++ % 2 === 0 ? 'toUpperCase' : 'toLowerCase']() + '\n')
}

process.stdin
	.pipe(split())
	.pipe(through(write))
	.pipe(process.stdout)