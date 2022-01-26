const {createProxyMiddleware} = require('http-proxy-middleware');
const serverDomainUrl = 'http://localhost';
const PORT = 5000;

const serverUrl = serverDomainUrl+':'+PORT;

module.exports = function (app) {

    app.use(
        '/api',
        createProxyMiddleware({
            target: serverUrl,
            changeOrigin: true
        })
    );
};