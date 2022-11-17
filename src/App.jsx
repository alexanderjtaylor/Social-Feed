import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState([{Name: 'Alex', Updatepost: 'This is my post'}])

  return (
    <div className="App">
      <DisplayPosts postsToFeed={posts} />
    </div>
  );
}

export default App;
