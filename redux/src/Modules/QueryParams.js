import React,{Component} from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import Content from '../Modules/Content';
import NoMatch from '../Modules/NoMatch';
export default class QueryParams extends Component{
    render(){
                // console.log(this.props);
                const {location,pattern,match,isExact}=this.props;

        return(
            <div>
                <h3>QueryParams</h3>
                <ul className="NoMatch">
                  
                  <li><Link
                   to={{pathname:match.url+'/lv1',
                   search:'?abc=123'
                    }}                   
                  >lv1</Link></li>
                   <li><Link
                   to={{pathname:match.url+'/lv2',
                        search:'?abc=234&456'
                    }}                   
                   >lv1</Link></li>
                  <li><Link to={match.url+'/lv3?abc=d&456345'} >lv3</Link></li>
 
              </ul>
                        <div className="BasicRouting1">
                            <p>第二个组件显示内容</p>
                            <Switch>
                            <Route path={`${match.url}/:lv`} component={Content}/>
                             <Route path={`${this.props.match.url}`} exact={true} render={()=>(null)}/>
                             <Route component={NoMatch}/>
                             </Switch>
                        </div>
            </div>                   
        )
    }


    
}
