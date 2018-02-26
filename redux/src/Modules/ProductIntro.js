import React,{Component} from 'react';
import {connect} from 'react-redux';
var style={height:'200px'}
var stylef={float:'right'}

 class ProductIntro extends Component{
     han(){
        //  console.log(this.props);
         
     }
    render(){
        // console.log(
        //     this.props
        // );
        const {title} =this.props;
        if(title){
            var lst=[];
            lst.push(<div className="jumbotron"  key={1}>
            <div className="row">
                <div className="col-sm-6 col-md-12">
                    <div className="thumbnail">
                        <div className="left"><img style={style} className="img-responsive" src="//g-search2.alicdn.com/img/bao/uploaded/i4/i3/TB1n_zycBfM8KJjSZPiXXXdspXa.jpg_220x220.jpg_.webp" alt="..."/></div>
                        <div className="right">
                            <div className="container">
                                <h1>{title}<button type="button" className="btn btn-info" style={stylef}>评论</button></h1>
                                <div className="row">
                                    <span>开放分类： 影视 电影 美国电影 艺术</span>
                                    <p><span className="active">《肖申克的救赎》</span>（The Shawshank Redemption）取自斯蒂芬·金《不同的季节》中收录的《丽塔海华丝及萧山克监狱的救赎》而改编成的《肖申克的救赎》剧本，并由弗兰克·达拉邦特执导，蒂姆·罗宾斯、摩根·弗里曼等主演。影片中涵盖全片的主题是“希望”，全片透过监狱这一强制剥夺自由、高度强调纪律的特殊背景来展现作为个体的人对“时间流逝、环境改造”的恐惧。影片的结局有《基督山伯爵》式的复仇宣泄。在IMDB当中被会员选为250佳片中第一名。并入选美国电影学会20世纪百大电影清单。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>)
        }

        return(
            <div className="container"><button type="button" className="btn btn-info" style={stylef} onClick={this.han()}>QUXIAO</button>
                {lst}
            </div>                 
        )
    }
}


const mapStateToProps=(state)=>{//方法 相当于store。getState。count
    // console.log(state);
    
    return {     
        title:state.title
        // ,
        // lists :state.lists
    }
}
export default connect(mapStateToProps)(ProductIntro)//不做任何操作 第二个参数不需要
