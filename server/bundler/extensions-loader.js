const existsSync = require( 'fs' ).existsSync;
const path = require( 'path' );
const camelCase = require( 'lodash' ).camelCase;

function getReducers( extensions = {} ) {
	return extensions
		.filter( ( extension ) => existsSync( path.join( 'client', 'extensions', extension, 'state', 'reducer.js' ) ) )
		.map( ( extension ) => `'${ camelCase( extension ) }': require( 'extensions/${ extension }/state/reducer' )\n` );
}

function getExtensionsModule( extensions ) {
	return `module.exports = {
		reducers: function() {
			return {
				${ getReducers( extensions ) }
			};
		}
	};
`;
}

module.exports = function( content ) {
	this.cacheable && this.cacheable();

	const extensions = require( this.resourcePath );

	if ( ! Array.isArray( extensions ) ) {
		this.emitError( 'Extensions module is not an array' );
		return content;
	}

	return getExtensionsModule( extensions );
};

