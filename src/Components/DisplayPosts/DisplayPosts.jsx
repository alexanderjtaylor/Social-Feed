
const DisplayPosts = (props) => {
    return ( 
        <table className="table">
            <thead>
        
            </thead>
            <tbody>
            {props.postsToFeed.map((post) => {
                return (
                <tr>
                    <td>
                    {post.Name} <br></br>
                    {post.updatePost}
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
 
export default DisplayPosts;