const proxy = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(proxy('/1.0/v_h5_5.1.2_33/contents', { 
  	target: 'http://app.lifevc.com',
  	host:"app.lifevc.com",
  	changeOrigin:true 
  }));
  app.use(proxy('/1.0/v_h5_5.1.2_33/Stroll', { 
  	target: 'http://newapi.lifevc.com',
  	host:"newapi.lifevc.com",
  	changeOrigin:true 
  }));
  app.use(proxy('/1.0/v_h5_5.1.2_33/categories', { 
    target: 'http://app.lifevc.com',
    host:"app.lifevc.com",
    changeOrigin:true 
  }));

app.use(proxy('/1.0/v_h5_5.1.2_33/contents', { 
	target: 'http://app.lifevc.com',
	host:"app.lifevc.com",
	changeOrigin:true 
	}));
app.use(proxy('/1.0/v_h5_5.1.2_33/Stroll', { 
	target: 'http://newapi.lifevc.com',
	host:"newapi.lifevc.com",
	changeOrigin:true 
	}));
app.use(proxy('/1.0/v_h5_5.1.2_33/items', {
	target: 'http://app.lifevc.com/',
	host: "app.lifevc.com",
	changeOrigin: true
}));
app.use(proxy('/1.0/v_h5_5.1.2_33/usercenters', {
	target: 'http://newapi.lifevc.com/',
	host: "newapi.lifevc.com",
	changeOrigin: true
}));
app.use(proxy('/upload', {
	target: 'http://i.lifevccdn.com',
	host: "i.lifevccdn.com",
	changeOrigin: true
}));

app.use(proxy('/api',{
	target:'localhost:10.2.157.89:8080',
	host: '10.2.157.89:8080',
	changeOrigin:true
}))

app.use(proxy('/1.0/v_h5_5.1.2_33/Categories', { 
  target: 'http://app.lifevc.com',
  host:"app.lifevc.com",
  changeOrigin:true 
}));


};
// http://newapi.lifevc.com/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true