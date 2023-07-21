import { useState, useEffect } from 'react';
import Post from './Post';

const API__URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    fetch(API__URL)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, []);

  if (error) {
    return <h1>ERROR: {error}</h1>;
  }

  return (
    <>
      <h1 className="posts__title">POSTS</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))
      )}
    </>
  );
}

export default Posts;
