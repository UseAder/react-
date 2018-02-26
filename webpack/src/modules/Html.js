var React =require('react');
var NavLink=require('./NavLink');
var hashHistory=require('react-router').hashHistory;

var Html=React.createClass({
    // contextTypes:{.hashHistory
    //     router:React.PropTypes.object
    // },改为取缔
    handlerSubmit(event){
        event.preventDefault();
        const userName=this.refs.userName.value;
        const repoName=this.refs.repoName.value;
        const path=`/html/${userName}/${repoName}`;
        // console.log(path);
        // this.context.router.push(path)取缔
        hashHistory.push(path);//取缔改变
    },
    render:function() {
        // console.log(this.props);
        return(
            <div>
                <h1>htmlff</h1>
                <ul>
                    <li><NavLink to="/html/reactjs/react-router">React Router</NavLink></li>{/*传参*/}
                    <li><NavLink to="/html/vue/react-router">vue Router</NavLink></li>

                </ul>
                {this.props.children}
                <form onSubmit={this.handlerSubmit}>{/*es6要bind(this)*/}
                    <input type="text" ref="userName"/>
                    <input type="text" ref="repoName"/>
                    <button type="submit">go</button>
                </form>
            </div>                   
        )
    }
})
module.exports=Html;