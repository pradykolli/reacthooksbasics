import React , { useState } from 'react'

function HooksUseStateUsingObject() {
    const initialUser = {FirstName: '', LastName: '', Age: ''}
    const [user, setUser] = useState(initialUser)
    return (
        <div>
            <input type='text' value={user.FirstName} placeholder='First name' onChange={e => setUser({...user, FirstName : e.target.value})} /> <br/><br/>
            <input type='text' value={user.LastName} placeholder='Last name' onChange={e => setUser({...user, LastName : e.target.value})} /> <br/><br/>
            <input type='text' value={user.Age} placeholder='Age' onChange={e => setUser({...user, Age : e.target.value})} /> <br/><br/>
            <h2>Welcome user {user.FirstName},{user.LastName}.</h2>
            <h3>You are just {user.Age} years young.</h3>
        </div>
    )
}

export default HooksUseStateUsingObject
