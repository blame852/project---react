const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/1.0/v_h5_5.1.2_33', { 
  	target: 'http://app.lifevc.com',
  	host:"app.lifevc.com",
  	changeOrigin:true 
  }));
  app.use(proxy('/1.0', { 
  	target: 'http://newapi.lifevc.com',
  	host:"newapi.lifevc.com",
  	changeOrigin:true 
  }));
};
// http://newapi.lifevc.com/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true