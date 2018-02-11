const fs = require('fs');

const config = {
    "mojo": {
        "webqq": {
            // openqq plugin local port
            "openqq": 5003
        }
    },

    // local http server port, FFM plugin will send messages to this port
    "local_port": 5004,

    // client config file, must be a valid json, do not need to edit it manually
    "client_config": "client.json",

    // http server port for client
    "port": 5005,

    // http proxy, FFM will connect to Google FCM Server with this proxy if you set it.
    //"push_proxy": 'http://127.0.0.1:8080',

    // hostname, 0.0.0.0 default (IPv4)
    /*"hostname": "",*/

    // basic auth config, see https://github.com/http-auth/http-auth#configuration
    /*"basic_auth": {
        "file": ""
    },*/

    // https config, see https://nodejs.org/dist/latest/docs/api/https.html
    /*"https": {
        "key": fs.readFileSync(""),
        "cert": fs.readFileSync("")
    }*/
};

module.exports = config;
