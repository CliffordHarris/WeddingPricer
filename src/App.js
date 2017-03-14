import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './actions';
import TransitionGroup from 'react-addons-transition-group';
import AnimatedContainer from './containers/AnimatedContainer';

const App = ({currentView, store}) => {
	console.log('currentView', store.getState().UIState.currentView);
	return (
		<div id="app">
			<TransitionGroup component='div'>
				<AnimatedContainer />
			</TransitionGroup>
		</div>
	)
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
