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
	defaults, 
	window.devToolsExtension && window.devToolsExtension()
);
let frame = Object.assign({}, store.getState());

ReactDOM.render(
	<Provider store={store} >
		<App frame={frame}/>
	</Provider>,
	document.getElementById('root')
);
