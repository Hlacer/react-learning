import React, {Component} from 'react';
import Header from './containers/count'
import Person from './containers/person'
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

