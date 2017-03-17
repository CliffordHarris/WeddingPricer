import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

import MainView from './MainView';
import SecondView from './SecondView';

const AnimatedContainer = ({actions}) => {
	console.log('my actions', actions);
	return {
		render() {
			let type = this.props;
			let view;

			switch (type.UIState.currentView) {

				case "MAIN":
					console.log('main here');
					view = <MainView actions={actions} />
					break;

				case "SECOND_VIEW":
				console.log('second here');
					view = <SecondView actions={actions} />
					break;

				default:
				console.log('default here');
					view = <MainView actions={actions} />
					break;
			}

			return (
				<div>{view}</div>
			)
		}
	}
};

// Type checking
const{
		object, func
} = React.PropTypes;

AnimatedContainer.contextTypes = {
	store: object
};
AnimatedContainer.PropTypes = {
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
)(AnimatedContainer);
