import React from 'react';
// import {connect} from 'react-redux';
import AnimatedContainer from './containers/AnimatedContainer';

const App = ({store}) => {
	console.log('currentView is: ', store.getState().UIState.currentView);
	return (
		<div id="app">
				<AnimatedContainer store={store}/>
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
// const mapStateToProps = (state) => ({ ...state });
// Connect the component the Redux store.
// export default connect(
//   mapStateToProps
// )(App);

export default App;
