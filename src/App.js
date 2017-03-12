import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ButtonComponent from './components/buttonComponent';
import NumberInputComponent from './components/numberInputComponent';
import * as Actions from './actions';

const App = ({count, actions}) => {
	const handleNumberChange = (e) => {
		console.log('handleNumberChange', actions);
    actions.setMyNumber(parseInt(e.target.value, 10));
  };

	const someValue = 999;

	return (
		<div className='row'>
			<h1>hello world</h1>
			<input type='text' className='form-control'/>
			<ButtonComponent
				id='testID'
				text='Testing'
				onClick={()=>actions.initSomething(someValue)}
			/>
			<NumberInputComponent
				labelText='Guest'
				onChange={(e)=>handleNumberChange(e, actions, count)}
				value={count}
				id='testInput'
				inputType='number'
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

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
