import React from 'react';

const initialUsers =()=> (
  fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
    .then(data => {
        if(data.length!==0){
          console.log(data);
          return data;
        } else if (data.length===0){
          console.log("Failed to download data from server");
        }
      }
    )//end of then
)//end of initialUsers

export default initialUsers;
