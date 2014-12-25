#!/usr/bin/env node

var http = require('http')
var map = require('through2-map')

var server = http.createServer( function (req, res) {
	if (req.method != 'POST')
		return res.end('NOT A POST REQUEST')
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})
server.listen(process.argv[2])