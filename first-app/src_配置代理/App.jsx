import React,{Component} from "react";
import axios from "axios";
export default class App extends Component{

    getStudent=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            success=>{console.log('success',success.data)},
            error=>{console.log('error',error)}
        )
    }
    getCar = () =>{
        axios.get('http://localhost:3000/api2/cars').then(
            success=>{console.log('success',success.data)},
            error=>{console.log('error',error)}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudent}>点我获取学生数据</button>
                <button onClick={this.getCar}>点我获取汽车数据</button>
            </div>
        );
    }

}