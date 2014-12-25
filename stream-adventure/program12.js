#!/usr/bin/env node

var duplex = require('duplexer')
var through = require('through')

module.exports = function (counter) {
	var counts = {}
	return duplex(through(record_count, set_count), counter)

	function record_count (obj) {
		counts[obj.country] = (counts[obj.country] || 0) + 1
	}

	function set_count() {
		counter.setCounts(counts)
	}
}