import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
    /*检测redux中状态的改变，如果redux状态发生改变，就渲染整个app组件*/
})


