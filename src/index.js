import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import defaults from './defaults';

import './styles/bootstrap/css/bootstrap.min.css';
import './styles/custom.css';

const store = createStore(
	reducers,
	defaults
);
let state = store.getState();

ReactDOM.render(
	<Provider store={store} >
		<App state={state}/>
	</Provider>,
	document.getElementById('root')
);
