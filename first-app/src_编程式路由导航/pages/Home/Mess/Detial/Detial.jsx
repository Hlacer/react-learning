import React,{ Component } from 'react'
//import qs from 'querystring'
const messes = [
    {id:'01',connent:'hello1'},
    {id:'02',connent:'hello2'},
    {id:'03',connent:'hello3'},
    {id:'04',connent:'hello4'}
]
export default class Detial extends Component{
    render() {

        //parmas参数   const {id,title} = this.props.match.params
        //search接收
        //const {search} = this.props.location
        //const {id,title} = qs.parse(search.slice(1))
        /*state接收*/
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