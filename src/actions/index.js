import Constants from './Constants';

export const loadMainView = () =>({
		type: Constants.LOAD_MAIN_VIEW
});

export const loadSecondView = () =>({
		type: Constants.LOAD_SECOND_VIEW
});

export const setMyNumber = (guestCount) =>({
		type: Constants.SET_MY_NUMBER,
		guestCount
});
