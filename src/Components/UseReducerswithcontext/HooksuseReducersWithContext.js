import React from 'react'
import ComponentA from './ComponentA'

function HooksuseReducersWithContext() {
    return (
        <div>
            <h2>Inside Main Component : Tree -> App -> MainComponent -> A -> B -> C</h2>
            <h3>Passing down values from app component to Component C</h3>
            <ComponentA />
        </div>
    )
}

export default HooksuseReducersWithContext
