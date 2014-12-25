#!/usr/bin/env node

var through = require('through')
var trumpet = require('trumpet')

function transform (buffer) {
	this.queue(buffer.toString().toUpperCase())
}

var tr = trumpet()

var stream = tr.selectAll('.loud').createStream()
stream.pipe(through(transform)).pipe(stream)
process.stdin.pipe(tr).pipe(process.stdout)