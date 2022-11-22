import React from 'react';
import Post from '../Posts/Post';

const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.postsToFeed.map(post => <li className="post_wrapper" key={post.id}><Post post={post}/></li>)}
        </div>
    );
}
 
export default DisplayPosts;