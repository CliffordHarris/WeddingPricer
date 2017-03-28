import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Anime from 'react-anime';

import ButtonComponent from '../components/buttonComponent';
import NumberInputComponent from '../components/numberInputComponent';

const MainView = ({actions, store}) => {
	console.log('Main');
	const style = {
		background: 'teal'
	};

	// TODO: Do you even debounce brah???
	const handleNumberChange = (event) => {
		let guestCount = parseInt(event.target.value, 10);
		if(!isNaN(guestCount)){

			console.log(store);
			actions.setMyNumber(guestCount);
			// return Object.assign({}, store, {
			// 		UserInput: {
			// 			...store.UserInput,
			// 				guestCount: action.guestCount
			// 		}
      // });
		}else{
			// TODO: Handle NaN
			// alert('Please enter a number.')
		}
	};

	return (
		<Anime opacity={[0, 1]} translateY={'1em'} easing={'easeInOutExpo'} duration={450}>
			<div style={style} id="mainView" className="box">
				<h1>Main View</h1>
				<ButtonComponent
					id='main_view'
					buttonText='Load Second'
					onClick={()=>actions.loadSecondView()}
				/>
				<NumberInputComponent
					labelText='Guest'
					onChange={(event)=>handleNumberChange(event)}
					id='testInput'
					inputType='number'
				/>
			</div>
		</Anime>
	)
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

// export default MainView;
