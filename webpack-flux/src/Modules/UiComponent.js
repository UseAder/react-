import React,{Component} from 'react';



export default class UiComponent extends Component{
    addItem(){
        // console.log(this.props);
        // console.log(this.refs.it.value)
        this.props.onClick(this.refs.it.value)

    }
    render(){
                console.log(this.props);
        var todoList=this.props.data.map(function(item,index){
            return <li key={index}>{item}</li>
        })
        return(
            <div>
                <h3>1.职责单一只允许调用action触发事件，数据从由上层容器通过属性传递过来。主要用来界面显示</h3>
              <input type="text" ref="it"/>
               <button onClick={this.addItem.bind(this)}>添加Todo</button>
               {todoList}
            </div>                   
        )
    }}