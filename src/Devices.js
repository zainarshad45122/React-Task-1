
import React from 'react';

const Devices = (props) => {
  
    const {name, unit ,value , timestamp, active} = props.post;
    
              return (
              <div>
                  <p>Name : {name}</p>
                  <p>Unit : {unit}</p>
                  <p>Value : {value}</p>
                  <p>Time Stamp : {timestamp}</p>
                  <p>ActiveStatus : { active ? "ON" : "OFF"}</p>  
                  <button onClick={props.click.bind(this, name, active)}>
                    Change Active Status
                </button>
                  <hr></hr>
              </div>     
            );
  }


export default Devices;
