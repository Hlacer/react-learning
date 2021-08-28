import React,{Component} from 'react'
import header from './Header.module.css'

export default class Header extends Component{
    render() {
        return(
            <input className={header.inputs} type="text" placeholder='请输入要添加的事情,按回车确认'/>
        )
    }
}