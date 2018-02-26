var React =require('react');
var Link =require('react-router').Link;
//引入link
var NavLink=React.createClass({  
    render:function() {
        // console.log(this.props);
        return(
               <Link {...this.props} activeClassName="active"/>            
        )
    }
})
module.exports=NavLink;