
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {createStore,combineReducers} from 'redux';//createStore是拿来创建一个仓库 1...............
import axios from 'axios';

//reducer 执行state更新 2.................
//state是一个kong数组
const todoReducer=(state=[],action={})=>{//  9..............
    console.log(store) 
    //payload
    const {type,payload}=action; //type操作的类型 添加、修改、删除
    switch(type){
        case "ADD_TODO_ITEM":
            return [...state,payload];
            default:return state;
    }
}

// export default class Appfu extends Component{
class Appfu extends React.Component{// 6....................
    componentWillMount(){
        axios.get('db.json')
        .then(res=>{
            // console.log(res);
            
        })
    }

    saveTODO(){
        store.dispatch({
            type:"ADD_TODO_ITEM",
            payload:this.refs.ipt.value//把input值type传给上面的payload
        });
    };
    handlerClick(){
        // console.log('1')
    };
    render(){
        var _t=this;
        // console.log(store.getState());
        
        var todos=store.getState().map(function(item,idx){//  8................
            return <li key={idx}>{item}<a onClick={_t.handlerClick}>x</a></li>
        });
        return (
            <div>
                <input type="text" ref="ipt"/>
                <input type="button" value="添加todo" onClick={this.saveTODO.bind(this)}/>
                <ul>{todos}</ul>
            </div>
        )// 7.............
    }
} 
const store=createStore(todoReducer);//仓库管理创建 3....................
console.log(store);

//store和组件进行衔接 即view视图传入信息   后面还会有个实时监控
function renderIn(){// 5.......................
    ReactDOM.render(<Appfu/>,document.getElementById('roodt'))
}
renderIn()

store.subscribe(renderIn)//设置一个监听函数（就是这个监听 store发生变化，就运行renderIn函数） 4.................

