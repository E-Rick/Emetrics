const proxy = require('http-proxy-middleware');
/* 
	Setups the proxy to connect the front end to the backend node server in development environment 
	Note: No proxy needed for production environment 
*/
module.exports = function(app) {
	app.use(proxy(['/api', '/auth/google', '/auth/facebook'], { target: 'http://localhost:5000' }));
};
