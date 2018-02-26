var React =require('react');

var Repo=React.createClass({
    render:function() {
        // console.log(this.props);
        return(
            <div>
                Repo
                <h3>接收参数：
                    {this.props.params.userName}
                </h3>
            </div>                 

        )
    }
})
module.exports=Repo;