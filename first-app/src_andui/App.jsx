import React,{ Component } from 'react'
import {Button} from "antd";
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

export default class App extends Component{
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed" icon={<HomeOutlined/>}>DashedButton</Button>

            </div>
        );
    }
}

