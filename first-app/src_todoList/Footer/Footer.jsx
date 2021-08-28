import React,{Component} from 'react'
import './Footer.css'

export default class Footer extends Component{
    /*全选的回调*/
    checkAll = (event) =>{
        this.props.checkAll(event.target.checked)
    }
    /*删除所有的回调*/
    deleteAll = () =>{
        this.props.deleteAll()
    }
    render() {
        const {todos} = this.props
        /*已完成个数*/
        const downCount = todos.reduce((pre,todo) =>{return pre + (todo.down ? 1 : 0)},0)
        /*总数*/
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAll} checked={downCount === total && total !== 0}/>
                </label>
                <span>
                  <span>已完成{downCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.deleteAll}>清除已完成任务</button>
            </div>
        );
    }
}