import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ButtonComponent from './components/buttonComponent';
import NumberInputComponent from './components/numberInputComponent';
import * as Actions from './actions';
// import TransitionGroup from 'react-addons-transition-group';
import SecondView from './containers/SecondView';

const App = ({count, actions}) => {
	// TODO: Do you even debounce brah???
	const handleNumberChange = (event) => {
		let num = parseInt(event.target.value, 10);
		if(!isNaN(num)){
			actions.setMyNumber(num);
		}else{
			// TODO: Handle NaN
			// alert('Please enter a number.')
		}
	};

	// Just testing stuff
	const someValue = 999;

	return {

		render() {
			let type = this.props;
			let view;

			console.log('type', type);

			switch (type.UIState.currentView) {

				case "MAIN":
					console.log('main here');
					view = <div>
						<h1>hello world</h1>
						<input type='text' className='form-control'/>
						<ButtonComponent
							id='main_view'
							text='Main'
							onClick={()=>actions.loadMainView()}
						/>
						<ButtonComponent
							id='second_view'
							text='Second View'
							onClick={()=>actions.loadSecondView()}
						/>
						<NumberInputComponent
							labelText='Guest'
							onChange={(event)=>handleNumberChange(event)}
							value={count}
							id='testInput'
							inputType='number'
						/>
					</div>
					break;

				case "SECOND_VIEW":
				console.log('second here');
					view = <SecondView/>
					break;

				default:
				console.log('default here');
					view = <div>
						<h1>hello world</h1>
						<input type='text' className='form-control'/>
						<ButtonComponent
							id='testID'
							text='Testing'
							onClick={()=>actions.initSomething(someValue)}
						/>
						<ButtonComponent
							id='testID'
							text='Second View'
							onClick={()=>actions.loadSecondView()}
						/>
						<NumberInputComponent
							labelText='Guest'
							onChange={(event)=>handleNumberChange(event)}
							value={count}
							id='testInput'
							inputType='number'
						/>
					</div>
					break;
			}

			return <div className='row'> {view} </div>
		}
	}
};

// Type checking
const{
		object
} = React.PropTypes;

App.contextTypes = {
	store: object
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
)(App);
