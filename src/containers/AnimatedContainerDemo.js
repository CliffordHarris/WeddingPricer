import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

// import Overdrive from 'react-overdrive';

import PageDemoOne from '../containers/pageDemoOne';
import PageDemoTwo from '../containers/pageDemoTwo';

const AnimatedContainerDemo = ({actions, view}) => {
  console.log('AnimatedContainerDemo');
	return {
		render() {
			let type = this.props;
			let view;

			switch (type.UIState.currentView) {

				case "MAIN":
					console.log('main here');
					view = <PageDemoOne actions={actions} />
					break;

				case "SECOND_VIEW":
				console.log('second here');
					view = <PageDemoTwo actions={actions} />
					break;

				default:
				console.log('default here');
					view = <PageDemoOne actions={actions} />
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

AnimatedContainerDemo.contextTypes = {
	store: object
};
AnimatedContainerDemo.PropTypes = {
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
)(AnimatedContainerDemo);
