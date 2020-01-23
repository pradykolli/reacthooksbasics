import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch(action){
        case 'increment': return currentState + 1
        case 'decrement': return currentState - 1
        case 'reset': return initialState
        default: return currentState
    }
}
function HooksUseReducers() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    const resetCounters = () => {
        dispatch('reset')
        dispatchTwo('reset')
    }
    return (
        <div>
            <h2>Using multiple useReducers with the same reducer function</h2>
            <div className="text-center">
                <h3>Counter 1</h3>
                <button className='btn btn-success' onClick={() => dispatch('decrement')}>-</button>
                <input type='text' value = {count} disabled/>
                <button className='btn btn-success' onClick={() => dispatch('increment')}>+</button>
            </div>
            <div className="text-center">
                <h3>Counter 2</h3>
                <button className='btn btn-danger' onClick={() => dispatchTwo('decrement')}>-</button>
                <input type='text' value = {countTwo} disabled/>
                <button className='btn btn-danger' onClick={() => dispatchTwo('increment')}>+</button>
            </div>
            <button className='btn btn-primary mt-10' onClick ={resetCounters}>Reset Both Counters</button>
        </div>
    )
}

export default HooksUseReducers
