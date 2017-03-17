import React from 'react';

// TODO: Figure out where to put styles.
// Seperate file within the component folder perhaps?
const style = {
  margin: '10px 0'
};

const NumberInputComponent = ({labelText, onChange, count, inputType}) => {
  return (
    <div style={style}>
      <label>
        {labelText}
        <input
          onChange={onChange}
          type={inputType}
          min='0'/>
      </label>
    </div>
  );
};

// Type checking
const {
	string, func
} = React.PropTypes;

NumberInputComponent.contextTypes = {
	onChange: func,
	labelText: string
};

export default NumberInputComponent;
