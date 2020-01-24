import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {
    return (
        <div>
            <h2>Inside Component A</h2>
            <ComponentB />
        </div>
    )
}

export default ComponentA
