import './App.css';
import { useState, useEffect } from 'react';
import { supabase } from './client';

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "", user_uid: ""});
  const { title, content, user_uid } = post;
  useEffect(() => {
    fetchPosts();
  })
  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select()
    setPosts(data)
    console.log("data: ", data)
  }
  async function createPost() {
    await supabase
      .from('posts')
      .insert([
        { title, content, user_uid }
      ])
      .single()
    setPost({ title: "", content: "", user_uid })
    fetchPosts()
  }
  
  return (
    <div className="App">
      <input
        placeholder="Title"
        value={ title }
        onChange={ e => setPost({ ...post, title: e.target.value }) }
      />
      <input
        placeholder="Content"
        value={ content }
        onChange={ e => setPost({ ...post, content: e.target.value }) }
      />
      <input
        placeholder="User_UID"
        value={ user_uid }
        onChange={ e => setPost({ ...post, user_uid: e.target.value }) }
      />
      <button onClick={ createPost }>Create Post</button>
      {
        posts.map(post => (
          <div key={ post.id }>
            <h3>{ post.title }</h3>
            <p>{ post.content }</p>
            <p>{ post.user_uid }</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
