import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';

const SecondView = () => {
	let style = {
		background: 'red',
		height: '100%',
		width: '100%'
	}
	render(
		<div style={style}>
			<p>Hello</p>
		</div>
	);
};

export default SecondView;
