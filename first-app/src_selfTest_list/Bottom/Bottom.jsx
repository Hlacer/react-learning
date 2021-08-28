import React,{Component} from 'react'
import bottom from './Bottom.module.css'

export default class Bottom extends Component{
    render() {
        return (
            <ul>
                <li className={bottom.default}>
                    <input type="checkbox"/>
                    <span className={bottom.text}>已完成0 / 全部3</span>
                </li>
            </ul>
        );
    }
}