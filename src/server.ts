import * as net from 'net';

const host = "127.0.0.1";
const port = 3333;

const server = net.createServer((socket) => {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(port, host);
