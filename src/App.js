import React from 'react';
import ButtonComponent from './components/buttonComponent';
import handleEvent from './modules/handlers';

const App = () => {
	const onItemClick = (event) =>{
    // event.currentTarget.style.backgroundColor = '#000';
		console.log(event, 'clicking');
	}
	return (
		<div className='row'>
			<h1>hello world</h1>
			<input type='text' className='form-control'/>
			<ButtonComponent
				id='testID'
				text='Hello'
				onClick={(event)=>onItemClick(event)}
			/>
			<ButtonComponent
				id='testID'
				text='Another'
				onClick={(event)=>handleEvent(event)}
			/>
		</div>
	);
};

// Type checking
const{
		object
} = React.PropTypes;

App.contextTypes = {
	store: object
};

export default App;
