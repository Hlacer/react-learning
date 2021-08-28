/* 引入react核心库 */
import React from 'react';
/* 引入reactdom  */
import ReactDOM from 'react-dom';
import App from '../src_todoList/App.jsx';

/* 渲染组件到页面 */
ReactDOM.render(
  <React.StrictMode>
	<App/>
  </React.StrictMode>,
  document.getElementById('root')
);
//React.StrictMode会检查app以及子组件内容是否合理
