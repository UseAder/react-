import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Content from '../Modules/Content';
import NoMatch from '../Modules/NoMatch';


export default class Miss extends Component{
    render(){
                // console.log(this.props);
        return(
            <div className="miss">
                <h3>Miss</h3>
                <ul >
                  
                    <li><Link to={this.props.match.url+'/abc/lv1'}>lv1</Link></li>
                    <li><Link to={this.props.match.url+'/lv2'} >lv2</Link></li>
                    <li><Link to={this.props.match.url+'/abc/lv3'}>lv3</Link></li>
   
                </ul>
                <div className="BasicRouting1">
                            <p>第二个组件显示内容</p>
                            <Switch>
                            <Route path={`${this.props.match.url}/abc/:lv`} component={Content}/>
                             <Route path={`${this.props.match.url}`} exact={true} render={()=>(null)}/>
                             <Route component={NoMatch}/>
                             </Switch>
                        </div>
            </div>                   
        )
    }


    
}