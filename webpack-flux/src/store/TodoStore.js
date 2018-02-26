import {EventEmitter} from 'events'//引入事件 ，作用emit
var Todostore=Object.assign({},EventEmitter.prototype,{
    todos:[],
    addTodoItemHandler:function(text){
        this.todos.push(text);
        // console.log(text,this.todos)
    },
    getAll:function(){
        return this.todos
    },
    emitChange:function(){
        //回想下vue和nodejs中的emit事件
        this.emit('change')
    },
    addChangeListener:function(callback){
        //光有emit向上发送数据还不行，需要有监听
        this.on('change',callback)
    }
})
module.exports=Todostore;