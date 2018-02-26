import React,{Component} from 'react';
import UiComponent from './UiComponent';
import addTodoActions from '../action/addTodoActions';
import TodoStore from "../store/TodoStore"

export default class ViewComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:TodoStore.getAll()
        }
    }
    getAllTodos(){
        var todoData=TodoStore.getAll();
        this.setState({
            todos:todoData
        })
    }
    componentDidMount(){
        // console.log(this.getAllTodos.bind(this))
        TodoStore.addChangeListener(this.getAllTodos.bind(this));
    }
    addTodo(text){
        // console.log(text);       
    addTodoActions.addTodoItem(text)//向上传递参数
    }
    render(){
                // console.log(this.props);
        return(
            <div>

                <h3>2.以理解成MVC模型中的controller是应用中唯一可以操作state的地方(setState()),注要用来进行业务判断</h3>
                <UiComponent onClick={this.addTodo.bind(this)} data={this.state.todos}/>
                
            </div>                   
        )
    }
}