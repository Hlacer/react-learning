/*只有在模块react中有如下 export const Component = React.Component命名导出是C才可以用{}方式导入*/
import React,{Component} from 'react'
import app from './App.module.css'
import Header from "./Header/Header";
import Lists from "./Lists/Lists";
import Bottom from "./Bottom/Bottom";


/* 创建并暴露app组件 */
export default class App extends Component{
    render() {
        return (
            <div className={app.outbox}>
                <Header/>
                <Lists/>
                <Bottom/>
            </div>
        )
    }
}

