import Constants from './Constants';
// export const INIT_SOMETHING = 'INIT_SOMETHING';
// export const SET_MY_NUMBER = 'SET_MY_NUMBER';

export const initSomething = (guest) =>({
		type: Constants.INIT_SOMETHING,
		guest
});

export const loadSecondView = () =>({
		type: Constants.LOAD_SECOND_VIEW
});

export const setMyNumber = (count) =>({
		type: Constants.SET_MY_NUMBER,
		count
});
