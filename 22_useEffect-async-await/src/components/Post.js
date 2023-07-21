import './Post.css'

function Post(props) {
  const {id, title, userId, body} = props;
  return (
    <div className="post">
      <h1>This is POST</h1>
      <small>{id}</small>
      <h2>{title}</h2>
      <h3>User ID: {userId}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;
