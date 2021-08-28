import React,{ Component } from 'react'
import Detial from "./Detial/Detial";
import {Link,Route} from "react-router-dom";
export default class Mess extends Component{
    state = {
        message:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
            {id:'04',title:'消息4'},
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.message.map((messObj)=>{
                            return(
                                /*向路由组件传递params参数*/
                                <li key={messObj.id}>
                                    <Link to={`/home/mess/detial/${messObj.id}/${messObj.title}`}>{messObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*声明接收parmas参数*/}
                <Route path='/home/mess/detial/:id/:title' component={Detial}/>
            </div>
        );
    }
}