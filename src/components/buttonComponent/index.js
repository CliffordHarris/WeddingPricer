import React, { PropTypes } from 'react';

const ButtonComponent = ({text}) => {
	return (
    <button type='button' placeholder={text} className='btn btn-default'>
      {text}
    </button>
	)
};

ButtonComponent.contextTypes = {
	store: PropTypes.object
};

export default ButtonComponent;
