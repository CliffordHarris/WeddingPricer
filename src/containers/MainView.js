import React from 'react'; // eslint-disable-line no-unused-vars
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

import ButtonComponent from '../components/buttonComponent';
import NumberInputComponent from '../components/numberInputComponent';

const MainView = ({actions}) => {
	console.log('hello actions', actions);
	const style = {
		background: 'gray'
	};

	// TODO: Do you even debounce brah???
	const handleNumberChange = (event) => {
		let guestCount = parseInt(event.target.value, 10);
		if(!isNaN(guestCount)){
			actions.setMyNumber(guestCount);
		}else{
			// TODO: Handle NaN
			// alert('Please enter a number.')
		}
	};

	return{
		componentWillMount() {
      console.log('MainView Component WILL MOUNT!')
   },

   componentDidMount() {
      console.log('MainView Component DID MOUNT!')
   },

   componentWillReceiveProps(newProps) {
      console.log('MainView Component WILL RECIEVE PROPS!')
   },

   shouldComponentUpdate(newProps, newState) {
		 console.log('MainView shouldComponentUpdate!')
      return true;
   },

   componentWillUpdate(nextProps, nextState) {
      console.log('MainView Component WILL UPDATE!');
   },

   componentDidUpdate(prevProps, prevState) {
      console.log('MainView Component DID UPDATE!')
   },

   componentWillUnmount() {
      console.log('MainView Component WILL UNMOUNT!')
   },

		render () {
			return (
				<div style={style} id="mainView" className="box">
					<h1>Main View</h1>
					<ButtonComponent
						id='main_view'
						buttonText='Load Main'
						onClick={()=>actions.loadSecondView()}
					/>
					<NumberInputComponent
						labelText='Guest'
						onChange={(event)=>handleNumberChange(event)}
						id='testInput'
						inputType='number'
					/>
				</div>
			)
		}
	}
};

// Type checking
const{
		object, func
} = React.PropTypes;

MainView.contextTypes = {
	store: object
};

MainView.PropTypes = {
	actions: func
};

// Map the state to props.
const mapStateToProps = (state) => ({ ...state });

// Map the actions to props.
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

// Connect the component the Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
