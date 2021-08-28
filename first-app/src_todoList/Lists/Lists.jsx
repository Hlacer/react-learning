import React,{Component} from 'react'
import Items from "../item/Item";
import lists from './Lists.module.css';
import PropTypes from "prop-types";
export default class Lists extends Component{
    //对接收的props进行:类型/必要性的限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        changeTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        // eslint-disable-next-line no-unused-vars
        const {todos,changeTodo,deleteTodo} = this.props
        return(
            <ul className={lists.main}>
                {
                    todos.map((todo)=> {
                        return <Items key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}