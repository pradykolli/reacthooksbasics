import React, {useContext} from 'react'
import {UserContext, AkaContext} from '../App'


function HooksUseContext() {
    const user = useContext(UserContext)
    const aka = useContext(AkaContext)
    return (
        <div>
            <h2>Using react useContext and passing values from app component</h2>
            <h3>Name - {user}</h3>
            <h3>A.K.A - {aka}</h3>
        </div>
    )
}

export default HooksUseContext
