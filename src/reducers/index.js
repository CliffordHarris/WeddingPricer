// import {INIT_SOMETHING, SET_MY_NUMBER} from '../actions'
import Constants from '../actions/Constants';

export default (state = {}, action) => {
	switch (action.type) {
		case Constants.INIT_SOMETHING:
			return Object.assign({}, state, {
					UserInput: {
						...state.UserInput,
							guestCount: action.guest
					}
      });

			case Constants.SET_MY_NUMBER:
				return Object.assign({}, state, {
						UserInput: {
							...state.UserInput,
								guestCount: action.count
						}
	      });

		default:
			console.log('default state');
			return state;
	}; /* eslint no-unreachable: 0 */
};
