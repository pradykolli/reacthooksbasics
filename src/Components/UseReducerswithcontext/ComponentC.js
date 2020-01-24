import React, {useContext} from 'react'
import { StateContext } from '../../App'

function ComponentC() {
    const globalContext = useContext(StateContext)
    return (
        <div>
            <h4>Inside Component C</h4>
            <h2>The current count is {globalContext.appLevelState}</h2>
            <button className="btn btn-success" onClick={() => globalContext.appLevelDispatch('increment')}>Increment Count</button>
        </div>
    )
}

export default ComponentC
