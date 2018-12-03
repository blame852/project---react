const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/gateway', { 
  	target: 'https://m.maizuo.com',
  	host:"m.maizuo.com",
  	changeOrigin:true 
  }));
};