import React, { PropTypes } from 'react';
import ButtonComponent from './components/buttonComponent'

const App = () => {
	return (
		<div className='row'>
			<h1>hello world</h1>
			<input type='text' className='form-control'/>
			<ButtonComponent
				onClick = test();
				text='Hello'
			/>
		</div>
	);
};

App.contextTypes = {
	store: PropTypes.object
};

export default App;
