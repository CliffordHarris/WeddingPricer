import Constants from '../actions/Constants';

export default (store, action) => {

	switch (action.type) {

		case Constants.SET_MY_NUMBER:
		console.log('reducer SET_MY_NUMBER', action);
			return Object.assign({}, store, {
					UserInput: {
						...store.UserInput,
							guestCount: action.guestCount
					}
      });

		case Constants.LOAD_MAIN_VIEW:
		console.log('reducer LOAD_MAIN_VIEW');
			return Object.assign({}, store, {
				UIState:{
					...store.UIState,
					currentView: 'MAIN'
				}
			});

		case Constants.LOAD_SECOND_VIEW:
		console.log('reducer LOAD_SECOND_VIEW');
			return Object.assign({}, store, {
				UIState:{
					...store.UIState,
					currentView: 'SECOND_VIEW'
				}
			});

		default:
			console.log('reducer default');
			return Object.assign({}, store, {
					UIState: {
						...store.UIState,
							currentView: ''
					}
			});
	}; /* eslint no-unreachable: 0 */
};
