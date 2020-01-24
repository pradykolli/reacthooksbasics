import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS': return {
            loading: false,
            post: action.payload,
            error:''
        }
        case 'FETCH_ERROR': return {
            loading: false,
            post:{},
            error: action.payload
        }
        default: return state
    }
}

function HooksFetchDataWithUseReducers() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => dispatch({type:'FETCH_SUCCESS', payload: res.data}))
        .catch(err => dispatch({type:'FETCH_ERROR',payload: `Something went wrong:- ${err}`}))
    },[])

    return (
        <div>
            <h2>Fetching posts from Rest API using axios useReducers and useEffect</h2>
            <div className="text-left" key = {state.post.id}><strong>{state.post.id}. </strong>{state.post.title}</div> 
            <div className="text-left">{state.error}</div>
        </div>
    )
}

export default HooksFetchDataWithUseReducers
