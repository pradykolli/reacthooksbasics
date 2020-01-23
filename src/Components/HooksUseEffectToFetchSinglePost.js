import React, {useState, useEffect} from 'react'
import axios from 'axios'
function HooksUseEffectToFetchSinglePost() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [clickedId, setClickedId] = useState(1)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickedId}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [clickedId])

    return (
        <div>
            <h2>Fetching single post based on ID from Rest API using axios and useEffect</h2>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button className="btn btn-success" type="button" onClick={() => setClickedId(id)} >Fetch Post</button>
            {loading 
             ? <div>loading...</div> 
             : <div className="text-left" key = {post.id}><strong>{post.id}. </strong>{post.title}</div>
             }
        </div>
    )
}

export default HooksUseEffectToFetchSinglePost
