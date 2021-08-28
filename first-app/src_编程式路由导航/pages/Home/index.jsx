import React, { Component } from 'react'
import Mess from "./Mess";
import News from "./News";
import MyNavLink from "../../components/MyNavLink";
import {Route,Switch,Redirect} from "react-router-dom";

export default class Home extends Component{
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/mess'>Message</MyNavLink>
                        </li>
                    </ul>
                    {/*注册标签*/}
                    <Switch>
                        <Route path='/home/news'  component={News}/>
                        <Route path='/home/mess'  component={Mess}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        );
    }
}