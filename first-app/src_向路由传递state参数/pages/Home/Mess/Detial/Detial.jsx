import React,{ Component } from 'react'
const messes = [
    {id:'01',connent:'hello1'},
    {id:'02',connent:'hello2'},
    {id:'03',connent:'hello3'},
    {id:'04',connent:'hello4'}
]
export default class Detial extends Component{
    render() {
        console.log(this.props.location.state)
        const {id,title} = this.props.location.state || {}
        const finds = messes.find((messObj)=>{
            return messObj.id === id
        }) || {}
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>connect:{finds.connent}</li>
            </ul>
        );
    }
}