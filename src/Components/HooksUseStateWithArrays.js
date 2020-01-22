import React, { useState } from 'react'

function HooksUseStateWithArrays() {
    const initialState = [0,1]
    const [numbers, setNumbers] = useState(initialState)
    const nextFibNumber = () => {
        setNumbers( [...numbers, numbers[numbers.length - 1] + numbers[numbers.length - 2] ])
    }
    return (
        <div>
            <button onClick={nextFibNumber}>Next Fibonicci Number</button>
            <div className='container'>
                {numbers.map(number => (<div key={number}>{number}</div>))}
            </div>
        </div>
    )
}

export default HooksUseStateWithArrays
