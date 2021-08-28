/*import React,{ Component } from 'react'
import ReactDom from 'react-dom'
export default class Demo extends Component{
    state = {count:0}

    myConut = React.createRef()

    addOne = () =>{
        this.setState(state=>({count:state.count+1}))
    }

    xiezai = () =>{
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    show = () =>{
        alert(this.myConut.current.value)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState(state=>({count:state.count+1}))
        },1000)
    }

    render() {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <input type="text" ref={this.myConut}/>
                <button onClick={this.addOne}>点我+1</button>
                <button onClick={this.xiezai}>卸载组件</button>
                <button onClick={this.show}>点击提示数据</button>
            </div>
        );
    }
}*/

import React,{useState,useEffect,useRef} from 'react'
import ReactDom from 'react-dom'
export default function Demo(){

    const [count,setCount] = useState(0)
    const myRef = useRef()
    function addOne(){
        //setCount(count+1)
        setCount(count=>count+1)
    }

    function xiezai(){
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    let show = () =>{
        alert(myRef.current.value)
    }

    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[] )

    return(
        <div>
            <h1>当前求和为{count}</h1>
            <input type="text" ref={myRef}/>
            <button onClick={addOne}>点我+1</button>
            <button onClick={xiezai}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}
