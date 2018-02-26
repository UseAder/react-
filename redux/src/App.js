
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {HashRouter , Switch, Route, NavLink} from 'react-router-dom';//BrowserRouter
import NoMatch from './Modules/NoMatch';

import Home from './Modules/Home';//./modules.index(模块配置)
import Headers from './Modules/Header';//./modules.index(模块配置)
import routes from './router-config';

import {Provider,connect} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'


import configureStore from './store';
let { store, persistor } = configureStore()

// console.log(store.getState());//count.count1.lists.carts

ReactDOM.render(

    <Provider store={store}>{/*~React-Redux 提供Provider组件，可以让容器组件拿到store。*/}
        <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
    </Provider>
,document.getElementById('roodt'))
// 这个在webpack.config.js   使用语法loader:"jsx-loader",