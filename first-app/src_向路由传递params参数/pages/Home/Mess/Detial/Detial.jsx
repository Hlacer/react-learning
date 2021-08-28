import React,{ Component } from 'react'
const mess = [
    {id:'01',connent:'hello1'},
    {id:'02',connent:'hello2'},
    {id:'03',connent:'hello3'},
    {id:'04',connent:'hello3'}
]
export default class Detial extends Component{
    render() {
        const finds = mess.find((messObj)=>{
            return messObj.id === this.props.match.params.id
        })
        return (
            <ul>
                <li>{this.props.match.params.id}</li>
                <li>{this.props.match.params.title}</li>
                <li>{finds.connent}</li>
            </ul>
        );
    }
}