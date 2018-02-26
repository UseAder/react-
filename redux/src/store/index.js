import {createStore,applyMiddleware} from 'redux';//createStore是拿来创建一个仓库 1...............

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import logger from 'redux-logger'//网页语法查看好
// import reducer from '../reducers/index';//index合并了两个文件
import reducer from '../reducers/counter';//
import thunk from 'redux-thunk'///自带fetch



const persistConfig = {
    key: 'root',
    storage: storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)
  
  export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk,logger))
    let persistor = persistStore(store)
    return { store, persistor }
  }
// const store=createStore(reducer, applyMiddleware(thunk,logger));//仓库管理创建 3....................
// //~reducer是一个函数（）写了相当于默认状态state

// export default store;