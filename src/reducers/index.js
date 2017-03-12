import {INIT_SOMETHING, SET_MY_NUMBER} from '../actions'

export default (state = {}, action) => {
	switch (action.type) {
		case INIT_SOMETHING:
			return Object.assign({}, state, {
					UserInput: {
						...state.UserInput,
							guestCount: action.guest
					}
      });

			case SET_MY_NUMBER:
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
