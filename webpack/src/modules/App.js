import React,{Component} from 'react';
import NavLink from './NavLink';
import {IndexLink} from 'react-router';

export default class App extends Component{
    render(){
                // console.log(this.props);
                return(
                    <div>
                         <ul>
                         <li>
                           <IndexLink to='/' activeClassName='active'>
                             Home
                           </IndexLink>
                         </li>
                         <li>
                           <NavLink to='/html'>
                           html
                           </NavLink>
                         </li>
                         <li>
                         <NavLink to='/user'>
                         user
                         </NavLink>
                         </li>
                       </ul>
                       {this.props.children}
                    </div>                   
                )
            }
}