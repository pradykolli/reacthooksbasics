import React, { useState, useEffect }from 'react'
import axios from 'axios'

function HookUseEffectToFetchData() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Fetching posts from Rest API using axios and useEffect</h2>
    { posts.map(post => (<div className="text-left" key = {post.id}><strong>{post.id}. </strong>{post.title}</div>)) }
        </div>
    )
}

export default HookUseEffectToFetchData
