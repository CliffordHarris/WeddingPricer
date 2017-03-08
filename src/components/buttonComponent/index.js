import React from 'react';

const ButtonComponent = ({id, text, onClick}) => {
	return (
    <button
			id={id}
			placeholder={text}
			className='btn btn-default'
			onClick={onClick}
		>
      {text}
    </button>
	)
};

// Type checking
const {
	string, func
} = React.PropTypes;

ButtonComponent.contextTypes = {
	onClick: func,
	text: string,
	className: string
};

export default ButtonComponent;
