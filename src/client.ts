import * as net from 'net';

const host = "127.0.0.1";
const port = 3333;
const client = new net.Socket();

client.connect(port, host, () => {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});
client.on('data', (data) => {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});
client.on('close', () => {
    console.log('Connection closed');
});
