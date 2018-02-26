import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//引入路由相关模块
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

//引入功能模块
import App from './modules/App';
import User from './modules/User';
import Html from './modules/Html';
import Repo from './modules/Repo';
import Home from './modules/Home';

export default class Appfu extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute  component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/html" component={Html}>
                        <Route path="/html/:userName/:repoName" component={Repo}/>{/*设参*/}
                    </Route>
                </Route>
            </Router>    
        )
    }
} 

ReactDOM.render(<Appfu/>,document.getElementById('roodt'))
// 这个在webpack.config.js   使用语法loader:"jsx-loader",