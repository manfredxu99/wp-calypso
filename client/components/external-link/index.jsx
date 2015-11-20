/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';
import assign from 'lodash/object/assign';

/**
 * Internal dependencies
 */
import Gridicon from 'components/gridicon';

export default React.createClass( {

	displayName: 'ExternalLink',

	mixins: [ React.addons.PureRenderMixin ],

	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		onClick: React.PropTypes.func,
		icon: React.PropTypes.bool
	},

	render() {
		let children = [];
		children.push( this.props.children );
		if ( this.props.icon ) {
			children.push( <Gridicon icon="external" size={ 18 } /> );
		}

		const classes = classnames( 'external-link', this.props.className, {
			'has-icon': !! this.props.icon,
		} );

		const props = assign( {}, this.props, {
			className: classes,
			rel: 'external'
		} );
		return React.createElement( 'a', props, children );
	}
} );
