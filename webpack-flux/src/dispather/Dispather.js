//这里相当于京东的核心层，也叫分发操作层
import {Dispatcher} from 'flux';
const AppDispatcher=new Dispatcher();
import TodoStore from "../store/TodoStore"

AppDispatcher.register((action)=>{
    switch(action.actionType){
        case "add_todo_item":
        console.log(action.text);
        TodoStore.addTodoItemHandler(action.text);
        //操作完数据仓库，我们需要告诉视图层。仓库的内容发生了变化
        TodoStore.emitChange()
        break;
        default:        
    }
})
module.exports=AppDispatcher;