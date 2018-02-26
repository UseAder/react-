
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import store from './store';

import {increase,decrease,fetchList} from './actions/counter';//导入动作

import axios from 'axios';

const mapStateToProps=(state)=>{//方法 相当于store。getState。count
    return {
        count :state.count,
        count1 :state.count1,
        lists :state.lists

    }
}
// const mapDispatchToProps={
    // increase()=>{
    //     return {
    //         type: "INCREASE"
    //     }
   
// }

// export default class Appfu extends Component{
class Appfu extends React.Component{// 6....................  
    componentWillMount(){
        this.props.fetchList()
    }
    // handlerClick(){
    //     store.dispatch({
    //         type:'INCREASE'
    //     })
    // }
    render(){    
        
        // console.log(this.props);
         const {count,increase,count1,decrease,lists,fetchList}=this.props;
         if(!lists.subjects){
             return <div>数据请求中</div>
         }
         if(lists.subjects){
             var lst=[];
            for (let i = 0; i < lists.subjects.length; i++) {
               lst.push(
                   <li key={i}>{lists.subjects[i].title}</li>
               )
            }
         }
        return (
            <div>
                {/* <span>{store.getState().count}</span> */}
                {/* <button onClick={this.handlerClick.bind(this)}>OWQ++</button> */}
                <span>count:{count}</span>
                <button onClick={increase}>OWQ++</button>
                <button onClick={decrease}>OWQ--</button>
                <span>count1:{count1}</span><br/>
                {/* <button onClick={fetchList}>获取数据</button> */}
                <ul>{lst}</ul>
            </div>
        )// 7.............
    }
} 
const CounterApp=connect(mapStateToProps,{increase,decrease,fetchList})(Appfu)

// const CounterApp=connect(mapStateToProps,mapDispatchToProps)(Appfu)
//store和组件进行衔接 即view视图传入信息   后面还会有个实时监控

    ReactDOM.render(
    <Provider store={store}>
    <CounterApp/>
    </Provider>,document.getElementById('roodt'))
//{onClick———>indease———>mapDispatchToProps———>reducer————>store————>Provider(进行整个组件的重构)———>
//store———>reducer———>mapStateToProps———>count(props)}