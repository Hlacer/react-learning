import React,{Component} from 'react'
import lists from './Lists.module.css'
export default class Lists extends Component{
    alerts=()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("是否删除?")){
            alert(666)
        }else {
            alert(77)
        }
    }
    render() {
        return(
            <ul>
                <li className={lists.default}>
                    <input type="checkbox"/>
                    <span className={lists.texts}>test</span>
                    <button className={lists.btn} onClick={this.alerts}>清除</button>
                </li>
                <li className={lists.default}>
                    <input type="checkbox"/>
                    <span className={lists.texts}>test</span>
                    <button className={lists.btn}>清除</button>
                </li>
                <li className={lists.default}>
                    <input type="checkbox"/>
                    <span className={lists.texts}>test</span>
                    <button className={lists.btn}>清除</button>
                </li>
            </ul>
        )
    }
}