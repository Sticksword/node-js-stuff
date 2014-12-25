#!/usr/bin/env node

var http = require('http'),
	through = require('through')

function transform(buffer) {
	this.queue(buffer.toString().toUpperCase())
}

function callback(req, res) {
	if(req.method !== 'POST') {
		res.end('POST something!')
		return
	}
	req.pipe(through(transform)).pipe(res)
}

var server = http.createServer(callback)
server.listen(process.argv[2])