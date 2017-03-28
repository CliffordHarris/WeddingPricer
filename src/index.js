import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reducers from './reducers';
import defaults from './defaults';

import './styles/bootstrap/css/bootstrap.min.css';
import './styles/custom.css';

const store = createStore(
	reducers,
	defaults,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById('root');

console.log('===index===');
render(
	<Provider store={store} >
		<App store={store}/>
	</Provider>,
	rootElement
);
