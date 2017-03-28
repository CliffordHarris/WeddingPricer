import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ButtonComponent from '../components/buttonComponent';
import * as Actions from '../actions';

import Anime from 'react-anime';

const PageDemoOne = ({actions}) => {

  const style = {
		background: 'gray',
    position: 'absolute',
    width: '100%',
    height: '100%',
	};

  return (
    <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
      <div style={style}>
        <h1>First</h1>
        <ButtonComponent
          id='main_view'
          buttonText='Load Second'
          onClick={()=>actions.loadSecondView()}
        />
      </div>
  </Anime>
  );
};

// Type checking
const{
		object, func
} = React.PropTypes;

PageDemoOne.contextTypes = {
	store: object
};

PageDemoOne.PropTypes = {
	actions: func
};

// Map the state to props.
const mapStateToProps = (state) => ({ ...state });

// Map the actions to props.
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDemoOne);
