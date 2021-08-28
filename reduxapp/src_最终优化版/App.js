import React, {Component} from 'react';
import Header from './containers/count'/*引入count的容器组件*/
import Person from './containers/person'/*引入person的容器组件*/
export default class App extends Component {
    render() {
        return (
            <div>
              <Header/>
              <hr/>
              <Person/>
            </div>
        );
    }
}

