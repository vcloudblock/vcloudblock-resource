const VCloudBlockResourceServer = require('../index');
const clc = require('cli-color');

const resourceServer1 = new VCloudBlockResourceServer();
const resourceServer2 = new VCloudBlockResourceServer();
const resourceServer3 = new VCloudBlockResourceServer();

// Test performance when launching multiple servers
resourceServer1.listen();
resourceServer2.listen();
resourceServer3.listen(20113);

resourceServer1.on('error', err => {
    console.error(clc.red(`ERR!: Resource Server 1: Resource server error: ${err}`));
});

resourceServer2.on('error', err => {
    console.error(clc.red(`ERR!: Resource Server 2: Resource server error: ${err}`));
});

resourceServer3.on('error', err => {
    console.error(clc.red(`ERR!: Resource Server 3: Resource server error: ${err}`));
});
