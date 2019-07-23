import React,{Component} from 'react';
import List from './list';

class Test extends Component{

    constructor(props){
        super(props);
        this.state={msg:"",type:"",items:[]}
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        if(this.state.type===''||this.state.msg==='')
        return(alert("please select and type input"));
        event.preventDefault();
        let item ={
            msg:this.state.msg,
            type:this.state.type
             }
        this.setState({items:this.state.items.concat([item])},()=>{
            this.setState({msg:'',type:''});
        });
    }

    render(){
        console.log(this.state.type);
        console.log(this.state.msg);
        console.log(this.state.items.length);
        let dropdown='Dropdown Example';
        return(
            <div>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                <input className=" mx-1" style={{maxWidth:"50%"}} value={this.state.msg}
                type="text" placeholder="Input box" onChange={(event)=>{this.setState({msg:event.target.value})}}/>
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{dropdown}
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                    <li onClick={()=>{this.setState({type:'success'})} }>Success</li>
                    <li onClick={()=>{this.setState({type:'warning'})}}>Warning</li>
                    <li onClick={()=>{this.setState({type:'danger'})}}>Error</li>
                    </ul> 
                <input className="btn btn-outline-primary mx-1"type="submit" />
                </div>
            </form>
            <div>
            {this.state.items.map((item,index)=>{
               return( <List item={item} dismiss={
                ()=>{
                    let newState=this.state.items;
                    delete newState[index];
                    this.setState({items:newState});
                    }
                }
               />);
            })}
            </div>
            
            </div>
        );
    }
}

export default Test;