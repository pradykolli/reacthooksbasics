import React, { useState , useEffect } from 'react'

function HooksUSeEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    }, [count])
    return (
        <div>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>Count {count}</button>
            <h3>Watch the tab title change when you click this button</h3>
        </div>
    )
}

export default HooksUSeEffect
