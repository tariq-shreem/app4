import React, { useState } from 'react'
import User from './User.jsx';

export default function App() {
  const [users,setUsers] = useState([
    {"id":"1","name":'ali',"email":"ali@gmail.com","isBlocked":"false"},
    {"id":"2","name":'soso',"email":"soso@gmail.com","isBlocked":"false"},
    {"id":"3","name":'tariq',"email":"tariq@gmail.com","isBlocked":"false"},
    {"id":"4","name":'abeer',"email":"abeer@gmail.com","isBlocked":"false"},
  ]);
  return (  
       <div className='users'>
        {users.map(user=>
          <User key={user.id} id={user.id} name={user.name }
           email={user.email} isBlocked={user.isBlocked}
          />
        )}
       </div>
    // <div className='users'>
    //     {users.map(user=>
        
    //     <div className='user' key={user.id}>
    //       <h2>Nmae is {user.name}</h2>
    //       <h3>Email is {user.email}</h3>
    //     </div>
    //     )}
      
    // </div>
  )
}
