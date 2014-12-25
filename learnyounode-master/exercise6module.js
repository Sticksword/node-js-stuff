#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

module.exports = function (directory, extension, callback ){
	var filelist = new Array()
	var i = 0

	fs.readdir(directory, function (err, list) {
		if (err){
			return callback(err);
		}
		list.forEach(function (file) {
			if (path.extname(file) === '.' + extension)
				filelist.push(file)
			i += 1
		})
		return callback(null, filelist)
	})
}