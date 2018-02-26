import React,{Component} from 'react';


export default class BlockList extends Component{
    render(){
     
        return(
            <div>
                  <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
                </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                <div className="col-md-7 col-md-push-5">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 col-md-pull-7">
                    <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
                </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
                </div>
                </div>

                <hr className="featurette-divider"/>   

            </div>                   
        )
    }
}