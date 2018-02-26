var React =require('react');
var ReactDOM  =require('react-dom');

//引入路由相关模块
var Router =require('react-router').Router;
var Route =require('react-router').Route;
var hashHistory =require('react-router').hashHistory;
var IndexRoute=require('react-router').IndexRoute;//默认页面路由

//引入功能模块
var App =require('./modules/App');
var User =require('./modules/User');
var Html =require('./modules/Html');

var Repo=require('./modules/Repo')
var Home=require('./modules/Home')

var Appfu=React.createClass({
    render() {
        // console.log(this.props);
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/html" component={Html}>
                        <Route path="/html/:userName/:repoName" component={Repo}/>{/*设参*/}
                    </Route>
                </Route>
            </Router>                  
        )
    }
})
ReactDOM.render(<Appfu/>,document.getElementById('roodt'))
// 这个在webpack.config.js   使用语法loader:"jsx-loader",