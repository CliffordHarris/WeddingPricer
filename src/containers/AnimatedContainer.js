import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
// import TransitionGroup from 'react-addons-transition-group';
import MainView from './MainView';
import SecondView from './SecondView';

const AnimatedContainer = ({count, actions}) => {

	return {

		render() {
			let type = this.props;
			let view;

			switch (type.UIState.currentView) {

				case "MAIN":
					console.log('main here');
					view = <MainView count={count} actions={actions}/>
					break;

				case "SECOND_VIEW":
				console.log('second here');
					view = <SecondView actions={actions}/>
					break;

				default:
				console.log('default here');
					view = <MainView count={count} actions={actions}/>
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

AnimatedContainer.contextTypes = {
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
)(AnimatedContainer);
