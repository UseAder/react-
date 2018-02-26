
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
//1.View————>(UiView)和(controller-view)  
import ViewComponent from './Modules/ViewComponent';

ReactDOM.render(<ViewComponent/>,document.getElementById('roodt'))
//App.js入口文件———>ViewComponent(控制层)->(Action——>Dispatcher)———>UiComponent(纯视图层)