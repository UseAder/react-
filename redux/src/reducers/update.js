//初始值
var initialState={
    updata:0
}

function updata(state=initialState,action){//  9..............
    //     // console.log(store) 
        //payload
        switch(action.type){
            case "INCREASE":           
            // return {count:state.count+1}; //这里需要设置为纯函数，不可以对原数据进行更改
            return Object.assign({},state,{count:state.count+1}); 
            default:return state;
        }
    }

export default updata