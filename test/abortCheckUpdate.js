const VCloudBlockResourceServer = require('../index');
const clc = require('cli-color');
const {AbortController} = require('node-abort-controller');

const resourceServer = new VCloudBlockResourceServer();
const controller = new AbortController();

// Test the check update abort funciton.
resourceServer.checkUpdate({signal: controller.signal})
    .then(info => {
        console.log('check update info:', info);
    })
    .catch(err => {
        console.error(clc.red(`ERR!: Check update failed: ${err}`));
    });

// Abort the check update
setTimeout(() => {
    controller.abort();
}, 0);
