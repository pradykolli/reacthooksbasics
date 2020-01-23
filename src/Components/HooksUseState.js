import React, { useState } from 'react'
function HooksUseState() {
    const initialState = 0
    // Array destructuring.
    const [count, setCount] = useState(initialState)
    return (
        <div>
            <h2>The current count is {count}</h2>
            <button className="btn btn-success" onClick={() => setCount(prevCount => prevCount + 1 ) }>Increment Count</button>
        </div>
    )
}

export default HooksUseState
