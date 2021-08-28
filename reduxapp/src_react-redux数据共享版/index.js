import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>{/*会自动传store*/}
        <App/>
    </Provider>,
    document.getElementById('root')
);


