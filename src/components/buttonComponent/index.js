import React from 'react';

const ButtonComponent = ({id, buttonText, onClick}) => {
	return (
    <button
			id={id}
			placeholder={buttonText}
			className='btn btn-default'
			onClick={onClick}
		>
      {buttonText}
    </button>
	)
};

// Type checking
const {
	string, func
} = React.PropTypes;

ButtonComponent.conbuttonTextTypes = {
	onClick: func,
	buttonText: string,
	className: string
};

export default ButtonComponent;
