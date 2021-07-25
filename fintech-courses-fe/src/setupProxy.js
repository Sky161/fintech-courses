const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	const args = process.argv.slice(2).map(arg => arg.split('='));
	const platformTuple = args.find(tuple => tuple[0] === 'platform') || [];
	const platform = platformTuple[1];

	const target = platform === 'local' ? ' http://localhost:8080' : 'https://fintech-courses.herokuapp.com';

	app.use(
		'/api',
		createProxyMiddleware({
			target,
			changeOrigin: true,
			secure: true,
		}),
	);
};
