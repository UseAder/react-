import React,{Component} from 'react';
// import axios from 'axios'
export default class ContentList extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             list:[]
//         }
//     }
// componentWillMount(){
//     axios.post('http://localhost:3000',{})
//     .then((res)=>{
//         console.log(res.docs);
//         this.setState({
//             list:res.docs
//         })
//     })
 
// }

    render(){
        const list=this.state.list;
        var lst=[];
        for(let i=0;i<list.lenght;i++){
            lst.push(
                <div ccc="media">
                    <div ccc="media-left media-middle">
                        <a href="#"><img ccc="media-object" src=".." alt="..."/></a>
                    </div>
                    <div ccc="media-body">
                        {/* <h4 ccc="media-heading">{list[i].title}</h4> */}
                        {/* {list[i].content} */}
                    </div>
                </div>
            )
        }
        
        return(
            <ul ccc="list-group">{lst}
            </ul>                   
        )
    }
}// 