import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import SecondView from './SecondView'

const AnimatedContainer = () => {

	render(
		switch (type) {
			case 'SECOND_VIEW':
			view = <SecondView/>;
			break;

			default:
			break;

		}
	);
};

export default AnimatedContainer;
