import React,{ Component } from 'react'
export default class News extends Component{
    //自动跳转
    componentDidMount() {
        setTimeout(()=>{
            this.props.history.push('/home/mess')
        },2000)
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}