import React, {Component} from 'react';
import Header from './containers/count'
import store from './redux/store' /*引入redux(其实就是引入store)*/
export default class App extends Component {
    render() {
        return (
            <div>
                {/*给容器组件传递store*/}
              <Header store={store}/>
            </div>
        );
    }
}

