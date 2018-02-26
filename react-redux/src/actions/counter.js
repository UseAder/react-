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

export const addToCartAt=(params)=>{

    
    
    return dispatch=>{
        dispatch(addToCartAtFunc(params))
    }
}
export const addToCartAtFunc=(data)=>{
    return {
        type: "ADDTOCARTAT",
        data
    }
}
export const addToProAt=(params)=>{
    // console.log(params);
    return dispatch=>{
        dispatch(addToProAtFunc(params))
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
  