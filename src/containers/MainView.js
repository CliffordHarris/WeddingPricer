import React from 'react'; // eslint-disable-line no-unused-vars
import {findDOMNode} from 'react-dom';
import TweenMax from 'gsap';

import ButtonComponent from '../components/buttonComponent';
import NumberInputComponent from '../components/numberInputComponent';

const MainView = ({count, actions}) => {
	const style = {
		background: 'gray'
	};

	// TODO: Do you even debounce brah???
	const handleNumberChange = (event) => {
		let num = parseInt(event.target.value, 10);
		if(!isNaN(num)){
			actions.setMyNumber(num);
		}else{
			// TODO: Handle NaN
			// alert('Please enter a number.')
		}
	};

	return{
		componentWillEnter (callback) {
			console.log(callback);
			const el = findDOMNode(this);
			TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
		},

		componentWillLeave (callback) {
			console.log(callback);
			const el = findDOMNode(this);
			TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
		},

		render () {
			return (
				<div style={style} id="mainView" className="box">
					<h1>Main View</h1>
					<ButtonComponent
						id='main_view'
						text='Load Main'
						onClick={()=>actions.loadSecondView()}
					/>
					<NumberInputComponent
						labelText='Guest'
						onChange={(event)=>handleNumberChange(event)}
						value={count}
						id='testInput'
						inputType='number'
					/>
				</div>

			)
		}
	}
};

export default MainView;
