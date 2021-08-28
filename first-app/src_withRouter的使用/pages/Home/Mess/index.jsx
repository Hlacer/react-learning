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

    showReplace = (id,title) =>{
        return ()=>{
            /*replace方式跳转+携带params参数*/
            //this.props.history.replace(`/home/mess/detial/${id}/${title}`)

            /*replace方式跳转+携带search参数*/
            //this.props.history.replace(`/home/mess/detial/?id=${id}&title=${title}`)

            /*replace方式跳转+携带state参数*/
            this.props.history.replace(`/home/mess/detial`,{id:id,title:title})
        }
    }

    showPush = (id,title) =>{
        return ()=>{
            /*push方式跳转+携带params参数*/
            //this.props.history.push(`/home/mess/detial/${id}/${title}`)

            /*push方式跳转+携带search参数*/
            //this.props.history.push(`/home/mess/detial/?id=${id}&title=${title}`)

            /*push方式跳转+携带state参数*/
            this.props.history.push(`/home/mess/detial`,{id:id,title:title})
        }
    }

    back = () =>{
        this.props.history.goBack()
    }

    forward = () =>{
        this.props.history.goForward()
    }

    go = () =>{
        this.props.history.go(-2)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.message.map((messObj)=>{
                            return(
                                <li key={messObj.id}>
                                    {/*向路由组件传递params参数*/}
                                    {/*<Link to={`/home/mess/detial/${messObj.id}/${messObj.title}`}>{messObj.title}</Link>*/}
                                    &nbsp;<button onClick={this.showPush(messObj.id,messObj.title)}>push查看</button>
                                    &nbsp;<button onClick={this.showReplace(messObj.id,messObj.title)}>replace查看</button>
                                    {/*/*向路由组件传递search参数*/}
                                    {/*<Link to={`/home/mess/detial/?id=${messObj.id}&title=${messObj.title}`}>{messObj.title}</Link>*/}

                                    {/*/*向路由组件传递state参数*/}
                                    <Link to={{pathname:'/home/mess/detial',state:{id:messObj.id,title:messObj.title}}}>{messObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*声明接收parmas参数*/}
                {/*<Route path='/home/mess/detial/:id/:title' component={Detial}/>*/}
                {/*search参数无需声明接收,正常注册路由即可*/}
                {/*state参数无需声明接收,正常注册路由即可*/}
                <Route path='/home/mess/detial' component={Detial}/>

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}