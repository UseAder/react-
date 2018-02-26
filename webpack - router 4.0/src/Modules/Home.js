import React,{Component} from 'react';
import BlockList from './blockList';
import Footer from './Footer';
export default class Home extends Component{
    render(){
                // console.log(this.props);
        return(
            <div className="container marketing">
                <h3>Home</h3>
                
                <div className="row">
                    <div className="col-lg-4 w">
                    <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Heading</h2>
                    <p>Dd odio Donec sed odio eget quamet risusDonec sed odio eget quamet risusdui. </p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 w">
                    <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Heading</h2>
                    <p>Duis mollis, eDonec sed odio eget quamet risusDonec sed odio eget quamet risusDonec sed odio eget quamet risus.</p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 w">
                    <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Heading</h2>
                    <p>Donec sed odio eget quamet riDonec sed odio eget quamet risusDonec sed odio eget quamet risussus.</p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>
                <BlockList/>
                <Footer/>
            </div>                   
        )
    }


    
}
