import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ButtonComponent from '../components/buttonComponent';
import * as Actions from '../actions';

import Anime from 'react-anime';

const PageDemoTwo = ({actions}) => {

  const style = {
		background: 'red',
    position: 'absolute',
    width: '100%',
    height: '100%'
    // left: '20px'
	};

  return (
    <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
    <div style={style}>
      <h1>Second</h1>
      <ButtonComponent
        id='main_view'
        buttonText='Load Main'
        onClick={()=>actions.loadMainView()}
      />
    </div>
  </Anime>
  );
};

// Type checking
const{
		object, func
} = React.PropTypes;

PageDemoTwo.contextTypes = {
	store: object,
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
)(PageDemoTwo);
