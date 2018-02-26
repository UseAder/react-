import React,{Component} from 'react'
import {Provider,connect} from 'react-redux'

import {increase,decrease,fetchList,addToCartAt,addToProAt} from '../actions/counter';//导入动作1
import {NavLink} from 'react-router-dom';

import { Button,Input,Select,DatePicker,TimePicker,Switch,Checkbox,Radio,Layout,Form } from 'element-react';
import 'element-theme-default';

import { relative } from 'path'
var style={   color: '#999',lineHeight: '12px',  position: 'relative',float:"left",top:'13px',left:'13px'};
var styleheihong={fontSize: '15px',margin: '2px 10px 15px',height: '36px',lineHeight: '18px',overflow: 'hidden',    color: '#333'}
var zihong={    color: '#c10001',    paddingLeft: '8px'}
var zihongs={}
var qianzy={height: '50px',padding:'15px 10px'}
var qianyou={float:"left"}
var qianzou={float:"right"}
var paddings={paddingTop:'15px'}
var colorstong={ fontWeight: 700,color: '#F40',fontSize: '18px'}
var button={marginLeft:'20px'}

var lzhan={    color: '#999',height: '24px',    padding:' 0 20px',marginRight:' '}

class Counter extends Component{
    componentWillMount(){//1.程序初始化阶段运行函数导入执行函数fetchlist
        this.props.fetchList()
       
        // console.log(this.props);
        
    }
    changPage=(e)=>{//8.点击分页时取到自定义的属性  即页数
        // console.log(e.currentTarget.getAttribute('page') 取到自定义的属性);
        var page=e.currentTarget.getAttribute('page')
        const params={page:parseInt(page)}
        
        
        this.props.fetchList(params);//9.传送值
        
    }
    addCart(e){
        var idx=e.currentTarget.getAttribute('idx')
        var id=e.currentTarget.getAttribute('data-id')
        // const addToCart=this.props.lists.subjects[idx];
        // console.log(id,idx);
        this.props.addToCartAt({pid:id,pnum:1})
    }
    addPro(e){
        var idx=e.currentTarget.getAttribute('idx');
        const addToPro=this.props.lists.subjects[idx].title;  
        console.log(addToPro);
        this.props.addToProAt(addToPro)
        
    }
    render(){
        // console.log(this.props);
        const {title,count,increase,count1,decrease,lists,fetchList,carts,addToCartAt,addToProAt}=this.props;//导出动作三
        // console.log(this.props);
    // console.log(lists);/
    
        // if(!lists.subjects){
        //     return <div>数据请求中</div>
        // }
        if(lists.subjects){
            // 
            // console.log(lists.title);
            var lst=[];
            var outputPages=[];
            var pages=Math.ceil(lists.total/lists.count);
            for (let i = 0; i <=pages; i++) {
                outputPages.push(
                        //   <li key={i}>{lists.subjects[i].title}</li>
                        //解析： (e)=>{this.changPage(e)=}
                           //事件的触发   创建一个自定义函数名为changPage 
                          <li className="active" key={i}><a href="javascript:void(0)" page={i} onClick={(e)=>{
                              this.changPage(e)
                          }}>{i} <span className="sr-only"></span></a></li>
                )
            }    
            lists.subjects.map((item,i)=>{
                return lst.push(
                    <li key={i}>
                        <button className="btn btn-success" style={button}
                        data-id={item.id} idx={i}
                        onClick={(e)=>{this.addCart(e)}}>加入购物车</button>
                        <div className="grid-item col"> 
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6"> 
                            <div className="thumbnail"> 
                            <span style={style}>大屏5.99 &quot;</span> 
                            <img src="//g-search2.alicdn.com/img/bao/uploaded/i4/i3/TB1n_zycBfM8KJjSZPiXXXdspXa.jpg_220x220.jpg_.webp" data-src="//g-search2.alicdn.com/img/bao/uploaded/i4/i3/TB1n_zycBfM8KJjSZPiXXXdspXa.jpg" alt="小米 红米5 Plus" /> 
                            <div className="title-row " style={paddings}> 
                            <a  href="jacascript:;" style={styleheihong}>
                            {item.title}<span className="feature" > <span className="feature-item" style={zihong}>面部识别，</span> <span style={zihong}>17天超长续航，</span> <span style={zihong}>骁龙八核处理器</span> </span> </a> 
                            <div style={qianzy}>
                                <div style={qianyou}> 
                                    <span>约</span> 
                                    <span style={colorstong}> <span>&yen;</span><strong>934</strong> </span> 
                                </div> 
                                <div style={qianzou}> 
                                    <span><span className="num">98637</span>人付款</span> 
                                </div> 
                            </div>
            
                                <span style={lzhan}>暂无点评</span> 
                            
                            
                        <NavLink to='/product-intro'>
                        <button type="button" className="btn btn-info"  data-id={item.id} idx={i}
                        onClick={(e)=>{this.addPro(e)}}>查看活动商家 </button>
                        </NavLink>
                          
                            
                            </div> 
                            </div> 
                            </div> 
                        </div>
                       
                    </li>
                )
            })
                   
        }

        return(
            <div className="container">
                <Input placeholder="请输入内容" prepend={
        <Select value="">
          {
            ['餐厅名', '订单号', '用户电话'].map((item, index) => <Select.Option key={index} label={item} value={index} />)
          }
        </Select>
      } append={<Button type="primary" icon="search">搜索</Button>} />

                <span>count:{count}</span>
                <span>title:{title}</span>
                <button onClick={increase} className="btn btn-primary">OWQ++</button>
                <button onClick={decrease} className="btn btn-primary">OWQ--</button>
                <span>count1:{count1}</span><br/>
                <ul>{lst}</ul>

                <nav aria-label="...">
                    <ul className="pagination">
                        {outputPages}
                    </ul>
                </nav>    
            </div>                   
        )
    }
}

const mapStateToProps=(state)=>{//方法 相当于store。getState。count
    return {
        // count :state.count,
        count1 :state.count1,
        lists :state.lists,
        carts:state.carts,
        title:state.title
    }
}
export default connect(mapStateToProps,{increase,decrease,fetchList,addToCartAt,addToProAt})(Counter)//导出动作2
