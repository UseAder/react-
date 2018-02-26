
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore,applyMiddleware} from 'redux';//createStore是拿来创建一个仓库 1...............
import thunk from 'redux-thunk'///自带fetch


const todoReducer=(state=[],action={})=>{//  9..............
    const {type,payload}=action; //type操作的类型 添加、修改、删除
    switch(type){
        case "FETCH_DATA_START":
            console.log(1);
            
            return Object.assign({},state,{status:"数据请求中。。。"});
        case "FETCH_DATA_FINISH":
        console.log(2);
            return Object.assign({},state,{status:"数据请求好了。。。",list:payload});             
            default:return state;
    }
};
const store = createStore(todoReducer, applyMiddleware(thunk));//仓库管理创建 3....................


const fetchData = postTitle => (dispatch, getState) => {
	dispatch({//第一次请求
		type: postTitle + "_START"
    });
    console.log(store.getState());
    
    // 做异步处理，比如ajax，在回调中再次dispatch
    fetch('http://api.douban.com/v2/movie/top250')
    .then(res=>{
        console.log(res);
        return res.json()
    })
    .then(data=>{
        console.log(data);
        
        dispatch({//第二次请求
            type: postTitle + "_FINISH",
            payload:data
        });
        console.log(store.getState());
    })
};



class Appfu extends React.Component{// 6....................
    feachData(){
        store.dispatch(fetchData('FETCH_DATA'))
    }
    // saveTODO(){
    //     store.dispatch({
    //         type:"FETCH_DATA_START",
    //         payload:this.refs.ipt.value//把input值type传给上面的payload
    //     });
    // };
    render(){
        var todos=[];
        if(store.getState().list){
            console.log(store.getState().list);
            
             todos=store.getState().list.subjects.map(function(item,idx){//  8................
                return <li key={idx}>{item.title}</li>
            });
        }
        
        return (
            <div>
                {store.getState().status}
                <button onClick={this.feachData.bind(this)}>请求ajax</button>
                <ul>{todos}</ul>
            </div>
        )// 7.............
    }
} 
function renderIn(){// 5.......................
    ReactDOM.render(<Appfu/>,document.getElementById('roodt'))
}
renderIn()

store.subscribe(renderIn)//设置一个监听函数（就是这个监听 store发生变化，就运行renderIn函数） 4.................

