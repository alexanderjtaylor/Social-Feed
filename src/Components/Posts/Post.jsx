import React, { useState} from 'react';


const Post = (props) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);


    function handleIsLiked() {
        setIsLiked(!isLiked)
        setIsDisliked(false)
    }

    function handleIsDisliked() {
        setIsDisliked(!isDisliked)
        setIsLiked(false)
    }

    return(
        <tr>
            <td>
                <h2 className='postname'>{props.post.Name}</h2> <br></br>
                <h2 className='postbody'>{props.post.updatePost}</h2> <br></br>
                <div className="like-or-dislike-btn">
                    <button type='submit' className={isLiked ? "btn-liked" : 'btn-like'} onClick={() => handleIsLiked()}>Like</button>
                    <button type='submit' className={isDisliked ? "btn-disliked" : 'btn-like'} onClick={() => handleIsDisliked()}>Dislike</button> 
                </div>
            </td>
        </tr>
    )
}

export default Post;
