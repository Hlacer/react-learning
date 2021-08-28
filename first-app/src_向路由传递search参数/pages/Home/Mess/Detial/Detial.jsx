import React,{ Component } from 'react'
import qs from 'querystring'

let aaa = {id:'01',age:'20'}   /*多种key=value组合并且用&分割   这种编码格式是urlencoded编码*/
let str = '?a=b&c=5'

const mess = [
    {id:'01',connent:'hello1'},
    {id:'02',connent:'hello2'},
    {id:'03',connent:'hello3'},
    {id:'04',connent:'hello4'}
]
export default class Detial extends Component{
    render() {
        /*接收search参数*/
        //console.log(this.props.location.search)
        const {id,title} = qs.parse(this.props.location.search.slice(1))
        const finds = mess.find((messObj)=>{
            return messObj.id === id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>connect:{finds.connent}</li>
            </ul>
        );
    }
}