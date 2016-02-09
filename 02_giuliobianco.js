var net = require('net');
var server = net.createServer(respond);

function respond(socket){
	d = newDate();
	socket.end(d.toString());
}
