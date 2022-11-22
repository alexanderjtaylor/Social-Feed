import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/Posts/CreatePost';
import './App.css';
import NavBar from './Components/DisplayPosts/NavBar';


function App() {

  const [posts, setPosts] = useState([{Name: 'Alex', updatePost: 'This is my post'}])

  function createNewPost(newCreatedPost){
    let tempPosts = [newCreatedPost, ...posts]
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <NavBar/>
      <div className='row'>
        <div className='col-md-8'>
          <div className='border-box'>
            <CreatePost createNewPostProp={createNewPost} />
          </div>
          <div className='border-box'>
            <DisplayPosts postsToFeed={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
