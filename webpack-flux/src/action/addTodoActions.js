import Dispather from "../dispather/Dispather"

var TodoActions={
    addTodoItem:function(text){
        console.log("我勒个去",text);  
       
        Dispather.dispatch({ //当前处理了一个动作，就联系了Dispather 分发层，携带了参数text
            actionType: "add_todo_item",
            text
        })
        //当前是Action动作层 与动作层相关的是Dispather 分发层   
        //action————>Dispather 
    }
    // ,
    // removeTodo：fun
}
module.exports=TodoActions;
//当前只写了一个动作