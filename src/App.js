import React, { Component, PropTypes } from 'react';

const App = () => {
	return {
		...Component.prototype,

		render () {
			return (
				<div id='app'>
					hello world
				</div>
			);
		}
	}
};

App.contextTypes = {
	store: PropTypes.object
};

export default App;
