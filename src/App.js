import React from 'react';
import ButtonComponent from './components/buttonComponent';
// import handleEvent from './modules/handlers';
import testSomething from './actions'

const App = (store) => {
	const onItemClick = () =>{
    // event.currentTarget.style.backgroundColor = '#000';
		console.log(store);
	}
	return (
		<div className='row'>
			<h1>hello world</h1>
			<input type='text' className='form-control'/>
			<ButtonComponent
				id='testID'
				text='Hello'
				onClick={(store)=>onItemClick(store)}
			/>
			<ButtonComponent
				id='testID'
				text='Another'
				onClick={(store)=>testSomething(store)}
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
