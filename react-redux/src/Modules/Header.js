import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import { Button} from 'element-react';
import 'element-theme-default';
var sf={background: 'red'}
export default class Headers extends Component{
    render(){
        return(
            <div >
                <div className="navbar-wrapper" >
                    <div className="container">

                    <nav className="navbar navbar-inverse navbar-static-top"  style={sf}>
                        <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><button type="button" className="btn btn-danger">危险按钮</button></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                            <li><NavLink to="/"><Button type="success"  size="large">HOME</Button></NavLink></li>
                            <li><NavLink to="/basic-routing"><Button type="warning">BasicRouting(新闻)</Button></NavLink></li>
                            <li><NavLink to="/product-intro"><Button type="warning">ProductIntro(商品详情)</Button></NavLink></li>

                            <li><NavLink to="/counter"><Button type="danger">Counter功能模块 react-redux)</Button></NavLink></li>
                            <li><NavLink to="/carts"><Button type="info">Carts(购物车)</Button></NavLink></li>
                            <li><NavLink to="/blockList"><button type="button" className="btn btn-warning">blockList(列表)</button></NavLink></li>


                       
                            </ul>
                        </div>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>                   
        )
    }
}