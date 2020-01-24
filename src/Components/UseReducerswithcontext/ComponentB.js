import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
    return (
        <div>
            <h3>Inside Component B</h3>
            <ComponentC />
        </div>
    )
}

export default ComponentB
