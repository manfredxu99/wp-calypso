/**
 * External dependencies
 */
var page = require( 'page' ),
	config = require( 'config' );

/**
 * Internal dependencies
 */
var controller = require( './controller' );

module.exports = function() {
	if ( config.isEnabled( 'devdocs' ) ) {
		page( '/devdocs', controller.sidebar, controller.devdocs );
		page( '/devdocs/form-state-examples/:component?', controller.sidebar, controller.formStateExamples );
		page( '/devdocs/design/:component?', controller.sidebar, controller.design );
		page( '/devdocs/:path*', controller.sidebar, controller.singleDoc );
	}
};
