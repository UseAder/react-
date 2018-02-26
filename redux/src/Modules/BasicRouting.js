import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import ContentList from './ContentList';//./modules.index(模块配置)


import Content from '../Modules/Content';//因为你不是放在一个文件夹  不要写错成{Content}
export default class BasicRouting extends Component{
    render(){
                // console.log(this.props);
                return(
                    <div>
                        <h1>BasicRouting</h1>
                        <div className="BasicRouting">
                        <ul>
                            {/*如果我们用this.pros.match.url的形式去书写地址，那么他会动态的根据当前
                            的url来进行改变*/}
                            <li><Link to={this.props.match.url+"/lv1"} className="active">我去第一次</Link></li>
                            <li><Link to={this.props.match.url+"/lv2"} className="active">我去第2次</Link></li>
                            <li><Link to={this.props.match.url+"/lv3"} className="active">我去第3次</Link></li>
                        </ul>
                        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <div className="list-group">
            <a href="#" className="list-group-item active">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
            <a href="#" className="list-group-item">Link</a>
          </div>
        </div>
                        </div>
                        <div className="BasicRouting1">
                            <p>第二个组件显示内容</p>
                            <Route path={`${this.props.match.url}/:lv`} component={Content}/>
                        </div>
                    </div>                   
                )
            }
}