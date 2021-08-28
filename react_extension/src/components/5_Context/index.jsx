import React,{ Component } from 'react'

//创建context对象
const MyContext = React.createContext()
export default class Demo extends Component{
    state = {name:'jon'}
    render() {
        return (
            <div>
                <h3>this is A,my name is {this.state.name}</h3>
                <MyContext.Provider value={this.state.name}>
                    <Demo1 name={this.state.name}/>
                </MyContext.Provider>
            </div>
        );
    }
}

class Demo1 extends Component{
    render() {
        return (
            <div>
                <h3>this is B,A name is {this.props.name} </h3>
                <Demo2/>
            </div>
        );
    }
}

class Demo2 extends Component{
    static contextType = MyContext
    render() {
        return (
            <div>
                <h3>this is C,B name is {this.context} </h3>
                <Demo3/>
            </div>
        );
    }
}

function Demo3(){
    return(
        <div>
            <MyContext.Consumer>
                {
                    value => (
                        <h3>this is D,C name is {value} </h3>
                    )
                }
            </MyContext.Consumer>
        </div>
    )
}