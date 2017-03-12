// import {INIT_SOMETHING, SET_MY_NUMBER} from '../actions'
import Constants from '../actions/Constants';
// import CashMeOutside from '../modules/CashMeOutside';

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

				case Constants.LOAD_SECOND_VIEW:
					return Object.assign({}, state, {
						UIState:{
							...state.UIState,
							currentView: 'SECOND_VIEW'
						}
					});

		default:
			// viewStack = [{
			// 	type: 'MAIN'
			// }];
			console.log('default state');
			return Object.assign({}, state, {
					UIState: {
						...state.UIState,
							currentView: 'MAIN'
					}
			});
			// return state;
	}; /* eslint no-unreachable: 0 */
};
