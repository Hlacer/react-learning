import React,{Component} from 'react'
import './Item.css'
export default class Items extends Component{
    /*标识鼠标移入移出*/
    state={
        mouse:false
    }

    /*鼠标移入移出的回调*/
    handleMouse = (flag) =>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    /*勾选,取消某一个todo的回调*/
    handleCheck = (id) =>{
        return (event)=>{
            this.props.changeTodo(id,event.target.checked)
        }
    }

    /*删除一个todo的回调*/
    deleteTodo = (id) =>{
        return ()=>{
            //eslint-disable-next-line no-restricted-globals
            if(window.confirm("是否删除")){
                this.props.deleteTodo(id)
            }
        }
    }

    render() {
        const {id,name,down} = this.props
        return(
            <li style={{backgroundColor:this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={down} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                {/* eslint-disable-next-line no-undef */}
                <button onClick={this.deleteTodo(id)} className="btn btn-danger" style={{display:this.state.mouse ? "block" : 'none'}}>删除</button>
            </li>
        )
    }
}