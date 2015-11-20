/**
* External dependencies
*/
import React from 'react';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import BulkSelect from 'components/bulk-select';

module.exports = React.createClass( {
	displayName: 'BulkSelects',

	handleToggleAll( checkedState ) {
		let newElements = [];
		this.state.elements.forEach( element => {
			if ( typeof checkedState !== 'undefined' ) {
				element.selected = checkedState;
			} else {
				element.selected = ! element.selected;
			}
			newElements.push( element );
		} );
		this.setState( { elements: newElements } );
	},

	getInitialState() {
		return { elements: [ { title: 'Apples', selected: true }, { title: 'Oranges', selected: false } ] };
	},

	getSelectedElementsNumber: function() {
		return this.state.elements.filter( function( element ) {
			return element.selected;
		} ).length;
	},

	renderElements() {
		return this.state.elements.map( element => {
			const onClick = function() {
				element.selected = ! element.selected;
				this.forceUpdate();
			}.bind( this );
			return (
				<label >
					<input type="checkbox" onClick={ onClick } checked={ element.selected } />
					{ element.title }
				</label>
			);
		} );
	},

	render() {
		return (
			<div className="design-assets__group">
				<h2>
					<a href="/devdocs/design/bulk-selects">BulkSelects</a>
				</h2>
				<Card>
					<BulkSelect totalElements={ this.state.elements.length } selectedElements={ this.getSelectedElementsNumber() } onToggle={ this.handleToggleAll } />
					{ this.renderElements() }
				</Card>
			</div>
		);
	}
} );
