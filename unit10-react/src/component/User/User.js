// import React from 'react';
import "./css/style.css";
 function User({name, date}) {
    return(
      <div className="content">
        <h1>Welcome {name}</h1>
        <p>{date}</p>
      </div>
    )
  }

  export default User;