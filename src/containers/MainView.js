import React from 'react'; // eslint-disable-line no-unused-vars
// import {findDOMNode} from 'react-dom';
// import TweenMax from 'gsap';

import ButtonComponent from '../components/buttonComponent';
import NumberInputComponent from '../components/numberInputComponent';

const startAnimation = (component) => {
	console.log('my component', component);
};

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
			// console.log(findDOMNode(this));
			// console.log(callback);
			// const el = findDOMNode(this);
			console.log('will enter');
			try {
				console.log('trying componentWillEnter');
				startAnimation(this);
			} catch (e) {
				console.error(e.message);
				callback();
			}
			// TweenMax.fromTo(el, 1.0, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
		},

		componentWillLeave (callback) {
			console.log('will leave');
			try {
				console.log('trying componentWillLeave');
				startAnimation(this);
			} catch (e) {
				console.error(e.message);
				callback();
			}
			// console.log(findDOMNode(this));
			// console.log(callback);
			// const el = findDOMNode(this);
			// TweenMax.fromTo(el, 1.0, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
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
