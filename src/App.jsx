import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/Posts/CreatePost';

function App() {

  const [posts, setPosts] = useState([{Name: 'Alex', updatePost: 'This is my post'}])

  function createNewPost(newCreatedPost){
    let tempPosts = [newCreatedPost, ...posts]
    setPosts(tempPosts);
  }

  return (
    <div className="App">
      <DisplayPosts postsToFeed={posts} />
      <CreatePost createNewPostProp={createNewPost} />
    </div>
  );
}

export default App;
