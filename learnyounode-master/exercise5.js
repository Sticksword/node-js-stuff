#!/usr/bin/env node

var fs = require('fs')
var ext = new RegExp('.' + process.argv[3])

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
		if (ext.test(file))
			console.log(file)
	})
})

/*
OR
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
		if (path.extname(file) === '.' + process.argv[3])
			console.log(file)
	})
})
*/