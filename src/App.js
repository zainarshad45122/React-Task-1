
import React, {Component} from 'react';
import axios from 'axios';
import Device from './Devices';
import SearchBar from './SearchBar';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            posts: [],
            searchQuery : ""
              }

    this.changeActiveStatus = this.changeActiveStatus.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
      }
  
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8888/device').
        then(response => {
        this.setState({
          posts: response.data.data,   
        });  
        }
            ); 
    }
 // Method for changing Active Status of Machine
  changeActiveStatus(name,toggle)
   {
     let activeStatus = !toggle;
  
    
    axios.patch(`http://127.0.0.1:8888/device/${name}?active=${activeStatus}`).
    then(response => {
        console.log('👉 Returned data:', response);
        const updatedPosts = this.state.posts;
        updatedPosts.forEach(function(post)
        {
          if(post.name == name)
          {
            post.active = !(post.active);
          }
        }
        );

        this.setState({
             posts : updatedPosts
        });
       
   
    }
        ); 

      
   }
 // Method for searching devices on base of their name
  searchHandler(event){
    let query = event.target.value;
    console.log(event.target.value);
    this.setState({searchQuery: query});
   
    
       
   }
   
    render() {
      
       const {posts,searchQuery} = this.state; 

        return(
            <div>
             <SearchBar  change ={this.searchHandler} ></SearchBar>
             {
               posts.filter(
                 function(post)
                 {
                  return post.name.includes(searchQuery)
                 }
               ).map(post => <Device  post= {{...post}} click = {this.changeActiveStatus}/> )
             }
            
            </div>
        );
    }
   
}


export default App;
