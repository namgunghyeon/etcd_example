const Etcd = require('node-etcd');
const etcd = new Etcd('192.168.56.210:2379');
const watcher = etcd.watcher('message');

watcher.on('change', (message) => {
    console.log('change message', message);
});
