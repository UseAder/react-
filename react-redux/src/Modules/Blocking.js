import React,{Component} from 'react';
import {Prompt} from 'react-router';//提示框

export default class Blocking extends Component{
    render(){
                // console.log(this.props);
        return(
            <div>
                <h3>Blocking你不组织吗</h3>
                <Prompt message="我会离开,呵呵？"/>
            </div>                   
        )
    }


    
}