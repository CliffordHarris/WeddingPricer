import React from 'react'; // eslint-disable-line no-unused-vars
import {findDOMNode} from 'react-dom';
import TweenMax from 'gsap';

import ButtonComponent from '../components/buttonComponent';

const SecondView = ({actions}) => {
	const style = {
		background: 'teal'
	}
	return{
		componentWillEnter (callback) {
			console.log(callback);
			const el = findDOMNode(this);
			TweenMax.fromTo(el, 1.0, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
		},

		componentWillLeave (callback) {
			console.log(callback);
			const el = findDOMNode(this);
			TweenMax.fromTo(el, 1.0, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
		},

		render () {
			return (
				<div style={style} id="secondView" className="box">
					<h1>Second View</h1>
					<ButtonComponent
						id='main_view'
						text='Load Main'
						onClick={()=>actions.loadMainView()}
					/>
				</div>

			)
		}
	}
};

export default SecondView;
