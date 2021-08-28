import React,{Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types';
import header from './Header.module.css';

export default class Header extends Component{
    //对接收的props进行:类型/必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    /*键盘事件的回调*/
    handleKeyUp = (event) =>{
        /*判断是否按下回车*/
        if(event.keyCode !== 13){
            return
        }
        /*不能为空*/
        if(event.target.value.trim() === ''){
            alert('输入不得为空');
            return
        }
        //准备好一个todo对象
        const todoObj = {id:nanoid(),name:event.target.value,down:false}
        /*将todoObj传递给app*/
        this.props.addTodo(todoObj)
        /*清空*/
        event.target.value = ''
    }
    render() {
        return(
            <div className={header.header}>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}