/**
 * Docusaurus plugin that adds webpack resolve.fallback for Node.js core modules
 * required by postman-code-generators (used by docusaurus-plugin-openapi-docs).
 * Webpack 5 no longer polyfills these by default for the client bundle.
 */
module.exports = function () {
	return {
		name: 'webpack-fallbacks',
		configureWebpack() {
			return {
				resolve: {
					fallback: {
						path: require.resolve('path-browserify'),
					},
				},
			};
		},
	};
};
