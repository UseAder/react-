export const increase=()=>{
    return {
        type: "INCREASE"
    }
}
//创建这个文件夹的目的视为定义多个
export const decrease=()=>{
    return {
        type: "deCREASE"
    }
}
export const getListData=(data)=>{//7.向请求type为getlist的action发送操作
    return {
        type: "getlist",
        data
    }
}

// export const addToCartAt=(params)=>{  
    export function addToCartAt(params){
    console.log(params)
    // return dispatch=>{
    //     dispatch(addToCartAtFunc(params))
    // }
    return dispatch=>{

        return fetch(`http://localhost:3000/cas/data`,{
        method:'post',    
        body:`pid=${params.pid}&pnum=${params.pnum}`,
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
        .then(res=>{
            // console.log(res); 
            return res.json()//4.格式化一下
        })
        .then(data=>{
            dispatch(postToCartAt(data))
            // console.log(data);//5.得到数据
            // dispatch(getListData(data))//6.执行派发任务
        })

    }
    
}
export const postToCartAt=(data)=>{
    return {
        type: "POSTTOCARTAT",
        data
    }
}

export const addToCartAtFunc=(data)=>{
    return {
        type: "ADDTOCARTAT",
        data
    }
}

export const addToProAt=(data)=>{
    return dispatch=>{
        dispatch(addToProAtFunc(data))
    }
}
export const addToProAtFunc=(data)=>{
    
    return {
        type: "ADDTOPROAT",
        data
    }
}
//feach请求
export function fetchList(params={page:1}){//2.页数默认第一页
    var start=20*(params.page-1);//3.这个是为了读取网站的接口的数据多少条

    return dispatch=>{

        return fetch(`api/v2/movie/top250?start=${start}`)
        .then(res=>{
            // console.log(res); 
            return res.json()//4.格式化一下
        })
        .then(data=>{
            // console.log(data);//5.得到数据
            dispatch(getListData(data))//6.执行派发任务
        })

    }
}
  
//向后台发送三个参数的数据  用户的id 产品的id 产品的数量
// export function addCart(params={userid:1,id:1,num:5}){
//     return dispatch=>{
//         return fetch(`api/xx/addCart`,{body:qs(params)}).
//         then(res=>{
            //后台开发 ——>userid id num   ——>save——find
//         }).then(data=>{
            // console.log(data);//5.得到数据
        //     dispatch(getListData(data))//6.执行派发任务
        // })
//     }
// }
