
import React, {Component} from 'react';

class Devices extends Component {

    constructor(props) {
        super(props)
        
      
        this.state = { 
            Name : props.Name,
            Value : props.Value,
            Unit : props.Unit ,
            Timestamp : props.Timestamp,
            ActiveStatus : props.ActiveStatus,
            trueCount : 0,
            falseCount : 0
         }
       
      }
  
  
   
    render() {
        if(this.state.ActiveStatus== true)
        {
          var x= "true";
        
         
        }
        else 
        {
           var x= "false";
           
        }
        return(
        <div>
           
            <h4>Name : {this.state.Name}</h4>
            <p>Unit : {this.state.Value}</p>
            <p>Value : {this.state.Unit}</p>
            <p>TimeStamp : {this.state.Timestamp}</p> 
            <p>ActiveStatus : {x}</p>        
        </div>
        );
    }
   
}


export default Devices;
