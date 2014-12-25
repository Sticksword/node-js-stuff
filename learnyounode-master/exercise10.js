#!/usr/bin/env node

var net = require('net')

function zero (i) {
	return (i < 10 ? '0' : '') + i
}

function getTime () {
	var day = new Date()
	return day.getFullYear() + '-' + zero(day.getMonth() + 1) + '-'
		+ zero(day.getDate()) + ' ' + zero(day.getHours()) + ':'
		+ zero(day.getMinutes())
}

var server = net.createServer( function callback (socket) {
	socket.end(getTime() + '\n')
})
server.listen(Number(process.argv[2]))