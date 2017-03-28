import React from 'react'; // eslint-disable-line no-unused-vars
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Anime from 'react-anime';

import ButtonComponent from '../components/buttonComponent';

const SecondView = ({actions}) => {
	const style = {
		background: 'teal'
	}
	return (
		<Anime opacity={[0, 1]} translateY={'1em'} easing={'easeInOutExpo'} duration={450}>
			<div style={style} id="secondView" className="box">
				<h1>Second View</h1>
				<ButtonComponent
					id='main_view'
					buttonText='Load Main'
					onClick={()=>actions.loadMainView()}
				/>
			</div>
		</Anime>
	)
};

// Type checking
const{
		object, func
} = React.PropTypes;

SecondView.contextTypes = {
	store: object,
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
)(SecondView);
