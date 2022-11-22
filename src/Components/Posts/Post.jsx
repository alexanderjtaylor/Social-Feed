import React, { useState, useEffect } from 'react';


const Post = ({post}) => {

    return(
        <tr>
            <td>
                {post.Name} <br></br>
                {post.updatePost} <br></br>
                <button type='sumbit' className='btn-like'>Like</button>
                <button type='submit' className='btn-like'>Dislike</button>
            </td>
        </tr>
    )
}

export default Post;
