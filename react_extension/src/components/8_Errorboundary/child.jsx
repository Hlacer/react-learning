import React,{ Component } from 'react'
export default class Child extends Component{
    state = {
        users:[
            {id:'001',name:'a',age:18},
            {id:'002',name:'12',age:18},
            {id:'003',name:'45',age:18}
        ]
    }
    render() {
        return (
            <div>
                <h2>我是Child</h2>
                {
                    this.state.users.map((userObj)=>{
                        return(<h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>)
                    })
                }
            </div>
        );
    }
}