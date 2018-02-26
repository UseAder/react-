

//初始值
var initialState={
    count:0
    ,
    count1:0,
    lists:{},
    carts:[],
    title:''
    
}

function reducer(state=initialState,action){//  9..............//~reducer是一个函数（）写了相当于默认状态state，，选择性action传送action(函数动作)
                                                               //~App拿到默认状态console.log(store.getState());            
        // console.log(store) 
        //payload
        switch(action.type){
            case "INCREASE":           
            // return {count:state.count+1}; //这里需要设置为纯函数，不可以对原数据进行更改
            return Object.assign({},state,{count:state.count+1}); 

            case "deCREASE":
            // return {count:state.count-1}; 
            return Object.assign({},state,{count1:state.count1-1}); 
                //Object.assign将对象合并  因为需要做的是对象复制操作
            case "getlist"://获取列表数据
            return Object.assign({},state,{lists:action.data}); 
            case "POSTTOCARTAT"://获取列表数据
            return Object.assign({},state,{carts:action.data});   
            case "ADDTOCARTAT"://获取列表数据
              
            return {
                ...state,
                carts:[...state.carts,action.data]};  
            case "ADDTOPROAT"://获取列表数据
            
            return Object.assign({},state,{carts:action.data}); 
            default:return state;
        }
    }

export default reducer






//初始值
// var initialState={
//     count:0
//     ,
//     count1:0,
//     lists:{},
//     carts:[],
//     title:'w'
    
// }

// function reducer(state=initialState,action){//  9..............//~reducer是一个函数（）写了相当于默认状态state，，选择性action传送action(函数动作)
//                                                                //~App拿到默认状态console.log(store.getState());            
//         // console.log(action.data) 
//         //payload
//         switch(action.type){
//             case "INCREASE":           
//             // return {count:state.count+1}; //这里需要设置为纯函数，不可以对原数据进行更改
//             return Object.assign({},state,{count:state.count+1}); 

//             case "deCREASE":
//             // return {count:state.count-1}; 
//             return Object.assign({},state,{count1:state.count1-1}); 
//                 //Object.assign将对象合并  因为需要做的是对象复制操作
//             case "getlist"://获取列表数据
//             return Object.assign({},state,{lists:action.data}); 
//             case "ADDTOCARTAT"://获取列表数据

//             return {
//                 ...state,
//                 carts:[...state.carts,action.data]};  
//             case "ADDTOPROAT"://获取列表数据                  
//             return Object.assign({},state,{title:action.data}); 
            
//             default:return state;
//         }
//     }

// export default reducer