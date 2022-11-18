import React, { useState } from 'react';


const CreatePost = (props) => {

    const [Name, setName] = useState("");
    const [updatePost, setUpdatePost] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            Name: Name,
            updatePost: updatePost
        };
        props.createNewPostProp(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={Name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={updatePost} onChange={(event) => setUpdatePost(event.target.value)} />
            <button type='sumbit'>Create</button>
        </form>
     );
}
 
export default CreatePost;