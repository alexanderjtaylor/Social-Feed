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
            <div className='form-group'>
                <label className='form-label'>Name</label>
                <input type='text' class='form-control' value={Name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label className='form-label'>Post</label>
                <input type='text' class='form-control' value={updatePost} onChange={(event) => setUpdatePost(event.target.value)} />
            </div>
            <button type='sumbit' className='btn btn-primary'>Create</button>
        </form>
     );
}
 
export default CreatePost;