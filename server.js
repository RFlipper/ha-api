#!/usr/bin/env nodejs
var HAApi = require('./ha-api'),
	haapi = new HAApi({
		//socket : '/run/haproxy/admin.sock',
		socket: {
			host : '127.0.0.1',
			port : 1234
		},
		apiPort : 1111
	})

