
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            posts: [],
            device : [],
              }

    this.changeActiveStatus = this.changeActiveStatus.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
      }
  
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8888/device').
        then(response => {
        this.setState({posts: response.data.data,
                       device: response.data.data
            
        });
       
        }
            ); 
    }
 // Method for changing Active Status of Machine
   changeActiveStatus(index,name,toggle)
   {
       let activeStatus = !toggle;
    axios.patch(`http://127.0.0.1:8888/device/${name}?active=${activeStatus}`).
    then(response => {
        console.log('👉 Returned data:', response);
        
        const list = this.state.posts;
        let count =0;
        for(let item of list){
            
            if(count==index)
            {
                item.active=!item.active;
            }
            count++;
         
          }
          console.log(list);
        this.setState((state, props) => ({
            posts: list ,
            device : list
          }));
   
    }
        ); 
   }
 // Method for searching devices on base of their name
   searchHandler(event){
    let objList = this.state.posts;
    let List = "";
      if(event.target.value == "")
      {
         objList = this.state.posts;
      }
      
      else {
         List = objList.find(function (obj) { return obj.name == event.target.value});
         
       if(List != "" && List!= undefined )
       {
        objList= [
            {
              
              name: List.name,
              unit: List.unit,
              value: List.unit,
              timestamp: List.timestamp,
              active: List.active
            }
        ]
        
        
       }
       if(List == "" || List == undefined ) {
        objList = this.state.posts;
       }
          
       this.setState({device: objList
          
       });
        
      }
    
       
   }
   
    render() {
        let count1=0;
        let count2=0;
        for(let item of this.state.posts){
            if(item.active==true)
            {
               count1 =count1 +1;
            }
           else{
               count2 = count2+1;
           }
          }
      
       const posts = this.state.device.map((post,index) => {
        if(post.active== true)
        {
          var x= "ON";
         
        }
        else 
        {
           var x= "OFF"; 
        }
            return (
            <div>
                <h4>Name : {post.name}</h4>
                <p>Unit : {post.unit}</p>
                <p>Value : {post.value}</p>
                <p>TimeStamp : {post.timestamp}</p> 
                <button onClick={this.changeActiveStatus.bind(this, index, post.name, post.active)}>
                    Change Active Status
                </button>
                <p>ActiveStatus : {x}</p>  
                <hr></hr>
            </div>     
            );
           
        });
      
  
        return(
            <div>
               Search Device :   <input type="text" onChange={this.searchHandler}  /> 
                <h3>Active Devices : {count1}</h3>
                <h3>InActive Devices : {count2}</h3>
              <hr></hr>
             {posts}
            </div>
        );
    }
   
}


export default App;
