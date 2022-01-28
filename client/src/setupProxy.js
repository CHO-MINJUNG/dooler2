const {createProxyMiddleware} = require('http-proxy-middleware');
const serverDomainUrl = 'https://dooler.kr';
const PORT = 8000;

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