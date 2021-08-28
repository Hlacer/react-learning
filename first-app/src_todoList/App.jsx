/*只有在模块react中有如下 export const Component = React.Component命名导出是C才可以用{}方式导入*/
import React,{Component} from 'react'
import Header from "./Header/Header";
import Lists from "./Lists/Lists";
import Footer from "./Footer/Footer";
import './App.css'

/* 创建并暴露app组件 */
export default class App extends Component{
    //状态在那儿，操作状态得方法就在哪里
    //初始化状态
    state = {todos:[
            {id:'1',name:'吃饭',down:true},
            {id:'2',name:'睡觉',down:false},
            {id:'3',name:'打豆豆',down:true},
            {id:'4',name:'打豆',down:true}
        ]}
        /*用于添加一个todo,参数为todo对象*/
    addTodo = (todoObj)=>{
        //获取源todos
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }
    /*更新一个todo对象*/
    changeTodo = (id,down) =>{
        //获取状态中的todos
        const {todos} = this.state
        /*匹配处理数据*/
        const newtodos = todos.map((todoObj )=>{
            if(todoObj.id === id){
                return {...todoObj,down:down}
            }else{
                return  todoObj
            }
        })
        this.setState({todos: newtodos})
    }
    /*删除一个todo*/
    deleteTodo = (id) =>{
        //获取原来的todos
        const {todos} = this.state
        /*删除指定id的todo对象*/
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })

        /*更新状态*/
        this.setState({todos: newTodos})
    }
    /*用于全选*/
    checkAll = (down) =>{
        //获取原来的todos
        const {todos} = this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,down:down}
        })
        this.setState({todos:newTodos})
    }

    /*清除所有todos*/
    deleteAll = () =>{
        //获取原来的todos
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.down
        })
        this.setState({todos:newTodos})
    }

    render() {
        return (
            // eslint-disable-next-line no-undef
            <div className='container'>
                <div className='wrap'>
                    <Header addTodo={this.addTodo}/>
                    <Lists todos={this.state.todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} checkAll={this.checkAll} deleteAll={this.deleteAll}/>
                </div>
            </div>
        )
    }
}

