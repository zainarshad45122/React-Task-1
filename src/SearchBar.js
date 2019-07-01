import React from 'react';

const SearchBar= (props) => {
  
    const {change} = props;
    
              return (
              <div>
                 <input type="text"  onChange={change.bind()} />
              </div>     
            );
  }


export default SearchBar;
