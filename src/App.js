import React, { PropTypes } from 'react';

const App = () => {
	return {

		render () {
			return (
				<div className='row'>
					<h1>hello world</h1>
					<input type='text' className='form-control'/>
					<button type='button' placeholder='Testing' className='btn btn-default'>Test</button>
				</div>
			);
		}
	}
};

App.contextTypes = {
	store: PropTypes.object
};

export default App;
