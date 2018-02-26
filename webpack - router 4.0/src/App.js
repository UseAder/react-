
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import { HashRouter , Switch, Route, NavLink} from 'react-router-dom';//BrowserRouter
import NoMatch from './Modules/NoMatch';
import routes from './router-config';
// import Headers from './Modules/Header';
// import {Home,Headers} from './';//./modules.index(模块配置)
import Home from './Modules/Home';//./modules.index(模块配置)
import Headers from './Modules/Header';//./modules.index(模块配置)
import BlockList from './Modules/blockList';//./modules.index(模块配置)


{/* <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink></li>
                <li><NavLink to="/blocking" activeClassName="active">Blocking</NavLink></li>
                <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
                <li><NavLink to="/query-params" activeClassName="active">Query Params</NavLink></li>
                <li><NavLink to="/recursive" activeClassName="active">Recursive</NavLink></li>

                </ul> */}
        

ReactDOM.render(
            <HashRouter>
            <div>
                <Headers/>
                <hr/>
                <Switch>
                <Route path="/" component={Home} exact={true}/>

                    {routes.map((route,index)=>
                         <Route key={index} path={route.path} component={route.component}/>
                    )}
                  
                    <Route component={NoMatch}/>
                </Switch>
            </div>
            </HashRouter>
,document.getElementById('roodt'))
// 这个在webpack.config.js   使用语法loader:"jsx-loader",