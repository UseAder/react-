import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Headers extends Component{
    render(){
        return(
            <div>
                <div className="navbar-wrapper">
                    <div className="container">

                    <nav className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">hhmfddd</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                            <li className="active"><NavLink to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/basic-routing" activeClassName="active">BasicRoing(新闻)</NavLink></li>
                            <li><NavLink to="/query-params" activeClassName="active">Query Params</NavLink></li>
                            <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
                           <li><a href="#contact">Contact</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li className="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
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