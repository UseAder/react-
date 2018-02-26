import React,{Component} from 'react';


export default class Content extends Component{
    render(){
                // console.log(this.props);
                const location=this.props.location;
                // const params=this.prop.match.params;
                // {params.lv}
                const {match}=this.props;
        return(
            <div>
                <h3>Content</h3>
                <p>params:{match.params.lv}</p>
                <p>location:{JSON.stringify(location)}</p>
                <p>this.props.match:{JSON.stringify(this.props.match)}</p>
            </div>                   
        )
    }
}