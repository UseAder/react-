import React,{Component} from 'react';
import BlockList from './blockList';
import Footer from './Footer';
import {connect} from 'react-redux';

import { InputNumber} from 'element-react';
import 'element-theme-default';

var styleh={height:'105px',width:'105px'}
var styleah3={display: 'inline-block'}
var h1p={marginTop:'30px'}
var stylet={marginRight:'10px',float:'right',}
var styleb={backgroundColor:' rgba(0,0,0,0.5)'}
class Carts extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
          num4: 1
         
        }
      }
      
    render(){
        const {carts} =this.props;
        
        if(carts.length>=1){
            
            var lst=[];
            carts.map((item,i)=>{
                return lst.push(
                    

                    <li className="list-group-item" key={i}>
                        <div className="row">
                            <div className="col-xs-6 col-sm-2" ><a href="javascript:;" style={styleb}><img style={styleh} src="//g-search2.alicdn.com/img/bao/uploaded/i4/i3/TB1n_zycBfM8KJjSZPiXXXdspXa.jpg_220x220.jpg_.webp" className="img-circle"/>
                            </a></div> 
                            <div className="col-xs-6 col-sm-4" ><h1 style={h1p}>《{item.title}》</h1></div>
                            <div className="col-xs-6 col-sm-1" ><p style={h1p}>1243</p></div>
                            <div className="col-xs-6 col-sm-3" > <InputNumber size="large" style={h1p} defaultValue={this.state.num4}></InputNumber></div>
                            <div className="col-xs-6 col-sm-1" ><p style={h1p}>4312</p></div>
                            <div className="col-xs-6 col-sm-1" ><button type="button" className="btn btn-danger" style={h1p}>删除</button></div>
                        </div>
                    </li>
            // console.log(carts[0].collect_count);
            // s=carts[0].collect_count
                )    
            })
        }
                // console.log(carts);
                // console.log(carts[1]); 
        return(
            
            <div className="navbar-wrapper">
                <div className="container">
               
                <ul className="list-group">
                    

          {lst}
            
                </ul>
          </div>
        </div>      
        )
    }
}

const mapStateToProps=(state)=>{//方法 相当于store。getState。count
    console.log(state);
    
    return {
        carts:state.carts
  
    }
}
export default connect(mapStateToProps)(Carts)//不做任何操作 第二个参数不需要
