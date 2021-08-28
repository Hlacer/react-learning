import React,{ Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPerson} from '../redux/actions/person'
class Person extends Component{
    addPerson = () =>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name:name,age:age}
        if (this.nameNode.value === '' || this.ageNode.value === ''){
            alert('请输入内容')
        }else{
            this.props.addPersones(personObj)
            this.nameNode.value = ''
            this.ageNode.value = ''
        }

    }
    render() {
        return (
            <div>
                <h1>person组件，count组件求和为{this.props.count}</h1>
                <input type="text" ref={c=>this.nameNode=c} placeholder='输入名字'/>&nbsp;&nbsp;
                <input type="text" ref={c=>this.ageNode=c} placeholder='输入年龄'/>&nbsp;&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <br/>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return (
                                <li key={p.id}>{p.name}------{p.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state =>({count: state.box1,persons:state.box2}),
    {addPersones:createAddPerson}
)(Person)