#!/usr/bin/env node

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (request) {
	request.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})