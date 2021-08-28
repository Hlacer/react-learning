//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
/*引入路由*/
import {BrowserRouter,HashRouter} from 'react-router-dom'
//引入App
import App from './App'

ReactDOM.render(
    <BrowserRouter>{/*解决样式丢失*/}
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)