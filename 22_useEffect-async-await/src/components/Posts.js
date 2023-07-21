import { useState, useEffect } from 'react';
import Post from './Post';

const API__URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fatchData() {
      try {
        const res = await fetch(API__URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fatchData();
  }, []);

  // iife

  /* useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API__URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []); */

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
