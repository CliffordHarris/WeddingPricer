// import actionConstants from './Constants';
export const INIT_SOMETHING = 'INIT_SOMETHING';
export const SET_MY_NUMBER = 'SET_MY_NUMBER';

export const initSomething = (guest) =>({
		// type: actionConstants.INIT_SOMETHING,
		type: INIT_SOMETHING,
		guest
});

export const setMyNumber = (count) =>({
		type: SET_MY_NUMBER,
		count
});
