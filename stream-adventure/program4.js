#!/usr/bin/env node

var through = require('through')
var transform = through(to_upper, end)

function to_upper(buffer) {
	this.queue(buffer.toString().toUpperCase())
}

function end () {
	this.queue(null)
}

process.stdin
	.pipe(transform)
	.pipe(process.stdout)