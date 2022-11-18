
const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
            {props.postsToFeed.map((post) => {
                return (
                <tr>
                    <td>
                    {post.Name}
                    </td>
                </tr>
                );
            })}
            </thead>
            <tbody>
            {props.postsToFeed.map((post) => {
                return (
                <tr>
                    <td>
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