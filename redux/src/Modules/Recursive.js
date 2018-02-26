import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

export default class Recursive extends Component{
    render(){
                // console.log(this.props);
        return(
            <div>
                <h3>recursive</h3>
                <ul>
                            {/*如果我们用this.pros.match.url的形式去书写地址，那么他会动态的根据当前
                            的url来进行改变*/}
                            <li><Link to={this.props.match.url+"/lv1"} className="active">我去第一次</Link></li>
                            <li><Link to={this.props.match.url+"/lv2"} className="active">我去第2次</Link></li>
                            <li><Link to={this.props.match.url+"/lv3"} className="active">我去第3次</Link></li>
                        </ul>
                        <div className="BasicRouting1">
                            <p>第二个组件显示内容</p>
                            <Route path={`${this.props.match.url}/:lv`} component={Recursive}/>
                        </div>
            </div>                   
        )
    }


    
}
