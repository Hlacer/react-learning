import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import {Provider} from 'react-redux' /*此处需要用provider包裹app,目的是让app的后代容器组件都能接收到store,不用一个一个写*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


