import React,{Component} from 'react';

class List extends Component{
    render(){
            return(
                    <div className={`card bg-${this.props.item.type}`}>
                     
                     <h3>{this.props.item.type}</h3>
                        <div >
                            <span>
                                {this.props.item.msg}
                                <button className="float-right  font-weight-light btn btn-link " 
                                    data-toogle="tooltip" title="Dismiss" onClick={()=>this.props.dismiss()}
                                >
                                    <span>dismiss</span>
                                    </button>

                            </span>
                        </div>
                        


                        </div>
                        
                        
                   
                    
              
         
        );
        }
}

export default List;